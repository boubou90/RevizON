/**
 * @typedef {Object} QuizQuestion
 * @property {number} id
 * @property {string} question
 * @property {string[]} options
 * @property {number} correctAnswer
 * @property {string} explanation
 */

/**
 * @type {QuizQuestion[]}
 */
export const geographyQuiz = [
  {
    id: 0,
    question: "Qu'est-ce qu'une aire urbaine ?",
    options: [
      "Une ville isolée",
      "Un ensemble de communes autour d'une ville-centre",
      "Une zone agricole",
      "Un parc naturel"
    ],
    correctAnswer: 1,
    explanation: "Une aire urbaine comprend la ville-centre, la banlieue et la couronne périurbaine."
  },
  {
    id: 1,
    question: "Quelle est la plus grande métropole française ?",
    options: ["Lyon", "Marseille", "Paris", "Toulouse"],
    correctAnswer: 2,
    explanation: "Paris est la plus grande métropole française avec plus de 12 millions d'habitants dans son aire urbaine."
  },
  {
    id: 2,
    question: "Qu'est-ce que l'étalement urbain ?",
    options: [
      "La construction de gratte-ciels",
      "L'extension des villes sur les espaces périphériques",
      "La destruction de bâtiments anciens",
      "L'augmentation de la population"
    ],
    correctAnswer: 1,
    explanation: "L'étalement urbain désigne l'extension des villes sur les espaces ruraux périphériques."
  },
  {
    id: 3,
    question: "Quel type d'espace productif est spécialisé dans la culture intensive ?",
    options: [
      "Les espaces industriels",
      "Les espaces de services",
      "Les espaces agricoles",
      "Les espaces touristiques"
    ],
    correctAnswer: 2,
    explanation: "Les espaces agricoles sont spécialisés dans la production alimentaire et la culture intensive."
  },
  {
    id: 4,
    question: "Qu'est-ce qu'un technopôle ?",
    options: [
      "Une usine abandonnée",
      "Un espace regroupant recherche et entreprises innovantes",
      "Un centre commercial",
      "Une zone résidentielle"
    ],
    correctAnswer: 1,
    explanation: "Un technopôle regroupe des centres de recherche, universités et entreprises de haute technologie."
  },
  {
    id: 5,
    question: "Quelle région française est la plus peuplée ?",
    options: [
      "Provence-Alpes-Côte d'Azur",
      "Auvergne-Rhône-Alpes",
      "Île-de-France",
      "Nouvelle-Aquitaine"
    ],
    correctAnswer: 2,
    explanation: "L'Île-de-France concentre environ 12 millions d'habitants, soit près d'1 Français sur 5."
  },
  {
    id: 6,
    question: "Qu'est-ce que la métropolisation ?",
    options: [
      "La création de nouvelles villes",
      "La concentration des populations et activités dans les grandes métropoles",
      "L'abandon des campagnes",
      "La construction de métros"
    ],
    correctAnswer: 1,
    explanation: "La métropolisation est la concentration des populations, des activités économiques et du pouvoir de décision dans les métropoles."
  },
  {
    id: 7,
    question: "Quel type d'agriculture domine dans la Beauce ?",
    options: [
      "L'élevage bovin",
      "La viticulture",
      "La céréaliculture intensive",
      "Le maraîchage"
    ],
    correctAnswer: 2,
    explanation: "La Beauce est une grande région céréalière spécialisée dans la culture du blé."
  },
  {
    id: 8,
    question: "Qu'est-ce qu'un espace de faible densité ?",
    options: [
      "Une zone très peuplée",
      "Une zone avec peu d'habitants au km²",
      "Un désert",
      "Une forêt"
    ],
    correctAnswer: 1,
    explanation: "Un espace de faible densité compte peu d'habitants par kilomètre carré, comme les zones rurales isolées."
  },
  {
    id: 9,
    question: "Quelle ville française accueille le siège d'Airbus ?",
    options: ["Paris", "Lyon", "Marseille", "Toulouse"],
    correctAnswer: 3,
    explanation: "Toulouse est le siège d'Airbus et un pôle aéronautique majeur."
  },
  {
    id: 10,
    question: "Qu'est-ce que la périurbanisation ?",
    options: [
      "Le développement des banlieues",
      "L'installation de populations urbaines à la périphérie des villes",
      "La création de zones industrielles",
      "La construction d'autoroutes"
    ],
    correctAnswer: 1,
    explanation: "La périurbanisation est le processus d'installation des populations urbaines dans les couronnes périurbaines."
  },
  {
    id: 11,
    question: "Quel est le principal aéroport français ?",
    options: [
      "Aéroport de Marseille",
      "Aéroport de Lyon",
      "Aéroport Charles de Gaulle",
      "Aéroport de Nice"
    ],
    correctAnswer: 2,
    explanation: "L'aéroport Charles de Gaulle (Roissy) est le principal aéroport français et européen."
  }
];
