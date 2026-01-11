# 📚 Application Mobile de Révisions Collège

Application mobile de révisions gamifiée pour les élèves de collège (6ème à 3ème) avec système freemium.

## 🎯 Fonctionnalités

### Contenu Pédagogique
- **4 Matières** : Mathématiques, Français, Histoire-Géographie, Sciences
- **21+ Leçons** détaillées avec points clés et exemples
- **Quiz interactifs** pour tester les connaissances

### Gamification
- **Série de jours** : Compteur de jours consécutifs d'utilisation
- **Objectif quotidien** : 5 actions par jour (leçons + quiz)
- **12 Badges** à débloquer avec différents challenges

### Système Freemium
- **Version Gratuite** : 2 cours par matière (8 cours total)
- **Version Premium** : Tous les cours + quiz illimités (1,99€)

### Profil Utilisateur
- Personnalisation avec 15 avatars disponibles
- Suivi de progression par matière
- Statistiques détaillées

## 🛠️ Stack Technique

- **Framework** : React Native + Expo 54
- **Navigation** : Expo Router (Tab Navigation)
- **State Management** : React Context API
- **Storage Local** : AsyncStorage
- **Base de données** : Supabase (PostgreSQL)
- **Auth** : Supabase Auth (optionnel)
- **UI** : StyleSheet (pas de NativeWind)
- **Icons** : lucide-react-native

## 📁 Structure du Projet

```
app/
├── (tabs)/              # Navigation par tabs
│   ├── index.tsx       # Écran d'accueil
│   ├── subjects.tsx    # Liste des matières
│   └── profile.tsx     # Profil utilisateur
├── course/[subject].tsx # Liste des cours d'une matière
├── lesson/[id].tsx     # Détail d'une leçon
├── quiz/[subject].tsx  # Interface de quiz
├── results.tsx         # Résultats du quiz
├── edit-profile.tsx    # Modification du profil
└── premium.tsx         # Page premium

contexts/               # Contextes React
├── UserContext.js      # Profil utilisateur
├── ProgressContext.js  # Progression (leçons, quiz)
├── GamificationContext.js # Streaks, badges, objectifs
└── PremiumContext.js   # Statut premium

data/                   # Données statiques
├── coursesData.js      # Contenu des cours
└── quizData.js         # Questions de quiz

utils/
├── constants.js        # Constantes (couleurs, badges)
└── storage.js          # Wrapper AsyncStorage
```

## 🚀 Installation

1. **Cloner le projet**
```bash
git clone <repo>
cd mobile-app
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer Supabase**

Créer un fichier `.env` à la racine :
```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Lancer l'application**
```bash
npm run dev
```

## 🗄️ Configuration Supabase

La base de données est déjà configurée avec les tables suivantes :

- `users` : Profils utilisateurs
- `courses` : Contenu pédagogique
- `quiz_questions` : Questions de quiz
- `user_progress` : Progression par matière
- `user_gamification` : Streaks, badges, objectifs
- `user_premium` : Statut premium
- `push_tokens` : Tokens de notification (futur)
- `analytics_events` : Événements analytics

La migration initiale est déjà appliquée. Le schéma inclut :
- RLS (Row Level Security) activé
- Indexes pour les performances
- Triggers pour auto-update des timestamps

## 🎨 Design

- **Palette de couleurs** :
  - Bleu (#4169E1) : Mathématiques / Primaire
  - Rouge (#E63946) : Français
  - Vert (#06D6A0) : Histoire-Géographie
  - Violet (#7209B7) : Sciences
  - Or (#FFD700) : Premium

- **Style** : Moderne, coloré, engageant
- **Animations** : Transitions fluides, feedback visuel
- **Responsive** : Adapté iOS et Android

## 📱 Écrans Principaux

1. **Accueil** : Statistiques, progression, objectif du jour
2. **Matières** : 4 matières avec progression
3. **Cours** : Liste des leçons d'une matière
4. **Leçon** : Contenu détaillé avec points clés
5. **Quiz** : Questions à choix multiples
6. **Résultats** : Score avec détail des réponses
7. **Profil** : Stats, badges, série
8. **Premium** : Page de présentation et achat

## 🎮 Gamification

### Badges (12 au total)
- 📚 Première Leçon
- 🎓 Expert (10 leçons)
- ✏️ Débutant Quiz
- 🏅 Pro Quiz (10 quiz)
- ⭐ Score Parfait (100%)
- 🔥 Série 7j / 30j
- 🌈 Polyvalent (4 matières)
- 🌅 Lève-tôt / 🦉 Noctambule
- 👑 Premium
- 📱 Influenceur (partage)

### Objectif Quotidien
5 actions par jour (leçons lues + quiz complétés)

### Série de Jours
Compteur réinitialisé si > 24h sans activité

## 💎 Système Premium

### Gratuit
- 2 premiers cours par matière (8 total)
- Pas d'accès aux quiz
- Statistiques basiques

### Premium (1,99€)
- Tous les cours (21+)
- Tous les quiz
- Statistiques avancées
- Badge Premium exclusif
- Sans publicités

## 🔄 État de Développement

✅ **Terminé**
- Architecture complète
- Base de données Supabase
- Navigation par tabs
- 4 matières avec contenu
- Système de progression
- Gamification (badges, streaks)
- Système freemium
- Profil personnalisable

🚧 **À Faire**
- Authentification Supabase
- Paiement In-App (iOS/Android)
- Partage social (images)
- Notifications push
- Mode hors-ligne

## 📊 Métriques

L'app track automatiquement :
- Leçons complétées
- Quiz réalisés
- Temps de session
- Progression par matière
- Badges débloqués

## 🔐 Sécurité

- RLS activé sur toutes les tables utilisateur
- Données locales avec AsyncStorage
- Validation côté serveur (Edge Functions futur)
- Pas de données sensibles en clair

## 📄 Licence

Projet éducatif - Tous droits réservés

## 🆘 Support

Pour toute question ou bug, ouvrir une issue sur le repo.
# Trigger rebuild
