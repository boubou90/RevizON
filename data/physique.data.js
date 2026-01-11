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
 * Physique-Chimie – Programme de 3e
 * @type {Lesson[]}
 */
export const physiqueCourses = [
  {
    id: 0,
    title: 'Les états de la matière',
    content: `La matière existe sous trois états : solide, liquide, gazeux.\n\nChangements d\'état : fusion, solidification, vaporisation, liquéfaction.`,
    keyPoints: [
      'État solide : forme et volume définis',
      'État liquide : volume défini, forme variable',
      'État gazeux : ni forme ni volume définis',
      'Fusion : solide → liquide',
      'Vaporisation : liquide → gaz'
    ],
    examples: ['Glace → Eau → Vapeur', 'Fer solide qui fond', 'Eau qui bout'],
    isPremium: false
  },
  {
    id: 1,
    title: 'Les circuits électriques',
    content: `Un circuit électrique est un parcours fermé où circule le courant.\n\nComposants de base : pile (générateur), fils, lampe (récepteur), interrupteur.`,
    keyPoints: [
      'Circuit fermé : le courant circule',
      'Circuit ouvert : pas de courant',
      'Générateur : produit le courant (pile)',
      'Récepteur : utilise le courant (lampe)',
      'Court-circuit : danger !'
    ],
    examples: ['Circuit simple avec une pile et une lampe', 'Circuit avec interrupteur', 'Circuit en série'],
    isPremium: false
  },
  {
    id: 2,
    title: 'La lumière et les ombres',
    content: `La lumière se propage en ligne droite.\n\nUne source de lumière éclaire les objets. Les objets opaques créent des ombres.`,
    keyPoints: [
      'Propagation rectiligne de la lumière',
      'Source primaire : produit de la lumière (Soleil, lampe)',
      'Source secondaire : réfléchit la lumière (Lune)',
      'Objet opaque : ne laisse pas passer la lumière',
      'Ombre : zone non éclairée'
    ],
    examples: ['Ombre d\'un arbre', 'Rayon de soleil dans la poussière', 'Éclipse'],
    isPremium: true
  },
  {
    id: 3,
    title: 'Le système solaire',
    content: `Le système solaire est composé du Soleil et des 8 planètes qui tournent autour.\n\nOrdre : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune.`,
    keyPoints: [
      'Le Soleil est une étoile',
      '8 planètes tournent autour du Soleil',
      'Planètes telluriques : Mercure, Vénus, Terre, Mars',
      'Planètes gazeuses : Jupiter, Saturne, Uranus, Neptune',
      'La Terre met 365 jours pour faire le tour du Soleil'
    ],
    examples: ['La Terre (planète tellurique)', 'Jupiter (géante gazeuse)', 'Saturne et ses anneaux'],
    isPremium: true
  }
];
