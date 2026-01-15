# Intégration RevenueCat - RéviZON

## 📝 Vue d'ensemble

RevenueCat a été intégré dans RéviZON pour gérer les achats in-app et les abonnements premium de manière unifiée sur iOS et Android.

## 🔑 Configuration

### Variables d'environnement

Les clés API RevenueCat sont configurées dans `eas.json` pour chaque environnement :

```json
{
  "EXPO_PUBLIC_REVENUECAT_API_KEY": "goog_iNYEzUapRefLRcAAyrGFhqtmImK",
  "EXPO_PUBLIC_REVENUECAT_PRODUCT_ID": "RevizON"
}
```

Ces variables sont également disponibles dans le fichier `.env` pour le développement local.

### Product ID

Le produit premium configuré sur RevenueCat :
- **Product ID** : `RevizON`
- **Prix** : 1,99€ (achat unique)
- **Type** : Non-consommable

## 🏗️ Architecture

### RevenueCatContext (`contexts/RevenueCatContext.js`)

Le contexte principal qui gère toute la logique RevenueCat :

#### Fonctionnalités principales :

1. **Initialisation automatique** au démarrage de l'app
2. **Vérification du statut premium** depuis RevenueCat
3. **Gestion des achats** avec `purchasePremium()`
4. **Restauration des achats** avec `restorePurchases()`
5. **Synchronisation avec Supabase** pour la persistance côté serveur
6. **Fallback local** avec AsyncStorage en cas d'erreur réseau

#### API disponible :

```javascript
const {
  // État
  isPremium,        // Boolean - statut premium actuel
  premium,          // Object - détails de l'achat
  products,         // Array - produits disponibles
  customerInfo,     // Object - informations client RevenueCat
  loading,          // Boolean - chargement en cours

  // Actions
  purchasePremium,      // Function - acheter premium
  restorePurchases,     // Function - restaurer les achats
  checkPremiumStatus,   // Function - vérifier le statut
  canAccessLesson,      // Function - vérifier l'accès aux cours
  canAccessQuiz,        // Function - vérifier l'accès aux quiz
  resetPremium,         // Function - réinitialiser (dev only)

  // Compatibilité
  upgradeToPremium,     // Function - ancien système (dev mode)
} = usePremium();
```

### Intégration dans l'application

#### `app/_layout.tsx`

Le `RevenueCatProvider` encapsule toute l'application :

```jsx
<RevenueCatProvider>
  <RootLayoutNav />
</RevenueCatProvider>
```

#### `app/premium.tsx`

Page d'achat premium mise à jour avec :
- Affichage dynamique du prix depuis RevenueCat
- Bouton d'achat utilisant `purchasePremium()`
- Bouton de restauration des achats
- Gestion des erreurs et confirmations

## 🔄 Flux d'achat

### 1. Utilisateur clique sur "Passer à Premium"

```
User → purchasePremium() → RevenueCat SDK → App Store/Play Store
                                                       ↓
                                              Transaction validée
                                                       ↓
                                         customerInfo mis à jour
                                                       ↓
                                    ┌─────────────────┴──────────────────┐
                                    ↓                                    ↓
                        Sauvegarde locale                    Sync Supabase
                         (AsyncStorage)                    (user_premium)
                                    ↓                                    ↓
                                    └─────────────────┬──────────────────┘
                                                      ↓
                                           État premium activé
                                                      ↓
                                          Badge premium débloqué
```

### 2. Restauration des achats

```
User → restorePurchases() → RevenueCat.restorePurchases()
                                            ↓
                                  Vérifie les achats existants
                                            ↓
                            ┌───────────────┴───────────────┐
                            ↓                               ↓
                    Aucun achat trouvé              Achat trouvé
                            ↓                               ↓
                     Alert "Aucun achat"          Restaure le premium
                                                           ↓
                                              Sync local + Supabase
```

## 💾 Synchronisation Supabase

Le statut premium est synchronisé avec la table `user_premium` :

```sql
CREATE TABLE user_premium (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  is_premium BOOLEAN DEFAULT false,
  purchase_date TIMESTAMPTZ,
  purchase_platform TEXT, -- 'ios' ou 'android'
  purchase_receipt TEXT,  -- RevenueCat transaction ID
  expires_at TIMESTAMPTZ, -- NULL pour achat unique
  updated_at TIMESTAMPTZ
);
```

La synchronisation se fait automatiquement :
- À chaque achat réussi
- À chaque restauration d'achat
- À chaque vérification du statut premium

## 🧪 Mode développement

En mode développement (`__DEV__ = true`), l'ancienne méthode `upgradeToPremium('test')` reste disponible pour tester sans faire de vrais achats.

```javascript
// Mode test (dev uniquement)
await upgradeToPremium('test'); // Active le premium localement
```

## 🔒 Sécurité

1. **Validation côté serveur** : Les achats sont validés par RevenueCat avant d'être acceptés
2. **Clés API publiques** : Les clés RevenueCat utilisées sont publiques (safe pour le client)
3. **Synchronisation Supabase** : Le statut premium est stocké côté serveur avec Row Level Security
4. **Receipt validation** : RevenueCat valide automatiquement les reçus avec Apple/Google

## 📱 Fonctionnalités premium

Une fois le statut premium activé, l'utilisateur a accès à :

- ✅ Tous les 21+ cours (sans limite de 2 cours gratuits)
- ✅ Tous les quiz
- ✅ Statistiques avancées
- ✅ Sans publicités (AdMob désactivé)
- ✅ Badge premium exclusif

## 🐛 Gestion des erreurs

Le système gère plusieurs scénarios d'erreur :

1. **Réseau indisponible** : Fallback sur le statut local (AsyncStorage)
2. **Achat annulé** : Aucune erreur affichée (comportement natif)
3. **Achat échoué** : Alert avec message d'erreur
4. **RevenueCat indisponible** : L'app continue de fonctionner avec le système local

## 🚀 Prochaines étapes

Pour la publication en production, il faudra :

1. ✅ Créer le produit sur App Store Connect (iOS)
2. ✅ Créer le produit sur Google Play Console (Android)
3. ✅ Configurer les produits dans RevenueCat Dashboard
4. ✅ Lier App Store Connect et Google Play à RevenueCat
5. ⚠️ Tester les achats en mode sandbox (iOS) et test (Android)
6. ⚠️ Vérifier que les webhooks RevenueCat sont configurés (optionnel)

## 📚 Ressources

- [Documentation RevenueCat](https://docs.revenuecat.com/)
- [react-native-purchases SDK](https://github.com/RevenueCat/react-native-purchases)
- [Dashboard RevenueCat](https://app.revenuecat.com/)

## ⚙️ Configuration RevenueCat Dashboard

### Produit configuré

- **Identifier** : `RevizON`
- **Type** : Non-Consumable (achat unique)
- **Prix** : 1,99€

### Entitlement

- **Identifier** : `premium` (recommandé)
- **Produits associés** : `RevizON`

### Webhooks (optionnel)

Pour recevoir des notifications des changements de statut d'abonnement :
- URL : `https://fazwbmmmwyowifngqtac.supabase.co/functions/v1/revenuecat-webhook`
- Événements : `INITIAL_PURCHASE`, `RENEWAL`, `CANCELLATION`

## 🎯 Notes importantes

1. **Product ID case-sensitive** : Le Product ID `RevizON` est sensible à la casse
2. **Test en sandbox** : Utilisez des comptes de test Apple/Google pour tester
3. **Délai de validation** : Les achats peuvent prendre quelques secondes à être validés
4. **Mode développement** : En dev, le système permet d'activer le premium localement sans achat réel
5. **Compatibilité** : Le nouveau système est 100% compatible avec l'ancien `PremiumContext`

---

**Date d'intégration** : 2026-01-15
**Version RevenueCat SDK** : 9.7.0
**Statut** : ✅ Intégré et prêt pour les tests
