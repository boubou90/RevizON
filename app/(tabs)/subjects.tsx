import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { useProgress } from '@/contexts/ProgressContext';
import { COLORS, SUBJECTS } from '@/utils/constants';
import { coursesData } from '@/data/coursesData';

export default function SubjectsScreen() {
  const router = useRouter();
  const { getSubjectProgress, progress } = useProgress();

  const handleSubjectPress = (subjectId: string) => {
    if (subjectId === 'history') {
      // Redirection vers le menu spécial Hist/Géo/EMC
      router.push('/course/history-selection' as any);
    } else {
      // Navigation standard
      router.push({
        pathname: '/course/[subject]',
        params: { subject: subjectId },
      } as any);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mes Matières</Text>
        <Text style={styles.headerSubtitle}>
          Choisis une matière pour commencer à réviser
        </Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {SUBJECTS.map((subject) => {
          const subjectProgress = getSubjectProgress(subject.id);
          const totalLessons = (coursesData as any)[subject.id]?.length || 0;
          const completedLessons =
            (progress as any)[subject.id]?.completedLessons.length || 0;

          return (
            <TouchableOpacity
              key={subject.id}
              style={styles.subjectCard}
              onPress={() => handleSubjectPress(subject.id)}
            >
              <View
                style={[
                  styles.subjectIconContainer,
                  { backgroundColor: subject.color + '20' },
                ]}
              >
                <Text style={styles.subjectIcon}>{subject.icon}</Text>
              </View>

              <View style={styles.subjectInfo}>
                <Text style={styles.subjectTitle}>{subject.name}</Text>
                <Text style={styles.subjectStats}>
                  {completedLessons}/{totalLessons} leçons complétées
                </Text>

                <View style={styles.progressBarContainer}>
                  <View style={styles.progressBarBg}>
                    <View
                      style={[
                        styles.progressBarFill,
                        {
                          width: `${subjectProgress}%`,
                          backgroundColor: subject.color,
                        },
                      ]}
                    />
                  </View>
                  <Text
                    style={[styles.progressText, { color: subject.color }]}
                  >
                    {subjectProgress}%
                  </Text>
                </View>
              </View>

              <ChevronRight size={24} color={COLORS.gray} />
            </TouchableOpacity>
          );
        })}
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
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.gray,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    gap: 16,
  },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  subjectIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  subjectIcon: {
    fontSize: 32,
  },
  subjectInfo: {
    flex: 1,
    marginRight: 12,
  },
  subjectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  subjectStats: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 12,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: COLORS.lightGray,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    minWidth: 40,
    textAlign: 'right',
  },
});
