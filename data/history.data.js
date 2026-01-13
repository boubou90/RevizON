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

export const historyCourses = [

/* ================================================= */
/* THÈME 1 – L’EUROPE, UN THÉÂTRE MAJEUR DES GUERRES  */
/* ================================================= */

{
  id: 0,
  title: 'Civils et militaires dans la Première Guerre mondiale (1914-1918)',
  content: `La Première Guerre mondiale débute en 1914 après l’assassinat de l’archiduc François-Ferdinand à Sarajevo. Elle oppose la Triple-Entente (France, Royaume-Uni, Russie) aux Empires centraux (Allemagne, Autriche-Hongrie).\n\nAprès une phase de guerre de mouvement en 1914, le conflit s’enlise dans une guerre de position. Les soldats vivent dans les tranchées dans des conditions extrêmement difficiles : boue, froid, maladies, bombardements permanents.\n\nLes civils sont également mobilisés et touchés par la guerre : pénuries, bombardements, propagande, travail des femmes dans les usines d’armement. Cette mobilisation totale fait de ce conflit une guerre totale.\n\nEn 1915, le gouvernement ottoman organise le génocide des Arméniens : environ 1,3 million de personnes sont déportées et massacrées.\n\nLa guerre s’achève par l’armistice du 11 novembre 1918. Le bilan humain est très lourd : environ 10 millions de morts.`,
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
    'Travail des femmes dans les usines',
    'Déportations arméniennes'
  ],
  brevetTips: [
    'Toujours définir la notion de guerre totale',
    'Citer une date précise',
    'Mentionner le génocide arménien'
  ],
  isPremium: false
},

{
  id: 1,
  title: 'Démocraties fragilisées et expériences totalitaires dans l’entre-deux-guerres',
  content: `Après la Première Guerre mondiale, les démocraties européennes sont fragilisées par la crise économique de 1929, qui entraîne chômage, pauvreté et instabilité politique.\n\nDans ce contexte apparaissent des régimes totalitaires.\n\nEn URSS, Joseph Staline impose une dictature fondée sur le parti unique, la propagande, la terreur et le Goulag.\n\nEn Allemagne, Adolf Hitler arrive au pouvoir en 1933. Le régime nazi impose une idéologie raciste et antisémite, supprime les libertés et persécute les opposants.\n\nLes régimes totalitaires cherchent à contrôler totalement la société.`,
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
    'Donner au moins deux caractéristiques d’un régime totalitaire'
  ],
  isPremium: true
},

{
  id: 2,
  title: 'La Seconde Guerre mondiale, une guerre d’anéantissement (1939-1945)',
  content: `La Seconde Guerre mondiale débute en septembre 1939 avec l’invasion de la Pologne par l’Allemagne nazie.\n\nElle oppose les Alliés (États-Unis, URSS, Royaume-Uni) à l’Axe (Allemagne, Italie, Japon).\n\nCette guerre est une guerre d’anéantissement : l’objectif est de détruire totalement l’ennemi, civils compris.\n\nLe régime nazi organise le génocide des Juifs et des Tziganes. Environ 6 millions de Juifs sont assassinés dans les camps d’extermination.\n\nLa guerre se termine en 1945 avec la capitulation de l’Allemagne (mai 1945) et du Japon (septembre 1945).`,
  keyPoints: [
    '1939-1945 : Seconde Guerre mondiale',
    'Guerre d’anéantissement',
    'Génocide des Juifs et des Tziganes',
    'Camps d’extermination',
    'Capitulation de 1945'
  ],
  examples: [
    'Auschwitz-Birkenau',
    'Bombardements massifs',
    'Résistances européennes'
  ],
  brevetTips: [
    'Définir guerre d’anéantissement',
    'Ne pas confondre camps de concentration et d’extermination'
  ],
  isPremium: true
},

{
  id: 3,
  title: 'La France dans la Seconde Guerre mondiale',
  content: `En juin 1940, la France est vaincue par l’Allemagne nazie.\n\nLe maréchal Pétain instaure le régime de Vichy, qui collabore avec l’occupant allemand.\n\nÀ l’opposé, le général de Gaulle lance l’appel du 18 juin 1940 et organise la France libre. Jean Moulin unifie la Résistance intérieure.\n\nLa Libération de la France a lieu entre 1944 et 1945.`,
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

/* ================================================= */
/* THÈME 2 – LE MONDE DEPUIS 1945                     */
/* ================================================= */

{
  id: 4,
  title: 'Indépendances et construction de nouveaux États',
  content: `Après 1945, les empires coloniaux européens disparaissent progressivement.\n\nLa décolonisation permet à de nombreux peuples d’accéder à l’indépendance. La guerre d’Algérie (1954-1962) est un conflit majeur.\n\nDe nouveaux États apparaissent, souvent confrontés à des difficultés économiques et politiques.`,
  keyPoints: [
    'Décolonisation',
    'Guerre d’Algérie (1954-1962)',
    'Indépendances',
    'Nouveaux États'
  ],
  examples: [
    'Indépendance de l’Algérie (1962)',
    'Inde indépendante'
  ],
  brevetTips: [
    'Savoir dater la guerre d’Algérie',
    'Définir la décolonisation'
  ],
  isPremium: false
},

{
  id: 5,
  title: 'Un monde bipolaire au temps de la Guerre froide',
  content: `Après 1945, le monde est divisé en deux blocs rivaux : le bloc occidental dirigé par les États-Unis et le bloc communiste dirigé par l’URSS.\n\nCette rivalité se manifeste par des crises majeures, comme la crise de Cuba ou la guerre du Vietnam.\n\nLe Mur de Berlin, construit en 1961, symbolise cette division jusqu’à sa chute en 1989.`,
  keyPoints: [
    'Guerre froide',
    'États-Unis vs URSS',
    'Deux blocs',
    'Mur de Berlin',
    'Chute du Mur (1989)'
  ],
  examples: [
    'Crise de Cuba',
    'Guerre du Vietnam',
    'Mur de Berlin'
  ],
  brevetTips: [
    'Toujours dater 1989',
    'Expliquer la notion de bloc'
  ],
  isPremium: false
},

{
  id: 6,
  title: 'Affirmation et mise en œuvre du projet européen',
  content: `Après 1945, les États européens cherchent à garantir la paix.\n\nLa construction européenne débute avec la CECA (1951) et se poursuit avec les traités de Rome (1957).\n\nL’Union européenne s’élargit et met en place des institutions communes.`,
  keyPoints: [
    'Construction européenne',
    'CECA (1951)',
    'Traités de Rome (1957)',
    'Élargissements',
    'Institutions européennes'
  ],
  examples: [
    'Commission européenne',
    'Parlement européen'
  ],
  brevetTips: [
    'Savoir dater 1957',
    'Définir l’Union européenne'
  ],
  isPremium: true
},

/* ================================================= */
/* THÈME 3 – FRANÇAISES ET FRANÇAIS DANS LA RÉPUBLIQUE */
/* ================================================= */

{
  id: 7,
  title: '1944-1947 : refonder la République',
  content: `À la Libération, la France refonde la République.\n\nLes femmes obtiennent le droit de vote en 1944.\n\nLa Sécurité sociale est créée en 1945.\n\nLa IVe République est instaurée en 1946.`,
  keyPoints: [
    'Droit de vote des femmes (1944)',
    'Sécurité sociale (1945)',
    'IVe République (1946)'
  ],
  examples: [
    'Premières élections avec vote des femmes',
    'Protection sociale'
  ],
  brevetTips: [
    'Bien dater les grandes réformes',
    'Montrer l’élargissement de la citoyenneté'
  ],
  isPremium: false
},

{
  id: 8,
  title: 'La Ve République : de De Gaulle à l’alternance',
  content: `La Ve République est instaurée en 1958.\n\nLe général de Gaulle renforce le pouvoir exécutif.\n\nLa vie politique évolue avec l’alternance politique et les cohabitations.\n\nLa société française connaît de profondes transformations.`,
  keyPoints: [
    'Constitution de 1958',
    'Ve République',
    'De Gaulle',
    'Alternance politique',
    'Évolutions de la société'
  ],
  examples: [
    'Mai 1968',
    'Cohabitations'
  ],
  brevetTips: [
    'Savoir dater 1958',
    'Expliquer l’alternance'
  ],
  isPremium: false
}

];
