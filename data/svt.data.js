/**
 * @typedef {Object} Lesson
 * @property {number} id
 * @property {string} title
 * @property {string} content
 * @property {string[]} keyPoints
 * @property {string[]} examples
 * @property {string[]} skills
 * @property {string[]} [brevetTips]
 * @property {boolean} isPremium
 */

/**
 * SVT – Programme de 3e (Cycle 4 – Brevet)
 * FREE + PREMIUM
 * @type {Lesson[]}
 */
export const svtCourses = [

  /* ================================================= */
  /*  THÈME 1 – PLANÈTE TERRE & ACTION HUMAINE          */
  /* ================================================= */

  {
    id: 0,
    title: 'Les séismes et leur prévention',
    content: `Un séisme est une vibration brutale du sol liée à la rupture de roches en profondeur.\n\nLes séismes sont dus aux mouvements des plaques tectoniques. Ils ne peuvent pas être prévus avec précision, mais leurs conséquences peuvent être limitées grâce à la prévention.`,
    keyPoints: [
      'Séisme = libération brutale d’énergie',
      'Lien avec les plaques tectoniques',
      'Magnitude et intensité',
      'Zones à risques sismiques',
      'Prévention des risques'
    ],
    examples: [
      'Failles tectoniques',
      'Normes parasismiques',
      'Exercices d’évacuation'
    ],
    skills: [
      'Pratiquer des démarches scientifiques',
      'Exploiter des documents scientifiques',
      'Comprendre les enjeux de sécurité des populations'
    ],
    brevetTips: [
      'Séisme ≠ volcan.',
      'Un séisme ne se prévoit pas, il se prévient.'
    ],
    isPremium: false
  },

  {
    id: 1,
    title: 'Les volcans et leur surveillance',
    content: `Les volcans permettent la remontée du magma à la surface.\n\nIl existe des volcans effusifs et explosifs. Leur surveillance permet d’anticiper les risques pour les populations.`,
    keyPoints: [
      'Origine du magma',
      'Volcans effusifs / explosifs',
      'Lien avec les plaques tectoniques',
      'Risques volcaniques',
      'Surveillance scientifique'
    ],
    examples: [
      'Coulées de lave',
      'Nuées ardentes',
      'Sismographes et satellites'
    ],
    skills: [
      'Analyser des phénomènes naturels',
      'Relier observations et modèles scientifiques',
      'Comprendre la gestion des risques naturels'
    ],
    brevetTips: [
      'Les volcans explosifs sont les plus dangereux.',
      'Toujours associer type de volcan et type d’éruption.'
    ],
    isPremium: true
  },

  {
    id: 2,
    title: 'Aléa, enjeu et risque naturel',
    content: `Un risque naturel résulte de la rencontre entre un aléa et des enjeux humains.\n\nLa prévention repose sur l’aménagement du territoire, l’information et les comportements adaptés.`,
    keyPoints: [
      'Aléa : phénomène naturel',
      'Enjeu : populations et infrastructures',
      'Risque = aléa + enjeux',
      'Prévention et protection',
      'Responsabilité humaine'
    ],
    examples: [
      'Inondations en zones urbanisées',
      'Plans de prévention des risques',
      'Cartes de zones à risques'
    ],
    skills: [
      'Adopter un comportement éthique et responsable',
      'Comprendre les interactions Homme–environnement',
      'Exploiter des documents de prévention'
    ],
    brevetTips: [
      'Définition classique du Brevet.',
      'Toujours illustrer par un exemple.'
    ],
    isPremium: false
  },

  /* ================================================ */
  /*  THÈME 2 – LE VIVANT ET SON ÉVOLUTION             */
  /* ================================================ */

  {
    id: 3,
    title: 'La nutrition des êtres vivants',
    content: `Tous les êtres vivants ont besoin de matière et d’énergie.\n\nLes végétaux produisent leur matière organique grâce à la photosynthèse, contrairement aux animaux.`,
    keyPoints: [
      'Besoins des cellules',
      'Producteurs et consommateurs',
      'Photosynthèse',
      'Respiration cellulaire'
    ],
    examples: [
      'Plante chlorophyllienne',
      'Chaîne alimentaire',
      'Respiration'
    ],
    skills: [
      'Pratiquer des démarches scientifiques',
      'Comprendre le fonctionnement du vivant',
      'Utiliser un vocabulaire scientifique précis'
    ],
    brevetTips: [
      'La photosynthèse produit de la matière organique.',
      'Elle nécessite lumière, CO₂ et eau.'
    ],
    isPremium: false
  },

  {
    id: 4,
    title: 'Chaînes alimentaires et écosystèmes',
    content: `Les relations alimentaires relient les êtres vivants d’un écosystème.\n\nCes relations forment des réseaux trophiques assurant l’équilibre du milieu.`,
    keyPoints: [
      'Chaînes alimentaires',
      'Réseaux trophiques',
      'Producteurs / consommateurs / décomposeurs',
      'Équilibre des écosystèmes'
    ],
    examples: [
      'Herbe → lapin → renard',
      'Disparition d’une espèce',
      'Pollution d’un milieu'
    ],
    skills: [
      'Modéliser des relations biologiques',
      'Analyser l’impact des activités humaines',
      'Interpréter des schémas'
    ],
    brevetTips: [
      'Une perturbation affecte tout le réseau.',
      'Toujours commencer par le producteur.'
    ],
    isPremium: true
  },

  {
    id: 5,
    title: 'Biodiversité et évolution des espèces',
    content: `La biodiversité correspond à la diversité du vivant.\n\nElle évolue sous l’effet de la sélection naturelle et des changements environnementaux.`,
    keyPoints: [
      'Diversité des espèces',
      'Sélection naturelle',
      'Adaptation',
      'Fossiles',
      'Crises biologiques'
    ],
    examples: [
      'Extinction des dinosaures',
      'Adaptation au milieu',
      'Fossiles'
    ],
    skills: [
      'Relier passé et présent du vivant',
      'Comprendre les mécanismes de l’évolution',
      'Exploiter des données scientifiques'
    ],
    brevetTips: [
      'Une espèce évolue, pas un individu.',
      'L’évolution n’est pas un progrès.'
    ],
    isPremium: true
  },

  /* ================================================ */
  /*  THÈME 3 – CORPS HUMAIN & SANTÉ                   */
  /* ================================================ */

  {
    id: 6,
    title: 'La reproduction humaine',
    content: `La reproduction humaine permet la transmission de la vie.\n\nElle repose sur le fonctionnement coordonné des appareils reproducteurs.`,
    keyPoints: [
      'Gamètes',
      'Fécondation',
      'Grossesse',
      'Contraception',
      'Prévention des IST'
    ],
    examples: [
      'Cycle menstruel',
      'Fécondation',
      'Moyens de contraception'
    ],
    skills: [
      'Comprendre le fonctionnement du corps humain',
      'Adopter un comportement responsable',
      'Utiliser un vocabulaire scientifique précis'
    ],
    brevetTips: [
      'Schémas très fréquents au Brevet.',
      'Attention aux confusions vocabulaire.'
    ],
    isPremium: false
  },

  {
    id: 7,
    title: 'Le système immunitaire',
    content: `Le système immunitaire protège l’organisme contre les agents pathogènes.\n\nIl existe une réponse rapide non spécifique et une réponse spécifique avec mémoire.`,
    keyPoints: [
      'Agents pathogènes',
      'Réponse immunitaire non spécifique',
      'Réponse immunitaire spécifique',
      'Anticorps',
      'Vaccination'
    ],
    examples: [
      'Inflammation',
      'Vaccins',
      'Antibiotiques'
    ],
    skills: [
      'Comprendre des mécanismes biologiques',
      'Relier sciences et santé',
      'Développer l’esprit critique'
    ],
    brevetTips: [
      'Les antibiotiques n’agissent pas sur les virus.',
      'La vaccination repose sur la mémoire immunitaire.'
    ],
    isPremium: true
  },

  {
    id: 8,
    title: 'Système nerveux et comportements responsables',
    content: `Le système nerveux permet la transmission rapide d’informations.\n\nCertains comportements peuvent perturber son fonctionnement.`,
    keyPoints: [
      'Cerveau, moelle épinière, nerfs',
      'Neurones',
      'Message nerveux',
      'Réflexes',
      'Addictions'
    ],
    examples: [
      'Arc réflexe',
      'Effets des drogues',
      'Addictions'
    ],
    skills: [
      'Comprendre le fonctionnement du corps humain',
      'Adopter un comportement responsable',
      'Relier SVT et santé publique'
    ],
    brevetTips: [
      'Le message nerveux est électrique et chimique.',
      'Lien fréquent avec l’EMC.'
    ],
    isPremium: false
  }

];