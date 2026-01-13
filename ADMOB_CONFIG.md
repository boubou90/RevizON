# Configuration AdMob pour la Production

## 📋 Résumé

L'application utilise **Google AdMob** pour afficher des publicités uniquement aux utilisateurs **gratuits**. Les utilisateurs **Premium** ne voient aucune publicité.

## 🎯 Types de publicités intégrées

### 1. **Bannières publicitaires** (AdBanner)
- Affichées en bas de l'écran d'accueil
- Affichées en bas des résultats de quiz
- Taille : 320x50 pixels (BANNER) ou adaptative

### 2. **Publicités interstitielles** (Interstitial)
- Affichées après la fin d'un quiz (bouton "Terminer")
- Plein écran
- Se ferment automatiquement ou via bouton "Fermer"

## 🔧 Configuration en Production

### Étape 1 : Créer un compte AdMob

1. Allez sur [admob.google.com](https://admob.google.com)
2. Connectez-vous avec votre compte Google
3. Créez une nouvelle application :
   - **Nom** : RéviZON
   - **Plateforme** : iOS et Android

### Étape 2 : Créer les blocs publicitaires

#### Pour Android :
1. Dans AdMob, sélectionnez votre app Android
2. Créez 2 blocs publicitaires :
   - **Bannière** : Format "Bannière"
   - **Interstitiel** : Format "Interstitiel"
3. Notez les IDs générés (format : `ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY`)

#### Pour iOS :
1. Répétez le processus pour l'app iOS
2. Créez les mêmes 2 types de blocs
3. Notez les IDs iOS

### Étape 3 : Remplacer les IDs de test

#### 1. Dans `app.json` :
```json
[
  "react-native-google-mobile-ads",
  {
    "androidAppId": "ca-app-pub-VOTRE_ID_ANDROID~YYYYYYYYYY",
    "iosAppId": "ca-app-pub-VOTRE_ID_IOS~YYYYYYYYYY"
  }
]
```
⚠️ **Important** : Ces IDs se terminent par `~YYYYYY` (tilde, pas slash)

#### 2. Dans `components/AdBanner.tsx` :
```typescript
const adUnitId = __DEV__
  ? TestIds.BANNER
  : Platform.select({
      ios: 'ca-app-pub-VOTRE_ID_IOS/BANNIERE_IOS',
      android: 'ca-app-pub-VOTRE_ID_ANDROID/BANNIERE_ANDROID',
    }) || TestIds.BANNER;
```

#### 3. Dans `components/AdInterstitial.tsx` :
```typescript
const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : Platform.select({
      ios: 'ca-app-pub-VOTRE_ID_IOS/INTERSTITIEL_IOS',
      android: 'ca-app-pub-VOTRE_ID_ANDROID/INTERSTITIEL_ANDROID',
    }) || TestIds.INTERSTITIAL;
```

### Étape 4 : Rebuild l'application

```bash
# Pour Android
npx expo prebuild --platform android
eas build --platform android

# Pour iOS
npx expo prebuild --platform ios
eas build --platform ios
```

## 🧪 Test en développement

En mode développement (`__DEV__ = true`), l'app utilise automatiquement les **IDs de test Google** :
- Bannière : `ca-app-pub-3940256099942544/6300978111`
- Interstitiel : `ca-app-pub-3940256099942544/1033173712`

Ces publicités affichent "Test Ad" et ne génèrent pas de revenus.

## 💰 Vérification des publicités Premium

Le composant vérifie automatiquement le statut premium :

```typescript
const { isPremium } = usePremium();

if (isPremium) {
  return null; // Pas de pub
}
```

Les utilisateurs premium ne voient **JAMAIS** de publicité, même en développement.

## 📍 Emplacements des publicités

### Bannières :
1. ✅ Écran d'accueil (`app/(tabs)/index.tsx`) - en bas
2. ✅ Résultats de quiz (`app/lesson-quiz/[subject]/[lessonId].tsx`) - en bas

### Interstitiels :
1. ✅ Après un quiz - au clic sur "Terminer"

## 🔍 Dépannage

### Les pubs ne s'affichent pas ?
1. Vérifiez que vous êtes en compte gratuit (pas premium)
2. En production, vérifiez les IDs AdMob
3. Attendez ~1 heure après la première activation (délai AdMob)
4. Consultez les logs : `console.log('AdMob initialisé')`

### Erreur "Ad failed to load" ?
- Normal en développement si la connexion est lente
- En production, vérifiez que les IDs sont corrects
- Vérifiez que l'app est bien enregistrée dans AdMob

## 📊 Revenus estimés

Avec les publicités configurées :
- **Bannières** : ~0,10€ - 0,50€ par 1000 impressions
- **Interstitiels** : ~1€ - 5€ par 1000 impressions

Pour 1000 utilisateurs actifs/jour faisant 5 quiz :
- Bannières : ~0,60€/jour
- Interstitiels : ~5€/jour
- **Total estimé** : ~150-200€/mois

## ✅ Checklist avant publication

- [ ] Créer compte AdMob
- [ ] Créer app Android dans AdMob
- [ ] Créer app iOS dans AdMob
- [ ] Créer blocs publicitaires (bannière + interstitiel) × 2 plateformes
- [ ] Remplacer IDs dans `app.json`
- [ ] Remplacer IDs dans `components/AdBanner.tsx`
- [ ] Remplacer IDs dans `components/AdInterstitial.tsx`
- [ ] Rebuild l'application
- [ ] Tester en production (compte gratuit)
- [ ] Vérifier que Premium cache les pubs
- [ ] Attendre validation AdMob (24-48h)

## 🚀 Commandes utiles

```bash
# Reconstruire avec les nouveaux IDs
npx expo prebuild --clean

# Build Android
eas build -p android

# Build iOS
eas build -p ios

# Logs en temps réel
npx expo start
```

## 📞 Support

Pour toute question sur AdMob :
- [Documentation officielle](https://developers.google.com/admob)
- [Support AdMob](https://support.google.com/admob)
