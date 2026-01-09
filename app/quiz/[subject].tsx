import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { COLORS, SUBJECTS } from '@/utils/constants';
import { quizData } from '@/data/quizData';

const { width } = Dimensions.get('window');

export default function QuizScreen() {
  const router = useRouter();
  const { subject } = useLocalSearchParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const subjectData = SUBJECTS.find((s) => s.id === subject);
  const questions = (quizData as any)[subject as string] || [];

  if (!subjectData || questions.length === 0) {
    return null;
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
      router.replace({
        pathname: '/results',
        params: {
          subject: subject as string,
          answers: JSON.stringify(newAnswers),
        },
      } as any);
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

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
          <Text style={styles.progressText}>
            {currentQuestion + 1}/{questions.length}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.questionCard}>
          <Text style={styles.questionNumber}>
            Question {currentQuestion + 1}
          </Text>
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
                    isSelected && styles.optionCircleSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionLetter,
                      isSelected && styles.optionLetterSelected,
                    ]}
                  >
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.optionText,
                    isSelected && styles.optionTextSelected,
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
            {currentQuestion < questions.length - 1
              ? 'Question suivante'
              : 'Terminer le quiz'}
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
    backgroundColor: COLORS.success,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkGray,
    minWidth: 60,
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
  optionCircleSelected: {
    backgroundColor: COLORS.white,
  },
  optionLetter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.gray,
  },
  optionLetterSelected: {
    color: COLORS.primary,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.darkGray,
  },
  optionTextSelected: {
    color: COLORS.white,
    fontWeight: '600',
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
});
