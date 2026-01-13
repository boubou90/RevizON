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

export const geographyCourses = [

/* ================================================= */
/* THÈME 1 – DYNAMIQUES TERRITORIALES DE LA FRANCE    */
/* ================================================= */

{
  id: 0,
  title: 'Les aires urbaines, une nouvelle géographie de la France',
  content: `La France connaît une urbanisation croissante : la majorité de la population vit aujourd’hui dans des villes.\n\nUne aire urbaine est un ensemble de communes organisé autour d’une ville-centre. Elle comprend la ville-centre, la banlieue et la couronne périurbaine.\n\nLe phénomène de métropolisation correspond à la concentration des populations, des activités et des pouvoirs de décision dans les grandes métropoles.\n\nLes mobilités quotidiennes (trajets domicile-travail) structurent fortement ces espaces.`,
  keyPoints: [
    'Urbanisation',
    'Aire urbaine : ville-centre, banlieue, périurbain',
    'Métropolisation',
    'Mobilités quotidiennes',
    'Étalement urbain'
  ],
  examples: [
    'Aire urbaine de Paris',
    'Lyon, métropole régionale',
    'Toulouse, ville attractive'
  ],
  brevetTips: [
    'Toujours définir une aire urbaine',
    'Utiliser un exemple précis',
    'Relier urbanisation et mobilités'
  ],
  isPremium: false
},

{
  id: 1,
  title: 'Les espaces productifs et leurs évolutions',
  content: `Les espaces productifs sont les territoires où se concentrent les activités économiques.\n\nOn distingue les espaces agricoles, industriels et de services.\n\nCes espaces évoluent avec la mondialisation : spécialisation des territoires, concurrence internationale et innovation.\n\nLes acteurs sont nombreux : entreprises, État, collectivités territoriales.`,
  keyPoints: [
    'Espaces productifs',
    'Agriculture, industrie, services',
    'Mondialisation',
    'Spécialisation des territoires',
    'Acteurs économiques'
  ],
  examples: [
    'Agriculture intensive en Bretagne',
    'Technopôles (Sophia Antipolis)',
    'Zones touristiques'
  ],
  brevetTips: [
    'Toujours relier espace productif et mondialisation',
    'Citer un type d’espace et un exemple'
  ],
  isPremium: false
},

{
  id: 2,
  title: 'Les espaces de faible densité et leurs atouts',
  content: `Certains territoires français sont faiblement peuplés : espaces ruraux, montagnes, zones isolées.\n\nCes territoires connaissent des difficultés (dépeuplement, accès aux services), mais disposent aussi d’atouts importants.\n\nIls attirent de nouvelles populations et développent des activités touristiques ou agricoles spécifiques.`,
  keyPoints: [
    'Faible densité',
    'Espaces ruraux',
    'Espaces de montagne',
    'Contraintes',
    'Atouts'
  ],
  examples: [
    'Massif central',
    'Alpes',
    'Tourisme vert'
  ],
  brevetTips: [
    'Montrer qu’il y a des contraintes ET des atouts',
    'Utiliser un exemple localisé'
  ],
  isPremium: false
},

/* ================================================= */
/* THÈME 2 – AMÉNAGER LE TERRITOIRE                   */
/* ================================================= */

{
  id: 3,
  title: 'Aménager le territoire pour réduire les inégalités',
  content: `L’aménagement du territoire vise à réduire les inégalités entre les territoires français.\n\nL’État, les collectivités territoriales et l’Union européenne mettent en place des politiques d’aménagement.\n\nLes infrastructures de transport jouent un rôle essentiel dans le désenclavement des territoires.`,
  keyPoints: [
    'Inégalités territoriales',
    'Aménagement du territoire',
    'Acteurs publics',
    'Infrastructures de transport'
  ],
  examples: [
    'Lignes à grande vitesse (TGV)',
    'Zones rurales aménagées',
    'Politiques régionales'
  ],
  brevetTips: [
    'Toujours expliquer l’objectif d’un aménagement',
    'Citer un acteur'
  ],
  isPremium: true
},

{
  id: 4,
  title: 'Les territoires ultramarins français',
  content: `La France possède des territoires ultramarins répartis dans tous les océans.\n\nCes territoires présentent une grande diversité mais sont confrontés à des contraintes : éloignement, risques naturels, dépendance économique.\n\nIls disposent également d’atouts importants, notamment touristiques et géostratégiques.`,
  keyPoints: [
    'Outre-mer',
    'Diversité des territoires',
    'Contraintes',
    'Atouts',
    'Insertion dans la mondialisation'
  ],
  examples: [
    'Guadeloupe',
    'La Réunion',
    'Polynésie française'
  ],
  brevetTips: [
    'Savoir situer l’outre-mer',
    'Montrer contraintes ET atouts'
  ],
  isPremium: true
},

/* ================================================= */
/* THÈME 3 – LA FRANCE ET L’UNION EUROPÉENNE          */
/* ================================================= */

{
  id: 5,
  title: 'L’Union européenne : un territoire de référence',
  content: `L’Union européenne (UE) est une organisation politique et économique regroupant plusieurs États européens.\n\nElle repose sur des politiques communes et des institutions qui prennent des décisions à l’échelle européenne.\n\nLa France est un acteur majeur de l’UE.`,
  keyPoints: [
    'Union européenne',
    'Frontières de l’UE',
    'Politiques européennes',
    'Institutions',
    'Rôle de la France'
  ],
  examples: [
    'Parlement européen',
    'Commission européenne',
    'Politique agricole commune (PAC)'
  ],
  brevetTips: [
    'Toujours définir l’UE',
    'Citer une institution européenne'
  ],
  isPremium: false
},

{
  id: 6,
  title: 'La France et l’Europe dans le monde',
  content: `La France et l’Union européenne jouent un rôle important à l’échelle mondiale.\n\nElles participent aux échanges économiques, diplomatiques et culturels.\n\nLa mondialisation pose cependant de nouveaux défis.`,
  keyPoints: [
    'Rayonnement de la France',
    'Influence européenne',
    'Mondialisation',
    'Défis économiques et géopolitiques'
  ],
  examples: [
    'Réseau diplomatique français',
    'Entreprises européennes',
    'Commerce international'
  ],
  brevetTips: [
    'Relier mondialisation et influence',
    'Utiliser un exemple concret'
  ],
  isPremium: false
}

];
