import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Clock, Save, Send, BookOpen, PenTool, Code } from 'lucide-react-native';
import { COLORS, SUBJECTS } from '@/utils/constants';
import { brevetExams } from '@/data/brevet.data';
import { useProgress } from '@/contexts/ProgressContext';
import DicteePlayer from '@/components/DicteePlayer';

export default function BrevetBlancScreen() {
  const { subject } = useLocalSearchParams();
  const router = useRouter();
  const { saveBrevetAttempt } = useProgress();
  
  const exam = brevetExams[subject as string];
  const subjectData = SUBJECTS.find(s => s.id === subject);

  const [timeLeft, setTimeLeft] = useState(exam?.duration || 0);
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState<Record<string, string>>({});

  useEffect(() => {
    if (timeLeft <= 0) {
      handleAutoSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const handleAutoSubmit = () => {
    Alert.alert("Temps écoulé", "Votre copie a été ramassée automatiquement.");
    finishExam();
  };

  const onBackPress = () => {
    if (Object.keys(responses).length > 0) {
      Alert.alert(
        "Abandonner ?",
        "Votre progression sur ce brevet sera perdue.",
        [
          { text: "Continuer l'épreuve", style: "cancel" },
          { text: "Quitter", style: "destructive", onPress: () => router.back() }
        ]
      );
    } else {
      router.back();
    }
  };

  const finishExam = () => {
    const simulatedScore = Math.floor(Math.random() * 40) + 60; 
    saveBrevetAttempt(simulatedScore);
    router.replace('/(tabs)/profile');
  };

  if (!exam || !subjectData) return null;

  const section = exam.sections[currentSection];

  return (
    <View style={styles.container}>
      {/* Header avec zone de clic élargie pour le retour */}
      <View style={[styles.header, { backgroundColor: subjectData.color }]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            onPress={onBackPress} 
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <ArrowLeft color={COLORS.white} size={28} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.timerContainer}>
          <Clock color={COLORS.white} size={20} />
          <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.sectionTabs}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {exam.sections.map((sec, index) => (
            <TouchableOpacity 
              key={sec.id}
              style={[styles.tab, currentSection === index && { backgroundColor: subjectData.color + '20' }]}
              onPress={() => setCurrentSection(index)}
            >
              <Text style={[styles.tabText, currentSection === index && { color: subjectData.color }]}>
                {subject === 'math' ? `Exo ${index + 1}` : `Partie ${index + 1}`}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.pointsLabel}>{section.points} points</Text>
        </View>

        {section.context && (
          <View style={styles.contextContainer}>
            <Text style={styles.contextText}>{section.context}</Text>
          </View>
        )}

        {section.algorithm && (
          <View style={styles.algoContainer}>
            <View style={styles.algoHeader}>
              <Code size={18} color={COLORS.darkGray} />
              <Text style={styles.algoTitle}>Algorithme</Text>
            </View>
            <Text style={styles.algoText}>{section.algorithm}</Text>
          </View>
        )}

        {section.id === 'comprehension' && exam.text && (
          <View style={styles.textContainer}>
            <View style={styles.textHeader}>
              <BookOpen size={20} color={COLORS.primary} />
              <Text style={styles.textTitle}>{exam.text.title}</Text>
            </View>
            <Text style={styles.textContent}>{exam.text.content}</Text>
            <Text style={styles.textAuthor}>— {exam.text.author}</Text>
          </View>
        )}

        {section.questions?.map((q: any) => (
          <View key={q.id} style={styles.questionCard}>
            <Text style={styles.questionText}>
              {q.id.toString().includes('exo') ? '' : `${q.id}. `}{q.question}
            </Text>
            <Text style={styles.questionPoints}>({q.points} pts)</Text>
            {q.hint && <Text style={styles.hintText}>💡 Aide : {q.hint}</Text>}
            <TextInput
              style={styles.textInput}
              placeholder="Votre réponse..."
              multiline
              value={responses[`${section.id}_${q.id}`]}
              onChangeText={(text) => setResponses({...responses, [`${section.id}_${q.id}`]: text})}
            />
          </View>
        ))}

        {section.id === 'dictee' && (
          <View style={styles.dicteeContainer}>
            <DicteePlayer text={section.text} />
            <Text style={styles.instructions}>{section.instructions}</Text>
            <TextInput
              style={[styles.textInput, { height: 200, marginTop: 20 }]}
              placeholder="Écrivez la dictée ici..."
              multiline
              value={responses['dictee']}
              onChangeText={(text) => setResponses({...responses, 'dictee': text})}
            />
          </View>
        )}

        {section.id === 'redaction' && section.subjects?.map((s: any) => (
          <View key={s.id} style={styles.subjectCard}>
            <View style={styles.subjectHeader}>
              <PenTool size={20} color={COLORS.secondary} />
              <Text style={styles.subjectTitle}>{s.title}</Text>
            </View>
            <Text style={styles.subjectText}>{s.text}</Text>
            <View style={styles.criteriaContainer}>
              <Text style={styles.criteriaTitle}>Critères :</Text>
              {s.criteria.map((c: string, i: number) => (
                <Text key={i} style={styles.criteriaItem}>• {c}</Text>
              ))}
            </View>
            <TextInput
              style={[styles.textInput, { height: 300, marginTop: 20 }]}
              placeholder="Rédigez ici..."
              multiline
              value={responses[s.id]}
              onChangeText={(text) => setResponses({...responses, [s.id]: text})}
            />
          </View>
        ))}

        <View style={styles.bottomSpacer} />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={[styles.submitButton, { backgroundColor: subjectData.color }]}
          onPress={() => {
            Alert.alert(
              "Terminer",
              "Voulez-vous vraiment rendre votre copie ?",
              [
                { text: "Continuer", style: "cancel" },
                { text: "Rendre la copie", onPress: finishExam }
              ]
            );
          }}
        >
          <Send color={COLORS.white} size={20} />
          <Text style={styles.submitText}>Terminer l'épreuve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: { 
    paddingTop: 50, 
    paddingBottom: 15, 
    paddingHorizontal: 15, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    zIndex: 10
  },
  headerLeft: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  backButton: { 
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.25)', padding: 10, paddingHorizontal: 15, borderRadius: 20, gap: 8 },
  timerText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 },
  sectionTabs: { flexDirection: 'row', padding: 10, backgroundColor: COLORS.lightGray + '50' },
  tab: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12, alignItems: 'center', backgroundColor: COLORS.white, marginRight: 8 },
  tabText: { color: COLORS.gray, fontWeight: '600', fontSize: 13 },
  content: { flex: 1, padding: 20 },
  sectionHeader: { marginBottom: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.darkGray },
  pointsLabel: { color: COLORS.primary, fontWeight: 'bold', marginTop: 4 },
  contextContainer: { backgroundColor: '#F0F9FF', padding: 15, borderRadius: 12, marginBottom: 20, borderLeftWidth: 4, borderLeftColor: '#0EA5E9' },
  contextText: { fontSize: 15, color: '#0369A1', lineHeight: 22, fontWeight: '500' },
  algoContainer: { backgroundColor: '#F8FAFC', padding: 15, borderRadius: 12, marginBottom: 24, borderWidth: 1, borderColor: '#E2E8F0' },
  algoHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  algoTitle: { fontSize: 14, fontWeight: 'bold', color: COLORS.darkGray },
  algoText: { fontFamily: 'monospace', fontSize: 14, color: '#334155', lineHeight: 20 },
  textContainer: { backgroundColor: '#F9FAFB', padding: 20, borderRadius: 16, borderWidth: 1, borderColor: COLORS.lightGray, marginBottom: 24 },
  textHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  textTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.darkGray, textTransform: 'uppercase' },
  textContent: { fontSize: 16, color: COLORS.darkGray, lineHeight: 26, fontStyle: 'italic' },
  textAuthor: { textAlign: 'right', marginTop: 12, fontWeight: '600', color: COLORS.gray },
  questionCard: { marginBottom: 24 },
  questionText: { fontSize: 17, fontWeight: '600', color: COLORS.darkGray, lineHeight: 24 },
  questionPoints: { fontSize: 13, color: COLORS.primary, fontWeight: 'bold', marginTop: 4 },
  hintText: { fontSize: 13, color: COLORS.success, marginTop: 4, fontStyle: 'italic' },
  textInput: { backgroundColor: COLORS.white, borderWidth: 1.5, borderColor: COLORS.lightGray, borderRadius: 12, padding: 15, marginTop: 12, minHeight: 80, fontSize: 16, textAlignVertical: 'top' },
  dicteeContainer: { marginBottom: 24 },
  instructions: { color: COLORS.gray, fontStyle: 'italic', marginTop: 8 },
  subjectCard: { marginBottom: 32 },
  subjectHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  subjectTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.secondary },
  subjectText: { fontSize: 16, color: COLORS.darkGray, lineHeight: 24, marginBottom: 16 },
  criteriaContainer: { backgroundColor: COLORS.lightGray + '30', padding: 15, borderRadius: 12 },
  criteriaTitle: { fontWeight: 'bold', marginBottom: 8, color: COLORS.darkGray },
  criteriaItem: { fontSize: 14, color: COLORS.gray, marginBottom: 4 },
  footer: { padding: 20, borderTopWidth: 1, borderTopColor: COLORS.lightGray },
  submitButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 18, borderRadius: 16 },
  submitText: { color: COLORS.white, fontWeight: 'bold', fontSize: 18 },
  bottomSpacer: { height: 40 }
});
