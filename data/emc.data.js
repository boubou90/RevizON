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

export const emcCourses = [

/* ================================================= */
/* THÈME 1 – LA SENSIBILITÉ : SOI ET LES AUTRES       */
/* ================================================= */

{
  id: 0,
  title: 'Les émotions, le respect d’autrui et la lutte contre les discriminations',
  content: `Chaque individu ressent des émotions (joie, peur, colère, tristesse) qui influencent son comportement.\n\nVivre en société implique de reconnaître les émotions des autres et de respecter leur dignité.\n\nLa discrimination consiste à traiter différemment une personne en raison de son origine, de son sexe, de sa religion, de son handicap ou de son orientation sexuelle. Elle est interdite par la loi.\n\nL’égalité filles-garçons est un principe fondamental de la République française.`,
  keyPoints: [
    'Émotions',
    'Respect d’autrui',
    'Discrimination',
    'Égalité',
    'Dignité humaine'
  ],
  examples: [
    'Lutte contre le racisme',
    'Égalité filles-garçons à l’école',
    'Respect dans les réseaux sociaux'
  ],
  brevetTips: [
    'Toujours relier respect et valeurs républicaines',
    'Savoir définir la discrimination',
    'Citer un exemple concret'
  ],
  isPremium: false
},

/* ================================================= */
/* THÈME 2 – LE DROIT ET LA RÈGLE                     */
/* ================================================= */

{
  id: 1,
  title: 'Les droits de l’Homme, la loi et la justice',
  content: `Les droits de l’Homme garantissent les libertés fondamentales de chaque citoyen.\n\nEn France, ces droits sont protégés par la loi et par la justice.\n\nLa justice permet de faire respecter les règles et de sanctionner les infractions. Les mineurs bénéficient d’une justice spécifique adaptée à leur âge.\n\nLa Défense nationale contribue à la protection du pays et repose aussi sur l’engagement citoyen.`,
  keyPoints: [
    'Droits de l’Homme',
    'Loi',
    'Justice',
    'Justice des mineurs',
    'Défense nationale'
  ],
  examples: [
    'Liberté d’expression',
    'Tribunal pour mineurs',
    'Journée Défense et Citoyenneté (JDC)'
  ],
  brevetTips: [
    'Citer un droit fondamental',
    'Faire le lien entre loi et justice'
  ],
  isPremium: false
},

/* ================================================= */
/* THÈME 3 – LE JUGEMENT : L’ESPRIT CRITIQUE          */
/* ================================================= */

{
  id: 2,
  title: 'L’esprit critique, les médias et l’information',
  content: `L’esprit critique consiste à analyser les informations avant de les accepter.\n\nLes médias jouent un rôle essentiel dans la diffusion de l’information, mais toutes les informations ne sont pas fiables.\n\nLes fake news sont des informations fausses ou manipulées. Il est important de vérifier les sources et de croiser les informations.\n\nL’argumentation et le débat permettent d’exprimer des opinions de manière raisonnée.`,
  keyPoints: [
    'Esprit critique',
    'Médias',
    'Information',
    'Fake news',
    'Argumentation'
  ],
  examples: [
    'Vérifier une information sur plusieurs sites',
    'Analyser une image ou un titre',
    'Débattre en classe'
  ],
  brevetTips: [
    'Toujours vérifier la source',
    'Distinguer fait et opinion'
  ],
  isPremium: false
},

/* ================================================= */
/* THÈME 4 – L’ENGAGEMENT CITOYEN                    */
/* ================================================= */

{
  id: 3,
  title: 'La citoyenneté, le vote et l’engagement',
  content: `Être citoyen, c’est participer à la vie démocratique.\n\nLe vote permet aux citoyens de choisir leurs représentants.\n\nL’engagement peut prendre différentes formes : engagement associatif, participation à des projets citoyens, parcours éducatifs.\n\nCes engagements renforcent la cohésion sociale et les valeurs démocratiques.`,
  keyPoints: [
    'Citoyenneté',
    'Vote',
    'Démocratie',
    'Engagement',
    'Participation'
  ],
  examples: [
    'Élections',
    'Associations',
    'Conseil municipal des jeunes',
    'Parcours citoyen'
  ],
  brevetTips: [
    'Relier engagement et démocratie',
    'Citer une forme d’engagement'
  ],
  isPremium: false
}

];
