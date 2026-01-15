import { useEffect } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { UserProvider } from '@/contexts/UserContext';
import { ProgressProvider } from '@/contexts/ProgressContext';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { RevenueCatProvider } from '@/contexts/RevenueCatContext';

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === 'auth';

    if (!user && !inAuthGroup) {
      // Rediriger vers login si non connecté
      router.replace('/auth/login' as any);
    } else if (user && inAuthGroup) {
      // Rediriger vers l'app si connecté
      router.replace('/(tabs)' as any);
    }
  }, [user, segments, loading]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
      <Stack.Screen
        name="course/[subject]"
        options={{ presentation: 'card' }}
      />
      <Stack.Screen
        name="lesson/[id]"
        options={{ presentation: 'card' }}
      />
      <Stack.Screen
        name="quiz/[subject]"
        options={{ presentation: 'card' }}
      />
      <Stack.Screen
        name="results"
        options={{ presentation: 'card' }}
      />
      <Stack.Screen
        name="edit-profile"
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="premium"
        options={{ presentation: 'modal' }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  useFrameworkReady();

  // Initialiser Google Mobile Ads (seulement si disponible)
  useEffect(() => {
    const initAds = async () => {
      try {
        const mobileAds = await import('react-native-google-mobile-ads');
        await mobileAds.default().initialize();
        console.log('AdMob initialisé');
      } catch (error) {
        console.log('AdMob non disponible (mode Expo Go)');
      }
    };
    initAds();
  }, []);

  return (
    <AuthProvider>
      <UserProvider>
        <ProgressProvider>
          <GamificationProvider>
            <RevenueCatProvider>
              <RootLayoutNav />
              <StatusBar style="auto" />
            </RevenueCatProvider>
          </GamificationProvider>
        </ProgressProvider>
      </UserProvider>
    </AuthProvider>
  );
}
