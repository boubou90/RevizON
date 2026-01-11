-- ============================================
-- MIGRATION COMPLÈTE POUR REVIZON
-- À exécuter dans Supabase SQL Editor
-- ============================================

-- Supprimer les tables existantes si elles existent (CASCADE pour supprimer les dépendances)
DROP TABLE IF EXISTS analytics_events CASCADE;
DROP TABLE IF EXISTS push_tokens CASCADE;
DROP TABLE IF EXISTS user_premium CASCADE;
DROP TABLE IF EXISTS user_gamification CASCADE;
DROP TABLE IF EXISTS user_progress CASCADE;
DROP TABLE IF EXISTS quiz_questions CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- ============================================
-- TABLES PRINCIPALES
-- ============================================

-- Utilisateurs (utilise l'UUID de auth.users)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT DEFAULT 'Élève',
  avatar TEXT DEFAULT '👨‍🎓',
  class TEXT CHECK (class IN ('6eme', '5eme', '4eme', '3eme')),
  school TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Cours
CREATE TABLE courses (
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
CREATE TABLE quiz_questions (
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
CREATE TABLE user_progress (
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
CREATE TABLE user_gamification (
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
CREATE TABLE user_premium (
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
CREATE TABLE push_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token TEXT NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('ios', 'android')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, token)
);

-- Analytics / Événements
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL,
  event_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES POUR PERFORMANCE
-- ============================================

CREATE INDEX idx_courses_subject ON courses(subject);
CREATE INDEX idx_courses_premium ON courses(is_premium);
CREATE INDEX idx_courses_order ON courses(subject, order_index);
CREATE INDEX idx_quiz_subject ON quiz_questions(subject);
CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_progress_subject ON user_progress(user_id, subject);
CREATE INDEX idx_gamification_user ON user_gamification(user_id);
CREATE INDEX idx_premium_user ON user_premium(user_id);
CREATE INDEX idx_analytics_user ON analytics_events(user_id);
CREATE INDEX idx_analytics_date ON analytics_events(created_at);
CREATE INDEX idx_analytics_type ON analytics_events(event_type);

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
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_progress_updated_at BEFORE UPDATE ON user_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_gamification_updated_at BEFORE UPDATE ON user_gamification
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- MIGRATION TERMINÉE
-- ============================================

-- Afficher un message de confirmation
DO $$
BEGIN
  RAISE NOTICE 'Migration terminée avec succès!';
  RAISE NOTICE 'Les tables ont été créées et configurées.';
  RAISE NOTICE 'Les suppressions d utilisateurs fonctionneront automatiquement.';
END $$;
