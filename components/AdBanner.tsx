import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { usePremium } from '@/contexts/PremiumContext';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

/**
 * Composant de bannière publicitaire
 * Affiche une pub uniquement pour les utilisateurs gratuits
 */
export function AdBanner() {
  const { isPremium } = usePremium();

  // Ne pas afficher de pub pour les utilisateurs premium
  if (isPremium) {
    return null;
  }

  // IDs de test pour le développement
  // IMPORTANT: Remplacer par vos vrais IDs AdMob en production
  const adUnitId = __DEV__
    ? TestIds.BANNER
    : Platform.select({
        ios: 'ca-app-pub-2885775986633981/9897135263',
        android: 'ca-app-pub-2885775986633981/6826983329',
      }) || TestIds.BANNER;

  return (
    <View style={styles.container}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}

/**
 * Bannière adaptative (recommandé)
 * S'adapte automatiquement à la largeur de l'écran
 */
export function AdaptiveBanner() {
  const { isPremium } = usePremium();

  if (isPremium) {
    return null;
  }

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : Platform.select({
        ios: 'ca-app-pub-2885775986633981/9897135263',
        android: 'ca-app-pub-2885775986633981/6826983329',
      }) || TestIds.BANNER;

  return (
    <View style={styles.container}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    paddingVertical: 8,
  },
});
