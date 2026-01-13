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
 * Quiz de Technologie – Organisés par leçon
 * @type {LessonQuiz[]}
 */
export const technologieQuizzes = [
  {
    lessonId: 0,
    questions: [
      {
        id: 0,
        question: 'Qu\'est-ce qu\'un matériau naturel ?',
        options: ['Le plastique', 'Le bois', 'L\'acier', 'Le verre'],
        correctAnswer: 1,
        explanation: 'Le bois est un matériau naturel provenant des arbres, contrairement aux matériaux artificiels.'
      },
      {
        id: 1,
        question: 'Quelle propriété permet à un matériau de conduire l\'électricité ?',
        options: ['La dureté', 'La conductivité', 'L\'élasticité', 'La transparence'],
        correctAnswer: 1,
        explanation: 'La conductivité est la propriété qui permet à un matériau de conduire l\'électricité ou la chaleur.'
      },
      {
        id: 2,
        question: 'Pourquoi utilise-t-on du cuivre pour les fils électriques ?',
        options: [
          'Parce qu\'il est léger',
          'Parce qu\'il est transparent',
          'Parce qu\'il conduit bien l\'électricité',
          'Parce qu\'il est rigide'
        ],
        correctAnswer: 2,
        explanation: 'Le cuivre est un excellent conducteur électrique, c\'est pourquoi on l\'utilise pour les fils.'
      },
      {
        id: 3,
        question: 'Quels matériaux peut-on recycler ?',
        options: [
          'Seulement le plastique',
          'Seulement le verre',
          'Plusieurs matériaux (plastique, verre, métal, papier)',
          'Aucun matériau'
        ],
        correctAnswer: 2,
        explanation: 'De nombreux matériaux peuvent être recyclés pour fabriquer de nouveaux objets et réduire les déchets.'
      },
      {
        id: 4,
        question: 'Comment choisit-on le matériau d\'un objet ?',
        options: [
          'Au hasard',
          'Selon l\'usage et les propriétés nécessaires',
          'Selon la couleur uniquement',
          'Selon le prix uniquement'
        ],
        correctAnswer: 1,
        explanation: 'On choisit le matériau en fonction de l\'usage de l\'objet et des propriétés requises (résistance, légèreté, etc.).'
      }
    ]
  },
  {
    lessonId: 1,
    questions: [
      {
        id: 0,
        question: 'Qu\'est-ce qu\'un objet technique ?',
        options: [
          'Un objet naturel',
          'Un objet créé pour répondre à un besoin',
          'Un objet ancien',
          'Un objet cassé'
        ],
        correctAnswer: 1,
        explanation: 'Un objet technique est créé par l\'homme pour répondre à un besoin spécifique.'
      },
      {
        id: 1,
        question: 'Qu\'est-ce que la fonction d\'usage d\'un objet ?',
        options: [
          'Comment il est fabriqué',
          'À quoi il sert',
          'De quoi il est fait',
          'Combien il coûte'
        ],
        correctAnswer: 1,
        explanation: 'La fonction d\'usage indique à quoi sert l\'objet, le besoin qu\'il satisfait.'
      },
      {
        id: 2,
        question: 'Quelle est la fonction d\'usage d\'un vélo ?',
        options: ['Communiquer', 'Éclairer', 'Se déplacer', 'Chauffer'],
        correctAnswer: 2,
        explanation: 'La fonction d\'usage principale du vélo est de permettre le déplacement.'
      },
      {
        id: 3,
        question: 'Qu\'est-ce qu\'une fonction technique ?',
        options: [
          'Le prix de l\'objet',
          'Comment fonctionne l\'objet',
          'La couleur de l\'objet',
          'La taille de l\'objet'
        ],
        correctAnswer: 1,
        explanation: 'La fonction technique explique comment l\'objet fonctionne pour remplir sa fonction d\'usage.'
      },
      {
        id: 4,
        question: 'Pourquoi les objets techniques évoluent-ils ?',
        options: [
          'Pour devenir plus chers',
          'Pour devenir plus lourds',
          'Pour améliorer leurs performances et répondre à de nouveaux besoins',
          'Par hasard'
        ],
        correctAnswer: 2,
        explanation: 'Les objets techniques évoluent grâce aux progrès technologiques pour mieux répondre aux besoins.'
      }
    ]
  },
  {
    lessonId: 2,
    questions: [
      {
        id: 0,
        question: 'Qu\'est-ce qu\'un engrenage ?',
        options: [
          'Un type de moteur',
          'Un système de roues dentées',
          'Un type de carburant',
          'Un outil de mesure'
        ],
        correctAnswer: 1,
        explanation: 'Un engrenage est un système composé de roues dentées qui s\'engrènent les unes dans les autres.'
      },
      {
        id: 1,
        question: 'À quoi servent les engrenages ?',
        options: [
          'À stocker de l\'énergie',
          'À transmettre un mouvement',
          'À produire de la lumière',
          'À chauffer'
        ],
        correctAnswer: 1,
        explanation: 'Les engrenages permettent de transmettre un mouvement d\'une roue à une autre.'
      },
      {
        id: 2,
        question: 'Que peut modifier un engrenage ?',
        options: [
          'La température',
          'La vitesse et la direction du mouvement',
          'La couleur',
          'Le poids'
        ],
        correctAnswer: 1,
        explanation: 'Les engrenages peuvent changer la vitesse (selon la taille des roues) et la direction du mouvement.'
      },
      {
        id: 3,
        question: 'Quel objet utilise des engrenages ?',
        options: ['Une lampe', 'Un vélo', 'Une chaise', 'Un livre'],
        correctAnswer: 1,
        explanation: 'Le vélo utilise des engrenages pour transmettre le mouvement des pédales aux roues.'
      },
      {
        id: 4,
        question: 'Si une petite roue entraîne une grande roue, la grande roue tourne :',
        options: [
          'Plus vite',
          'Moins vite',
          'À la même vitesse',
          'Elle ne tourne pas'
        ],
        correctAnswer: 1,
        explanation: 'Quand une petite roue entraîne une grande roue, la grande tourne moins vite (mais avec plus de force).'
      }
    ]
  },
  {
    lessonId: 3,
    questions: [
      {
        id: 0,
        question: 'Qu\'est-ce qu\'un programme informatique ?',
        options: [
          'Un livre',
          'Une suite d\'instructions données à l\'ordinateur',
          'Un écran',
          'Une souris'
        ],
        correctAnswer: 1,
        explanation: 'Un programme est une suite d\'instructions qui indique à l\'ordinateur ce qu\'il doit faire.'
      },
      {
        id: 1,
        question: 'Qu\'est-ce qu\'un algorithme ?',
        options: [
          'Un robot',
          'Une méthode pour résoudre un problème étape par étape',
          'Un ordinateur',
          'Un jeu vidéo'
        ],
        correctAnswer: 1,
        explanation: 'Un algorithme est une méthode qui décrit les étapes pour résoudre un problème de façon logique.'
      },
      {
        id: 2,
        question: 'Quel langage de programmation est souvent utilisé pour débuter ?',
        options: ['Assembly', 'C++', 'Scratch', 'Java'],
        correctAnswer: 2,
        explanation: 'Scratch est un langage visuel par blocs, idéal pour débuter en programmation.'
      },
      {
        id: 3,
        question: 'Qu\'est-ce que la robotique ?',
        options: [
          'L\'étude des plantes',
          'La programmation de machines automatiques',
          'La fabrication de jouets',
          'L\'étude des étoiles'
        ],
        correctAnswer: 1,
        explanation: 'La robotique consiste à concevoir et programmer des machines capables d\'effectuer des tâches automatiquement.'
      },
      {
        id: 4,
        question: 'Quel est le rôle d\'un ordinateur ?',
        options: [
          'Produire de la chaleur',
          'Traiter l\'information selon un programme',
          'Éclairer une pièce',
          'Faire du bruit'
        ],
        correctAnswer: 1,
        explanation: 'L\'ordinateur traite l\'information (calculs, texte, images, etc.) en suivant les programmes qu\'on lui donne.'
      }
    ]
  }
];
