export const COLORS = {
  primary: '#4169E1',
  secondary: '#9333EA',
  math: '#4169E1',
  french: '#E63946',
  history: '#06D6A0',
  histoire: '#8B4513',
  geographie: '#4CAF50',
  emc: '#2196F3',
  svt: '#10B981',
  physique: '#7209B7',
  technologie: '#F59E0B',
  premium: '#FFD700',
  streak: '#FF6B35',
  badge: '#FFD60A',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#6B7280',
  lightGray: '#F3F4F6',
  darkGray: '#374151',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
};

export const SUBJECTS = [
  { id: 'math', name: 'Mathématiques', icon: '🧮', color: COLORS.math },
  { id: 'french', name: 'Français', icon: '📖', color: COLORS.french },
  { id: 'history', name: 'Hist/Géo/EMC', icon: '🌍', color: COLORS.history },
  { id: 'svt', name: 'SVT', icon: '🧬', color: COLORS.svt },
  { id: 'physique', name: 'Sciences Physiques', icon: '⚗️', color: COLORS.physique },
  { id: 'technologie', name: 'Technologie', icon: '⚙️', color: COLORS.technologie },
];

// Sous-matières pour Hist/Géo/EMC (utilisées uniquement dans la page de sélection)
export const HISTORY_SUBJECTS = [
  { id: 'histoire', name: 'Histoire', icon: '📜', color: COLORS.histoire },
  { id: 'geographie', name: 'Géographie', icon: '🌍', color: COLORS.geographie },
  { id: 'emc', name: 'EMC', icon: '🗳️', color: COLORS.emc },
];

export const AVATARS = [
  '👨‍🎓', '👩‍🎓', '🧑‍💻', '👨‍🔬', '👩‍🏫',
  '👨‍🏫', '👩‍💼', '👨‍💼', '🧑‍🎨', '👨‍🎨',
  '👩‍🔧', '👨‍🔧', '🧑‍⚕️', '👨‍⚕️', '👩‍⚕️'
];

export const CLASSES = ['6eme', '5eme', '4eme', '3eme'];

export const BADGES = [
  {
    id: 'first_lesson',
    name: 'Première Leçon',
    icon: '📚',
    description: 'Terminer ta première leçon',
    condition: 'lessons',
    threshold: 1
  },
  {
    id: 'lesson_master',
    name: 'Expert',
    icon: '🎓',
    description: 'Terminer 10 leçons',
    condition: 'lessons',
    threshold: 10
  },
  {
    id: 'quiz_beginner',
    name: 'Débutant Quiz',
    icon: '✏️',
    description: 'Compléter ton premier quiz',
    condition: 'quizzes',
    threshold: 1
  },
  {
    id: 'quiz_pro',
    name: 'Pro Quiz',
    icon: '🏅',
    description: 'Compléter 10 quiz',
    condition: 'quizzes',
    threshold: 10
  },
  {
    id: 'perfect_score',
    name: 'Score Parfait',
    icon: '⭐',
    description: 'Obtenir 100% à un quiz',
    condition: 'perfect',
    threshold: 1
  },
  {
    id: 'week_streak',
    name: 'Série 7j',
    icon: '🔥',
    description: '7 jours consécutifs',
    condition: 'streak',
    threshold: 7
  },
  {
    id: 'month_streak',
    name: 'Série 30j',
    icon: '🔥🔥',
    description: '30 jours consécutifs',
    condition: 'streak',
    threshold: 30
  },
  {
    id: 'multi_subject',
    name: 'Polyvalent',
    icon: '🌈',
    description: 'Étudier les 6 matières',
    condition: 'subjects',
    threshold: 6
  },
  {
    id: 'early_bird',
    name: 'Lève-tôt',
    icon: '🌅',
    description: 'Se connecter avant 8h',
    condition: 'time',
    threshold: 8
  },
  {
    id: 'night_owl',
    name: 'Noctambule',
    icon: '🦉',
    description: 'Se connecter après 22h',
    condition: 'time',
    threshold: 22
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: '👑',
    description: 'Devenir membre Premium',
    condition: 'premium',
    threshold: 1
  },
  {
    id: 'social',
    name: 'Influenceur',
    icon: '📱',
    description: 'Partager ta progression',
    condition: 'share',
    threshold: 1
  }
];

export const DAILY_GOAL_TARGET = 5;

export const FREE_LESSONS_LIMIT = 2;
