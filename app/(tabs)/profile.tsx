import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  Edit3,
  Award,
  Flame,
  Target,
  BookOpen,
  Share2,
  Crown,
  LogOut,
  Trash2,
  X,
} from 'lucide-react-native';
import * as Sharing from 'expo-sharing';
import ViewShot from 'react-native-view-shot';
import { useUser } from '@/contexts/UserContext';
import { useProgress } from '@/contexts/ProgressContext';
import { useGamification } from '@/contexts/GamificationContext';
import { usePremium } from '@/contexts/PremiumContext';
import { useAuth } from '@/contexts/AuthContext';
import { COLORS, BADGES } from '@/utils/constants';
import { ShareCard } from '@/components/ShareCard';
import { supabase } from '@/lib/supabase';

export default function ProfileScreen() {
  const router = useRouter();
  const { user } = useUser();
  const { getGlobalProgress, getTotalLessonsCompleted, getTotalQuizCompleted } =
    useProgress();
  const { gamification } = useGamification();
  const { isPremium } = usePremium();
  const { signOut } = useAuth();
  const viewShotRef = useRef<ViewShot>(null);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const globalProgress = getGlobalProgress();
  const totalLessons = getTotalLessonsCompleted();
  const totalQuizzes = getTotalQuizCompleted();

  const unlockedBadges = BADGES.filter((badge) =>
    gamification.unlockedBadges.includes(badge.id)
  );
  const lockedBadges = BADGES.filter(
    (badge) => !gamification.unlockedBadges.includes(badge.id)
  );

  const handleShare = () => {
    setShareModalVisible(true);
  };

  const captureAndShare = async (platform: string) => {
    try {
      setIsGenerating(true);
      const uri = await viewShotRef.current?.capture?.();
      if (!uri) {
        Alert.alert('Erreur', 'Impossible de générer l\'image');
        return;
      }
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert('Non disponible', 'Le partage n\'est pas disponible sur cet appareil');
        return;
      }
      await Sharing.shareAsync(uri, {
        mimeType: 'image/png',
        dialogTitle: `Partager sur ${platform}`,
      });
      setShareModalVisible(false);
    } catch (error: any) {
      Alert.alert('Erreur', 'Impossible de partager: ' + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Déconnexion',
      'Êtes-vous sûr de vouloir vous déconnecter ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Se déconnecter',
          style: 'destructive',
          onPress: async () => {
            await signOut();
            router.replace('/auth/login' as any);
          },
        },
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Supprimer mon compte',
      'ATTENTION : Cette action est irréversible. Toutes vos données de progression et vos badges seront définitivement supprimés.',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer définitivement',
          style: 'destructive',
          onPress: async () => {
            try {
              // Dans une app réelle, on appellerait une Edge Function Supabase pour supprimer l'Auth User
              // Ici on supprime les données de la table users et on déconnecte
              const { error } = await supabase.from('users').delete().eq('id', (await supabase.auth.getUser()).data.user?.id);
              if (error) throw error;
              
              await signOut();
              router.replace('/auth/login' as any);
              Alert.alert('Compte supprimé', 'Vos données ont été effacées avec succès.');
            } catch (error: any) {
              Alert.alert('Erreur', 'Impossible de supprimer le compte : ' + error.message);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mon Profil</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => router.push('/edit-profile' as any)}
        >
          <Edit3 size={20} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.profileCard}>
          <Text style={styles.avatar}>{user.avatar}</Text>
          <Text style={styles.name}>{user.name}</Text>
          {user.class && <Text style={styles.class}>Classe de {user.class}</Text>}
          {isPremium && (
            <View style={styles.premiumBadge}>
              <Crown size={16} color={COLORS.premium} />
              <Text style={styles.premiumText}>Membre Premium</Text>
            </View>
          )}
        </View>

        <View style={styles.statsGrid}>
          <View style={[styles.statItem, { backgroundColor: '#FFF3E0' }]}>
            <View style={[styles.statIconCircle, { backgroundColor: COLORS.streak }]}><Flame size={24} color={COLORS.white} /></View>
            <Text style={styles.statValue}>{gamification.streak}</Text>
            <Text style={styles.statLabel}>Série</Text>
          </View>
          <View style={[styles.statItem, { backgroundColor: '#F3E5F5' }]}>
            <View style={[styles.statIconCircle, { backgroundColor: COLORS.primary }]}><Target size={24} color={COLORS.white} /></View>
            <Text style={styles.statValue}>{gamification.dailyGoalCompleted}/{gamification.dailyGoalTotal}</Text>
            <Text style={styles.statLabel}>Objectif</Text>
          </View>
          <View style={[styles.statItem, { backgroundColor: '#E8F5E9' }]}>
            <View style={[styles.statIconCircle, { backgroundColor: COLORS.success }]}><BookOpen size={24} color={COLORS.white} /></View>
            <Text style={styles.statValue}>{totalLessons}</Text>
            <Text style={styles.statLabel}>Leçons</Text>
          </View>
          <View style={[styles.statItem, { backgroundColor: '#FFF9C4' }]}>
            <View style={[styles.statIconCircle, { backgroundColor: COLORS.badge }]}><Award size={24} color={COLORS.white} /></View>
            <Text style={styles.statValue}>{unlockedBadges.length}</Text>
            <Text style={styles.statLabel}>Badges</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Progression Globale</Text>
          <View style={styles.progressCard}>
            <View style={styles.progressBarLarge}><View style={[styles.progressBarLargeFill, { width: `${globalProgress}%` }]} /></View>
            <Text style={styles.progressPercent}>{globalProgress}%</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Share2 size={20} color={COLORS.white} />
          <Text style={styles.shareButtonText}>Partager ma progression</Text>
        </TouchableOpacity>

        {!isPremium && (
          <TouchableOpacity style={styles.premiumButton} onPress={() => router.push('/premium' as any)}>
            <Crown size={20} color={COLORS.white} />
            <Text style={styles.premiumButtonText}>Passer à Premium - 1,99€</Text>
          </TouchableOpacity>
        )}

        <View style={styles.accountActions}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <LogOut size={20} color={COLORS.error} />
            <Text style={styles.logoutButtonText}>Se déconnecter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
            <Trash2 size={18} color={COLORS.gray} />
            <Text style={styles.deleteButtonText}>Supprimer mon compte</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Modal de partage (conservé tel quel) */}
      <Modal visible={shareModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Partager</Text>
              <TouchableOpacity onPress={() => setShareModalVisible(false)}><X size={24} color={COLORS.darkGray} /></TouchableOpacity>
            </View>
            <View style={styles.previewContainer}>
              <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1.0 }}>
                <ShareCard userName={user.name} avatar={user.avatar} streak={gamification.streak} totalLessons={totalLessons} totalBadges={unlockedBadges.length} globalProgress={globalProgress} />
              </ViewShot>
            </View>
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#010101' }]} onPress={() => captureAndShare('TikTok')}><Text style={styles.socialButtonText}>TikTok</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#E4405F' }]} onPress={() => captureAndShare('Instagram')}><Text style={styles.socialButtonText}>Instagram</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setShareModalVisible(false)}><Text style={styles.cancelButtonText}>Annuler</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 60, paddingBottom: 16, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: COLORS.darkGray },
  editButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.primary + '20', justifyContent: 'center', alignItems: 'center' },
  content: { flex: 1 },
  contentContainer: { padding: 20 },
  profileCard: { backgroundColor: COLORS.white, borderRadius: 20, padding: 24, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4, marginBottom: 24 },
  avatar: { fontSize: 64, marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold', color: COLORS.darkGray, marginBottom: 4 },
  class: { fontSize: 16, color: COLORS.gray },
  premiumBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: COLORS.premium + '20', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, marginTop: 12 },
  premiumText: { fontSize: 14, fontWeight: '600', color: COLORS.premium },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  statItem: { flex: 1, minWidth: '47%', borderRadius: 16, padding: 16, alignItems: 'center', elevation: 2 },
  statIconCircle: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  statValue: { fontSize: 24, fontWeight: 'bold', color: COLORS.darkGray },
  statLabel: { fontSize: 12, color: COLORS.gray },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.darkGray, marginBottom: 16 },
  progressCard: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  progressBarLarge: { flex: 1, height: 16, backgroundColor: COLORS.lightGray, borderRadius: 8, overflow: 'hidden' },
  progressBarLargeFill: { height: '100%', backgroundColor: COLORS.success, borderRadius: 8 },
  progressPercent: { fontSize: 20, fontWeight: 'bold', color: COLORS.darkGray },
  shareButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: COLORS.primary, borderRadius: 16, padding: 16, marginBottom: 12 },
  shareButtonText: { fontSize: 16, fontWeight: '600', color: COLORS.white },
  premiumButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: COLORS.premium, borderRadius: 16, padding: 16, marginBottom: 24 },
  premiumButtonText: { fontSize: 16, fontWeight: '600', color: COLORS.white },
  accountActions: { marginTop: 20, gap: 16 },
  logoutButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: COLORS.white, borderWidth: 1.5, borderColor: COLORS.error, borderRadius: 16, padding: 16 },
  logoutButtonText: { fontSize: 16, fontWeight: '600', color: COLORS.error },
  deleteButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 10 },
  deleteButtonText: { fontSize: 14, color: COLORS.gray, textDecorationLine: 'underline' },
  bottomSpace: { height: 40 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: COLORS.white, borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, paddingBottom: 40 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  modalTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.darkGray },
  previewContainer: { alignItems: 'center', marginBottom: 20 },
  socialButtonsContainer: { gap: 12, marginBottom: 20 },
  socialButton: { padding: 16, borderRadius: 16, alignItems: 'center' },
  socialButtonText: { color: COLORS.white, fontWeight: 'bold' },
  cancelButton: { padding: 16, alignItems: 'center' },
  cancelButtonText: { color: COLORS.gray, fontWeight: '600' },
});
