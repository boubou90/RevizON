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
 * SVT – Programme de 3e
 * @type {Lesson[]}
 */
export const svtCourses = [
  {
    id: 0,
    title: 'La cellule',
    content: `La cellule est l\'unité de base de tous les êtres vivants.\n\nIl existe deux types : cellules animales et cellules végétales.\n\nToutes les cellules ont un noyau, du cytoplasme et une membrane.`,
    keyPoints: [
      'La cellule est l\'unité du vivant',
      'Membrane : enveloppe de la cellule',
      'Cytoplasme : contenu de la cellule',
      'Noyau : contient l\'ADN',
      'Cellule végétale : a une paroi et des chloroplastes'
    ],
    examples: ['Cellule animale', 'Cellule végétale', 'Bactérie (cellule sans noyau)'],
    isPremium: false
  },
  {
    id: 1,
    title: 'La respiration',
    content: `La respiration permet aux êtres vivants d\'obtenir de l\'énergie.\n\nÉquation : Glucose + Oxygène → Énergie + Eau + CO2\n\nLes poumons captent l\'oxygène de l\'air.`,
    keyPoints: [
      'La respiration produit de l\'énergie',
      'Besoin d\'oxygène (O2)',
      'Rejet de dioxyde de carbone (CO2)',
      'Poumons chez l\'Homme',
      'Branchies chez les poissons'
    ],
    examples: ['Respiration pulmonaire (Homme)', 'Respiration branchiale (poisson)', 'Respiration cutanée (grenouille)'],
    isPremium: false
  },
  {
    id: 2,
    title: 'La nutrition et la digestion',
    content: `La digestion transforme les aliments en nutriments utilisables par le corps.\n\nLe système digestif comprend la bouche, l\'estomac, l\'intestin.`,
    keyPoints: [
      'Digestion : transformation des aliments',
      'Nutriments : glucides, lipides, protéines',
      'Rôle de l\'estomac : brasser et de l\'eau',
      'Absorption des nutriments dans l\'intestin',
      'Élimination des déchets'
    ],
    examples: ['Digestion du pain', 'Absorption dans l\'intestin grêle', 'Rôle du foie'],
    isPremium: true
  },
  {
    id: 3,
    title: 'La reproduction des végétaux',
    content: `Les plantes à fleurs se reproduisent grâce à la pollinisation.\n\nLe pollen des étamines féconde le pistil pour former des graines.`,
    keyPoints: [
      'Fleur : organe de reproduction',
      'Étamines : organes mâles (pollen)',
      'Pistil : organe femelle (ovules)',
      'Pollinisation par insectes ou vent',
      'Graine : nouvelle plante'
    ],
    examples: ['Pollinisation par les abeilles', 'Formation d\'un fruit', 'Germination d\'une graine'],
    isPremium: true
  }
];
