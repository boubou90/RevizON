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
export const historyQuiz = [
  {
    id: 0,
    question: "Quand commence la Première Guerre mondiale ?",
    options: ["1914", "1918", "1939", "1945"],
    correctAnswer: 0,
    explanation: "La Première Guerre mondiale débute en 1914 et se termine en 1918."
  },
  {
    id: 1,
    question: "Qu'est-ce qu'un poilu ?",
    options: [
      "Un animal",
      "Un soldat français de la Première Guerre mondiale",
      "Un révolutionnaire",
      "Un roi"
    ],
    correctAnswer: 1,
    explanation: "Les poilus sont les soldats français qui ont combattu pendant la Première Guerre mondiale."
  },
  {
    id: 2,
    question: "Quelle bataille de 1916 symbolise la violence de la Grande Guerre ?",
    options: ["La bataille de la Marne", "La bataille de Verdun", "La bataille de Waterloo", "La bataille de Sedan"],
    correctAnswer: 1,
    explanation: "La bataille de Verdun (1916) est l'une des batailles les plus meurtrières de la Première Guerre mondiale."
  },
  {
    id: 3,
    question: "En quelle année l'armistice de la Première Guerre mondiale est-il signé ?",
    options: ["1914", "1916", "1918", "1920"],
    correctAnswer: 2,
    explanation: "L'armistice est signé le 11 novembre 1918, mettant fin à la Première Guerre mondiale."
  },
  {
    id: 4,
    question: "Qui était Adolf Hitler ?",
    options: [
      "Le chancelier allemand et dictateur nazi",
      "Un général français",
      "Un roi d'Angleterre",
      "Un président américain"
    ],
    correctAnswer: 0,
    explanation: "Adolf Hitler était le chancelier allemand et le dictateur du régime nazi de 1933 à 1945."
  },
  {
    id: 5,
    question: "Quelle date marque le début de la Seconde Guerre mondiale ?",
    options: ["1er septembre 1939", "11 novembre 1918", "8 mai 1945", "6 juin 1944"],
    correctAnswer: 0,
    explanation: "La Seconde Guerre mondiale débute le 1er septembre 1939 avec l'invasion de la Pologne par l'Allemagne."
  },
  {
    id: 6,
    question: "Qu'est-ce que le génocide juif ?",
    options: [
      "Une bataille",
      "L'extermination systématique des Juifs par les nazis",
      "Un traité de paix",
      "Une révolution"
    ],
    correctAnswer: 1,
    explanation: "Le génocide juif (Shoah) est l'extermination systématique de 6 millions de Juifs par le régime nazi."
  },
  {
    id: 7,
    question: "Quel événement marque la fin de la Seconde Guerre mondiale en Europe ?",
    options: [
      "Le débarquement en Normandie",
      "La capitulation de l'Allemagne le 8 mai 1945",
      "La libération de Paris",
      "La bataille de Stalingrad"
    ],
    correctAnswer: 1,
    explanation: "La guerre en Europe se termine avec la capitulation de l'Allemagne le 8 mai 1945."
  },
  {
    id: 8,
    question: "Qu'est-ce que la Résistance française ?",
    options: [
      "Un mouvement de lutte contre l'occupation nazie",
      "Un parti politique",
      "Une armée officielle",
      "Un syndicat"
    ],
    correctAnswer: 0,
    explanation: "La Résistance française regroupe les mouvements qui luttaient contre l'occupation allemande et le régime de Vichy."
  },
  {
    id: 9,
    question: "Qui était Charles de Gaulle ?",
    options: [
      "Un roi de France",
      "Le chef de la France libre pendant la Seconde Guerre mondiale",
      "Un général allemand",
      "Un président américain"
    ],
    correctAnswer: 1,
    explanation: "Charles de Gaulle était le chef de la France libre et a refusé l'armistice de 1940."
  },
  {
    id: 10,
    question: "Qu'est-ce que l'Union européenne ?",
    options: [
      "Une alliance militaire",
      "Une organisation économique et politique de pays européens",
      "Un empire",
      "Une monarchie"
    ],
    correctAnswer: 1,
    explanation: "L'Union européenne est une organisation économique et politique regroupant 27 pays européens."
  },
  {
    id: 11,
    question: "Quand la construction européenne commence-t-elle vraiment ?",
    options: ["En 1914", "En 1945", "En 1957 avec le traité de Rome", "En 1989"],
    correctAnswer: 2,
    explanation: "La construction européenne débute en 1957 avec le traité de Rome créant la CEE (Communauté Économique Européenne)."
  }
];
