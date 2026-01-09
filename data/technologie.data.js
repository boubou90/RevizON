/**
 * @typedef {Object} Lesson
 * @property {number} id
 * @property {string} title
 * @property {string} content
 * @property {string[]} keyPoints
 * @property {string[]} examples
 * @property {boolean} isPremium
 */

/**
 * Technologie – Programme de 3e
 * @type {Lesson[]}
 */
export const technologieCourses = [
  {
    id: 0,
    title: 'Les matériaux',
    content: `Les objets sont fabriqués à partir de différents matériaux : bois, métal, plastique, verre.\n\nChaque matériau a des propriétés spécifiques (résistance, flexibilité, conductivité).`,
    keyPoints: [
      'Matériaux naturels : bois, pierre, coton',
      'Matériaux artificiels : plastique, acier, verre',
      'Propriétés : dureté, élasticité, conductivité',
      'Choix du matériau selon l\'usage',
      'Recyclage des matériaux'
    ],
    examples: ['Table en bois', 'Fil électrique en cuivre', 'Bouteille en plastique'],
    isPremium: false
  },
  {
    id: 1,
    title: 'Les objets techniques',
    content: `Un objet technique répond à un besoin. Il est composé de plusieurs pièces qui ont chacune une fonction.\n\nExemple : un vélo permet de se déplacer.`,
    keyPoints: [
      'Besoin : ce qu\'on veut faire',
      'Fonction d\'usage : à quoi sert l\'objet',
      'Fonction technique : comment ça marche',
      'Assemblage de pièces',
      'Évolution des objets techniques'
    ],
    examples: ['Vélo : se déplacer', 'Lampe : éclairer', 'Téléphone : communiquer'],
    isPremium: false
  },
  {
    id: 2,
    title: 'Les engrenages et transmission',
    content: `Les engrenages sont des roues dentées qui transmettent un mouvement.\n\nIls permettent de changer la vitesse ou la direction d\'un mouvement.`,
    keyPoints: [
      'Engrenage : système de roues dentées',
      'Transmission de mouvement',
      'Rapport de vitesse selon la taille',
      'Changement de direction du mouvement',
      'Utilisation : vélo, horloge, voiture'
    ],
    examples: ['Engrenages d\'un vélo', 'Mécanisme d\'horloge', 'Boîte de vitesses'],
    isPremium: true
  },
  {
    id: 3,
    title: 'L\'informatique et la programmation',
    content: `Un ordinateur exécute des programmes (logiciels) pour effectuer des tâches.\n\nLa programmation consiste à donner des instructions à l\'ordinateur.`,
    keyPoints: [
      'Ordinateur : machine qui traite l\'information',
      'Programme : suite d\'instructions',
      'Algorithme : méthode de résolution',
      'Langage de programmation (Scratch, Python)',
      'Robotique : programmer des machines'
    ],
    examples: ['Programme Scratch', 'Robot qui suit un parcours', 'Application mobile'],
    isPremium: true
  }
];
