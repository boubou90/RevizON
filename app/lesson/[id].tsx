import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, CheckCircle, FileQuestion } from 'lucide-react-native';
import { useProgress } from '@/contexts/ProgressContext';
import { useGamification } from '@/contexts/GamificationContext';
import { COLORS, SUBJECTS, HISTORY_SUBJECTS } from '@/utils/constants';
import { coursesData } from '@/data/coursesData';
import { quizzesDataByLesson } from '@/data/index';

export default function LessonScreen() {
  const router = useRouter();
  const { id, subject } = useLocalSearchParams();
  const { markLessonComplete, getTotalLessonsCompleted, progress } = useProgress();
  const { incrementDailyGoal, checkLessonBadges, checkMultiSubjectBadge } =
    useGamification();
  const [hasCompleted, setHasCompleted] = useState(false);

  const lessonId = parseInt(id as string);
  // Chercher dans SUBJECTS et HISTORY_SUBJECTS combinés
  const allSubjects = [...SUBJECTS, ...HISTORY_SUBJECTS];
  const subjectData = allSubjects.find((s) => s.id === subject);
  const lesson = (coursesData as any)[subject as string]?.[lessonId];

  // Vérifier si un quiz existe pour cette leçon
  const quizzes = (quizzesDataByLesson as any)[subject as string];
  const hasQuiz = quizzes?.some((q: any) => q.lessonId === lessonId);

  if (!lesson || !subjectData) {
    return null;
  }

  const handleStartQuiz = () => {
    router.push(`/lesson-quiz/${subject}/${lessonId}` as any);
  };

  const handleComplete = async () => {
    const wasNew = await markLessonComplete(subject as string, lesson.id);

    if (wasNew) {
      await incrementDailyGoal();
      const totalLessons = getTotalLessonsCompleted() + 1;
      checkLessonBadges(totalLessons);
      checkMultiSubjectBadge(progress);

      setHasCompleted(true);
      Alert.alert(
        'Bravo ! 🎉',
        'Leçon complétée avec succès. Continue comme ça !',
        [
          {
            text: 'Retour aux cours',
            onPress: () => router.back(),
          },
        ]
      );
    } else {
      router.back();
    }
  };

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
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>{lesson.title}</Text>

        <View style={styles.section}>
          <Text style={styles.content}>{lesson.content}</Text>
        </View>

        {lesson.keyPoints && lesson.keyPoints.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Points Clés 🔑</Text>
            {lesson.keyPoints.map((point: string, index: number) => (
              <View key={index} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{point}</Text>
              </View>
            ))}
          </View>
        )}

        {lesson.examples && lesson.examples.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Exemples 📝</Text>
            {lesson.examples.map((example: string, index: number) => (
              <View key={index} style={styles.exampleCard}>
                <Text style={styles.exampleText}>{example}</Text>
              </View>
            ))}
          </View>
        )}

        {hasQuiz && (
          <TouchableOpacity
            style={[
              styles.quizButton,
              { backgroundColor: subjectData.color + '20', borderColor: subjectData.color },
            ]}
            onPress={handleStartQuiz}
          >
            <FileQuestion size={20} color={subjectData.color} />
            <Text style={[styles.quizButtonText, { color: subjectData.color }]}>
              Faire le quiz de cette leçon
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            styles.completeButton,
            { backgroundColor: subjectData.color },
            hasCompleted && styles.completeButtonDisabled,
          ]}
          onPress={handleComplete}
          disabled={hasCompleted}
        >
          <CheckCircle size={20} color={COLORS.white} />
          <Text style={styles.completeButtonText}>
            {hasCompleted ? 'Leçon complétée !' : 'J\'ai compris'}
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />
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
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 12,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    color: COLORS.primary,
    marginRight: 8,
    fontWeight: 'bold',
  },
  bulletText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.darkGray,
    lineHeight: 24,
  },
  exampleCard: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  exampleText: {
    fontSize: 16,
    color: COLORS.darkGray,
    lineHeight: 24,
  },
  quizButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 16,
    padding: 18,
    marginTop: 12,
    borderWidth: 2,
  },
  quizButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 16,
    padding: 18,
    marginTop: 12,
  },
  completeButtonDisabled: {
    opacity: 0.6,
  },
  completeButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  bottomSpace: {
    height: 40,
  },
});
