/**
 * @typedef {Object} QuizQuestion
 * @property {number} id
 * @property {string} question
 * @property {string[]} options
 * @property {number} correctAnswer
 * @property {string} explanation
 */

/**
 * @typedef {Object} LessonQuiz
 * @property {number} lessonId
 * @property {QuizQuestion[]} questions
 */

/**
 * Quiz de Mathématiques – Organisés par leçon
 * @type {LessonQuiz[]}
 */
export const mathQuizzes = [

/* ================================================= */
/* LEÇON 0 – Nombres entiers, décimaux, rationnels   */
/* ================================================= */
{
  lessonId: 0,
  questions: [
    {
      id: 0,
      question: 'Quel nombre est un nombre rationnel ?',
      options: ['√2', 'π', '3/4', '√5'],
      correctAnswer: 2,
      explanation: 'Un nombre rationnel peut s’écrire sous forme de fraction.'
    },
    {
      id: 1,
      question: 'Quel nombre est décimal ?',
      options: ['1/3', '2/7', '0,25', '√3'],
      correctAnswer: 2,
      explanation: '0,25 possède une écriture décimale finie.'
    },
    {
      id: 2,
      question: 'Quel est le plus grand nombre ?',
      options: ['-2', '-1,5', '-3', '-4'],
      correctAnswer: 1,
      explanation: 'Parmi les nombres négatifs, le plus proche de 0 est le plus grand.'
    },
    {
      id: 3,
      question: '0,75 est égal à :',
      options: ['1/2', '2/3', '3/4', '4/3'],
      correctAnswer: 2,
      explanation: '0,75 = 75/100 = 3/4.'
    },
    {
      id: 4,
      question: 'Un nombre décimal est toujours :',
      options: ['Irrationnel', 'Rationnel', 'Entier', 'Naturel'],
      correctAnswer: 1,
      explanation: 'Tout nombre décimal est un nombre rationnel.'
    }
  ]
},

/* ================================================= */
/* LEÇON 1 – Fractions                               */
/* ================================================= */
{
  lessonId: 1,
  questions: [
    {
      id: 0,
      question: '1/2 + 1/4 =',
      options: ['2/6', '3/4', '1/6', '1/8'],
      correctAnswer: 1,
      explanation: '1/2 = 2/4 donc 2/4 + 1/4 = 3/4.'
    },
    {
      id: 1,
      question: '3/5 × 10/9 =',
      options: ['30/45', '2/3', '3/2', '6/5'],
      correctAnswer: 1,
      explanation: '3/5 × 10/9 = 30/45 = 2/3.'
    },
    {
      id: 2,
      question: '5/6 ÷ 2/3 =',
      options: ['5/9', '15/12', '10/18', '5/4'],
      correctAnswer: 3,
      explanation: 'Diviser par une fraction revient à multiplier par son inverse.'
    },
    {
      id: 3,
      question: 'La fraction 18/24 simplifiée est :',
      options: ['9/12', '6/8', '3/4', '2/3'],
      correctAnswer: 2,
      explanation: 'On divise par le PGCD : 6.'
    },
    {
      id: 4,
      question: 'Le dénominateur d’une fraction :',
      options: ['Peut être nul', 'Est toujours positif', 'Ne peut jamais être nul', 'Peut être décimal'],
      correctAnswer: 2,
      explanation: 'On ne peut pas diviser par 0.'
    }
  ]
},

/* ================================================= */
/* LEÇON 2 – Puissances, racines, notation scientifique */
/* ================================================= */
{
  lessonId: 2,
  questions: [
    {
      id: 0,
      question: '2³ =',
      options: ['6', '8', '9', '16'],
      correctAnswer: 1,
      explanation: '2³ = 2 × 2 × 2.'
    },
    {
      id: 1,
      question: '10⁻² =',
      options: ['100', '0,01', '0,1', '1'],
      correctAnswer: 1,
      explanation: '10⁻² = 1/100.'
    },
    {
      id: 2,
      question: '√49 =',
      options: ['6', '7', '-7', '14'],
      correctAnswer: 1,
      explanation: '7² = 49.'
    },
    {
      id: 3,
      question: '450 000 s’écrit en notation scientifique :',
      options: ['4,5 × 10⁴', '45 × 10⁴', '0,45 × 10⁶', '4,5 × 10⁵'],
      correctAnswer: 3,
      explanation: '1 ≤ a < 10.'
    },
    {
      id: 4,
      question: '√(-9) est :',
      options: ['3', '-3', 'Impossible', '9'],
      correctAnswer: 2,
      explanation: 'On ne définit pas la racine carrée d’un nombre négatif.'
    }
  ]
},

/* ================================================= */
/* LEÇON 3 – Calcul littéral                         */
/* ================================================= */
{
  lessonId: 3,
  questions: [
    {
      id: 0,
      question: 'Réduire : 3x + 5x',
      options: ['8', '15x', '8x', 'x⁸'],
      correctAnswer: 2,
      explanation: 'On additionne les coefficients.'
    },
    {
      id: 1,
      question: '(x + 2)² =',
      options: ['x² + 4', 'x² + 2x + 4', 'x² + 4x + 4', 'x² + 2'],
      correctAnswer: 2,
      explanation: 'Formule (a + b)².'
    },
    {
      id: 2,
      question: 'Factoriser x² - 16 :',
      options: ['(x - 4)(x + 4)', '(x - 8)(x + 2)', '(x - 2)²', 'x(x - 16)'],
      correctAnswer: 0,
      explanation: 'Identité remarquable a² - b².'
    },
    {
      id: 3,
      question: 'Développer 2(x + 3) :',
      options: ['2x + 3', 'x + 6', '2x + 6', '6x'],
      correctAnswer: 2,
      explanation: 'Distributivité.'
    },
    {
      id: 4,
      question: 'Une expression factorisée est :',
      options: ['Plus longue', 'Toujours développée', 'Sous forme de produit', 'Incorrecte'],
      correctAnswer: 2,
      explanation: 'Factoriser = écrire sous forme de produit.'
    }
  ]
},

/* ================================================= */
/* LEÇON 4 – Équations et inéquations                */
/* ================================================= */
{
  lessonId: 4,
  questions: [
    {
      id: 0,
      question: 'Résoudre 2x + 3 = 7',
      options: ['x = 1', 'x = 2', 'x = 5', 'x = -2'],
      correctAnswer: 1,
      explanation: '2x = 4 donc x = 2.'
    },
    {
      id: 1,
      question: 'Résoudre 5x ≥ 10',
      options: ['x ≥ 5', 'x ≥ 2', 'x ≤ 2', 'x ≤ 5'],
      correctAnswer: 1,
      explanation: 'On divise par 5 (positif).'
    },
    {
      id: 2,
      question: 'Une équation a :',
      options: ['Toujours une solution', 'Toujours deux solutions', 'Une ou plusieurs solutions', 'Jamais de solution'],
      correctAnswer: 2,
      explanation: 'Selon l’équation.'
    },
    {
      id: 3,
      question: 'Résoudre x - 4 = 0',
      options: ['x = 0', 'x = 4', 'x = -4', 'x = 1'],
      correctAnswer: 1,
      explanation: 'x = 4.'
    },
    {
      id: 4,
      question: 'La solution d’une inéquation est :',
      options: ['Un nombre', 'Un intervalle', 'Une fraction', 'Un point'],
      correctAnswer: 1,
      explanation: 'On obtient un ensemble de solutions.'
    }
  ]
},

/* ================================================= */
/* LEÇON 5 – Statistiques                            */
/* ================================================= */
{
  lessonId: 5,
  questions: [
    {
      id: 0,
      question: 'La moyenne de 4, 6, 10 est :',
      options: ['6', '7', '8', '20'],
      correctAnswer: 1,
      explanation: '(4 + 6 + 10) ÷ 3 = 20 ÷ 3 ≈ 6,67 → 7.'
    },
    {
      id: 1,
      question: 'La médiane est :',
      options: [
        'La moyenne',
        'La valeur centrale',
        'La plus grande valeur',
        'La plus petite valeur'
      ],
      correctAnswer: 1,
      explanation: 'Après avoir rangé la série.'
    },
    {
      id: 2,
      question: 'L’étendue est égale à :',
      options: ['Max + min', 'Max × min', 'Max - min', 'Min - max'],
      correctAnswer: 2,
      explanation: 'Étendue = max – min.'
    },
    {
      id: 3,
      question: 'Un diagramme en boîte permet de lire :',
      options: ['La moyenne', 'Les quartiles', 'La somme', 'La fréquence'],
      correctAnswer: 1,
      explanation: 'Il représente la dispersion.'
    },
    {
      id: 4,
      question: 'Avant tout calcul statistique, il faut :',
      options: ['Dessiner un graphique', 'Trier la série', 'Multiplier les valeurs', 'Diviser'],
      correctAnswer: 1,
      explanation: 'Indispensable.'
    }
  ]
},

/* ================================================= */
/* LEÇON 6 – Probabilités                            */
/* ================================================= */
{
  lessonId: 6,
  questions: [
    {
      id: 0,
      question: 'La probabilité d’un événement est comprise entre :',
      options: ['-1 et 1', '0 et 1', '1 et 10', '0 et 100'],
      correctAnswer: 1,
      explanation: 'Définition.'
    },
    {
      id: 1,
      question: 'Probabilité d’obtenir pile :',
      options: ['0', '1', '1/2', '2'],
      correctAnswer: 2,
      explanation: 'Deux issues équiprobables.'
    },
    {
      id: 2,
      question: 'La somme des probabilités vaut :',
      options: ['0', '1', '10', '100'],
      correctAnswer: 1,
      explanation: 'Toujours égale à 1.'
    },
    {
      id: 3,
      question: 'Un arbre de probabilités sert à :',
      options: ['Compter', 'Calculer des longueurs', 'Représenter des événements', 'Tracer une droite'],
      correctAnswer: 2,
      explanation: 'Visualisation.'
    },
    {
      id: 4,
      question: 'Une probabilité égale à 0 signifie :',
      options: ['Certain', 'Impossible', 'Peu probable', 'Aléatoire'],
      correctAnswer: 1,
      explanation: 'Événement impossible.'
    }
  ]
},

/* ================================================= */
/* LEÇON 7 – Fonctions                               */
/* ================================================= */
{
  lessonId: 7,
  questions: [
    {
      id: 0,
      question: 'Une fonction linéaire s’écrit :',
      options: ['ax', 'ax + b', 'x²', '1/x'],
      correctAnswer: 0,
      explanation: 'f(x) = ax.'
    },
    {
      id: 1,
      question: 'Une fonction affine s’écrit :',
      options: ['ax', 'ax²', 'ax + b', 'x + a'],
      correctAnswer: 2,
      explanation: 'f(x) = ax + b.'
    },
    {
      id: 2,
      question: 'Graphiquement, une fonction affine est :',
      options: ['Une courbe', 'Un cercle', 'Une droite', 'Un point'],
      correctAnswer: 2,
      explanation: 'Représentation graphique.'
    },
    {
      id: 3,
      question: 'Le coefficient directeur représente :',
      options: ['L’ordonnée à l’origine', 'La pente', 'Le point zéro', 'La hauteur'],
      correctAnswer: 1,
      explanation: 'Variation.'
    },
    {
      id: 4,
      question: 'La proportionnalité correspond à :',
      options: ['f(x)=ax+b', 'f(x)=ax', 'f(x)=x²', 'f(x)=1'],
      correctAnswer: 1,
      explanation: 'Fonction linéaire.'
    }
  ]
},

/* ================================================= */
/* LEÇON 8 – Pythagore                               */
/* ================================================= */
{
  lessonId: 8,
  questions: [
    {
      id: 0,
      question: 'Le théorème de Pythagore s’applique dans :',
      options: ['Tout triangle', 'Un triangle rectangle', 'Un carré', 'Un cercle'],
      correctAnswer: 1,
      explanation: 'Condition indispensable.'
    },
    {
      id: 1,
      question: 'Dans un triangle rectangle, l’hypoténuse est :',
      options: ['Le plus petit côté', 'Un côté quelconque', 'Le côté opposé à l’angle droit', 'Un angle'],
      correctAnswer: 2,
      explanation: 'Définition.'
    },
    {
      id: 2,
      question: 'Si a² + b² = c² alors le triangle est :',
      options: ['Isocèle', 'Rectangle', 'Quelconque', 'Équilatéral'],
      correctAnswer: 1,
      explanation: 'Réciproque.'
    },
    {
      id: 3,
      question: '3² + 4² =',
      options: ['12', '16', '25', '7'],
      correctAnswer: 2,
      explanation: '9 + 16 = 25.'
    },
    {
      id: 4,
      question: 'Toujours commencer par :',
      options: ['Calculer', 'Tracer', 'Vérifier l’angle droit', 'Conclusion'],
      correctAnswer: 2,
      explanation: 'Condition essentielle.'
    }
  ]
},

/* ================================================= */
/* LEÇON 9 – Thalès                                  */
/* ================================================= */
{
  lessonId: 9,
  questions: [
    {
      id: 0,
      question: 'Le théorème de Thalès nécessite :',
      options: ['Un triangle rectangle', 'Des droites parallèles', 'Un cercle', 'Un angle droit'],
      correctAnswer: 1,
      explanation: 'Condition essentielle.'
    },
    {
      id: 1,
      question: 'Thalès permet de calculer :',
      options: ['Des angles', 'Des aires', 'Des longueurs', 'Des volumes'],
      correctAnswer: 2,
      explanation: 'Objectif principal.'
    },
    {
      id: 2,
      question: 'Les rapports sont :',
      options: ['Égaux', 'Différents', 'Inutiles', 'Multipliés'],
      correctAnswer: 0,
      explanation: 'Principe du théorème.'
    },
    {
      id: 3,
      question: 'Thalès est utilisé pour :',
      options: ['Réduction et agrandissement', 'Périmètres', 'Angles droits', 'Volumes'],
      correctAnswer: 0,
      explanation: 'Application classique.'
    },
    {
      id: 4,
      question: 'La rédaction est :',
      options: ['Optionnelle', 'Interdite', 'Obligatoire', 'Inutile'],
      correctAnswer: 2,
      explanation: 'Très pénalisant au Brevet.'
    }
  ]
},

/* ================================================= */
/* LEÇON 10 – Trigonométrie                          */
/* ================================================= */
{
  lessonId: 10,
  questions: [
    {
      id: 0,
      question: 'sin =',
      options: ['adjacent / hypoténuse', 'opposé / hypoténuse', 'opposé / adjacent', 'hypoténuse / opposé'],
      correctAnswer: 1,
      explanation: 'Définition.'
    },
    {
      id: 1,
      question: 'cos =',
      options: ['adjacent / hypoténuse', 'opposé / hypoténuse', 'opposé / adjacent', 'hypoténuse / adjacent'],
      correctAnswer: 0,
      explanation: 'Définition.'
    },
    {
      id: 2,
      question: 'tan =',
      options: ['adjacent / opposé', 'opposé / adjacent', 'hypoténuse / adjacent', 'adjacent / hypoténuse'],
      correctAnswer: 1,
      explanation: 'Définition.'
    },
    {
      id: 3,
      question: 'La calculatrice doit être en mode :',
      options: ['Radian', 'Degré', 'Scientifique', 'Programme'],
      correctAnswer: 1,
      explanation: 'Toujours vérifier.'
    },
    {
      id: 4,
      question: 'La trigonométrie s’applique dans :',
      options: ['Tout triangle', 'Un triangle rectangle', 'Un cercle', 'Un carré'],
      correctAnswer: 1,
      explanation: 'Condition indispensable.'
    }
  ]
},

/* ================================================= */
/* LEÇON 11 – Algorithmique                          */
/* ================================================= */
{
  lessonId: 11,
  questions: [
    {
      id: 0,
      question: 'Un algorithme est :',
      options: ['Un programme', 'Une suite d’instructions', 'Un graphique', 'Une équation'],
      correctAnswer: 1,
      explanation: 'Définition.'
    },
    {
      id: 1,
      question: 'Une variable sert à :',
      options: ['Tracer', 'Stocker une valeur', 'Dessiner', 'Comparer'],
      correctAnswer: 1,
      explanation: 'Rôle fondamental.'
    },
    {
      id: 2,
      question: '« Si… alors… » est :',
      options: ['Une boucle', 'Une condition', 'Une affectation', 'Une fonction'],
      correctAnswer: 1,
      explanation: 'Instruction conditionnelle.'
    },
    {
      id: 3,
      question: 'Une boucle permet de :',
      options: ['Choisir', 'Répéter', 'Comparer', 'Tracer'],
      correctAnswer: 1,
      explanation: 'Répétition d’actions.'
    },
    {
      id: 4,
      question: 'Tester un algorithme consiste à :',
      options: ['Le recopier', 'L’exécuter mentalement', 'Le supprimer', 'Le dessiner'],
      correctAnswer: 1,
      explanation: 'Méthode efficace.'
    }
  ]
}

];
