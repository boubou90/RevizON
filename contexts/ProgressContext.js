import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { coursesData } from '@/data/coursesData';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    completedLessons: [],
    quizScores: {},
    brevetBlanc: {
      attempts: [],
      bestScore: null
    }
  });

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const savedProgress = await AsyncStorage.getItem('user_progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (e) {
      console.error('Erreur de chargement', e);
    }
  };

  const saveProgress = async (newProgress) => {
    try {
      await AsyncStorage.setItem('user_progress', JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (e) {
      console.error('Erreur de sauvegarde', e);
    }
  };

  // Calcule le progrès pour une matière spécifique
  const getSubjectProgress = (subject) => {
    const data = coursesData[subject];
    if (!data) return 0;
    
    let lessons = [];
    if (Array.isArray(data)) {
      lessons = data;
    } else {
      // Pour Hist/Géo/EMC qui est un objet de tableaux
      Object.values(data).forEach(subArray => {
        if (Array.isArray(subArray)) lessons = [...lessons, ...subArray];
      });
    }

    if (lessons.length === 0) return 0;
    
    // On compte les leçons terminées pour cette matière
    const completedCount = progress.completedLessons.filter(key => key.startsWith(`${subject}_`)).length;
    return Math.round((completedCount / lessons.length) * 100);
  };

  const getGlobalProgress = () => {
    let totalLessons = 0;
    
    Object.values(coursesData).forEach(data => {
      if (Array.isArray(data)) {
        totalLessons += data.length;
      } else if (typeof data === 'object' && data !== null) {
        // Cas particulier Hist/Géo/EMC
        Object.values(data).forEach(subArray => {
          if (Array.isArray(subArray)) totalLessons += subArray.length;
        });
      }
    });
    
    if (totalLessons === 0) return 0;
    const completedCount = progress.completedLessons.length;
    return Math.min(Math.round((completedCount / totalLessons) * 100), 100);
  };

  const getTotalLessonsCompleted = () => progress.completedLessons.length;
  
  const getTotalQuizCompleted = () => Object.keys(progress.quizScores).length;

  const isLessonCompleted = (subject, lessonId) => {
    return progress.completedLessons.includes(`${subject}_${lessonId}`);
  };

  const completeLesson = (subject, lessonId) => {
    const key = `${subject}_${lessonId}`;
    if (!progress.completedLessons.includes(key)) {
      const newProgress = {
        ...progress,
        completedLessons: [...progress.completedLessons, key]
      };
      saveProgress(newProgress);
    }
  };

  const saveQuizScore = (lessonId, score) => {
    const newProgress = {
      ...progress,
      quizScores: { ...progress.quizScores, [lessonId]: score }
    };
    saveProgress(newProgress);
  };

  const saveBrevetAttempt = (score) => {
    const newProgress = {
      ...progress,
      brevetBlanc: {
        attempts: [...progress.brevetBlanc.attempts, { date: new Date(), score }],
        bestScore: Math.max(progress.brevetBlanc.bestScore || 0, score)
      }
    };
    saveProgress(newProgress);
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      completeLesson, 
      saveQuizScore, 
      saveBrevetAttempt,
      getGlobalProgress,
      getSubjectProgress,
      getTotalLessonsCompleted,
      getTotalQuizCompleted,
      isLessonCompleted
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
