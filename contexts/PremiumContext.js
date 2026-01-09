import React, { createContext, useState, useEffect, useContext } from 'react';
import { storage } from '@/utils/storage';
import { FREE_LESSONS_LIMIT } from '@/utils/constants';
import { useGamification } from './GamificationContext';

const PremiumContext = createContext();

export const usePremium = () => {
  const context = useContext(PremiumContext);
  if (!context) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
};

export const PremiumProvider = ({ children }) => {
  const [premium, setPremium] = useState({
    isPremium: false,
    purchaseDate: null,
    platform: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPremiumStatus();
  }, []);

  const loadPremiumStatus = async () => {
    const saved = await storage.getPremiumStatus();
    if (saved) {
      setPremium(saved);
    }
    setLoading(false);
  };

  const upgradeToPremium = async (platform = 'test') => {
    const updated = {
      isPremium: true,
      purchaseDate: new Date().toISOString(),
      platform: platform,
    };
    setPremium(updated);
    await storage.savePremiumStatus(updated);
    return true;
  };

  const canAccessLesson = (lessonIndex) => {
    if (premium.isPremium) return true;
    return lessonIndex < FREE_LESSONS_LIMIT;
  };

  const canAccessQuiz = () => {
    return premium.isPremium;
  };

  const resetPremium = async () => {
    const reset = {
      isPremium: false,
      purchaseDate: null,
      platform: null,
    };
    setPremium(reset);
    await storage.savePremiumStatus(reset);
  };

  return (
    <PremiumContext.Provider
      value={{
        isPremium: premium.isPremium,
        premium,
        upgradeToPremium,
        canAccessLesson,
        canAccessQuiz,
        resetPremium,
        loading,
      }}
    >
      {children}
    </PremiumContext.Provider>
  );
};
