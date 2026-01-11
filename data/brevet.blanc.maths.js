/**
 * Brevet blanc – Mathématiques
 * Durée : 2h
 * Total : 100 points
 */

export const brevetBlancMaths = {
  duration: 2 * 60 * 60, // 2 heures en secondes
  totalPoints: 100,

  sections: [
    /* ================================================= */
    /* EXERCICE 1 – CALCULS NUMÉRIQUES (15 points)       */
    /* ================================================= */
    {
      id: 'exo1',
      title: 'Exercice 1 : Calculs numériques',
      points: 15,
      questions: [
        { id: '1a', question: 'Calculer : 3 + 5 × 2', points: 3, expected: '13', hint: 'Respecter les priorités opératoires.' },
        { id: '1b', question: 'Calculer : (4 − 7)²', points: 3, expected: '9', hint: 'Attention au signe.' },
        { id: '1c', question: 'Calculer : 2³ × 5²', points: 4, expected: '200', hint: 'Utiliser les puissances.' },
        { id: '1d', question: 'Écrire 0,00045 en notation scientifique.', points: 5, expected: '4,5 × 10⁻⁴', hint: '1 ≤ a < 10.' }
      ]
    },

    /* ================================================= */
    /* EXERCICE 2 – FRACTIONS ET ÉQUATIONS (15 points)   */
    /* ================================================= */
    {
      id: 'exo2',
      title: 'Exercice 2 : Fractions et équations',
      points: 15,
      questions: [
        { id: '2a', question: 'Calculer et simplifier : 3/4 + 5/6', points: 5, expected: '19/12', hint: 'Chercher un dénominateur commun.' },
        { id: '2b', question: 'Résoudre l’équation : 4x − 7 = 9', points: 5, expected: 'x = 4', hint: 'Isoler x.' },
        { id: '2c', question: 'Résoudre l’inéquation : 2x + 1 ≥ 7', points: 5, expected: 'x ≥ 3', hint: 'Résultat sous forme d’intervalle.' }
      ]
    },

    /* ================================================= */
    /* EXERCICE 3 – FONCTIONS (15 points)                */
    /* ================================================= */
    {
      id: 'exo3',
      title: 'Exercice 3 : Fonctions',
      points: 15,
      context: 'On considère la fonction f définie par f(x) = 2x − 3.',
      questions: [
        { id: '3a', question: 'Calculer f(4).', points: 4, expected: '5' },
        { id: '3b', question: 'Déterminer l’image de 0 par f.', points: 3, expected: '-3' },
        { id: '3c', question: 'Résoudre f(x) = 0.', points: 4, expected: 'x = 1,5' },
        { id: '3d', question: 'La fonction f est-elle une fonction affine ? Justifier.', points: 4, expected: 'Oui, de la forme ax + b.' }
      ]
    },

    /* ================================================= */
    /* EXERCICE 4 – GÉOMÉTRIE : PYTHAGORE (15 points)    */
    /* ================================================= */
    {
      id: 'exo4',
      title: 'Exercice 4 : Géométrie – Pythagore',
      points: 15,
      context: 'ABC est un triangle rectangle en A avec AB = 6 cm et AC = 8 cm.',
      questions: [
        { id: '4a', question: 'Calculer la longueur BC.', points: 8, expected: 'BC = 10 cm', hint: 'Utiliser le théorème de Pythagore.' },
        { id: '4b', question: 'Le triangle ABC est-il rectangle si BC = 10 cm ? Justifier.', points: 7, expected: 'Oui, réciproque vérifiée.' }
      ]
    },

    /* ================================================= */
    /* EXERCICE 5 – GÉOMÉTRIE : THALÈS (15 points)       */
    /* ================================================= */
    {
      id: 'exo5',
      title: 'Exercice 5 : Géométrie – Thalès',
      points: 15,
      context: 'Dans le triangle ABC, D est un point du segment [AB] et E un point du segment [AC]. Les droites (DE) et (BC) sont parallèles. AB = 10 cm, AD = 6 cm, AC = 15 cm.',
      questions: [
        { id: '5a', question: 'Calculer AE.', points: 8, expected: 'AE = 9 cm', hint: 'Utiliser les rapports de Thalès.' },
        { id: '5b', question: 'Indiquer si la figure est un agrandissement ou une réduction.', points: 7, expected: 'Réduction' }
      ]
    },

    /* ================================================= */
    /* EXERCICE 6 – PROBABILITÉS (10 points)             */
    /* ================================================= */
    {
      id: 'exo6',
      title: 'Exercice 6 : Probabilités',
      points: 10,
      context: 'On lance un dé équilibré à six faces.',
      questions: [
        { id: '6a', question: 'Quelle est la probabilité d’obtenir un nombre pair ?', points: 4, expected: '1/2' },
        { id: '6b', question: 'Quelle est la probabilité d’obtenir un nombre strictement supérieur à 4 ?', points: 3, expected: '1/3' },
        { id: '6c', question: 'L’événement « obtenir 7 » est-il possible ?', points: 3, expected: 'Non, probabilité 0' }
      ]
    },

    /* ================================================= */
    /* EXERCICE 7 – ALGORITHME (10 points)               */
    /* ================================================= */
    {
      id: 'exo7',
      title: 'Exercice 7 : Algorithmique',
      points: 10,
      questions: [
        { 
          id: '7a', 
          question: 'Quelle est la valeur de x et y à la fin ?\nx ← 3\ny ← 5\nSi x < y alors y ← y − x Sinon x ← x + y', 
          points: 10, 
          expected: 'x=3, y=2' 
        }
      ]
    }
  ]
};
