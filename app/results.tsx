import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Trophy, Home, RotateCcw, CheckCircle, XCircle } from 'lucide-react-native';
import { useProgress } from '@/contexts/ProgressContext';
import { useGamification } from '@/contexts/GamificationContext';
import { COLORS, SUBJECTS } from '@/utils/constants';
import { quizData } from '@/data/quizData';

export default function ResultsScreen() {
  const router = useRouter();
  const { subject, answers: answersParam } = useLocalSearchParams();
  const { saveQuizResult, getTotalQuizCompleted } = useProgress();
  const { incrementDailyGoal, checkQuizBadges, recordPerfectScore } =
    useGamification();

  const answers = JSON.parse(answersParam as string);
  const subjectData = SUBJECTS.find((s) => s.id === subject);
  const questions = (quizData as any)[subject as string] || [];

  const correctCount = answers.filter(
    (answer: number, index: number) => answer === questions[index].correctAnswer
  ).length;

  const score = Math.round((correctCount / questions.length) * 100);
  const isPerfect = score === 100;

  useEffect(() => {
    const saveResults = async () => {
      const result = {
        date: new Date().toISOString(),
        score: correctCount,
        total: questions.length,
        percentage: score,
      };

      await saveQuizResult(subject as string, result);
      await incrementDailyGoal();

      const totalQuizzes = getTotalQuizCompleted() + 1;
      checkQuizBadges(totalQuizzes);

      if (isPerfect) {
        recordPerfectScore();
      }
    };

    saveResults();
  }, []);

  const getScoreMessage = () => {
    if (score === 100) return 'Parfait ! 🎉';
    if (score >= 80) return 'Excellent ! 🌟';
    if (score >= 60) return 'Bien joué ! 👍';
    if (score >= 40) return 'Pas mal ! 💪';
    return 'Continue à réviser ! 📚';
  };

  const handleRetry = () => {
    router.back();
    setTimeout(() => {
      router.push({
        pathname: '/quiz/[subject]',
        params: { subject: subject as string },
      } as any);
    }, 100);
  };

  if (!subjectData) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View
        style={[styles.header, { backgroundColor: subjectData.color + '20' }]}
      >
        <View style={styles.scoreCircle}>
          <Trophy size={48} color={subjectData.color} />
          <Text style={[styles.scoreValue, { color: subjectData.color }]}>
            {score}%
          </Text>
          <Text style={styles.scoreLabel}>{getScoreMessage()}</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{correctCount}</Text>
            <Text style={styles.statLabel}>Correctes</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{questions.length - correctCount}</Text>
            <Text style={styles.statLabel}>Incorrectes</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{questions.length}</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.sectionTitle}>Détails des Réponses</Text>

        {questions.map((question: any, index: number) => {
          const userAnswer = answers[index];
          const isCorrect = userAnswer === question.correctAnswer;

          return (
            <View key={index} style={styles.questionCard}>
              <View style={styles.questionHeader}>
                <Text style={styles.questionNumber}>Question {index + 1}</Text>
                {isCorrect ? (
                  <CheckCircle size={20} color={COLORS.success} />
                ) : (
                  <XCircle size={20} color={COLORS.error} />
                )}
              </View>

              <Text style={styles.questionText}>{question.question}</Text>

              <View style={styles.answersSection}>
                <View
                  style={[
                    styles.answerRow,
                    !isCorrect && styles.answerRowWrong,
                  ]}
                >
                  <Text style={styles.answerLabel}>Ta réponse:</Text>
                  <Text
                    style={[
                      styles.answerText,
                      !isCorrect && styles.answerTextWrong,
                    ]}
                  >
                    {question.options[userAnswer]}
                  </Text>
                </View>

                {!isCorrect && (
                  <View style={[styles.answerRow, styles.answerRowCorrect]}>
                    <Text style={styles.answerLabel}>Bonne réponse:</Text>
                    <Text style={[styles.answerText, styles.answerTextCorrect]}>
                      {question.options[question.correctAnswer]}
                    </Text>
                  </View>
                )}

                {question.explanation && (
                  <View style={styles.explanationBox}>
                    <Text style={styles.explanationText}>
                      💡 {question.explanation}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          );
        })}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.retryButton]}
            onPress={handleRetry}
          >
            <RotateCcw size={20} color={COLORS.white} />
            <Text style={styles.buttonText}>Réessayer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.homeButton]}
            onPress={() => router.push('/')}
          >
            <Home size={20} color={COLORS.white} />
            <Text style={styles.buttonText}>Accueil</Text>
          </TouchableOpacity>
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
    paddingTop: 60,
    paddingBottom: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  scoreCircle: {
    alignItems: 'center',
    marginBottom: 24,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 8,
  },
  scoreLabel: {
    fontSize: 18,
    color: COLORS.gray,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.gray,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 16,
  },
  questionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginBottom: 16,
    lineHeight: 22,
  },
  answersSection: {
    gap: 8,
  },
  answerRow: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 12,
  },
  answerRowWrong: {
    backgroundColor: COLORS.error + '15',
  },
  answerRowCorrect: {
    backgroundColor: COLORS.success + '15',
  },
  answerLabel: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: 4,
  },
  answerText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.darkGray,
  },
  answerTextWrong: {
    color: COLORS.error,
  },
  answerTextCorrect: {
    color: COLORS.success,
  },
  explanationBox: {
    backgroundColor: COLORS.primary + '10',
    borderRadius: 8,
    padding: 12,
    marginTop: 4,
  },
  explanationText: {
    fontSize: 14,
    color: COLORS.darkGray,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
    marginBottom: 40,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 12,
    padding: 16,
  },
  retryButton: {
    backgroundColor: COLORS.primary,
  },
  homeButton: {
    backgroundColor: COLORS.success,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
});
