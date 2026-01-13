/**
 * @typedef {Object} QuizQuestion
 * @property {number} id
 * @property {string} question
 * @property {string[]} options
 * @property {number} correctAnswer
 * @property {string} explanation
 */

/**
 * @typedef {Object} LessonQuiz
 * @property {number} lessonId
 * @property {QuizQuestion[]} questions
 */

/**
 * Quiz de Physique-Chimie – Organisés par leçon
 * @type {LessonQuiz[]}
 */
export const physiqueQuizzes = [
  {
    lessonId: 0,
    questions: [
      {
        id: 0,
        question: 'Combien d\'états de la matière existe-t-il principalement ?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'Il existe trois états principaux de la matière : solide, liquide et gazeux.'
      },
      {
        id: 1,
        question: 'Quel changement d\'état correspond au passage de solide à liquide ?',
        options: ['Vaporisation', 'Solidification', 'Fusion', 'Liquéfaction'],
        correctAnswer: 2,
        explanation: 'La fusion est le passage de l\'état solide à l\'état liquide (exemple : glace → eau).'
      },
      {
        id: 2,
        question: 'Quelle caractéristique est propre à l\'état gazeux ?',
        options: [
          'Forme et volume définis',
          'Volume défini, forme variable',
          'Ni forme ni volume définis',
          'Forme définie, volume variable'
        ],
        correctAnswer: 2,
        explanation: 'Un gaz n\'a ni forme ni volume propres, il occupe tout l\'espace disponible.'
      },
      {
        id: 3,
        question: 'Comment appelle-t-on le passage de liquide à gaz ?',
        options: ['Fusion', 'Solidification', 'Condensation', 'Vaporisation'],
        correctAnswer: 3,
        explanation: 'La vaporisation (ou évaporation/ébullition) est le passage de liquide à gaz.'
      },
      {
        id: 4,
        question: 'Dans quel état l\'eau a-t-elle un volume défini mais une forme variable ?',
        options: ['État solide (glace)', 'État liquide (eau)', 'État gazeux (vapeur)', 'Tous les états'],
        correctAnswer: 1,
        explanation: 'L\'état liquide a un volume défini mais prend la forme du récipient.'
      }
    ]
  },
  {
    lessonId: 1,
    questions: [
      {
        id: 0,
        question: 'Qu\'est-ce qu\'un circuit électrique fermé ?',
        options: [
          'Un circuit sans pile',
          'Un circuit où le courant peut circuler',
          'Un circuit avec interrupteur ouvert',
          'Un circuit cassé'
        ],
        correctAnswer: 1,
        explanation: 'Dans un circuit fermé, le parcours est complet et le courant peut circuler.'
      },
      {
        id: 1,
        question: 'Quel composant produit le courant électrique dans un circuit ?',
        options: ['La lampe', 'L\'interrupteur', 'La pile (générateur)', 'Les fils'],
        correctAnswer: 2,
        explanation: 'La pile est le générateur qui produit le courant électrique dans le circuit.'
      },
      {
        id: 2,
        question: 'Que se passe-t-il dans un circuit ouvert ?',
        options: [
          'Le courant circule normalement',
          'Le courant ne peut pas circuler',
          'La lampe brille plus fort',
          'La pile chauffe'
        ],
        correctAnswer: 1,
        explanation: 'Dans un circuit ouvert, le parcours est interrompu et le courant ne peut pas circuler.'
      },
      {
        id: 3,
        question: 'Qu\'est-ce qu\'un récepteur dans un circuit électrique ?',
        options: [
          'Un composant qui produit le courant',
          'Un composant qui utilise le courant',
          'Un composant qui coupe le courant',
          'Un composant qui mesure le courant'
        ],
        correctAnswer: 1,
        explanation: 'Un récepteur (comme une lampe) utilise le courant produit par le générateur.'
      },
      {
        id: 4,
        question: 'Pourquoi un court-circuit est-il dangereux ?',
        options: [
          'Il éteint la lampe',
          'Il peut faire chauffer les fils et provoquer un incendie',
          'Il arrête la pile',
          'Il n\'est pas dangereux'
        ],
        correctAnswer: 1,
        explanation: 'Un court-circuit crée un passage direct entre les bornes de la pile, provoquant une surchauffe dangereuse.'
      }
    ]
  },
  {
    lessonId: 2,
    questions: [
      {
        id: 0,
        question: 'Comment se propage la lumière ?',
        options: ['En cercles', 'En ligne droite', 'En zigzag', 'De façon aléatoire'],
        correctAnswer: 1,
        explanation: 'La lumière se propage toujours en ligne droite (propagation rectiligne).'
      },
      {
        id: 1,
        question: 'Qu\'est-ce qu\'une source primaire de lumière ?',
        options: [
          'Un objet qui réfléchit la lumière',
          'Un objet qui produit sa propre lumière',
          'Un objet qui absorbe la lumière',
          'Un objet transparent'
        ],
        correctAnswer: 1,
        explanation: 'Une source primaire produit sa propre lumière (Soleil, lampe, bougie).'
      },
      {
        id: 2,
        question: 'Pourquoi la Lune brille-t-elle la nuit ?',
        options: [
          'Elle produit sa propre lumière',
          'Elle réfléchit la lumière du Soleil',
          'Elle absorbe la lumière',
          'Elle émet de la chaleur'
        ],
        correctAnswer: 1,
        explanation: 'La Lune est une source secondaire : elle réfléchit la lumière du Soleil.'
      },
      {
        id: 3,
        question: 'Qu\'est-ce qu\'un objet opaque ?',
        options: [
          'Un objet qui laisse passer toute la lumière',
          'Un objet qui ne laisse pas passer la lumière',
          'Un objet transparent',
          'Un objet qui produit de la lumière'
        ],
        correctAnswer: 1,
        explanation: 'Un objet opaque ne laisse pas passer la lumière et crée une ombre.'
      },
      {
        id: 4,
        question: 'Comment se forme une ombre ?',
        options: [
          'Quand la lumière traverse un objet',
          'Quand un objet opaque bloque la lumière',
          'Quand la lumière est réfléchie',
          'Quand il fait nuit'
        ],
        correctAnswer: 1,
        explanation: 'Une ombre se forme quand un objet opaque bloque les rayons lumineux.'
      }
    ]
  },
  {
    lessonId: 3,
    questions: [
      {
        id: 0,
        question: 'Combien y a-t-il de planètes dans le système solaire ?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 1,
        explanation: 'Le système solaire compte 8 planètes (Pluton n\'est plus considérée comme une planète).'
      },
      {
        id: 1,
        question: 'Qu\'est-ce que le Soleil ?',
        options: ['Une planète', 'Une étoile', 'Un satellite', 'Une comète'],
        correctAnswer: 1,
        explanation: 'Le Soleil est une étoile autour de laquelle tournent les planètes du système solaire.'
      },
      {
        id: 2,
        question: 'Quelle est la planète la plus proche du Soleil ?',
        options: ['Vénus', 'Terre', 'Mercure', 'Mars'],
        correctAnswer: 2,
        explanation: 'Mercure est la planète la plus proche du Soleil.'
      },
      {
        id: 3,
        question: 'Quel type de planète est la Terre ?',
        options: ['Gazeuse', 'Tellurique (rocheuse)', 'Glacée', 'Liquide'],
        correctAnswer: 1,
        explanation: 'La Terre est une planète tellurique (rocheuse) comme Mercure, Vénus et Mars.'
      },
      {
        id: 4,
        question: 'Combien de temps la Terre met-elle pour faire le tour du Soleil ?',
        options: ['24 heures', '30 jours', '365 jours', '10 ans'],
        correctAnswer: 2,
        explanation: 'La Terre met 365 jours (une année) pour faire une révolution complète autour du Soleil.'
      }
    ]
  }
];
