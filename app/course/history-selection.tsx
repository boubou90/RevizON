import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, BookOpen } from 'lucide-react-native';
import { COLORS } from '@/utils/constants';

const historySubjects = [
  {
    id: 'histoire',
    name: 'Histoire',
    icon: '📜',
    color: '#8B4513',
    description: 'De la Préhistoire à nos jours'
  },
  {
    id: 'geographie',
    name: 'Géographie',
    icon: '🌍',
    color: '#4CAF50',
    description: 'Le monde et ses territoires'
  },
  {
    id: 'emc',
    name: 'EMC',
    icon: '🗳️',
    color: '#2196F3',
    description: 'Éducation Morale et Civique'
  }
];

export default function HistorySelectionScreen() {
  const router = useRouter();

  const handleSubjectPress = (subjectId: string) => {
    router.push({
      pathname: '/course/[subject]',
      params: { subject: subjectId },
    } as any);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={COLORS.darkGray} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Histoire-Géographie-EMC</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.introSection}>
          <Text style={styles.introTitle}>Choisis ta matière</Text>
          <Text style={styles.introText}>
            Sélectionne la matière que tu souhaites réviser
          </Text>
        </View>

        <View style={styles.subjectsContainer}>
          {historySubjects.map((subject) => (
            <TouchableOpacity
              key={subject.id}
              style={[styles.subjectCard, { borderLeftColor: subject.color }]}
              onPress={() => handleSubjectPress(subject.id)}
              activeOpacity={0.7}
            >
              <View style={styles.subjectIconContainer}>
                <Text style={styles.subjectIcon}>{subject.icon}</Text>
              </View>
              <View style={styles.subjectInfo}>
                <Text style={styles.subjectName}>{subject.name}</Text>
                <Text style={styles.subjectDescription}>{subject.description}</Text>
              </View>
              <View style={[styles.subjectArrow, { backgroundColor: subject.color }]}>
                <Text style={styles.arrowText}>→</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoBox}>
          <BookOpen size={20} color={COLORS.primary} />
          <Text style={styles.infoText}>
            Ces trois matières font partie du tronc commun et sont évaluées au Brevet.
          </Text>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  introSection: {
    marginBottom: 32,
  },
  introTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 8,
  },
  introText: {
    fontSize: 16,
    color: COLORS.gray,
    lineHeight: 24,
  },
  subjectsContainer: {
    gap: 16,
    marginBottom: 24,
  },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  subjectIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  subjectIcon: {
    fontSize: 32,
  },
  subjectInfo: {
    flex: 1,
  },
  subjectName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  subjectDescription: {
    fontSize: 14,
    color: COLORS.gray,
  },
  subjectArrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary + '10',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.darkGray,
    lineHeight: 20,
  },
});
