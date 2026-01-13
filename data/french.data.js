/**
 * @typedef {Object} Lesson
 * @property {number} id
 * @property {string} title
 * @property {string} content
 * @property {string[]} keyPoints
 * @property {string[]} examples
 * @property {string[]} [brevetTips]
 * @property {boolean} isPremium
 */

/**
 * Français – Programme de 3e (niveau Brevet)
 * @type {Lesson[]}
 */
export const frenchCourses = [

  /* ===================== */
  /*  ÉTUDE DE LA LANGUE   */
  /* ===================== */

  {
    id: 0,
    title: 'Les classes grammaticales et leurs fonctions',
    content: `En français, chaque mot appartient à une classe grammaticale. La classe grammaticale indique la nature du mot : ce qu’il est.\n\nDans une phrase, ce mot exerce aussi une fonction grammaticale, c’est-à-dire le rôle qu’il joue dans la phrase.\n\nIl est très important de ne pas confondre classe grammaticale et fonction. Une même classe grammaticale peut avoir plusieurs fonctions selon le contexte.\n\nAu Brevet, les questions demandent souvent d’identifier précisément la classe grammaticale ET la fonction d’un mot ou d’un groupe de mots.`,
    keyPoints: [
      'La classe grammaticale indique la nature du mot',
      'La fonction indique le rôle du mot dans la phrase',
      'Un mot peut changer de fonction selon la phrase',
      'Les fonctions principales : sujet, COD, COI, attribut, complément circonstanciel',
      'Compétence fondamentale pour l’analyse grammaticale'
    ],
    examples: [
      'Le chat dort → "chat" : nom / fonction sujet',
      'Je regarde le film → "le film" : groupe nominal COD',
      'Il parle à son ami → "à son ami" : COI',
      'Le matin, je travaille → complément circonstanciel de temps'
    ],
    brevetTips: [
      'Ne confonds jamais NATURE (ce que le mot EST) et FONCTION (ce qu\'il FAIT).',
      'Pour trouver la fonction, pose toujours la question par rapport au verbe.'
    ],
    isPremium: false
  },

  {
    id: 1,
    title: 'La phrase complexe et les propositions subordonnées',
    content: `Une phrase simple contient un seul verbe conjugué. Une phrase complexe contient plusieurs verbes conjugués.\n\nDans une phrase complexe, certaines propositions dépendent d’une proposition principale : ce sont des propositions subordonnées.\n\nIdentifier les subordonnées permet de mieux comprendre le sens de la phrase et de réussir les questions de grammaire au Brevet.`,
    keyPoints: [
      'Phrase simple : un seul verbe conjugué',
      'Phrase complexe : plusieurs verbes conjugués',
      'Subordonnée relative : introduite par un pronom relatif',
      'Subordonnée complétive : introduite par "que"',
      'Subordonnée circonstancielle : exprime le temps, la cause, le but…'
    ],
    examples: [
      'Le livre que je lis est passionnant (relative)',
      'Je pense qu’il réussira (complétive)',
      'Quand il pleut, je reste chez moi (circonstancielle)'
    ],
    brevetTips: [
      'Repère d\'abord tous les verbes conjugués pour délimiter les propositions.',
      'La subordonnée relative complète un NOM, la complétive complète un VERBE.'
    ],
    isPremium: true
  },

  {
    id: 2,
    title: 'Les types et formes de phrases',
    content: `Les phrases se classent selon leur type, qui indique ce qu’elles expriment, et selon leur forme, qui indique comment elles sont construites.\n\nSavoir reconnaître types et formes de phrases est indispensable pour l’analyse grammaticale et la réécriture.`,
    keyPoints: [
      'Types : déclaratif, interrogatif, impératif, exclamatif',
      'Formes : affirmative / négative',
      'Formes : active / passive',
      'Formes : simple / complexe',
      'Une phrase peut cumuler plusieurs formes'
    ],
    examples: [
      'Il pleut. (déclarative)',
      'Viendras-tu demain ? (interrogative)',
      'Ferme la porte ! (impérative)',
      'Ce film est incroyable ! (exclamative)'
    ],
    brevetTips: [
      'En réécriture, attention à bien transformer tous les éléments (sujet, verbe, accords) lors du passage à la forme négative ou passive.'
    ],
    isPremium: false
  },

  {
    id: 3,
    title: 'Les valeurs des temps verbaux',
    content: `Les temps verbaux ne servent pas seulement à situer une action dans le temps. Ils permettent aussi d’exprimer la durée, l’habitude, l’hypothèse, le doute ou l’ordre.\n\nAu Brevet, on attend que l’élève sache expliquer la valeur d’un temps dans un contexte précis.`,
    keyPoints: [
      'Présent : action actuelle, habitude ou vérité générale',
      'Imparfait : description, action habituelle ou durée',
      'Passé composé : action passée terminée',
      'Futur : action à venir',
      'Conditionnel : hypothèse, politesse',
      'Subjonctif : doute, souhait, sentiment'
    ],
    examples: [
      'Il travaille tous les jours (présent de vérité générale)',
      'Il travaillait quand je suis arrivé (imparfait)',
      'Il aurait accepté s’il avait su (conditionnel)',
      'Je veux qu’il réussisse (subjonctif)'
    ],
    brevetTips: [
      'Pour l\'imparfait et le passé simple dans un récit : l\'imparfait sert au décor (arrière-plan), le passé simple aux actions soudaines (premier plan).'
    ],
    isPremium: true
  },

  {
    id: 4,
    title: 'La voix active et la voix passive',
    content: `Dans une phrase à la voix active, le sujet fait l’action. Dans une phrase à la voix passive, le sujet subit l’action.\n\nLa transformation de la voix active à la voix passive est une compétence fréquemment évaluée au Brevet.`,
    keyPoints: [
      'Voix active : sujet acteur',
      'Voix passive : sujet qui subit l’action',
      'Le verbe est construit avec être + participe passé',
      'Le complément d’agent est introduit par "par" ou "de"',
      'Toutes les phrases actives ne peuvent pas être passivées'
    ],
    examples: [
      'Le chat mange la souris (active)',
      'La souris est mangée par le chat (passive)'
    ],
    brevetTips: [
      'Lors du passage au passif, n\'oublie pas d\'accorder le participe passé avec le nouveau sujet !'
    ],
    isPremium: false
  },

  {
    id: 5,
    title: 'Discours direct, indirect et indirect libre',
    content: `Le discours permet de rapporter les paroles ou les pensées d’un personnage.\n\nLe passage d’un type de discours à un autre implique des transformations grammaticales.`,
    keyPoints: [
      'Discours direct : paroles exactes avec guillemets',
      'Discours indirect : paroles intégrées dans la phrase',
      'Discours indirect libre : mélange narration et paroles',
      'Changement des pronoms et des temps verbaux'
    ],
    examples: [
      'Il dit : « Je viendrai demain. »',
      'Il dit qu’il viendra le lendemain',
      'Il viendrait donc le lendemain ?'
    ],
    brevetTips: [
      'Le discours indirect libre est souvent utilisé pour exprimer les pensées intimes d\'un personnage sans rompre le fil du récit.'
    ],
    isPremium: true
  },

  /* ===================== */
  /*   ORTHOGRAPHE        */
  /* ===================== */

  {
    id: 6,
    title: 'Les accords : sujet-verbe et participe passé',
    content: `L’accord est une règle fondamentale de l’orthographe grammaticale.\n\nLes erreurs d’accord sont très pénalisantes au Brevet, notamment dans la dictée et la rédaction.`,
    keyPoints: [
      'Le verbe s’accorde avec le sujet',
      'Avec être, le participe passé s’accorde avec le sujet',
      'Avec avoir, il s’accorde avec le COD s’il est placé avant',
      'Attention aux verbes pronominaux',
      'Toujours repérer le sujet et le COD'
    ],
    examples: [
      'Les élèves réussissent',
      'Elles sont parties',
      'Les lettres que j’ai écrites'
    ],
    brevetTips: [
      'Dans la dictée, relis-toi en cherchant systématiquement le sujet de chaque verbe.'
    ],
    isPremium: true
  },

  {
    id: 7,
    title: 'Les homophones grammaticaux',
    content: `Les homophones grammaticaux se prononcent de la même manière mais n’ont ni le même sens ni la même fonction.\n\nIls font partie des erreurs les plus fréquentes au Brevet.`,
    keyPoints: [
      'a / à',
      'et / est',
      'son / sont',
      'ce / se',
      'ou / où'
    ],
    examples: [
      'Il a oublié son sac',
      'Ils sont prêts à partir',
      'Où vas-tu ? ou restes-tu ici ?'
    ],
    brevetTips: [
      'Remplace par un équivalent pour choisir : "a" par "avait", "et" par "et puis", "son" par "mon".'
    ],
    isPremium: false
  },

  /* ===================== */
  /*   VOCABULAIRE        */
  /* ===================== */

  {
    id: 8,
    title: 'Les figures de style',
    content: `Les figures de style sont des procédés d’écriture qui enrichissent l’expression et produisent des effets sur le lecteur.\n\nElles sont essentielles pour analyser un texte littéraire.`,
    keyPoints: [
      'Comparaison : rapprochement avec outil',
      'Métaphore : comparaison implicite',
      'Personnification : traits humains',
      'Hyperbole : exagération',
      'Anaphore : répétition en début de phrase'
    ],
    examples: [
      'Fort comme un lion (comparaison)',
      'Une mer de lumière (métaphore)',
      'La ville s’endort (personnification)'
    ],
    brevetTips: [
      'Ne te contente pas de nommer la figure, explique l\'effet qu\'elle produit sur le lecteur.'
    ],
    isPremium: true
  },

  {
    id: 9,
    title: 'Les registres littéraires',
    content: `Le registre littéraire correspond à l’effet recherché par l’auteur sur le lecteur.\n\nUn même texte peut contenir plusieurs registres.`,
    keyPoints: [
      'Comique : faire rire',
      'Tragique : fatalité, mort',
      'Pathétique : pitié, compassion',
      'Lyrique : sentiments personnels',
      'Polémique : dénoncer, critiquer'
    ],
    examples: [
      'Scène comique de théâtre',
      'Mort d’un héros tragique',
      'Discours engagé'
    ],
    brevetTips: [
      'Le registre pathétique cherche à provoquer la pitié, ne le confonds pas avec le tragique qui est lié à la fatalité.'
    ],
    isPremium: true
  },

  /* ===================== */
  /*   LECTURE / ÉCRITURE */
  /* ===================== */

  {
    id: 10,
    title: 'Les grands thèmes littéraires du programme de 3e',
    content: `Le programme de français de 3e est organisé autour de grands thèmes étudiés à travers différents genres littéraires.\n\nCes thèmes structurent les lectures et les analyses de textes.`,
    keyPoints: [
      'Se raconter, se représenter',
      'Dénoncer les travers de la société',
      'Visions poétiques du monde',
      'Agir dans la cité : individu et pouvoir'
    ],
    examples: [
      'Autobiographie',
      'Poésie engagée',
      'Théâtre politique'
    ],
    brevetTips: [
      'Garde en tête ces thèmes lors de l\'épreuve de réflexion pour trouver des exemples littéraires.'
    ],
    isPremium: false
  },

  {
    id: 11,
    title: 'Écriture et préparation au Brevet',
    content: `L’épreuve écrite du Brevet évalue la capacité à rédiger un texte clair, organisé et correct.\n\nLa maîtrise de la langue est aussi importante que les idées.`,
    keyPoints: [
      'Rédiger un récit cohérent',
      'Construire une argumentation',
      'Réécrire un texte',
      'Respecter les consignes et le temps'
    ],
    examples: [
      'Sujet d’imagination',
      'Sujet de réflexion',
      'Exercice de réécriture'
    ],
    brevetTips: [
      'Garde 10 minutes à la fin pour une relecture ciblée sur l\'orthographe et les accords.'
    ],
    isPremium: true
  }
];
