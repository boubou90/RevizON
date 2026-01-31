import mobileAds from 'react-native-google-mobile-ads';

export async function initializeAds() {
  try {
    await mobileAds().initialize();
    console.log('AdMob initialisé');
  } catch (error) {
    console.log('AdMob non disponible (mode Expo Go)');
  }
}
