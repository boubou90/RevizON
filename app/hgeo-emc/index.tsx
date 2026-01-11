import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Book, Map, Users, ChevronRight } from 'lucide-react-native';
import { COLORS } from '@/utils/constants';

const { width } = Dimensions.get('window');

export default function HGeoEMCMenu() {
  const router = useRouter();

  const subSubjects = [
    { 
      id: 'history_sub', 
      name: 'Histoire', 
      icon: <Book size={40} color="#E63946" />, 
      color: '#E63946',
      desc: 'Des guerres mondiales à la construction européenne.'
    },
    { 
      id: 'geography_sub', 
      name: 'Géographie', 
      icon: <Map size={40} color="#4169E1" />, 
      color: '#4169E1',
      desc: 'Aménagement du territoire et espaces productifs.'
    },
    { 
      id: 'emc_sub', 
      name: 'EMC', 
      icon: <Users size={40} color="#10B981" />, 
      color: '#10B981',
      desc: 'Valeurs de la République, citoyenneté et engagement.'
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color={COLORS.darkGray} size={24} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hist / Géo / EMC</Text>
          <Text style={styles.subtitle}>Programme de 3ème</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionHeader}>Que veux-tu réviser aujourd'hui ?</Text>
        
        {subSubjects.map((sub) => (
          <TouchableOpacity 
            key={sub.id}
            style={styles.selectionCard}
            activeOpacity={0.8}
            onPress={() => router.push({
              pathname: '/course/[subject]',
              params: { subject: sub.id }
            } as any)}
          >
            <View style={[styles.iconBox, { backgroundColor: sub.color + '15' }]}>
              {sub.icon}
            </View>
            <View style={styles.textPart}>
              <Text style={[styles.cardTitle, { color: sub.color }]}>{sub.name}</Text>
              <Text style={styles.cardDesc}>{sub.desc}</Text>
            </View>
            <ChevronRight size={20} color={COLORS.gray} />
          </TouchableOpacity>
        ))}

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Toutes les leçons sont conformes au programme officiel du Brevet des collèges.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FBFF' },
  header: { 
    paddingTop: 60, 
    paddingHorizontal: 20, 
    paddingBottom: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  backButton: { 
    width: 45, 
    height: 45, 
    borderRadius: 22.5, 
    backgroundColor: '#F1F5F9', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 15 
  },
  titleContainer: { flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.darkGray },
  subtitle: { fontSize: 14, color: COLORS.gray, fontWeight: '500' },
  content: { padding: 20, paddingTop: 30 },
  sectionHeader: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#334155', 
    marginBottom: 25,
    textAlign: 'center'
  },
  selectionCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: COLORS.white, 
    borderRadius: 24, 
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3
  },
  iconBox: { 
    width: 70, 
    height: 70, 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 18 
  },
  textPart: { flex: 1 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  cardDesc: { fontSize: 13, color: '#64748B', lineHeight: 18 },
  infoBox: { 
    marginTop: 40, 
    padding: 20, 
    backgroundColor: 'rgba(65, 105, 225, 0.05)', 
    borderRadius: 16,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: COLORS.primary + '30'
  },
  infoText: { 
    fontSize: 13, 
    color: COLORS.primary, 
    textAlign: 'center', 
    fontStyle: 'italic',
    lineHeight: 20
  },
});
