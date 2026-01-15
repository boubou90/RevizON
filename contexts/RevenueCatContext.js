import React, { createContext, useState, useEffect, useContext } from 'react';
import { Platform, Alert } from 'react-native';
import Purchases, { LOG_LEVEL } from 'react-native-purchases';
import { supabase } from '@/utils/supabase';
import { storage } from '@/utils/storage';
import { FREE_LESSONS_LIMIT } from '@/utils/constants';

const RevenueCatContext = createContext();

export const useRevenueCat = () => {
  const context = useContext(RevenueCatContext);
  if (!context) {
    throw new Error('useRevenueCat must be used within a RevenueCatProvider');
  }
  return context;
};

// Export aussi usePremium pour la compatibilité avec le code existant
export const usePremium = () => {
  return useRevenueCat();
};

export const RevenueCatProvider = ({ children }) => {
  const [premium, setPremium] = useState({
    isPremium: false,
    purchaseDate: null,
    platform: null,
  });
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [customerInfo, setCustomerInfo] = useState(null);

  // Initialisation de RevenueCat
  useEffect(() => {
    initRevenueCat();
  }, []);

  const initRevenueCat = async () => {
    try {
      const apiKey = process.env.EXPO_PUBLIC_REVENUECAT_API_KEY;

      if (!apiKey) {
        console.error('RevenueCat API Key non trouvée');
        setLoading(false);
        return;
      }

      // Configuration de RevenueCat
      if (Platform.OS === 'ios') {
        await Purchases.configure({ apiKey });
      } else if (Platform.OS === 'android') {
        await Purchases.configure({ apiKey });
      }

      // Configuration du niveau de log (dev uniquement)
      if (__DEV__) {
        await Purchases.setLogLevel(LOG_LEVEL.DEBUG);
      }

      // Charger l'état premium initial
      await checkPremiumStatus();

      // Charger les produits disponibles
      await loadProducts();

      setLoading(false);
    } catch (error) {
      console.error('Erreur initialisation RevenueCat:', error);
      // En cas d'erreur, charger le statut local en fallback
      await loadLocalPremiumStatus();
      setLoading(false);
    }
  };

  const loadProducts = async () => {
    try {
      const offerings = await Purchases.getOfferings();

      if (offerings.current && offerings.current.availablePackages.length > 0) {
        const availableProducts = offerings.current.availablePackages.map(
          pkg => pkg.product
        );
        setProducts(availableProducts);
      } else {
        console.warn('Aucune offre RevenueCat disponible');
      }
    } catch (error) {
      console.error('Erreur chargement produits:', error);
    }
  };

  const checkPremiumStatus = async () => {
    try {
      const customerInfo = await Purchases.getCustomerInfo();
      setCustomerInfo(customerInfo);

      const isPremium =
        typeof customerInfo.entitlements.active['premium'] !== 'undefined' ||
        Object.keys(customerInfo.entitlements.active).length > 0;

      const premiumStatus = {
        isPremium,
        purchaseDate: isPremium
          ? customerInfo.latestExpirationDate || new Date().toISOString()
          : null,
        platform: Platform.OS,
      };

      setPremium(premiumStatus);

      // Sauvegarder localement
      await storage.savePremiumStatus(premiumStatus);

      // Synchroniser avec Supabase
      if (isPremium) {
        await syncWithSupabase(premiumStatus, customerInfo);
      }

      return isPremium;
    } catch (error) {
      console.error('Erreur vérification statut premium:', error);
      // Fallback sur le statut local
      await loadLocalPremiumStatus();
      return false;
    }
  };

  const loadLocalPremiumStatus = async () => {
    try {
      const saved = await storage.getPremiumStatus();
      if (saved) {
        setPremium(saved);
      }
    } catch (error) {
      console.error('Erreur chargement statut local:', error);
    }
  };

  const syncWithSupabase = async (premiumStatus, customerInfo) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        console.warn('Utilisateur non connecté, synchronisation Supabase ignorée');
        return;
      }

      // Mettre à jour ou insérer le statut premium dans Supabase
      const { error } = await supabase
        .from('user_premium')
        .upsert({
          user_id: user.id,
          is_premium: premiumStatus.isPremium,
          purchase_date: premiumStatus.purchaseDate,
          purchase_platform: premiumStatus.platform,
          purchase_receipt: customerInfo?.originalAppUserId || '',
          expires_at: customerInfo?.latestExpirationDate || null,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id'
        });

      if (error) {
        console.error('Erreur synchronisation Supabase:', error);
      }
    } catch (error) {
      console.error('Erreur sync Supabase:', error);
    }
  };

  const purchasePremium = async () => {
    try {
      if (products.length === 0) {
        Alert.alert(
          'Erreur',
          'Aucun produit disponible. Veuillez réessayer plus tard.'
        );
        return false;
      }

      // Obtenir l'offre courante
      const offerings = await Purchases.getOfferings();

      if (!offerings.current || offerings.current.availablePackages.length === 0) {
        Alert.alert(
          'Erreur',
          'Aucune offre disponible. Veuillez réessayer plus tard.'
        );
        return false;
      }

      // Acheter le premier package disponible
      const packageToPurchase = offerings.current.availablePackages[0];

      const { customerInfo } = await Purchases.purchasePackage(packageToPurchase);

      // Vérifier si l'achat a débloqué le premium
      const isPremium =
        typeof customerInfo.entitlements.active['premium'] !== 'undefined' ||
        Object.keys(customerInfo.entitlements.active).length > 0;

      if (isPremium) {
        const premiumStatus = {
          isPremium: true,
          purchaseDate: new Date().toISOString(),
          platform: Platform.OS,
        };

        setPremium(premiumStatus);
        setCustomerInfo(customerInfo);

        await storage.savePremiumStatus(premiumStatus);
        await syncWithSupabase(premiumStatus, customerInfo);

        return true;
      } else {
        Alert.alert(
          'Erreur',
          'L\'achat n\'a pas pu être validé. Veuillez contacter le support.'
        );
        return false;
      }
    } catch (error) {
      if (!error.userCancelled) {
        console.error('Erreur achat:', error);
        Alert.alert(
          'Erreur d\'achat',
          error.message || 'Une erreur est survenue lors de l\'achat.'
        );
      }
      return false;
    }
  };

  const restorePurchases = async () => {
    try {
      const customerInfo = await Purchases.restorePurchases();

      const isPremium =
        typeof customerInfo.entitlements.active['premium'] !== 'undefined' ||
        Object.keys(customerInfo.entitlements.active).length > 0;

      if (isPremium) {
        const premiumStatus = {
          isPremium: true,
          purchaseDate: customerInfo.latestExpirationDate || new Date().toISOString(),
          platform: Platform.OS,
        };

        setPremium(premiumStatus);
        setCustomerInfo(customerInfo);

        await storage.savePremiumStatus(premiumStatus);
        await syncWithSupabase(premiumStatus, customerInfo);

        Alert.alert(
          'Succès',
          'Vos achats ont été restaurés avec succès!'
        );
        return true;
      } else {
        Alert.alert(
          'Aucun achat',
          'Aucun achat premium trouvé pour ce compte.'
        );
        return false;
      }
    } catch (error) {
      console.error('Erreur restauration:', error);
      Alert.alert(
        'Erreur',
        'Impossible de restaurer les achats. Veuillez réessayer.'
      );
      return false;
    }
  };

  const canAccessLesson = (lessonIndex) => {
    if (premium.isPremium) return true;
    return lessonIndex < FREE_LESSONS_LIMIT;
  };

  const canAccessQuiz = () => {
    return premium.isPremium;
  };

  const resetPremium = async () => {
    const reset = {
      isPremium: false,
      purchaseDate: null,
      platform: null,
    };
    setPremium(reset);
    await storage.savePremiumStatus(reset);
  };

  // Fonction de compatibilité avec l'ancien système
  const upgradeToPremium = async (platform = 'test') => {
    // En mode test/dev, permet d'activer directement
    if (__DEV__ && platform === 'test') {
      const updated = {
        isPremium: true,
        purchaseDate: new Date().toISOString(),
        platform: 'test',
      };
      setPremium(updated);
      await storage.savePremiumStatus(updated);
      return true;
    }

    // Sinon, utiliser RevenueCat
    return await purchasePremium();
  };

  return (
    <RevenueCatContext.Provider
      value={{
        // Compatibilité avec l'ancien PremiumContext
        isPremium: premium.isPremium,
        premium,
        upgradeToPremium,
        canAccessLesson,
        canAccessQuiz,
        resetPremium,
        loading,

        // Nouvelles fonctionnalités RevenueCat
        purchasePremium,
        restorePurchases,
        products,
        customerInfo,
        checkPremiumStatus,
      }}
    >
      {children}
    </RevenueCatContext.Provider>
  );
};

export const PremiumProvider = RevenueCatProvider; // Alias pour compatibilité
