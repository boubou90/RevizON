// Stub pour le web - pas de publicités interstitielles

export function useInterstitialAd() {
  return {
    showAd: async (): Promise<boolean> => false,
    isLoaded: false,
  };
}
