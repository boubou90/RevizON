import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, ClipboardCheck, GraduationCap } from 'lucide-react-native';
import { COLORS, SUBJECTS } from '@/utils/constants';

export default function BrevetMenuScreen() {
  const router = useRouter();

  // On filtre les matières qui ont un brevet blanc disponible (pour l'instant FR et MATH)
  const availableBrevetSubjects = SUBJECTS.filter(s => ['french', 'math'].includes(s.id));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color={COLORS.darkGray} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Simulateur Brevet</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <GraduationCap size={40} color={COLORS.primary} />
          <Text style={styles.infoTitle}>Prêt pour l'examen ?</Text>
          <Text style={styles.infoText}>
            Choisissez une matière pour lancer une épreuve blanche de 2h ou 3h dans les conditions réelles du Brevet.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Matières disponibles</Text>
        
        {availableBrevetSubjects.map((subject) => (
          <TouchableOpacity 
            key={subject.id}
            style={styles.subjectCard}
            onPress={() => router.push(`/brevet-blanc/${subject.id}` as any)}
          >
            <View style={[styles.iconCircle, { backgroundColor: subject.color + '20' }]}>
              <Text style={styles.subjectEmoji}>{subject.icon}</Text>
            </View>
            <View style={styles.subjectInfo}>
              <Text style={styles.subjectName}>{subject.name}</Text>
              <Text style={styles.subjectMeta}>
                {subject.id === 'french' ? '3 heures • 100 points' : '2 heures • 100 points'}
              </Text>
            </View>
            <ClipboardCheck size={20} color={COLORS.gray} />
          </TouchableOpacity>
        ))}

        {/* Matières à venir */}
        <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Bientôt disponible</Text>
        <View style={styles.lockedCard}>
          <Text style={styles.lockedText}>Histoire-Géo, SVT & Physique</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.darkGray },
  content: { padding: 20 },
  infoCard: {
    backgroundColor: COLORS.primary + '10',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  infoTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.primary, marginTop: 12 },
  infoText: { fontSize: 14, color: COLORS.gray, textAlign: 'center', marginTop: 8, lineHeight: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.darkGray, marginBottom: 15 },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  subjectEmoji: { fontSize: 24 },
  subjectInfo: { flex: 1 },
  subjectName: { fontSize: 16, fontWeight: 'bold', color: COLORS.darkGray },
  subjectMeta: { fontSize: 12, color: COLORS.gray, marginTop: 2 },
  lockedCard: {
    padding: 20,
    backgroundColor: COLORS.lightGray + '50',
    borderRadius: 12,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: COLORS.gray,
    alignItems: 'center',
  },
  lockedText: { color: COLORS.gray, fontSize: 14, fontStyle: 'italic' },
});
