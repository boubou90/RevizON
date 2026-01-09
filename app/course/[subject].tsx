import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Lock, CheckCircle, PlayCircle, ClipboardCheck } from 'lucide-react-native';
import { useProgress } from '@/contexts/ProgressContext';
import { usePremium } from '@/contexts/PremiumContext';
import { COLORS, SUBJECTS, HISTORY_SUBJECTS } from '@/utils/constants';
import { coursesData } from '@/data/coursesData';

export default function CourseScreen() {
  const router = useRouter();
  const { subject } = useLocalSearchParams();
  const { isLessonCompleted } = useProgress();
  const { canAccessLesson, canAccessQuiz, isPremium } = usePremium();

  // Chercher dans SUBJECTS et HISTORY_SUBJECTS combinés
  const allSubjects = [...SUBJECTS, ...HISTORY_SUBJECTS];
  const subjectData = allSubjects.find((s) => s.id === subject);
  const lessons = (coursesData as any)[subject as string] || [];

  // Debug: afficher les données chargées
  console.log('Subject:', subject);
  console.log('SubjectData:', subjectData);
  console.log('Lessons count:', lessons.length);
  console.log('Available keys in coursesData:', Object.keys(coursesData));

  const handleLessonPress = (lesson: any, index: number) => {
    if (!canAccessLesson(index)) {
      Alert.alert(
        'Contenu Premium 👑',
        'Cette leçon est réservée aux membres Premium. Passe à Premium pour débloquer tous les cours !',
        [
          { text: 'Plus tard', style: 'cancel' },
          {
            text: 'Voir Premium',
            onPress: () => router.push('/premium' as any),
          },
        ]
      );
      return;
    }

    router.push({
      pathname: '/lesson/[id]',
      params: {
        id: index.toString(),
        subject: subject as string,
      },
    } as any);
  };

  const handleQuizPress = () => {
    if (!canAccessQuiz()) {
      Alert.alert(
        'Contenu Premium 👑',
        'Les quiz sont réservés aux membres Premium. Passe à Premium pour tester tes connaissances !',
        [
          { text: 'Plus tard', style: 'cancel' },
          {
            text: 'Voir Premium',
            onPress: () => router.push('/premium' as any),
          },
        ]
      );
      return;
    }

    router.push({
      pathname: '/quiz/[subject]',
      params: { subject: subject as string },
    } as any);
  };

  const handleBrevetPress = () => {
    if (!isPremium) {
      Alert.alert(
        'Contenu Premium 👑',
        'Les examens blancs sont réservés aux membres Premium. Prépare-toi dans les conditions réelles !',
        [
          { text: 'Plus tard', style: 'cancel' },
          {
            text: 'Voir Premium',
            onPress: () => router.push('/premium' as any),
          },
        ]
      );
      return;
    }

    router.push(`/brevet-blanc/${subject}` as any);
  };

  if (!subjectData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View
        style={[styles.header, { backgroundColor: subjectData.color + '20' }]}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={COLORS.darkGray} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerIcon}>{subjectData.icon}</Text>
          <Text style={styles.headerTitle}>{subjectData.name}</Text>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Leçons</Text>
          {lessons.map((lesson: any, index: number) => {
            const isCompleted = isLessonCompleted(subject as string, lesson.id);
            const canAccess = canAccessLesson(index);

            return (
              <TouchableOpacity
                key={lesson.id}
                style={[
                  styles.lessonCard,
                  !canAccess && styles.lessonCardLocked,
                ]}
                onPress={() => handleLessonPress(lesson, index)}
              >
                <View
                  style={[
                    styles.lessonNumber,
                    { backgroundColor: subjectData.color },
                    !canAccess && styles.lessonNumberLocked,
                    isCompleted && styles.lessonNumberCompleted,
                  ]}
                >
                  {!canAccess ? (
                    <Lock size={16} color={COLORS.white} />
                  ) : isCompleted ? (
                    <CheckCircle size={16} color={COLORS.white} />
                  ) : (
                    <Text style={styles.lessonNumberText}>{index + 1}</Text>
                  )}
                </View>

                <View style={styles.lessonInfo}>
                  <Text
                    style={[
                      styles.lessonTitle,
                      !canAccess && styles.lessonTitleLocked,
                    ]}
                  >
                    {lesson.title}
                  </Text>
                  {!canAccess && (
                    <View style={styles.premiumBadge}>
                      <Text style={styles.premiumBadgeText}>
                        👑 Premium
                      </Text>
                    </View>
                  )}
                  {isCompleted && canAccess && (
                    <Text style={styles.completedText}>✓ Complétée</Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quiz</Text>
          <TouchableOpacity
            style={[
              styles.quizCard,
              !isPremium && styles.quizCardLocked,
            ]}
            onPress={handleQuizPress}
          >
            <View
              style={[
                styles.quizIcon,
                { backgroundColor: subjectData.color },
              ]}
            >
              {isPremium ? (
                <PlayCircle size={32} color={COLORS.white} />
              ) : (
                <Lock size={32} color={COLORS.white} />
              )}
            </View>
            <View style={styles.quizInfo}>
              <Text style={styles.quizTitle}>
                Quiz de {subjectData.name}
              </Text>
              <Text style={styles.quizDescription}>
                {isPremium
                  ? 'Teste tes connaissances avec ce quiz'
                  : 'Quiz réservé aux membres Premium 👑'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* SECTION BREVET BLANC - SPÉCIFIQUE AU FRANÇAIS POUR L'INSTANT */}
        {subject === 'french' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Entraînement Examen</Text>
            <TouchableOpacity
              style={[
                styles.brevetCard,
                !isPremium && styles.brevetCardLocked,
              ]}
              onPress={handleBrevetPress}
            >
              <View
                style={[
                  styles.brevetIcon,
                  { backgroundColor: COLORS.secondary },
                ]}
              >
                {isPremium ? (
                  <ClipboardCheck size={32} color={COLORS.white} />
                ) : (
                  <Lock size={32} color={COLORS.white} />
                )}
              </View>
              <View style={styles.brevetInfo}>
                <Text style={styles.brevetTitle}>Brevet Blanc complet</Text>
                <Text style={styles.brevetDescription}>
                  {isPremium 
                    ? 'Épreuve réelle simulée (3h)' 
                    : 'Examen réservé aux membres Premium 👑'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 16,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  lessonCardLocked: {
    opacity: 0.6,
  },
  lessonNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  lessonNumberLocked: {
    backgroundColor: COLORS.gray,
  },
  lessonNumberCompleted: {
    backgroundColor: COLORS.success,
  },
  lessonNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  lessonInfo: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  lessonTitleLocked: {
    color: COLORS.gray,
  },
  premiumBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.premium + '20',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  premiumBadgeText: {
    fontSize: 12,
    color: COLORS.premium,
    fontWeight: '600',
  },
  completedText: {
    fontSize: 12,
    color: COLORS.success,
    fontWeight: '600',
  },
  quizCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  quizCardLocked: {
    opacity: 0.7,
  },
  quizIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  quizInfo: {
    flex: 1,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  quizDescription: {
    fontSize: 14,
    color: COLORS.gray,
  },
  brevetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: COLORS.secondary + '20',
  },
  brevetCardLocked: {
    opacity: 0.7,
  },
  brevetIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  brevetInfo: {
    flex: 1,
  },
  brevetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  brevetDescription: {
    fontSize: 14,
    color: COLORS.gray,
  },
});
