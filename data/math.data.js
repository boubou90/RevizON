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
 * Mathématiques – Programme de 3e (niveau Brevet)
 * @type {Lesson[]}
 */
export const mathCourses = [

/* ================================================= */
/* 1. NOMBRES ET CALCULS                             */
/* ================================================= */

{
  id: 0,
  title: 'Nombres entiers, décimaux et rationnels',
  content: `Les nombres utilisés en mathématiques se répartissent en plusieurs catégories.\n\nLes nombres entiers sont les nombres sans virgule (positifs, négatifs ou nuls). Les nombres décimaux possèdent une écriture avec une virgule finie.\n\nLes nombres rationnels sont les nombres qui peuvent s’écrire sous forme de fraction. Tous les nombres décimaux sont des nombres rationnels, mais l’inverse n’est pas toujours vrai.\n\nEn 3e, il est indispensable de savoir comparer, ranger et utiliser ces nombres dans des calculs.`,
  keyPoints: [
    'Entiers : … -2, -1, 0, 1, 2…',
    'Décimaux : écriture avec virgule finie',
    'Rationnels : écriture fractionnaire',
    'Tout décimal est rationnel',
    'Comparer en tenant compte du signe'
  ],
  examples: [
    '−3 est un entier',
    '2,75 est un nombre décimal',
    '1/8 est un nombre rationnel',
    '0,5 = 1/2'
  ],
  brevetTips: [
    'Comparer d’abord la partie entière',
    'Attention aux nombres négatifs',
    'Fraction ≠ décimal dans tous les cas'
  ],
  isPremium: false
},

{
  id: 1,
  title: 'Fractions : opérations et simplification',
  content: `Une fraction représente un quotient. Elle est composée d’un numérateur et d’un dénominateur.\n\nEn 3e, il faut maîtriser les quatre opérations sur les fractions : addition, soustraction, multiplication et division.\n\nAprès chaque calcul, le résultat doit être simplifié à l’aide du PGCD.`,
  keyPoints: [
    'Addition / soustraction : même dénominateur',
    'Multiplication : numérateur × numérateur',
    'Division : multiplier par l’inverse',
    'Simplifier avec le PGCD',
    'Le dénominateur ne peut jamais être 0'
  ],
  examples: [
    '1/2 + 1/3 = 5/6',
    '4/5 × 2/3 = 8/15',
    '3/4 ÷ 2/5 = 15/8'
  ],
  brevetTips: [
    'Toujours simplifier le résultat',
    'Attention aux erreurs de signe',
    'Vérifier la cohérence du résultat'
  ],
  isPremium: false
},

{
  id: 2,
  title: 'Puissances, racines carrées et notation scientifique',
  content: `Les puissances permettent d’écrire des multiplications répétées.\n\nLes exposants négatifs correspondent à l’inverse d’une puissance positive.\n\nLes racines carrées permettent de retrouver un nombre à partir de son carré.\n\nLa notation scientifique est utilisée pour écrire simplement des nombres très grands ou très petits.`,
  keyPoints: [
    'a² = a × a',
    'a⁻¹ = 1/a',
    '√a est le nombre dont le carré vaut a',
    'Notation scientifique : a × 10ⁿ',
    '1 ≤ a < 10'
  ],
  examples: [
    '2³ = 8',
    '10⁻² = 0,01',
    '√36 = 6',
    '0,00072 = 7,2 × 10⁻⁴'
  ],
  brevetTips: [
    'Ne pas confondre carré et racine',
    'Attention aux exposants négatifs',
    'Respecter la forme scientifique'
  ],
  isPremium: true
},

{
  id: 3,
  title: 'Calcul littéral et identités remarquables',
  content: `Le calcul littéral utilise des lettres pour représenter des nombres inconnus.\n\nIl permet de généraliser des calculs, de résoudre des équations et de démontrer des propriétés.\n\nLes identités remarquables sont des formules à connaître par cœur.`,
  keyPoints: [
    'Réduire une expression',
    'Développer une expression',
    'Factoriser une expression',
    '(a + b)² = a² + 2ab + b²',
    '(a - b)² = a² - 2ab + b²',
    '(a + b)(a - b) = a² - b²'
  ],
  examples: [
    '3x + 5x = 8x',
    '(x + 3)² = x² + 6x + 9',
    'x² - 16 = (x - 4)(x + 4)'
  ],
  brevetTips: [
    'Apprendre les identités par cœur',
    'Soigner les signes',
    'Ne jamais mélanger réduire et factoriser'
  ],
  isPremium: true
},

{
  id: 4,
  title: 'Équations et inéquations',
  content: `Une équation est une égalité contenant une inconnue.\n\nRésoudre une équation consiste à trouver la valeur qui rend l’égalité vraie.\n\nUne inéquation compare deux expressions et sa solution est un intervalle.`,
  keyPoints: [
    'Équation du type ax + b = c',
    'Même opération des deux côtés',
    'Inéquation : <, ≤, >, ≥',
    'Solution sous forme d’intervalle',
    'Vérification indispensable'
  ],
  examples: [
    '2x + 5 = 11 → x = 3',
    '3x − 1 ≥ 8 → x ≥ 3'
  ],
  brevetTips: [
    'Attention au sens de l’inégalité',
    'Toujours vérifier la solution',
    'Rédaction claire attendue'
  ],
  isPremium: true
},

/* ================================================= */
/* 2. DONNÉES, PROBABILITÉS, FONCTIONS                */
/* ================================================= */

{
  id: 5,
  title: 'Statistiques',
  content: `Les statistiques permettent d’analyser des séries de données.\n\nEn 3e, on étudie la moyenne, la médiane, les quartiles et les diagrammes.`,
  keyPoints: [
    'Moyenne = somme ÷ effectif',
    'Médiane = valeur centrale',
    'Étendue = max − min',
    'Diagrammes : bâtons, circulaire, boîte'
  ],
  examples: [
    'Moyenne de 10, 12, 14 = 12',
    'Étendue de {3 ; 9} = 6'
  ],
  brevetTips: [
    'Toujours trier la série',
    'Faire attention aux unités',
    'Lire correctement les graphiques'
  ],
  isPremium: false
},

{
  id: 6,
  title: 'Probabilités',
  content: `Les probabilités permettent de mesurer la chance qu’un événement se produise.\n\nUne probabilité est toujours comprise entre 0 et 1.`,
  keyPoints: [
    'Probabilité = cas favorables / cas possibles',
    'Expérience aléatoire',
    'Somme des probabilités = 1',
    'Utilisation d’arbres'
  ],
  examples: [
    'Pile sur une pièce : 1/2',
    'Nombre pair sur un dé : 3/6 = 1/2'
  ],
  brevetTips: [
    'Bien identifier les issues',
    'Résultat entre 0 et 1',
    'Faire un arbre si nécessaire'
  ],
  isPremium: false
},

{
  id: 7,
  title: 'Fonctions linéaires et affines',
  content: `Une fonction associe à chaque nombre un autre nombre.\n\nLes fonctions linéaires et affines sont représentées par des droites.`,
  keyPoints: [
    'Fonction linéaire : f(x) = ax',
    'Fonction affine : f(x) = ax + b',
    'Coefficient directeur = pente',
    'Ordonnée à l’origine'
  ],
  examples: [
    'f(x) = 3x',
    'g(x) = 2x − 1'
  ],
  brevetTips: [
    'Lire les coordonnées',
    'Tracer soigneusement',
    'Identifier a et b'
  ],
  isPremium: true
},

/* ================================================= */
/* 3. GÉOMÉTRIE ET MESURES                            */
/* ================================================= */

{
  id: 8,
  title: 'Théorème de Pythagore',
  content: `Le théorème de Pythagore s’applique uniquement dans un triangle rectangle.\n\nIl permet de calculer une longueur inconnue.`,
  keyPoints: [
    'Triangle rectangle',
    'Hypoténuse = côté opposé à l’angle droit',
    'c² = a² + b²',
    'Réciproque du théorème'
  ],
  examples: [
    '3² + 4² = 5²',
    'BC² = AB² + AC²'
  ],
  brevetTips: [
    'Toujours vérifier l’angle droit',
    'Bien identifier l’hypoténuse',
    'Rédaction obligatoire'
  ],
  isPremium: false
},

{
  id: 9,
  title: 'Théorème de Thalès',
  content: `Le théorème de Thalès permet de calculer des longueurs dans des configurations avec des droites parallèles.`,
  keyPoints: [
    'Présence de droites parallèles',
    'Rapports égaux',
    'Agrandissement / réduction',
    'Justification obligatoire'
  ],
  examples: [
    'AD / AB = AE / AC'
  ],
  brevetTips: [
    'Toujours citer Thalès',
    'Vérifier le parallélisme',
    'Soigner la rédaction'
  ],
  isPremium: true
},

{
  id: 10,
  title: 'Trigonométrie dans le triangle rectangle',
  content: `La trigonométrie permet de calculer des longueurs ou des angles dans un triangle rectangle.`,
  keyPoints: [
    'sin = opposé / hypoténuse',
    'cos = adjacent / hypoténuse',
    'tan = opposé / adjacent',
    'Utilisation de la calculatrice'
  ],
  examples: [
    'cos 60° = 0,5',
    'Calcul d’un angle'
  ],
  brevetTips: [
    'Calculatrice en mode degré',
    'Bien identifier les côtés',
    'Arrondir correctement'
  ],
  isPremium: true
},

/* ================================================= */
/* 4. ALGORITHME ET PROGRAMMATION                     */
/* ================================================= */

{
  id: 11,
  title: 'Algorithmique et programmation',
  content: `Un algorithme est une suite d’instructions permettant de résoudre un problème.\n\nEn 3e, on utilise des algorithmes simples écrits en langage naturel, Scratch ou Python.`,
  keyPoints: [
    'Variables',
    'Affectations',
    'Conditions',
    'Boucles'
  ],
  examples: [
    'Si x > 0 alors…',
    'Répéter 10 fois'
  ],
  brevetTips: [
    'Lire ligne par ligne',
    'Tester avec des valeurs',
    'Suivre les affectations'
  ],
  isPremium: false
}

];
