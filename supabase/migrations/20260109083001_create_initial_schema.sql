/*
  # Create College Revision App Schema

  ## Overview
  Complete database schema for a gamified college revision mobile app with freemium model.

  ## New Tables
  
  ### 1. users
  - Stores user profile information
  - Columns: id, email, name, avatar, class, school, timestamps
  
  ### 2. courses
  - Educational content for 4 subjects (math, french, history, sciences)
  - Columns: id, subject, title, content, key_points, examples, difficulty, grade_level, order_index, is_premium
  
  ### 3. quiz_questions
  - Multiple choice questions for each subject
  - Columns: id, subject, question, options (array), correct_answer, explanation, difficulty, grade_level
  
  ### 4. user_progress
  - Tracks lesson completion and quiz results per user per subject
  - Columns: id, user_id, subject, completed_lessons, quiz_results, global_progress
  
  ### 5. user_gamification
  - Gamification data: streaks, badges, daily goals
  - Columns: id, user_id, streak, last_activity_date, daily_goal_completed, daily_goal_total, unlocked_badges, totals
  
  ### 6. user_premium
  - Premium subscription status and purchase info
  - Columns: id, user_id, is_premium, purchase_date, purchase_platform, purchase_receipt, expires_at
  
  ### 7. push_tokens
  - Device tokens for push notifications
  - Columns: id, user_id, token, platform
  
  ### 8. analytics_events
  - User behavior tracking for analytics
  - Columns: id, user_id, event_type, event_data

  ## Security
  - RLS enabled on all user-specific tables
  - Public read access for courses and quiz questions
  - Users can only access their own data
  - Proper indexes for query performance
  
  ## Features
  - Auto-updating timestamps with triggers
  - Cascading deletes for data integrity
  - Constraints for data validation
*/

-- ============================================
-- TABLES PRINCIPALES
-- ============================================

-- Utilisateurs
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT DEFAULT 'Élève',
  avatar TEXT DEFAULT '👨‍🎓',
  class TEXT CHECK (class IN ('6eme', '5eme', '4eme', '3eme')),
  school TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Cours
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject TEXT NOT NULL CHECK (subject IN ('math', 'french', 'history', 'sciences')),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  key_points TEXT[] DEFAULT '{}',
  examples TEXT[] DEFAULT '{}',
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  grade_level TEXT,
  order_index INTEGER DEFAULT 0,
  is_premium BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Questions de Quiz
CREATE TABLE IF NOT EXISTS quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject TEXT NOT NULL CHECK (subject IN ('math', 'french', 'history', 'sciences')),
  question TEXT NOT NULL,
  options TEXT[] NOT NULL,
  correct_answer INTEGER NOT NULL CHECK (correct_answer BETWEEN 0 AND 3),
  explanation TEXT,
  difficulty TEXT,
  grade_level TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Progression Utilisateur
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL CHECK (subject IN ('math', 'french', 'history', 'sciences')),
  completed_lessons INTEGER[] DEFAULT '{}',
  quiz_results JSONB DEFAULT '[]'::jsonb,
  global_progress INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, subject)
);

-- Gamification
CREATE TABLE IF NOT EXISTS user_gamification (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  streak INTEGER DEFAULT 0,
  last_activity_date DATE,
  daily_goal_completed INTEGER DEFAULT 0,
  daily_goal_total INTEGER DEFAULT 5,
  unlocked_badges TEXT[] DEFAULT '{}',
  total_lessons_read INTEGER DEFAULT 0,
  total_quiz_completed INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Statut Premium
CREATE TABLE IF NOT EXISTS user_premium (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  is_premium BOOLEAN DEFAULT false,
  purchase_date TIMESTAMPTZ,
  purchase_platform TEXT CHECK (purchase_platform IN ('ios', 'android')),
  purchase_receipt TEXT,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tokens Push Notifications
CREATE TABLE IF NOT EXISTS push_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token TEXT NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('ios', 'android')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, token)
);

-- Analytics / Événements
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL,
  event_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES POUR PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_courses_subject ON courses(subject);
CREATE INDEX IF NOT EXISTS idx_courses_premium ON courses(is_premium);
CREATE INDEX IF NOT EXISTS idx_courses_order ON courses(subject, order_index);
CREATE INDEX IF NOT EXISTS idx_quiz_subject ON quiz_questions(subject);
CREATE INDEX IF NOT EXISTS idx_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_subject ON user_progress(user_id, subject);
CREATE INDEX IF NOT EXISTS idx_gamification_user ON user_gamification(user_id);
CREATE INDEX IF NOT EXISTS idx_premium_user ON user_premium(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_user ON analytics_events(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_type ON analytics_events(event_type);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Activer RLS sur toutes les tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_gamification ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_premium ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Politiques pour users
CREATE POLICY "Users can view own data" ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own data" ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Politiques pour user_progress
CREATE POLICY "Users can view own progress" ON user_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Politiques pour user_gamification
CREATE POLICY "Users can view own gamification" ON user_gamification
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own gamification" ON user_gamification
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own gamification" ON user_gamification
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Politiques pour user_premium
CREATE POLICY "Users can view own premium status" ON user_premium
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Politiques pour push_tokens
CREATE POLICY "Users can manage own tokens" ON push_tokens
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Les cours et quiz sont publics (lecture seule pour tous)
CREATE POLICY "Courses are publicly readable" ON courses
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Quiz are publicly readable" ON quiz_questions
  FOR SELECT
  TO authenticated
  USING (true);

-- Analytics accessible en écriture par tous les utilisateurs authentifiés
CREATE POLICY "Users can log analytics" ON analytics_events
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- TRIGGERS POUR AUTO-UPDATE
-- ============================================

-- Fonction pour mettre à jour updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers sur les tables avec updated_at
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_progress_updated_at ON user_progress;
CREATE TRIGGER update_progress_updated_at BEFORE UPDATE ON user_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_gamification_updated_at ON user_gamification;
CREATE TRIGGER update_gamification_updated_at BEFORE UPDATE ON user_gamification
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();