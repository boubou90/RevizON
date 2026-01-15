# Configuration RevenueCat - Guide Rapide

## 📱 Informations de l'application

| Paramètre | Valeur |
|-----------|--------|
| **App name** | RevizON |
| **Bundle ID (iOS)** | com.revizon.app |
| **Package name (Android)** | com.revizon.app |
| **RevenueCat App ID** | app8e834f49ae |

## 🔑 Clés API

| Plateforme | Clé |
|-----------|-----|
| **Google Play API Key** | goog_iNYEzUapRefLRcAAyrGFhqtmImK |
| **Product ID** | RevizON |

## 📦 Configuration du produit

### Sur RevenueCat Dashboard

1. **Accéder au dashboard** : https://app.revenuecat.com/
2. **Sélectionner l'app** : app8e834f49ae (RevizON)

### Produit In-App

| Paramètre | Valeur |
|-----------|--------|
| **Product ID** | RevizON |
| **Type** | Non-Consumable |
| **Prix** | 1,99€ |
| **Store Product ID (iOS)** | RevizON |
| **Store Product ID (Android)** | RevizON |

### Entitlement (Recommandé)

| Paramètre | Valeur |
|-----------|--------|
| **Entitlement ID** | premium |
| **Produits associés** | RevizON |
| **Description** | Accès premium complet |

## 🍎 Configuration App Store Connect (iOS)

### Création du produit in-app

1. **Se connecter** à [App Store Connect](https://appstoreconnect.apple.com/)
2. **Aller dans** : Ma Apps → RevizON → Fonctionnalités → Achats intégrés
3. **Créer un nouveau produit** :
   - **Type** : Non-Consumable
   - **ID de produit de référence** : `RevizON`
   - **Nom** : Premium RevizON
   - **Prix** : 1,99€ (Niveau 1)
   - **Description** : Accès illimité à tous les cours et quiz
   - **Langues** : Français (France)

4. **Créer un compte de test** :
   - Utilisateurs et accès → Sandbox → Testeurs
   - Ajouter un testeur avec un email de test

### Lier à RevenueCat

1. **Dans RevenueCat** : Project Settings → Service Credentials → Apple App Store
2. **Ajouter** : App Store Connect API Key (In-App Purchase Key)
3. **Télécharger** la clé depuis App Store Connect → Utilisateurs et accès → Clés → In-App Purchase

## 🤖 Configuration Google Play Console (Android)

### Création du produit in-app

1. **Se connecter** à [Google Play Console](https://play.google.com/console/)
2. **Sélectionner** : RevizON (com.revizon.app)
3. **Aller dans** : Monétisation → Produits → Produits in-app
4. **Créer un produit** :
   - **ID du produit** : `RevizON`
   - **Nom** : Premium RevizON
   - **Description** : Accès illimité à tous les cours et quiz de révision
   - **Prix par défaut** : 1,99€
   - **Type** : Géré (Managed product)

5. **Activer le produit**

### Configuration des testeurs

1. **Créer une liste de testeurs** :
   - Test et publication → Tests internes
   - Créer une version de test
   - Ajouter des testeurs (emails)

2. **Ou utiliser les licences de test** :
   - Paramètres → Compte de développeur → Testeurs de licence

### Lier à RevenueCat

1. **Dans RevenueCat** : Project Settings → Service Credentials → Google Play
2. **Créer une clé de service** depuis Google Play Console :
   - Configuration → Accès à l'API → Créer un compte de service
   - Télécharger la clé JSON
3. **Uploader** la clé JSON dans RevenueCat

## 🔗 Lier les stores à RevenueCat

### Vérification

Une fois les stores liés, vérifier dans RevenueCat Dashboard :

✅ **Project Settings → Service Credentials**
- [ ] Apple App Store : ✅ Connecté
- [ ] Google Play : ✅ Connecté

✅ **Products → RevizON**
- [ ] iOS Product ID configuré
- [ ] Android Product ID configuré
- [ ] Prix correctement affiché

✅ **Entitlements → premium**
- [ ] Produit `RevizON` associé

## 🧪 Test de l'intégration

### Test en mode développement

```bash
# Lancer l'app en dev
npm start

# Le mode dev permet d'activer le premium localement sans achat
```

### Test avec achats réels (Sandbox)

#### iOS (Sandbox)

1. **Déconnexion** du compte App Store sur l'appareil :
   - Réglages → App Store → Se déconnecter
2. **Lancer l'app** et tenter un achat
3. **Se connecter** avec le compte de test sandbox quand demandé
4. **Vérifier** que l'achat fonctionne

#### Android (Test)

1. **Ajouter votre compte** Google à la liste des testeurs
2. **Installer l'app** via le lien de test interne
3. **Tenter un achat** (sera facturé via un moyen de test)
4. **Vérifier** que l'achat fonctionne

### Points de vérification

- [ ] L'achat se lance correctement
- [ ] Le prix s'affiche en 1,99€
- [ ] L'achat est validé par RevenueCat
- [ ] Le statut premium s'active dans l'app
- [ ] Les publicités disparaissent
- [ ] Tous les cours sont débloqués
- [ ] Le badge premium est débloqué
- [ ] La restauration des achats fonctionne
- [ ] Le statut est synchronisé avec Supabase

## 📊 Webhooks (Optionnel)

Pour recevoir les notifications des événements RevenueCat :

### Configuration

1. **Dans RevenueCat** : Project Settings → Webhooks
2. **Ajouter une URL** : `https://fazwbmmmwyowifngqtac.supabase.co/functions/v1/revenuecat-webhook`
3. **Sélectionner les événements** :
   - INITIAL_PURCHASE
   - RENEWAL (si abonnement futur)
   - CANCELLATION (si abonnement futur)
   - NON_RENEWING_PURCHASE
   - EXPIRATION

4. **Copier la clé d'autorisation** pour valider les webhooks côté serveur

## 🚀 Checklist de publication

### Avant la publication

- [ ] Produit créé sur App Store Connect avec ID `RevizON`
- [ ] Produit créé sur Google Play Console avec ID `RevizON`
- [ ] Les deux stores sont liés à RevenueCat
- [ ] L'entitlement `premium` est configuré
- [ ] Tests sandbox réussis sur iOS
- [ ] Tests internes réussis sur Android
- [ ] La restauration des achats fonctionne
- [ ] Le prix affiché est correct (1,99€)
- [ ] Les clés API sont dans `eas.json` (production)

### Après la publication

- [ ] Surveiller le dashboard RevenueCat pour les premiers achats
- [ ] Vérifier les logs de synchronisation Supabase
- [ ] Tester avec un vrai achat sur chaque plateforme
- [ ] Documenter les éventuels problèmes

## 🆘 Troubleshooting

### Erreur "No products available"

**Cause** : RevenueCat ne trouve pas les produits
**Solution** :
1. Vérifier que les stores sont liés dans RevenueCat Dashboard
2. Vérifier que le Product ID est bien `RevizON` (case-sensitive)
3. Attendre quelques minutes après la configuration
4. Redémarrer l'app

### L'achat ne valide pas le premium

**Cause** : L'entitlement n'est pas correctement configuré
**Solution** :
1. Vérifier que l'entitlement `premium` existe
2. Vérifier que le produit `RevizON` est associé à cet entitlement
3. Vérifier les logs dans RevenueCat Dashboard → Customer → [App User ID]

### Erreur "Invalid API Key"

**Cause** : La clé API n'est pas correcte
**Solution** :
1. Vérifier `EXPO_PUBLIC_REVENUECAT_API_KEY` dans `eas.json`
2. Copier à nouveau la clé depuis RevenueCat Dashboard → Project Settings → API Keys
3. Rebuild l'app

### La restauration ne trouve pas les achats

**Cause** : L'utilisateur n'a pas d'achat ou utilise un autre compte
**Solution** :
1. Vérifier que l'utilisateur est connecté avec le bon compte App Store/Google Play
2. Vérifier dans RevenueCat Dashboard → Customers si l'achat est enregistré
3. Tester avec un compte qui a vraiment fait un achat

## 📞 Support

- **Documentation RevenueCat** : https://docs.revenuecat.com/
- **Support RevenueCat** : support@revenuecat.com
- **Communauté RevenueCat** : https://community.revenuecat.com/

---

**Dernière mise à jour** : 2026-01-15
