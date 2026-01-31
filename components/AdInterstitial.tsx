import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { usePremium } from '@/contexts/PremiumContext';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

// IDs de test pour le développement
// IMPORTANT: Remplacer par vos vrais IDs AdMob en production
const getAdUnitId = () => {
  return __DEV__
    ? TestIds.INTERSTITIAL
    : Platform.select({
        ios: 'ca-app-pub-2885775986633981/3962282308',
        android: 'ca-app-pub-2885775986633981/5186598597',
      }) || TestIds.INTERSTITIAL;
};

/**
 * Hook pour afficher une publicité interstitielle
 * Utilisé après les quiz ou à des moments stratégiques
 */
export function useInterstitialAd() {
  const { isPremium } = usePremium();
  const [interstitial, setInterstitial] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Ne pas charger de pub pour les utilisateurs premium
    if (isPremium) {
      return;
    }

    const adUnitId = getAdUnitId();
    if (!adUnitId) return;

    const ad = InterstitialAd.createForAdRequest(adUnitId, {
      requestNonPersonalizedAdsOnly: true,
    });

    // Événement quand la pub est chargée
    const unsubscribeLoaded = ad.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Événement quand la pub est fermée
    const unsubscribeClosed = ad.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      // Recharger une nouvelle pub pour la prochaine fois
      ad.load();
    });

    // Charger la pub
    ad.load();
    setInterstitial(ad);

    // Cleanup
    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
    };
  }, [isPremium]);

  /**
   * Affiche la publicité interstitielle si elle est chargée
   * @returns true si la pub a été affichée, false sinon
   */
  const showAd = async (): Promise<boolean> => {
    if (isPremium) {
      return false;
    }

    if (loaded && interstitial) {
      try {
        await interstitial.show();
        return true;
      } catch (error) {
        console.log('Erreur lors de l\'affichage de la pub:', error);
        return false;
      }
    }
    return false;
  };

  return {
    showAd,
    isLoaded: loaded && !isPremium,
  };
}
