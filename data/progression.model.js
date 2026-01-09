/**
 * Modèle de données pour le suivi de progression
 */
export const userProgressModel = {
  completedLessons: [], // IDs des leçons terminées
  quizScores: {},       // { lessonId: scorePercentage }
  brevetBlanc: {
    attempts: [],       // { date: string, score: number, timeSpent: number }
    bestScore: null
  },
  stats: {
    totalPoints: 0,
    streakDays: 0,
    lastActive: null
  }
};
