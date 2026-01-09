export interface Lesson {
  id: number;
  title: string;
  content: string;
  keyPoints: string[];
  examples: string[];
  isPremium: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SubjectData {
  [key: string]: Lesson[];
}

export interface QuizData {
  [key: string]: QuizQuestion[];
}

export type SubjectId = 'math' | 'french' | 'history' | 'svt' | 'physique' | 'technologie';
