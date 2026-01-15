import { usePremium } from '@/contexts/RevenueCatContext';

interface AdNativeProps {
  /**
   * Style du conteneur de la publicité
   */
  style?: any;
}

/**
 * Composant de publicité native
 * TEMPORAIREMENT DÉSACTIVÉ - Les publicités natives nécessitent une configuration complexe
 * et ne fonctionnent pas bien avec Expo. Elles seront activées dans le build EAS.
 *
 * Pour l'instant, utilisez les bannières et interstitielles qui fonctionnent parfaitement.
 */
export function AdNative(_props: AdNativeProps) {
  const { isPremium } = usePremium();

  // Ne pas afficher de pub pour les utilisateurs premium
  if (isPremium) {
    return null;
  }

  // Désactivé temporairement pour éviter les erreurs
  // Les publicités natives seront activées dans une version ultérieure
  return null;
}
