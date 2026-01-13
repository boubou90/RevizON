# 📱 Guide des Publicités - RéviZON

## Types de publicités implémentées

Votre application utilise maintenant **3 types de publicités Google AdMob** :

### 1. 🎯 Bannières (Banner Ads)
- **Où** : En bas de l'écran d'accueil et sur la page de résultats des quiz
- **Taille** : 320x50 pixels
- **Revenus** : ~$0.50 - $2.00 pour 1000 impressions
- **Impact utilisateur** : Faible, non intrusif
- **Fichier** : `components/AdBanner.tsx`

### 2. 📺 Interstitielles (Interstitial Ads)
- **Où** : Après avoir terminé un quiz
- **Taille** : Plein écran
- **Revenus** : ~$3.00 - $10.00 pour 1000 impressions
- **Impact utilisateur** : Moyen, peut être fermée après 5 secondes
- **Fichier** : `components/AdInterstitial.tsx`

### 3. 📄 Natives (Native Ads) ✨ NOUVEAU
- **Où** : Intégrées dans la liste des leçons (toutes les 4 leçons)
- **Taille** : S'adapte au design de l'app
- **Revenus** : ~$1.00 - $5.00 pour 1000 impressions
- **Impact utilisateur** : Très faible, ressemble au contenu normal
- **Fichier** : `components/AdNative.tsx`

---

## 🔧 Configuration AdMob

### Étape 1 : Créer vos unités publicitaires

1. Allez sur https://admob.google.com
2. Cliquez sur "Applications" → Sélectionnez votre app
3. Créez 3 nouvelles unités publicitaires :

   **Pour Android :**
   - ✅ Bannière : `ca-app-pub-2885775986633981/6826983329` (DÉJÀ CONFIGURÉ)
   - ✅ Interstitielle : `ca-app-pub-2885775986633981/5186598597` (DÉJÀ CONFIGURÉ)
   - ⚠️ Native : **À CRÉER** → Choisir "Native Ad (Advanced)"

   **Pour iOS :**
   - ⚠️ Bannière : À CRÉER
   - ⚠️ Interstitielle : À CRÉER
   - ⚠️ Native : À CRÉER

### Étape 2 : Ajouter l'ID Native dans le code

Une fois votre unité publicitaire native créée, mettez à jour le fichier `components/AdNative.tsx` :

```typescript
// Ligne 21-29
const getAdUnitId = () => {
  if (!TestIds) return '';
  return __DEV__
    ? TestIds.NATIVE
    : Platform.select({
        ios: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY', // Votre ID iOS
        android: 'ca-app-pub-2885775986633981/VOTRE_ID_NATIVE_ANDROID', // À remplacer
      }) || TestIds.NATIVE;
};
```

### Étape 3 : Ajouter les IDs iOS

Mettez à jour les fichiers suivants avec vos IDs iOS :

**`components/AdBanner.tsx` (lignes 40-43) :**
```typescript
ios: 'ca-app-pub-2885775986633981/VOTRE_ID_BANNER_IOS',
```

**`components/AdInterstitial.tsx` (lignes 25-28) :**
```typescript
ios: 'ca-app-pub-2885775986633981/VOTRE_ID_INTERSTITIAL_IOS',
```

---

## 🎨 Personnalisation des publicités

### Changer la fréquence des publicités natives

Dans `app/course/[subject].tsx`, ligne 182 :

```typescript
// Actuellement : toutes les 4 leçons
{(index + 1) % 4 === 0 && index < lessons.length - 1 && (
  <AdNative />
)}

// Pour toutes les 3 leçons :
{(index + 1) % 3 === 0 && index < lessons.length - 1 && (
  <AdNative />
)}

// Pour toutes les 5 leçons :
{(index + 1) % 5 === 0 && index < lessons.length - 1 && (
  <AdNative />
)}
```

### Désactiver un type de publicité

**Pour enlever les bannières :**
Supprimez `<AdBanner />` dans :
- `app/(tabs)/index.tsx` (ligne finale)
- `app/lesson-quiz/[subject]/[lessonId].tsx`

**Pour enlever les interstitielles :**
Dans `app/lesson-quiz/[subject]/[lessonId].tsx`, supprimez :
```typescript
await showAd(); // Ligne dans handleFinish
```

**Pour enlever les natives :**
Dans `app/course/[subject].tsx`, supprimez les lignes 181-184.

---

## 📊 Estimation des revenus

Avec **1000 utilisateurs actifs par jour** (gratuits) :

| Type | Impressions/jour | eCPM | Revenus/jour | Revenus/mois |
|------|------------------|------|--------------|--------------|
| **Bannières** | 5,000 | $1.50 | $7.50 | $225 |
| **Interstitielles** | 3,000 | $6.00 | $18.00 | $540 |
| **Natives** | 2,000 | $3.00 | $6.00 | $180 |
| **TOTAL** | - | - | **$31.50** | **$945** |

*Note : Ces chiffres sont des estimations. Les revenus réels dépendent de nombreux facteurs (géolocalisation, engagement, qualité du trafic, etc.)*

---

## 🧪 Test des publicités

### Mode développement (__DEV__ = true)
Les publicités de **test Google** s'affichent automatiquement. Vous pouvez les voir sur l'appareil.

### Mode production
1. Construire l'app avec EAS :
   ```bash
   eas build -p android --profile preview
   ```

2. Installer l'APK sur votre téléphone

3. Les vraies publicités s'afficheront

⚠️ **IMPORTANT** : Ne cliquez jamais sur vos propres publicités ! Cela peut entraîner la suspension de votre compte AdMob.

---

## 🚀 Déploiement en production

### Checklist avant publication :

- [ ] Tous les IDs de test remplacés par les vrais IDs AdMob
- [ ] IDs Android configurés ✅
- [ ] IDs iOS configurés (si vous publiez sur iOS)
- [ ] IDs Native Android configurés ⚠️ (à faire)
- [ ] App testée avec les vraies publicités
- [ ] Politique de confidentialité mise à jour (mentionner AdMob)
- [ ] Conformité RGPD/CCPA si nécessaire

### Build de production :

```bash
# Android
eas build -p android --profile production

# iOS
eas build -p ios --profile production
```

---

## 🎯 Optimisation des revenus

### Bonnes pratiques :

1. **Placement intelligent** : Les publicités natives intégrées dans le contenu ont de meilleurs taux de clics
2. **Fréquence modérée** : Ne pas saturer l'utilisateur de publicités
3. **Utilisateurs Premium** : Aucune publicité ne s'affiche (déjà implémenté ✅)
4. **Timing** : Les interstitielles après un quiz sont bien placées (moment naturel de pause)

### Métriques à suivre dans AdMob :

- **Impressions** : Nombre de fois que la pub s'affiche
- **CTR (Click-Through Rate)** : % de clics / impressions (cible : 1-3%)
- **eCPM** : Revenus pour 1000 impressions
- **Fill Rate** : % de demandes de pub satisfaites (cible : >90%)

---

## ❓ Résolution de problèmes

### Les publicités ne s'affichent pas en mode Expo Go
**Normal !** AdMob nécessite un build natif. Utilisez :
```bash
eas build -p android --profile preview
```

### "Ad failed to load"
1. Vérifiez votre connexion internet
2. Vérifiez que les IDs AdMob sont corrects
3. Attendez quelques heures après la création d'une nouvelle unité publicitaire
4. Vérifiez la console AdMob pour les erreurs

### Les utilisateurs Premium voient des pubs
Vérifiez que `isPremium` est bien `true` dans la console. Le code vérifie déjà ce statut avant d'afficher les publicités.

### Revenus très faibles
- Augmentez le nombre d'utilisateurs actifs
- Améliorez l'engagement (plus de sessions = plus d'impressions)
- Optimisez les placements publicitaires
- Vérifiez que votre compte AdMob est bien configuré

---

## 📁 Fichiers modifiés

- ✅ `components/AdBanner.tsx` - Bannières
- ✅ `components/AdInterstitial.tsx` - Interstitielles
- ✅ `components/AdNative.tsx` - Natives (NOUVEAU)
- ✅ `app/course/[subject].tsx` - Intégration natives dans liste leçons
- ✅ `app/(tabs)/index.tsx` - Bannière page d'accueil
- ✅ `app/lesson-quiz/[subject]/[lessonId].tsx` - Bannière + interstitielle après quiz
- ✅ `app.json` - Configuration plugin AdMob
- ✅ `eas.json` - Variables d'environnement

---

## 🆘 Support

Pour toute question sur AdMob :
- Documentation officielle : https://developers.google.com/admob
- Documentation React Native : https://docs.page/invertase/react-native-google-mobile-ads

Pour les problèmes spécifiques à votre app, vérifiez les logs :
```bash
npx expo start
```
Puis consultez les erreurs dans la console.
