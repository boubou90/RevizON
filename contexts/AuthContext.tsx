import React, { createContext, useState, useEffect, useContext } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { Platform, Alert } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signInWithGoogle: () => Promise<{ error: any }>;
  signInWithApple: () => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sur le web, vérifier si l'URL contient des tokens OAuth
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      const hashParams = window.location.hash;
      if (hashParams && hashParams.includes('access_token')) {
        // Supabase va automatiquement gérer les tokens dans l'URL
        console.log("OAuth tokens detected in URL");
      }
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event, !!session);
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name, avatar: '👨‍🎓', class: '6eme' },
        },
      });
      if (error) return { error };
      if (data.user) {
        await supabase.from('users').insert({
          id: data.user.id,
          email: data.user.email,
          name,
          avatar: '👨‍🎓',
          class: '6eme',
        });
      }
      return { error: null };
    } catch (error: any) {
      return { error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error };
    } catch (error: any) {
      return { error };
    }
  };

  const signInWithGoogle = async () => {
    try {
      // Sur le web, utiliser une redirection vers la page actuelle
      if (Platform.OS === 'web') {
        const currentUrl = window.location.href.split('#')[0].split('?')[0];
        console.log("Web redirect URL:", currentUrl);
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: currentUrl,
          },
        });
        if (error) throw error;
        return { error: null };
      }

      // Sur mobile - utiliser le scheme de l'app
      const redirectUrl = Linking.createURL('auth/callback');
      console.log("Redirect URL:", redirectUrl);

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          skipBrowserRedirect: true,
        },
      });

      if (error) throw error;

      // Ouvrir le navigateur et écouter le retour
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectUrl,
        { showInRecents: true }
      );

      console.log("Auth result:", JSON.stringify(result, null, 2));

      if (result.type === 'success' && result.url) {
        const url = result.url;
        console.log("Success URL:", url);

        let accessToken: string | null = null;
        let refreshToken: string | null = null;

        // Extraire les tokens depuis le fragment (#)
        const hashIndex = url.indexOf('#');
        if (hashIndex !== -1) {
          const hashParams = url.substring(hashIndex + 1);
          const params = new URLSearchParams(hashParams);
          accessToken = params.get('access_token');
          refreshToken = params.get('refresh_token');
        }

        console.log("Tokens found:", !!accessToken, !!refreshToken);

        if (accessToken && refreshToken) {
          const { error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });
          if (sessionError) throw sessionError;
          console.log("Session set successfully!");
        } else {
          console.log("Tokens not found in URL, checking session...");
          // Vérifier si la session a été créée autrement
          const { data: sessionData } = await supabase.auth.getSession();
          if (sessionData.session) {
            console.log("Session found!");
          }
        }
      } else {
        console.log("Auth was cancelled or dismissed");
      }

      return { error: null };
    } catch (error: any) {
      console.error('Google Sign-In Error:', error.message);
      Alert.alert("Erreur Google", error.message);
      return { error };
    }
  };

  const signInWithApple = async () => {
    try {
      if (Platform.OS !== 'ios') return { error: { message: 'iOS only' } };
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      const nonce = Math.random().toString(36).substring(2, 10);
      const { error } = await supabase.auth.signInWithIdToken({
        provider: 'apple',
        token: credential.identityToken!,
        nonce,
      });
      return { error };
    } catch (error: any) {
      return { error };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ session, user, loading, signUp, signIn, signInWithGoogle, signInWithApple, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
