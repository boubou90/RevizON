import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Chrome as Google } from 'lucide-react-native'; // Utilisation d'une icône Lucide pour éviter le crash
import { useAuth } from '@/contexts/AuthContext';
import { COLORS } from '@/utils/constants';

export default function LoginScreen() {
  const router = useRouter();
  const { signIn, signInWithGoogle, signInWithApple } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);

    if (error) {
      Alert.alert('Erreur de connexion', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await signInWithGoogle();
    setLoading(false);

    if (error) {
      Alert.alert('Erreur', error.message);
    }
  };

  const handleAppleSignIn = async () => {
    setLoading(true);
    const { error } = await signInWithApple();
    setLoading(false);

    if (error) {
      Alert.alert('Erreur', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <LinearGradient
        colors={[COLORS.primary, '#6B8FFF']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.logo}>🎓</Text>
        <Text style={styles.title}>RéviZON</Text>
        <Text style={styles.subtitle}>Prépare ton Brevet sereinement</Text>
      </LinearGradient>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          editable={!loading}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!loading}
        />

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.white} />
          ) : (
            <Text style={styles.buttonText}>Se connecter</Text>
          )}
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OU</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity
          style={styles.googleButtonStyle}
          onPress={handleGoogleSignIn}
          disabled={loading}
        >
          <View style={styles.googleContent}>
            <Google color="#4285F4" size={24} />
            <Text style={styles.googleButtonText}>Continuer avec Google</Text>
          </View>
        </TouchableOpacity>

        {Platform.OS === 'ios' && (
          <TouchableOpacity
            style={[styles.socialButton, styles.appleButton]}
            onPress={handleAppleSignIn}
            disabled={loading}
          >
            <Text style={[styles.socialButtonText, styles.appleButtonText]}>
              🍎 Continuer avec Apple
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => router.push('/auth/signup' as any)}
          disabled={loading}
        >
          <Text style={styles.linkText}>
            Pas encore de compte ?{' '}
            <Text style={styles.linkTextBold}>Inscris-toi</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: { paddingTop: 80, paddingBottom: 60, paddingHorizontal: 20, alignItems: 'center' },
  logo: { fontSize: 72, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: COLORS.white, marginBottom: 8 },
  subtitle: { fontSize: 16, color: COLORS.white, opacity: 0.9 },
  form: { flex: 1, padding: 24, marginTop: -30, backgroundColor: COLORS.white, borderTopLeftRadius: 35, borderTopRightRadius: 35 },
  input: { backgroundColor: '#F8FAFC', borderRadius: 16, padding: 18, marginBottom: 16, fontSize: 16, borderWidth: 1, borderColor: '#E2E8F0' },
  button: { backgroundColor: COLORS.primary, borderRadius: 16, padding: 18, alignItems: 'center', marginTop: 8, elevation: 4 },
  buttonDisabled: { opacity: 0.6 },
  buttonText: { color: COLORS.white, fontSize: 16, fontWeight: '700' },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: 30 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#E2E8F0' },
  dividerText: { marginHorizontal: 16, color: '#94A3B8', fontSize: 14, fontWeight: '600' },
  googleButtonStyle: { backgroundColor: COLORS.white, borderRadius: 30, padding: 14, borderWidth: 1.5, borderColor: '#E2E8F0', elevation: 2, marginBottom: 12 },
  googleContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 },
  googleButtonText: { fontSize: 16, fontWeight: '600', color: '#334155' },
  socialButton: { borderRadius: 30, padding: 16, alignItems: 'center', marginBottom: 12 },
  appleButton: { backgroundColor: COLORS.black },
  socialButtonText: { fontSize: 16, fontWeight: '600', color: COLORS.white },
  appleButtonText: { color: COLORS.white },
  linkButton: { marginTop: 30, alignItems: 'center' },
  linkText: { fontSize: 14, color: '#64748B' },
  linkTextBold: { color: COLORS.primary, fontWeight: '700' },
});
