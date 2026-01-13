import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react-native';
import { COLORS, SUBJECTS, HISTORY_SUBJECTS } from '@/utils/constants';
import { quizzesDataByLesson } from '@/data/index';
import { useGamification } from '@/contexts/GamificationContext';
import { useProgress } from '@/contexts/ProgressContext';
import { useInterstitialAd } from '@/components/AdInterstitial';
import { AdBanner } from '@/components/AdBanner';

export default function LessonQuizScreen() {
  const router = useRouter();
  const { subject, lessonId } = useLocalSearchParams();
  const { incrementDailyGoal, checkQuizBadges } = useGamification();
  const { markQuizComplete } = useProgress();
  const { showAd } = useInterstitialAd();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const allSubjects = [...SUBJECTS, ...HISTORY_SUBJECTS];
  const subjectData = allSubjects.find((s) => s.id === subject);
  const lessonIdNum = parseInt(lessonId as string);

  const quizzes = (quizzesDataByLesson as any)[subject as string];
  const lessonQuiz = quizzes?.find((q: any) => q.lessonId === lessonIdNum);
  const questions = lessonQuiz?.questions || [];

  if (!subjectData || questions.length === 0) {
    return (
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor: subjectData?.color + '20' || COLORS.lightGray }]}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <ArrowLeft size={24} color={COLORS.darkGray} />
          </TouchableOpacity>
        </View>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Aucun quiz disponible pour cette leçon</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.primary }]}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Retour</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Calculer le score
      let correctCount = 0;
      questions.forEach((q: any, index: number) => {
        if (newAnswers[index] === q.correctAnswer) {
          correctCount++;
        }
      });
      const finalScore = Math.round((correctCount / questions.length) * 100);
      setScore(finalScore);
      setShowResults(true);

      // Enregistrer la complétion du quiz
      markQuizComplete(subject as string, lessonIdNum);
      incrementDailyGoal();
      checkQuizBadges(1); // Vérifier les badges quiz
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const handleFinish = async () => {
    // Afficher une publicité interstitielle avant de quitter (seulement pour les utilisateurs gratuits)
    await showAd();
    router.back();
  };

  if (showResults) {
    return (
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor: subjectData.color + '20' }]}>
          <TouchableOpacity style={styles.backButton} onPress={handleFinish}>
            <ArrowLeft size={24} color={COLORS.darkGray} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={styles.resultsContainer}>
          <View style={styles.scoreCard}>
            <Text style={styles.scoreTitle}>Quiz terminé !</Text>
            <Text style={[styles.scoreValue, { color: score >= 60 ? COLORS.success : COLORS.error }]}>
              {score}%
            </Text>
            <Text style={styles.scoreSubtitle}>
              {score >= 80 ? 'Excellent ! 🎉' : score >= 60 ? 'Bien joué ! 👍' : 'Continue tes efforts ! 💪'}
            </Text>
          </View>

          <View style={styles.answersContainer}>
            <Text style={styles.answersTitle}>Détail des réponses</Text>
            {questions.map((q: any, index: number) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === q.correctAnswer;
              return (
                <View key={index} style={styles.answerCard}>
                  <View style={styles.answerHeader}>
                    <Text style={styles.answerNumber}>Question {index + 1}</Text>
                    {isCorrect ? (
                      <CheckCircle size={20} color={COLORS.success} />
                    ) : (
                      <XCircle size={20} color={COLORS.error} />
                    )}
                  </View>
                  <Text style={styles.answerQuestion}>{q.question}</Text>
                  <Text style={[styles.answerText, isCorrect ? styles.correctAnswer : styles.wrongAnswer]}>
                    Ta réponse : {q.options[userAnswer]}
                  </Text>
                  {!isCorrect && (
                    <Text style={styles.correctAnswerText}>
                      Bonne réponse : {q.options[q.correctAnswer]}
                    </Text>
                  )}
                  <Text style={styles.explanation}>{q.explanation}</Text>
                </View>
              );
            })}
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={handleRetry}
            >
              <Text style={styles.secondaryButtonText}>Refaire le quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: subjectData.color }]}
              onPress={handleFinish}
            >
              <Text style={styles.buttonText}>Terminer</Text>
            </TouchableOpacity>
          </View>

          {/* Bannière publicitaire en bas */}
          <AdBanner />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: subjectData.color + '20' }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color={COLORS.darkGray} />
        </TouchableOpacity>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${progress}%`, backgroundColor: subjectData.color },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {currentQuestion + 1}/{questions.length}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.questionCard}>
          <Text style={styles.questionNumber}>Question {currentQuestion + 1}</Text>
          <Text style={styles.questionText}>{question.question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {question.options.map((option: string, index: number) => {
            const isSelected = selectedAnswer === index;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  isSelected && {
                    backgroundColor: subjectData.color,
                    borderColor: subjectData.color,
                  },
                ]}
                onPress={() => handleAnswerSelect(index)}
              >
                <View
                  style={[
                    styles.optionCircle,
                    isSelected && { backgroundColor: COLORS.white },
                  ]}
                >
                  <Text
                    style={[
                      styles.optionLetter,
                      isSelected && { color: subjectData.color },
                    ]}
                  >
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.optionText,
                    isSelected && { color: COLORS.white, fontWeight: '600' },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={[
            styles.nextButton,
            { backgroundColor: subjectData.color },
            selectedAnswer === null && styles.nextButtonDisabled,
          ]}
          onPress={handleNext}
          disabled={selectedAnswer === null}
        >
          <Text style={styles.nextButtonText}>
            {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Terminer le quiz'}
          </Text>
        </TouchableOpacity>
      </View>
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
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkGray,
    minWidth: 50,
    textAlign: 'right',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  questionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 12,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.darkGray,
    lineHeight: 28,
  },
  optionsContainer: {
    flex: 1,
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 16,
  },
  optionCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionLetter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.darkGray,
  },
  nextButton: {
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    marginTop: 24,
  },
  nextButtonDisabled: {
    opacity: 0.4,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: COLORS.gray,
    textAlign: 'center',
    marginBottom: 24,
  },
  resultsContainer: {
    padding: 20,
  },
  scoreCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  scoreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 16,
  },
  scoreValue: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scoreSubtitle: {
    fontSize: 18,
    color: COLORS.gray,
  },
  answersContainer: {
    marginBottom: 24,
  },
  answersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 16,
  },
  answerCard: {
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
  answerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  answerNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  answerQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginBottom: 8,
  },
  answerText: {
    fontSize: 14,
    marginBottom: 4,
  },
  correctAnswer: {
    color: COLORS.success,
  },
  wrongAnswer: {
    color: COLORS.error,
  },
  correctAnswerText: {
    fontSize: 14,
    color: COLORS.success,
    marginBottom: 8,
  },
  explanation: {
    fontSize: 14,
    color: COLORS.gray,
    fontStyle: 'italic',
  },
  buttonsContainer: {
    gap: 12,
    marginBottom: 40,
  },
  button: {
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.lightGray,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.darkGray,
  },
});
