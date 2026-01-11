import { useEffect } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { UserProvider } from '@/contexts/UserContext';
import { ProgressProvider } from '@/contexts/ProgressContext';
import { GamificationProvider } from '@/contexts/GamificationContext';
import { PremiumProvider } from '@/contexts/PremiumContext';

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

  return (
    <AuthProvider>
      <UserProvider>
        <ProgressProvider>
          <GamificationProvider>
            <PremiumProvider>
              <RootLayoutNav />
              <StatusBar style="auto" />
            </PremiumProvider>
          </GamificationProvider>
        </ProgressProvider>
      </UserProvider>
    </AuthProvider>
  );
}
