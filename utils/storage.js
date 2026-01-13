import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  USER_PROFILE: '@user_profile',
  USER_PROGRESS: '@user_progress',
  USER_GAMIFICATION: '@user_gamification',
  PREMIUM_STATUS: '@premium_status',
};

export const storage = {
  async saveUserProfile(profile) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
      return true;
    } catch (error) {
      console.error('Error saving user profile:', error);
      return false;
    }
  },

  async getUserProfile() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user profile:', error);
      return null;
    }
  },

  async saveUserProgress(progress) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
      return true;
    } catch (error) {
      console.error('Error saving user progress:', error);
      return false;
    }
  },

  async getUserProgress() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user progress:', error);
      return null;
    }
  },

  async saveUserGamification(gamification) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER_GAMIFICATION, JSON.stringify(gamification));
      return true;
    } catch (error) {
      console.error('Error saving user gamification:', error);
      return false;
    }
  },

  async getUserGamification() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_GAMIFICATION);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user gamification:', error);
      return null;
    }
  },

  async savePremiumStatus(status) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.PREMIUM_STATUS, JSON.stringify(status));
      return true;
    } catch (error) {
      console.error('Error saving premium status:', error);
      return false;
    }
  },

  async getPremiumStatus() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.PREMIUM_STATUS);
      return data ? JSON.parse(data) : { isPremium: false };
    } catch (error) {
      console.error('Error getting premium status:', error);
      return { isPremium: false };
    }
  },

  async clearAll() {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.USER_PROFILE,
        STORAGE_KEYS.USER_PROGRESS,
        STORAGE_KEYS.USER_GAMIFICATION,
        STORAGE_KEYS.PREMIUM_STATUS,
      ]);
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  },
};
