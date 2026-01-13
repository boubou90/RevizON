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
export const emcQuiz = [
  {
    id: 0,
    question: "Que signifie EMC ?",
    options: [
      "Éducation Morale et Culturelle",
      "Enseignement Moral et Civique",
      "Éducation Moderne et Citoyenne",
      "Enseignement Moderne et Culturel"
    ],
    correctAnswer: 1,
    explanation: "EMC signifie Enseignement Moral et Civique."
  },
  {
    id: 1,
    question: "Quelle est la devise de la République française ?",
    options: [
      "Travail, Famille, Patrie",
      "Honneur et Patrie",
      "Liberté, Égalité, Fraternité",
      "Union, Justice, Solidarité"
    ],
    correctAnswer: 2,
    explanation: "La devise de la France est 'Liberté, Égalité, Fraternité' depuis la Révolution française."
  },
  {
    id: 2,
    question: "À quel âge peut-on voter en France ?",
    options: ["16 ans", "17 ans", "18 ans", "21 ans"],
    correctAnswer: 2,
    explanation: "En France, on peut voter à partir de 18 ans, l'âge de la majorité civile."
  },
  {
    id: 3,
    question: "Qu'est-ce que la laïcité ?",
    options: [
      "L'interdiction de toute religion",
      "La séparation de l'État et des religions",
      "L'obligation d'être athée",
      "La religion d'État"
    ],
    correctAnswer: 1,
    explanation: "La laïcité est la séparation de l'État et des religions, garantissant la liberté de conscience."
  },
  {
    id: 4,
    question: "Quel est le symbole de la République française ?",
    options: ["Le coq", "Marianne", "Le drapeau tricolore", "Tous ces symboles"],
    correctAnswer: 3,
    explanation: "Le coq, Marianne, le drapeau tricolore sont tous des symboles de la République française."
  },
  {
    id: 5,
    question: "Qu'est-ce que le harcèlement scolaire ?",
    options: [
      "Une simple dispute",
      "Des violences répétées envers un élève",
      "Un jeu entre amis",
      "Une punition normale"
    ],
    correctAnswer: 1,
    explanation: "Le harcèlement scolaire est une violence répétée qui peut être verbale, physique ou psychologique."
  },
  {
    id: 6,
    question: "Quel principe garantit l'égalité devant la loi ?",
    options: [
      "La liberté d'expression",
      "L'égalité des droits",
      "La fraternité",
      "La solidarité"
    ],
    correctAnswer: 1,
    explanation: "Le principe d'égalité garantit que tous les citoyens sont égaux devant la loi."
  },
  {
    id: 7,
    question: "Qu'est-ce qu'un citoyen ?",
    options: [
      "Une personne qui habite en France",
      "Une personne qui a des droits et des devoirs politiques",
      "Une personne qui paie des impôts",
      "Une personne qui travaille"
    ],
    correctAnswer: 1,
    explanation: "Un citoyen est une personne qui possède des droits politiques et civiques ainsi que des devoirs."
  },
  {
    id: 8,
    question: "Quel document proclame les droits fondamentaux en France ?",
    options: [
      "Le Code civil",
      "La Constitution",
      "La Déclaration des droits de l'Homme et du Citoyen",
      "Le Code pénal"
    ],
    correctAnswer: 2,
    explanation: "La Déclaration des droits de l'Homme et du Citoyen de 1789 proclame les droits fondamentaux."
  },
  {
    id: 9,
    question: "Qu'est-ce que la discrimination ?",
    options: [
      "Traiter différemment selon des critères illégaux",
      "Avoir des préférences",
      "Faire des choix",
      "Respecter les différences"
    ],
    correctAnswer: 0,
    explanation: "La discrimination est le fait de traiter différemment des personnes en raison de critères illégaux (origine, sexe, etc.)."
  },
  {
    id: 10,
    question: "Quel est le rôle du Défenseur des droits ?",
    options: [
      "Défendre les criminels",
      "Protéger les droits et libertés des citoyens",
      "Faire appliquer les lois",
      "Juger les crimes"
    ],
    correctAnswer: 1,
    explanation: "Le Défenseur des droits est une autorité indépendante qui protège les droits et libertés des citoyens."
  },
  {
    id: 11,
    question: "Qu'est-ce que l'engagement citoyen ?",
    options: [
      "Voter uniquement",
      "Participer à la vie de la cité",
      "Payer ses impôts",
      "Respecter la loi"
    ],
    correctAnswer: 1,
    explanation: "L'engagement citoyen consiste à participer activement à la vie de la cité (associations, bénévolat, etc.)."
  }
];
