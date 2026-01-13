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
 * Cours développés – FREE + PREMIUM
 * @type {Lesson[]}
 */
export const svtCourses = [

  /* ================================================= */
  /*  THÈME 1 – PLANÈTE TERRE & ACTION HUMAINE          */
  /* ================================================= */

  {
    id: 0,
    title: 'Les séismes et leur prévention',
    content: `Un séisme est une vibration brutale du sol provoquée par la rupture soudaine de roches en profondeur. Cette rupture libère une grande quantité d’énergie qui se propage sous forme d’ondes sismiques.\n\nLes séismes sont principalement liés aux mouvements des plaques tectoniques. Ils se produisent souvent le long des failles situées aux limites de ces plaques.\n\nOn ne peut pas empêcher ni prévoir précisément un séisme. En revanche, il est possible de limiter ses conséquences grâce à la prévention : construction de bâtiments parasismiques, information des populations et organisation des secours.\n\nLa prévention permet ainsi de réduire le nombre de victimes et l’importance des dégâts matériels.`,
    keyPoints: [
      'Séisme = rupture de roches en profondeur',
      'Libération d’énergie sous forme d’ondes sismiques',
      'Lien avec les plaques tectoniques',
      'Magnitude ≠ intensité',
      'La prévention limite les risques'
    ],
    examples: [
      'Failles tectoniques actives',
      'Normes parasismiques',
      'Consignes de sécurité en cas de séisme'
    ],
    skills: [
      'Pratiquer des démarches scientifiques',
      'Exploiter des documents scientifiques',
      'Comprendre les enjeux de sécurité des populations'
    ],
    brevetTips: [
      'Un séisme ne se prévoit pas, mais ses effets se préviennent.',
      'La magnitude mesure l’énergie, l’intensité mesure les dégâts.'
    ],
    isPremium: false
  },

  {
    id: 1,
    title: 'Les volcans et leur surveillance',
    content: `Un volcan est une structure géologique par laquelle du magma provenant du manteau terrestre remonte à la surface.\n\nOn distingue deux grands types de volcans. Les volcans effusifs produisent des coulées de lave fluides peu dangereuses. Les volcans explosifs provoquent des éruptions violentes accompagnées de projections, de cendres et de nuées ardentes.\n\nLes volcans sont souvent situés aux limites des plaques tectoniques ou au-dessus de points chauds.\n\nLa surveillance volcanique repose sur l’observation de nombreux paramètres : séismes, déformations du sol, émissions de gaz. Elle permet de réduire les risques pour les populations.`,
    keyPoints: [
      'Le magma provient du manteau',
      'Volcans effusifs : éruptions calmes',
      'Volcans explosifs : éruptions violentes',
      'Lien avec les plaques tectoniques',
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
    content: `Un aléa est un phénomène naturel potentiellement dangereux, comme un séisme, une inondation ou une éruption volcanique.\n\nLes enjeux correspondent aux populations, aux biens et aux infrastructures exposés à cet aléa.\n\nLe risque naturel résulte donc de la rencontre entre un aléa et des enjeux.\n\nLa prévention repose sur l’aménagement du territoire, l’information des populations et l’adoption de comportements adaptés afin de limiter les conséquences des catastrophes.`,
    keyPoints: [
      'Aléa : phénomène naturel',
      'Enjeu : humains et infrastructures',
      'Risque = aléa + enjeux',
      'La prévention réduit les dégâts',
      'Rôle de l’action humaine'
    ],
    examples: [
      'Inondations en zone urbanisée',
      'Plans de prévention des risques',
      'Cartes des zones à risques'
    ],
    skills: [
      'Adopter un comportement éthique et responsable',
      'Comprendre les interactions Homme–environnement',
      'Exploiter des documents de prévention'
    ],
    brevetTips: [
      'Définition essentielle au Brevet.',
      'Toujours illustrer avec un exemple précis.'
    ],
    isPremium: false
  },

  /* ================================================ */
  /*  THÈME 2 – LE VIVANT ET SON ÉVOLUTION             */
  /* ================================================ */

  {
    id: 3,
    title: 'La nutrition des êtres vivants',
    content: `Tous les êtres vivants ont besoin de matière et d’énergie pour vivre et se développer.\n\nLes végétaux chlorophylliens produisent leur propre matière organique grâce à la photosynthèse, à partir d’eau, de dioxyde de carbone et d’énergie lumineuse.\n\nLes animaux, eux, doivent consommer de la matière organique produite par d’autres êtres vivants.\n\nÀ l’échelle des cellules, la respiration permet de libérer l’énergie contenue dans la matière organique.`,
    keyPoints: [
      'Besoin de matière et d’énergie',
      'Végétaux producteurs',
      'Animaux consommateurs',
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
      'La photosynthèse a lieu dans les chloroplastes.',
      'Elle nécessite lumière, CO₂ et eau.'
    ],
    isPremium: false
  },

  {
    id: 4,
    title: 'Chaînes alimentaires et écosystèmes',
    content: `Dans un écosystème, les êtres vivants sont liés entre eux par des relations alimentaires.\n\nUne chaîne alimentaire est une succession d’êtres vivants où chacun se nourrit du précédent.\n\nL’ensemble des chaînes alimentaires forme un réseau trophique.\n\nL’équilibre d’un écosystème est fragile : la disparition ou l’introduction d’une espèce peut perturber tout le réseau.`,
    keyPoints: [
      'Chaîne alimentaire',
      'Réseau trophique',
      'Producteurs, consommateurs, décomposeurs',
      'Équilibre des écosystèmes',
      'Fragilité des milieux'
    ],
    examples: [
      'Herbe → lapin → renard',
      'Pollution d’un milieu',
      'Disparition d’un prédateur'
    ],
    skills: [
      'Modéliser des relations biologiques',
      'Analyser l’impact des activités humaines',
      'Interpréter des schémas'
    ],
    brevetTips: [
      'Une perturbation peut déséquilibrer tout l’écosystème.',
      'Toujours commencer par le producteur.'
    ],
    isPremium: true
  },

  {
    id: 5,
    title: 'Biodiversité et évolution des espèces',
    content: `La biodiversité correspond à la diversité des êtres vivants présents sur Terre.\n\nAu cours du temps, les espèces évoluent sous l’effet de la sélection naturelle. Les individus les mieux adaptés à leur environnement ont plus de chances de survivre et de se reproduire.\n\nLes fossiles permettent de retracer l’histoire de la vie et de montrer que la biodiversité a beaucoup varié au cours des temps géologiques.`,
    keyPoints: [
      'Diversité du vivant',
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
    content: `La reproduction humaine permet la transmission de la vie.\n\nElle repose sur le fonctionnement coordonné des appareils reproducteurs masculin et féminin.\n\nLa fécondation correspond à la rencontre d’un spermatozoïde et d’un ovule. La grossesse permet le développement de l’embryon puis du fœtus.\n\nLa contraception et la prévention des IST sont essentielles pour une sexualité responsable.`,
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
      'Les schémas sont très fréquents au Brevet.',
      'Attention aux confusions de vocabulaire.'
    ],
    isPremium: false
  },

  {
    id: 7,
    title: 'Le système immunitaire',
    content: `Le système immunitaire protège l’organisme contre les agents pathogènes.\n\nLa réponse immunitaire non spécifique agit rapidement grâce aux barrières naturelles et à l’inflammation.\n\nLa réponse immunitaire spécifique met en jeu les lymphocytes et produit des anticorps. Elle laisse une mémoire immunitaire, utilisée lors de la vaccination.`,
    keyPoints: [
      'Agents pathogènes',
      'Réponse non spécifique',
      'Réponse spécifique',
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
    content: `Le système nerveux permet de recevoir, traiter et transmettre rapidement des informations.\n\nIl est constitué du cerveau, de la moelle épinière et des nerfs.\n\nLes neurones assurent la transmission du message nerveux.\n\nCertains comportements, comme la consommation de drogues ou d’alcool, peuvent perturber le fonctionnement du système nerveux.`,
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