-- Migration pour lier public.users avec auth.users
-- Cela permettra de supprimer automatiquement les utilisateurs

-- Étape 1: Supprimer l'ancienne contrainte si elle existe
ALTER TABLE public.users DROP CONSTRAINT IF EXISTS users_id_fkey;

-- Étape 2: Ajouter une contrainte de clé étrangère vers auth.users
-- avec CASCADE pour supprimer automatiquement
ALTER TABLE public.users
  ADD CONSTRAINT users_id_fkey
  FOREIGN KEY (id)
  REFERENCES auth.users(id)
  ON DELETE CASCADE;

-- Étape 3: Mettre à jour les tables liées pour s'assurer qu'elles utilisent CASCADE
ALTER TABLE public.user_progress
  DROP CONSTRAINT IF EXISTS user_progress_user_id_fkey,
  ADD CONSTRAINT user_progress_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES public.users(id)
    ON DELETE CASCADE;

ALTER TABLE public.user_gamification
  DROP CONSTRAINT IF EXISTS user_gamification_user_id_fkey,
  ADD CONSTRAINT user_gamification_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES public.users(id)
    ON DELETE CASCADE;

ALTER TABLE public.user_premium
  DROP CONSTRAINT IF EXISTS user_premium_user_id_fkey,
  ADD CONSTRAINT user_premium_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES public.users(id)
    ON DELETE CASCADE;

ALTER TABLE public.push_tokens
  DROP CONSTRAINT IF EXISTS push_tokens_user_id_fkey,
  ADD CONSTRAINT push_tokens_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES public.users(id)
    ON DELETE CASCADE;

ALTER TABLE public.analytics_events
  DROP CONSTRAINT IF EXISTS analytics_events_user_id_fkey,
  ADD CONSTRAINT analytics_events_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES public.users(id)
    ON DELETE SET NULL;

-- Commentaire pour documentation
COMMENT ON CONSTRAINT users_id_fkey ON public.users IS
'Lien avec auth.users - suppression en cascade automatique';
