/**
 * Utilitaire de lecture de texte utilisant l'API Web Speech
 * Note : Fonctionne sur Web. Pour Mobile Natif, expo-speech est recommandé.
 */
export function readText(text: string) {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.75; // Débit lent pour la dictée
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("L'API Web Speech n'est pas supportée sur cet environnement.");
  }
}

export function stopReading() {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}
