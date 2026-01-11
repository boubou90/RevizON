import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SUBJECTS } from '@/utils/constants';
import { Award, Flame, Target, BookOpen } from 'lucide-react-native';

interface ShareCardProps {
  userName: string;
  avatar: string;
  streak: number;
  totalLessons: number;
  totalBadges: number;
  globalProgress: number;
}

export const ShareCard = ({
  userName,
  avatar,
  streak,
  totalLessons,
  totalBadges,
  globalProgress,
}: ShareCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Collège Révisions</Text>
        <Text style={styles.subtitle}>Mon Progrès</Text>
      </View>

      <View style={styles.profileSection}>
        <Text style={styles.avatar}>{avatar}</Text>
        <Text style={styles.name}>{userName}</Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Progression Globale</Text>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressBarFill, { width: `${globalProgress}%` }]}
          />
        </View>
        <Text style={styles.progressPercent}>{globalProgress}%</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <View style={[styles.statIcon, { backgroundColor: COLORS.streak }]}>
            <Flame size={24} color={COLORS.white} />
          </View>
          <Text style={styles.statValue}>{streak}</Text>
          <Text style={styles.statLabel}>Jours de série</Text>
        </View>

        <View style={styles.statBox}>
          <View
            style={[styles.statIcon, { backgroundColor: COLORS.success }]}
          >
            <BookOpen size={24} color={COLORS.white} />
          </View>
          <Text style={styles.statValue}>{totalLessons}</Text>
          <Text style={styles.statLabel}>Leçons complétées</Text>
        </View>

        <View style={styles.statBox}>
          <View style={[styles.statIcon, { backgroundColor: COLORS.badge }]}>
            <Award size={24} color={COLORS.white} />
          </View>
          <Text style={styles.statValue}>{totalBadges}</Text>
          <Text style={styles.statLabel}>Badges débloqués</Text>
        </View>
      </View>

      <View style={styles.subjectsContainer}>
        <Text style={styles.subjectsTitle}>Matières étudiées</Text>
        <View style={styles.subjectsGrid}>
          {SUBJECTS.map((subject) => (
            <View key={subject.id} style={styles.subjectChip}>
              <Text style={styles.subjectIcon}>{subject.icon}</Text>
              <Text style={styles.subjectName}>{subject.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>🎓 Rejoins-moi sur Collège Révisions!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
    fontWeight: '600',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    fontSize: 64,
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.darkGray,
  },
  progressContainer: {
    marginBottom: 24,
    backgroundColor: COLORS.lightGray,
    borderRadius: 16,
    padding: 16,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginBottom: 8,
    textAlign: 'center',
  },
  progressBar: {
    height: 12,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.success,
    borderRadius: 6,
  },
  progressPercent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    color: COLORS.gray,
    textAlign: 'center',
  },
  subjectsContainer: {
    marginBottom: 20,
  },
  subjectsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginBottom: 12,
    textAlign: 'center',
  },
  subjectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  subjectChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4,
  },
  subjectIcon: {
    fontSize: 14,
  },
  subjectName: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.darkGray,
  },
  footer: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
