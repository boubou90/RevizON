import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CheckCircle2, Trophy, Clock, BookOpen } from 'lucide-react-native';
import { COLORS } from '@/utils/constants';

interface ProgressDashboardProps {
  progress: {
    completedLessons: number[];
    quizScores: Record<number, number>;
    brevetBlanc: {
      attempts: any[];
      bestScore: number | null;
    };
  };
  totalLessons: number;
}

export default function ProgressDashboard({ progress, totalLessons }: ProgressDashboardProps) {
  const completionRate = Math.round((progress.completedLessons.length / totalLessons) * 100);
  
  // Calcul de la moyenne des quiz
  const scores = Object.values(progress.quizScores);
  const averageScore = scores.length > 0 
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) 
    : 0;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Ma Progression</Text>

      {/* Vue d'ensemble */}
      <View style={styles.statsGrid}>
        <View style={[styles.statCard, { backgroundColor: COLORS.primary + '10' }]}>
          <BookOpen size={24} color={COLORS.primary} />
          <Text style={styles.statValue}>{completionRate}%</Text>
          <Text style={styles.statLabel}>Programme</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: COLORS.success + '10' }]}>
          <Trophy size={24} color={COLORS.success} />
          <Text style={styles.statValue}>{averageScore}%</Text>
          <Text style={styles.statLabel}>Moyenne Quiz</Text>
        </View>
      </View>

      {/* Détails par compétence */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statistiques détaillées</Text>
        
        <View style={styles.detailItem}>
          <View style={styles.detailHeader}>
            <Text style={styles.detailLabel}>Leçons terminées</Text>
            <Text style={styles.detailValue}>{progress.completedLessons.length} / {totalLessons}</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${completionRate}%`, backgroundColor: COLORS.primary }]} />
          </View>
        </View>

        <View style={styles.detailItem}>
          <View style={styles.detailHeader}>
            <Text style={styles.detailLabel}>Brevet Blanc</Text>
            <Text style={styles.detailValue}>
              {progress.brevetBlanc.bestScore !== null ? `${progress.brevetBlanc.bestScore}/100` : 'Non tenté'}
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { 
              width: `${progress.brevetBlanc.bestScore || 0}%`, 
              backgroundColor: COLORS.secondary 
            }]} />
          </View>
        </View>
      </View>

      {/* Badges / Accomplissements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mes Badges</Text>
        <View style={styles.badgesContainer}>
          <View style={[styles.badge, completionRate > 0 ? styles.badgeUnlocked : styles.badgeLocked]}>
            <CheckCircle2 size={32} color={completionRate > 0 ? COLORS.success : COLORS.gray} />
            <Text style={styles.badgeText}>Débutant</Text>
          </View>
          <View style={[styles.badge, completionRate >= 50 ? styles.badgeUnlocked : styles.badgeLocked]}>
            <Clock size={32} color={completionRate >= 50 ? COLORS.warning : COLORS.gray} />
            <Text style={styles.badgeText}>Régulier</Text>
          </View>
          <View style={[styles.badge, completionRate === 100 ? styles.badgeUnlocked : styles.badgeLocked]}>
            <Trophy size={32} color={completionRate === 100 ? COLORS.primary : COLORS.gray} />
            <Text style={styles.badgeText}>Expert</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginBottom: 16,
  },
  detailItem: {
    marginBottom: 16,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: COLORS.gray,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.darkGray,
  },
  progressBar: {
    height: 8,
    backgroundColor: COLORS.lightGray,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  badge: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  badgeUnlocked: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightGray,
  },
  badgeLocked: {
    backgroundColor: COLORS.lightGray + '50',
    borderColor: 'transparent',
    opacity: 0.6,
  },
  badgeText: {
    fontSize: 12,
    marginTop: 8,
    fontWeight: '500',
    color: COLORS.darkGray,
  },
});
