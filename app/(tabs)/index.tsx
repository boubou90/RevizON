import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Flame, Target, Trophy, ClipboardCheck, Star } from 'lucide-react-native';
import { useUser } from '@/contexts/UserContext';
import { useProgress } from '@/contexts/ProgressContext';
import { useGamification } from '@/contexts/GamificationContext';
import { usePremium } from '@/contexts/PremiumContext';
import { COLORS, SUBJECTS } from '@/utils/constants';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const { user } = useUser();
  const { getGlobalProgress, getTotalLessonsCompleted, getTotalQuizCompleted } =
    useProgress();
  const { gamification } = useGamification();
  const { isPremium } = usePremium();

  const globalProgress = getGlobalProgress();
  const totalLessons = getTotalLessonsCompleted();
  const totalQuizzes = getTotalQuizCompleted();

  const handleSubjectPress = (subjectId: string) => {
    if (subjectId === 'history') {
      // Redirection vers le menu spécial Hist/Géo/EMC
      router.push('/course/history-selection' as any);
    } else {
      // Navigation standard
      router.push(`/course/${subjectId}` as any);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[COLORS.primary, '#6B8FFF']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Bonjour,</Text>
            <Text style={styles.userName}>{user.name} {user.avatar}</Text>
            {isPremium && (
              <View style={styles.premiumBadge}>
                <Text style={styles.premiumText}>👑 Premium</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>Progression Globale</Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarBg}>
              <View
                style={[styles.progressBarFill, { width: `${globalProgress}%` }]}
              />
            </View>
            <Text style={styles.progressPercent}>{globalProgress}%</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        
        <TouchableOpacity 
          style={styles.bigBrevetButton}
          onPress={() => router.push('/brevet-blanc' as any)}
        >
          <LinearGradient
            colors={['#FF8C00', '#FF4500']}
            style={styles.brevetGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.brevetIconCircle}>
              <ClipboardCheck size={28} color="#FF4500" />
            </View>
            <View style={styles.brevetTextContainer}>
              <Text style={styles.brevetMainTitle}>ENTRAÎNEMENT BREVET</Text>
              <Text style={styles.brevetSubTitle}>Épreuves blanches • Fr, Maths, SVT...</Text>
            </View>
            <Star size={20} color="#FFF" fill="#FFF" />
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: '#FFF3E0' }]}>
            <View style={[styles.statIcon, { backgroundColor: COLORS.streak }]}>
              <Flame size={24} color={COLORS.white} />
            </View>
            <Text style={styles.statValue}>{gamification.streak}</Text>
            <Text style={styles.statLabel}>Jours</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: '#F3E5F5' }]}>
            <View style={[styles.statIcon, { backgroundColor: COLORS.primary }]}>
              <Target size={24} color={COLORS.white} />
            </View>
            <Text style={styles.statValue}>
              {gamification.dailyGoalCompleted}/{gamification.dailyGoalTotal}
            </Text>
            <Text style={styles.statLabel}>Objectif</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: '#FFF9C4' }]}>
            <View style={[styles.statIcon, { backgroundColor: COLORS.badge }]}>
              <Trophy size={24} color={COLORS.white} />
            </View>
            <Text style={styles.statValue}>{gamification.unlockedBadges.length}</Text>
            <Text style={styles.statLabel}>Badges</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mes Matières</Text>
          <View style={styles.subjectsGrid}>
            {SUBJECTS.map((subject) => (
              <TouchableOpacity
                key={subject.id}
                style={[
                  styles.subjectCard,
                  { backgroundColor: subject.color + '15' },
                ]}
                onPress={() => handleSubjectPress(subject.id)}
              >
                <Text style={styles.subjectIcon}>{subject.icon}</Text>
                <Text style={styles.subjectName}>{subject.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {!isPremium && (
          <TouchableOpacity
            style={styles.premiumCard}
            onPress={() => router.push('/premium' as any)}
          >
            <LinearGradient
              colors={['#FFD700', '#FFA500']}
              style={styles.premiumGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.premiumCardIcon}>👑</Text>
              <Text style={styles.premiumCardTitle}>Passe à Premium !</Text>
              <Text style={styles.premiumCardText}>
                Débloque tous les cours et quiz pour seulement 1,99€
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: { paddingTop: 60, paddingBottom: 100, paddingHorizontal: 20 },
  headerContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 30 },
  greeting: { fontSize: 16, color: COLORS.white, opacity: 0.9 },
  userName: { fontSize: 28, fontWeight: 'bold', color: COLORS.white, marginTop: 4 },
  premiumBadge: { backgroundColor: 'rgba(255, 255, 255, 0.3)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 8, alignSelf: 'flex-start' },
  premiumText: { color: COLORS.white, fontWeight: '600', fontSize: 12 },
  progressCard: { backgroundColor: COLORS.white, borderRadius: 16, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  progressTitle: { fontSize: 16, fontWeight: '600', color: COLORS.darkGray, marginBottom: 12 },
  progressBarContainer: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  progressBarBg: { flex: 1, height: 12, backgroundColor: COLORS.lightGray, borderRadius: 6, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: COLORS.success, borderRadius: 6 },
  progressPercent: { fontSize: 18, fontWeight: 'bold', color: COLORS.darkGray, minWidth: 50, textAlign: 'right' },
  content: { padding: 20, marginTop: -60 },
  bigBrevetButton: { borderRadius: 16, marginBottom: 24, overflow: 'hidden', shadowColor: '#FF4500', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 10, elevation: 8 },
  brevetGradient: { flexDirection: 'row', alignItems: 'center', padding: 20, gap: 16 },
  brevetIconCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center' },
  brevetTextContainer: { flex: 1 },
  brevetMainTitle: { color: COLORS.white, fontSize: 18, fontWeight: 'bold', letterSpacing: 1 },
  brevetSubTitle: { color: COLORS.white, fontSize: 12, opacity: 0.9, marginTop: 2 },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  statCard: { flex: 1, borderRadius: 16, padding: 16, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  statIcon: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  statValue: { fontSize: 22, fontWeight: 'bold', color: COLORS.darkGray, marginBottom: 2 },
  statLabel: { fontSize: 10, color: COLORS.gray, textAlign: 'center' },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.darkGray, marginBottom: 16 },
  subjectsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  subjectCard: { width: (width - 52) / 2, borderRadius: 16, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  subjectIcon: { fontSize: 48, marginBottom: 12 },
  subjectName: { fontSize: 14, fontWeight: '600', color: COLORS.darkGray, textAlign: 'center' },
  premiumCard: { marginTop: 12, marginBottom: 20 },
  premiumGradient: { borderRadius: 16, padding: 24, alignItems: 'center' },
  premiumCardIcon: { fontSize: 48, marginBottom: 12 },
  premiumCardTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.white, marginBottom: 8 },
  premiumCardText: { fontSize: 14, color: COLORS.white, textAlign: 'center', opacity: 0.9 },
});
