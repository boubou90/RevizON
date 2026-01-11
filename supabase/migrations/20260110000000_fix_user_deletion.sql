-- Migration pour corriger la suppression d'utilisateurs
-- Ce trigger supprime automatiquement l'entrée dans public.users
-- quand un utilisateur est supprimé de auth.users

-- Fonction qui sera appelée quand un utilisateur est supprimé
CREATE OR REPLACE FUNCTION public.handle_user_delete()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  -- Supprime l'utilisateur de la table public.users
  DELETE FROM public.users WHERE id = OLD.id;
  RETURN OLD;
END;
$$;

-- Trigger qui appelle la fonction ci-dessus
DROP TRIGGER IF EXISTS on_auth_user_deleted ON auth.users;
CREATE TRIGGER on_auth_user_deleted
  AFTER DELETE ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_user_delete();

-- Commentaire pour documentation
COMMENT ON FUNCTION public.handle_user_delete() IS
'Supprime automatiquement les données utilisateur de public.users quand un utilisateur est supprimé de auth.users';
