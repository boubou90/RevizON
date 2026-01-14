# ✅ Checklist de Publication - RéviZON

## 📱 Configuration des Publicités - TERMINÉE ✅

### IDs AdMob Configurés

| Plateforme | Type | ID | Statut |
|------------|------|-----|--------|
| **Android** | Bannière | `ca-app-pub-2885775986633981/6826983329` | ✅ Configuré |
| **Android** | Interstitielle | `ca-app-pub-2885775986633981/5186598597` | ✅ Configuré |
| **iOS** | Bannière | `ca-app-pub-2885775986633981/9897135263` | ✅ Configuré |
| **iOS** | Interstitielle | `ca-app-pub-2885775986633981/3962282308` | ✅ Configuré |

### Où les publicités apparaissent

1. **Bannières** :
   - En bas de l'écran d'accueil
   - Sur l'écran de résultats des quiz
   - Taille : 320x50 pixels

2. **Interstitielles** :
   - Après avoir terminé un quiz
   - Plein écran, peut être fermée après 5 secondes

3. **Natives** :
   - Temporairement désactivées
   - Seront activées dans une future mise à jour

### Comportement en production

✅ **Mode développement** (`npx expo start`) :
- Affiche des publicités de TEST Google
- Permet de tester le placement sans risquer son compte AdMob

✅ **Mode production** (après `eas build --profile production`) :
- Affiche VOS vraies publicités avec revenus
- Les utilisateurs Premium ne voient AUCUNE publicité

---

## 🚀 Étapes de Publication

### Étape 1 : Build de production

```bash
# Se connecter à EAS
eas login

# Build Android (Google Play Store)
eas build -p android --profile production

# Build iOS (Apple App Store)
eas build -p ios --profile production
```

**Temps estimé** : 15-20 minutes par build

### Étape 2 : Soumettre à Google Play Store

1. Une fois le build terminé, téléchargez le fichier `.aab`
2. Allez sur https://play.google.com/console
3. Créez une nouvelle application ou mettez à jour l'existante
4. Uploadez le fichier `.aab`
5. Remplissez les informations requises :
   - Titre : RéviZON
   - Description
   - Captures d'écran
   - Icône
   - Politique de confidentialité (IMPORTANT - voir ci-dessous)
6. Soumettez pour révision

### Étape 3 : Soumettre à Apple App Store

1. Téléchargez le fichier `.ipa` depuis EAS
2. Ouvrez **Transporter** (app macOS) ou **App Store Connect**
3. Uploadez le fichier `.ipa`
4. Sur https://appstoreconnect.apple.com :
   - Créez une nouvelle app
   - Remplissez les métadonnées
   - Ajoutez captures d'écran
   - Définissez le prix (gratuit avec achats in-app)
5. Soumettez pour révision

---

## 📋 Documents Requis

### Politique de Confidentialité (OBLIGATOIRE)

Vous DEVEZ créer une politique de confidentialité mentionnant :
- Utilisation de Google AdMob
- Collecte de données publicitaires
- Supabase pour l'authentification
- Droits des utilisateurs (RGPD)

**Template disponible** : https://www.privacypolicies.com/

Points à inclure :
```
- Nous utilisons Google AdMob pour afficher des publicités
- AdMob collecte des identifiants publicitaires
- Les utilisateurs Premium ne voient pas de publicités
- Données utilisateur stockées via Supabase
- Les utilisateurs peuvent demander la suppression de leurs données
```

### Conditions d'Utilisation

Mentionnez :
- L'app est destinée aux élèves de 3ème
- Contenu éducatif conforme au programme français
- Achats in-app (version Premium)
- Règles d'utilisation

---

## ⚠️ Points Importants Avant Publication

### 1. Vérifier les fichiers de configuration

- [x] IDs AdMob configurés pour Android et iOS
- [x] Variables d'environnement Supabase dans `eas.json`
- [ ] Version incrémentée dans `app.json`
- [ ] Icône et splash screen finalisés
- [ ] Nom de bundle/package unique

### 2. Tester en mode production

**Avant de soumettre**, testez avec un build de production :

```bash
# Build preview (pour tester)
eas build -p android --profile preview
```

Installez l'APK et vérifiez :
- ✅ Les publicités s'affichent correctement
- ✅ Les utilisateurs Premium ne voient pas de pubs
- ✅ Tous les quiz fonctionnent
- ✅ L'authentification fonctionne
- ✅ Les achats in-app fonctionnent

### 3. Conformité légale

- [ ] Politique de confidentialité créée et hébergée en ligne
- [ ] Ajout du lien vers la politique dans l'app
- [ ] Vérification de la conformité RGPD (si ciblage Europe)
- [ ] Age rating approprié (app éducative pour 12+)

### 4. Ressources graphiques

Pour Google Play Store :
- [ ] Icône : 512x512 PNG
- [ ] Feature graphic : 1024x500 PNG
- [ ] Screenshots : minimum 2 (phone, tablet si applicable)

Pour Apple App Store :
- [ ] Icône : 1024x1024 PNG
- [ ] Screenshots pour différentes tailles d'iPhone
- [ ] Screenshots pour iPad (si applicable)

---

## 💰 Revenus Publicitaires - Estimations

### Scénarios

**Avec 500 utilisateurs gratuits actifs/jour :**
- Bannières : ~5 impressions/utilisateur = 2,500 impressions/jour
- Interstitielles : ~2 impressions/utilisateur = 1,000 impressions/jour
- **Revenus estimés** : ~$15/jour = **~$450/mois**

**Avec 1,000 utilisateurs gratuits actifs/jour :**
- Bannières : 5,000 impressions/jour
- Interstitielles : 2,000 impressions/jour
- **Revenus estimés** : ~$31/jour = **~$945/mois**

**Avec 5,000 utilisateurs gratuits actifs/jour :**
- Bannières : 25,000 impressions/jour
- Interstitielles : 10,000 impressions/jour
- **Revenus estimés** : ~$155/jour = **~$4,700/mois**

*Note : Ces chiffres sont des estimations. Les revenus réels varient selon la géolocalisation, l'engagement, la saison, etc.*

### Optimisation des revenus

Pour maximiser vos revenus :
1. **Augmentez le nombre d'utilisateurs actifs** (marketing, SEO app stores)
2. **Améliorez l'engagement** (plus de sessions = plus d'impressions)
3. **Proposez la version Premium** à un prix attractif
4. **Suivez vos métriques AdMob** régulièrement
5. **Testez différents placements** de publicités

---

## 🔍 Suivi Post-Publication

### Métriques à surveiller

**Dans Google AdMob** (https://admob.google.com) :
- Impressions quotidiennes
- CTR (taux de clics) - Cible : 1-3%
- eCPM (revenus pour 1000 impressions)
- Fill rate - Cible : >90%

**Dans Google Play Console / App Store Connect** :
- Téléchargements
- Notes et avis
- Taux de rétention (jour 1, jour 7, jour 30)
- Crashes et ANR (Android)

**Dans Supabase** :
- Nombre d'utilisateurs actifs
- Taux de conversion gratuit → Premium
- Utilisation des fonctionnalités (quiz, leçons)

---

## 🆘 Support et Résolution de Problèmes

### Les publicités ne s'affichent pas en production

1. Vérifiez que vous avez bien utilisé `--profile production`
2. Attendez 1-2 heures après la première mise en ligne (délai AdMob)
3. Vérifiez que les IDs AdMob sont corrects dans le code
4. Consultez les logs dans la console AdMob

### Compte AdMob suspendu

- **Ne JAMAIS** cliquer sur vos propres publicités
- Respectez les [politiques AdMob](https://support.google.com/admob/answer/6128543)
- Utilisez toujours des IDs de test en développement

### App rejetée par les stores

**Raisons courantes** :
- Politique de confidentialité manquante ou incomplète
- Captures d'écran non conformes
- Description trompeuse
- Contenus inappropriés
- Bugs critiques

**Solution** : Corrigez les points mentionnés et resoumettez

---

## 📞 Ressources Utiles

- **Documentation EAS Build** : https://docs.expo.dev/build/introduction/
- **Google Play Console** : https://play.google.com/console
- **App Store Connect** : https://appstoreconnect.apple.com
- **AdMob** : https://admob.google.com
- **Supabase Dashboard** : https://app.supabase.com

---

## ✅ Checklist Finale

Avant de publier, cochez tous ces points :

### Configuration Technique
- [x] IDs AdMob Android configurés
- [x] IDs AdMob iOS configurés
- [x] Variables Supabase dans eas.json
- [ ] Version app incrémentée
- [ ] Build production testé

### Contenu et Design
- [ ] Icône finalisée (512x512 et 1024x1024)
- [ ] Splash screen configuré
- [ ] Captures d'écran prises
- [ ] Description app rédigée
- [ ] Feature graphic créé (Android)

### Légal
- [ ] Politique de confidentialité rédigée et hébergée
- [ ] Lien politique ajouté dans l'app
- [ ] Conditions d'utilisation rédigées
- [ ] Age rating défini

### Tests
- [ ] Toutes les fonctionnalités testées
- [ ] Publicités testées en mode production
- [ ] Version Premium testée
- [ ] Paiements in-app testés
- [ ] Test sur plusieurs appareils

### Publication
- [ ] Build production Android créé
- [ ] Build production iOS créé
- [ ] Soumis à Google Play Store
- [ ] Soumis à Apple App Store

---

**Bonne chance avec votre publication ! 🚀**

Une fois l'app publiée, surveillez vos revenus AdMob et n'hésitez pas à ajuster les placements publicitaires pour optimiser vos gains.
