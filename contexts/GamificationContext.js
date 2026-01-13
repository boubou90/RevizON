import React, { createContext, useState, useEffect, useContext } from 'react';
import { storage } from '@/utils/storage';
import { BADGES, DAILY_GOAL_TARGET } from '@/utils/constants';
import { useProgress } from './ProgressContext';

const GamificationContext = createContext();

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
};

export const GamificationProvider = ({ children }) => {
  const [gamification, setGamification] = useState({
    streak: 0,
    lastActivityDate: null,
    dailyGoalCompleted: 0,
    dailyGoalTotal: DAILY_GOAL_TARGET,
    unlockedBadges: [],
    perfectScoreCount: 0,
    hasShared: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGamification();
  }, []);

  const loadGamification = async () => {
    const saved = await storage.getUserGamification();
    if (saved) {
      checkAndUpdateStreak(saved);
    } else {
      setLoading(false);
    }
  };

  const checkAndUpdateStreak = async (data) => {
    const today = new Date().toDateString();
    const lastActivity = data.lastActivityDate;

    if (!lastActivity) {
      setGamification(data);
      setLoading(false);
      return;
    }

    const lastDate = new Date(lastActivity);
    const todayDate = new Date(today);
    const diffTime = todayDate - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      const resetData = {
        ...data,
        streak: 0,
        dailyGoalCompleted: 0,
      };
      setGamification(resetData);
      await storage.saveUserGamification(resetData);
    } else if (diffDays === 1) {
      const resetData = {
        ...data,
        dailyGoalCompleted: 0,
      };
      setGamification(resetData);
      await storage.saveUserGamification(resetData);
    } else {
      setGamification(data);
    }
    setLoading(false);
  };

  const incrementDailyGoal = async () => {
    const today = new Date().toDateString();
    const lastActivity = gamification.lastActivityDate;

    let newStreak = gamification.streak;

    if (lastActivity !== today) {
      const lastDate = lastActivity ? new Date(lastActivity) : null;
      const todayDate = new Date(today);

      if (lastDate) {
        const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          newStreak += 1;
        } else if (diffDays > 1) {
          newStreak = 1;
        }
      } else {
        newStreak = 1;
      }
    }

    const updated = {
      ...gamification,
      dailyGoalCompleted: gamification.dailyGoalCompleted + 1,
      lastActivityDate: today,
      streak: newStreak,
    };

    setGamification(updated);
    await storage.saveUserGamification(updated);

    checkTimeBadges();
    checkStreakBadges(newStreak);
  };

  const checkTimeBadges = () => {
    const hour = new Date().getHours();
    if (hour < 8) {
      unlockBadge('early_bird');
    } else if (hour >= 22) {
      unlockBadge('night_owl');
    }
  };

  const checkStreakBadges = (streak) => {
    if (streak >= 30) {
      unlockBadge('month_streak');
    } else if (streak >= 7) {
      unlockBadge('week_streak');
    }
  };

  const unlockBadge = async (badgeId) => {
    if (!gamification.unlockedBadges.includes(badgeId)) {
      const updated = {
        ...gamification,
        unlockedBadges: [...gamification.unlockedBadges, badgeId],
      };
      setGamification(updated);
      await storage.saveUserGamification(updated);
      return true;
    }
    return false;
  };

  const checkLessonBadges = (totalLessons) => {
    if (totalLessons >= 10) {
      unlockBadge('lesson_master');
    } else if (totalLessons >= 1) {
      unlockBadge('first_lesson');
    }
  };

  const checkQuizBadges = (totalQuizzes) => {
    if (totalQuizzes >= 10) {
      unlockBadge('quiz_pro');
    } else if (totalQuizzes >= 1) {
      unlockBadge('quiz_beginner');
    }
  };

  const recordPerfectScore = async () => {
    const updated = {
      ...gamification,
      perfectScoreCount: gamification.perfectScoreCount + 1,
    };
    setGamification(updated);
    await storage.saveUserGamification(updated);
    unlockBadge('perfect_score');
  };

  const recordShare = async () => {
    const updated = {
      ...gamification,
      hasShared: true,
    };
    setGamification(updated);
    await storage.saveUserGamification(updated);
    unlockBadge('social');
  };

  const checkMultiSubjectBadge = (progress) => {
    const subjects = ['math', 'french', 'history', 'sciences'];
    // progress.completedLessons est un tableau de clés "subject_lessonId"
    const completedLessons = progress?.completedLessons || [];
    const studiedSubjects = subjects.filter(
      (subject) => completedLessons.some(key => key.startsWith(`${subject}_`))
    );
    if (studiedSubjects.length >= 4) {
      unlockBadge('multi_subject');
    }
  };

  const isDailyGoalComplete = () => {
    return gamification.dailyGoalCompleted >= gamification.dailyGoalTotal;
  };

  const resetGamification = async () => {
    const reset = {
      streak: 0,
      lastActivityDate: null,
      dailyGoalCompleted: 0,
      dailyGoalTotal: DAILY_GOAL_TARGET,
      unlockedBadges: [],
      perfectScoreCount: 0,
      hasShared: false,
    };
    setGamification(reset);
    await storage.saveUserGamification(reset);
  };

  return (
    <GamificationContext.Provider
      value={{
        gamification,
        incrementDailyGoal,
        unlockBadge,
        checkLessonBadges,
        checkQuizBadges,
        recordPerfectScore,
        recordShare,
        checkMultiSubjectBadge,
        isDailyGoalComplete,
        resetGamification,
        loading,
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
};
