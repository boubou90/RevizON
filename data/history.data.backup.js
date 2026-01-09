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
 * Histoire – Géographie – EMC | Programme de 3e
 * @type {{ history: Lesson[], geography: Lesson[], emc: Lesson[] }}
 */
export const hgeoEmcCourses = {

  /* ================================================= */
  /* ===================== HISTOIRE ================== */
  /* ================================================= */

  history: [

    {
      id: 0,
      title: 'Civils et militaires dans la Première Guerre mondiale (1914-1918)',
      content: `La Première Guerre mondiale débute in 1914 après l’assassinat de l’archiduc François-Ferdinand à Sarajevo. Elle oppose la Triple-Entente (France, Royaume-Uni, Russie) aux Empires centraux (Allemagne, Autriche-Hongrie).\n\nAprès une courte guerre de mouvement in 1914, le conflit devient une guerre de position. Les soldats vivent dans les tranchées, dans des conditions extrêmement difficiles : boue, froid, promiscuité, bombardements constants.\n\nLes civils sont eux aussi touchés : pénuries, bombardements, travail des femmes dans les usines d’armement. Cette mobilisation totale des sociétés fait de ce conflit une guerre totale.\n\nEn 1915, le gouvernement ottoman organise le génocide des Arméniens : environ 1,3 million de personnes sont déportées et massacrées.\n\nLa guerre se termine par l’armistice du 11 novembre 1918. Le bilan humain est très lourd : environ 10 millions de morts.`,
      keyPoints: [
        '1914-1918 : Première Guerre mondiale',
        'Guerre de mouvement puis guerre de position',
        'Guerre des tranchées',
        'Guerre totale',
        'Génocide des Arméniens (1915)',
        'Armistice du 11 novembre 1918'
      ],
      examples: [
        'Conditions de vie dans les tranchées',
        'Bombardements des villes',
        'Travail des femmes',
        'Déportation des Arméniens'
      ],
      brevetTips: [
        'Toujours définir « guerre totale »',
        'Citer au moins une date précise',
        'Ne pas oublier le génocide arménien'
      ],
      isPremium: false
    },

    {
      id: 1,
      title: 'Démocraties fragilisées et expériences totalitaires (années 1930)',
      content: `Après la Première Guerre mondiale, les démocraties européennes sont fragilisées par la crise économique de 1929, le chômage et l’instabilité politique.\n\nDans ce contexte apparaissent des régimes totalitaires.\n\nEn URSS, Staline met en place une dictature fondée sur le parti unique, la propagande et la terreur (police politique, Goulag).\n\nEn Allemagne, Adolf Hitler arrive au pouvoir in 1933. Le régime nazi impose une idéologie raciste et antisémite, persécute les opposants et contrôle la population.\n\nLes régimes totalitaires cherchent à contrôler totalement la société et les individus.`,
      keyPoints: [
        'Crise économique de 1929',
        'URSS de Staline',
        'Allemagne nazie d’Hitler',
        'Parti unique',
        'Propagande et terreur',
        'Culte du chef'
      ],
      examples: [
        'Goulag',
        'Affiches de propagande',
        'Lois antisémites'
      ],
      brevetTips: [
        'Citer Staline et Hitler',
        'Donner au moins deux caractéristiques du totalitarisme'
      ],
      isPremium: true
    },

    {
      id: 2,
      title: 'La Seconde Guerre mondiale : une guerre d’anéantissement (1939-1945)',
      content: `La Seconde Guerre mondiale commence in septembre 1939 avec l’invasion de la Pologne par l’Allemagne nazie.\n\nElle oppose les Alliés (États-Unis, URSS, Royaume-Uni) à l’Axe (Allemagne, Italie, Japon).\n\nCe conflit est une guerre d’anéantissement : l’objectif est de détruire totalement l’ennemi.\n\nLe régime nazi organise le génocide des Juifs et des Tziganes. Environ 6 millions de Juifs sont assassinés dans les camps d’extermination.\n\nLa guerre se termine in 1945 avec la capitulation de l’Allemagne in mai et du Japon in septembre.`,
      keyPoints: [
        '1939-1945 : Seconde Guerre mondiale',
        'Guerre d’anéantissement',
        'Génocide des Juifs et des Tziganes',
        'Camps d’extermination',
        'Capitulation de 1945'
      ],
      examples: [
        'Auschwitz',
        'Bombardements massifs',
        'Résistance'
      ],
      brevetTips: [
        'Définir « guerre d’anéantissement »',
        'Ne pas confondre camps',
        'Savoir dater 1945'
      ],
      isPremium: true
    },

    {
      id: 3,
      title: 'La France dans la Seconde Guerre mondiale',
      content: `En juin 1940, la France est vaincue par l’Allemagne nazie.\n\nLe maréchal Pétain instaure le régime de Vichy, qui collabore avec l’occupant allemand.\n\nLe général de Gaulle appelle à la Résistance dès le 18 juin 1940. Jean Moulin unifie la Résistance intérieure.\n\nLa Libération de la France a lieu entre 1944 et 1945.`,
      keyPoints: [
        'Défaite de 1940',
        'Régime de Vichy',
        'Collaboration',
        'Résistance',
        'Appel du 18 juin 1940',
        'Libération'
      ],
      examples: [
        'Charles de Gaulle',
        'Jean Moulin',
        'Débarquement de 1944'
      ],
      brevetTips: [
        'Ne pas confondre Vichy et Résistance',
        'Citer un personnage clé'
      ],
      isPremium: false
    },

    {
      id: 4,
      title: 'Le monde depuis 1945 : décolonisation et Guerre froide',
      content: `Après 1945, le monde est marqué par la décolonisation et par la Guerre froide.\n\nDe nombreux peuples colonisés accèdent à l’indépendance, notamment in Afrique et in Asie. La guerre d’Algérie (1954-1962) est un conflit majeur.\n\nLe monde est divisé in deux blocs opposés : les États-Unis et l’URSS. Cette rivalité dure jusqu’à la chute du Mur de Berlin in 1989.`,
      keyPoints: [
        'Décolonisation',
        'Guerre d’Algérie (1954-1962)',
        'Guerre froide',
        'Deux blocs',
        'Chute du Mur de Berlin (1989)'
      ],
      examples: [
        'Indépendance de l’Algérie',
        'Crise de Cuba',
        'Mur de Berlin'
      ],
      brevetTips: [
        'Toujours dater 1989',
        'Expliquer la notion de bloc'
      ],
      isPremium: false
    }
  ],

  /* ================================================= */
  /* =================== GÉOGRAPHIE ================== */
  /* ================================================= */

  geography: [

    {
      id: 0,
      title: 'Les aires urbaines et la métropolisation',
      content: `La France connaît une forte urbanisation.\n\nUne aire urbaine regroupe une ville-centre, sa banlieue et les espaces périurbains. Les métropoles concentrent population, emplois et fonctions de commandement.`,
      keyPoints: [
        'Urbanisation',
        'Aire urbaine',
        'Métropolisation',
        'Mobilités',
        'Périurbanisation'
      ],
      examples: [
        'Paris',
        'Lyon',
        'Toulouse'
      ],
      brevetTips: [
        'Toujours définir aire urbaine',
        'Utiliser un exemple précis'
      ],
      isPremium: false
    },

    {
      id: 1,
      title: 'Les espaces productifs français',
      content: `Les espaces productifs sont les territoires où se concentrent les activités économiques.\n\nIls évoluent avec la mondialisation.`,
      keyPoints: [
        'Espaces agricoles',
        'Espaces industriels',
        'Espaces de services',
        'Mondialisation'
      ],
      examples: [
        'Agriculture intensive',
        'Zones industrielles',
        'Tourisme'
      ],
      brevetTips: [
        'Toujours relier à la mondialisation'
      ],
      isPremium: false
    },

    {
      id: 2,
      title: 'Aménager le territoire français',
      content: `L’aménagement du territoire vise à réduire les inégalités entre les régions.\n\nL’État et l’Union européenne jouent un rôle majeur.`,
      keyPoints: [
        'Inégalités territoriales',
        'Aménagement',
        'Transports',
        'Collectivités'
      ],
      examples: [
        'Lignes TGV',
        'Zones rurales',
        'Territoires ultramarins'
      ],
      brevetTips: [
        'Toujours expliquer l’objectif d’un aménagement'
      ],
      isPremium: true
    }
  ],

  /* ================================================= */
  /* ====================== EMC ====================== */
  /* ================================================= */

  emc: [

    {
      id: 0,
      title: 'Le respect d’autrui et la lutte contre les discriminations',
      content: `Le respect d’autrui est une valeur fondamentale de la République.\n\nLa loi interdit toute discrimination fondée sur l’origine, le sexe, la religion ou l’orientation sexuelle.`,
      keyPoints: [
        'Respect',
        'Égalité',
        'Discrimination',
        'Valeurs républicaines'
      ],
      examples: [
        'Lutte contre le racisme',
        'Égalité filles-garçons'
      ],
      brevetTips: [
        'Toujours relier aux valeurs de la République'
      ],
      isPremium: false
    },

    {
      id: 1,
      title: 'Les droits de l’Homme et la justice',
      content: `Les droits de l’Homme garantissent les libertés fondamentales.\n\nLa justice protège ces droits et sanctionne les infractions.`,
      keyPoints: [
        'Droits de l’Homme',
        'Justice',
        'Droits et devoirs',
        'Justice des mineurs'
      ],
      examples: [
        'Liberté d’expression',
        'Tribunal pour mineurs'
      ],
      brevetTips: [
        'Citer un droit fondamental'
      ],
      isPremium: false
    },

    {
      id: 2,
      title: 'La citoyenneté et l’engagement',
      content: `Être citoyen, c’est participer à la vie démocratique.\n\nLe vote et l’engagement associatif permettent de s’impliquer.`,
      keyPoints: [
        'Citoyenneté',
        'Vote',
        'Engagement',
        'Démocratie'
      ],
      examples: [
        'Élections',
        'Associations'
      ],
      brevetTips: [
        'Relier engagement et démocratie'
      ],
      isPremium: false
    }
  ]
};
export const historyCourses = [
  ...hgeoEmcCourses.history,
  ...hgeoEmcCourses.geography,
  ...hgeoEmcCourses.emc
];
