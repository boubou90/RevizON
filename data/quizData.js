import { historyQuiz } from './history.quiz.js';
import { geographyQuiz } from './geography.quiz.js';
import { emcQuiz } from './emc.quiz.js';

/**
 * @typedef {Object} QuizQuestion
 * @property {number} id
 * @property {string} question
 * @property {string[]} options
 * @property {number} correctAnswer
 * @property {string} explanation
 */

/**
 * @type {{math: QuizQuestion[], french: QuizQuestion[], history: QuizQuestion[], svt: QuizQuestion[], physique: QuizQuestion[], technologie: QuizQuestion[], history_sub: QuizQuestion[], geography_sub: QuizQuestion[], emc_sub: QuizQuestion[]}}
 */
export const quizData = {
  math: [
    {
      id: 0,
      question: 'Quel est le résultat de 15 + 7 ?',
      options: ['20', '21', '22', '23'],
      correctAnswer: 2,
      explanation: '15 + 7 = 22'
    },
    {
      id: 1,
      question: 'Combien font 12 × 8 ?',
      options: ['84', '92', '96', '104'],
      correctAnswer: 2,
      explanation: '12 × 8 = 96'
    },
    {
      id: 2,
      question: 'Quelle fraction est équivalente à 1/2 ?',
      options: ['2/3', '2/4', '1/3', '3/4'],
      correctAnswer: 1,
      explanation: '2/4 = 1/2 (on simplifie par 2)'
    },
    {
      id: 3,
      question: 'Combien de degrés mesure un angle droit ?',
      options: ['45°', '60°', '90°', '180°'],
      correctAnswer: 2,
      explanation: 'Un angle droit mesure exactement 90°'
    },
    {
      id: 4,
      question: 'Quel est le résultat de 100 - 37 ?',
      options: ['53', '63', '73', '83'],
      correctAnswer: 1,
      explanation: '100 - 37 = 63'
    },
    {
      id: 5,
      question: 'Combien font 3,5 + 2,8 ?',
      options: ['5,3', '6,3', '5,13', '6,13'],
      correctAnswer: 1,
      explanation: '3,5 + 2,8 = 6,3'
    },
    {
      id: 6,
      question: 'Quelle est la priorité dans le calcul : 5 + 3 × 2 ?',
      options: ['Addition d\'abord', 'Multiplication d\'abord', 'De gauche à droite', 'Aucune priorité'],
      correctAnswer: 1,
      explanation: 'On fait d\'abord la multiplication : 5 + 6 = 11'
    },
    {
      id: 7,
      question: 'Combien font 48 ÷ 6 ?',
      options: ['6', '7', '8', '9'],
      correctAnswer: 2,
      explanation: '48 ÷ 6 = 8'
    },
    {
      id: 8,
      question: 'Quel type d\'angle mesure 120° ?',
      options: ['Angle aigu', 'Angle droit', 'Angle obtus', 'Angle plat'],
      correctAnswer: 2,
      explanation: 'Un angle obtus mesure entre 90° et 180°'
    },
    {
      id: 9,
      question: 'Quelle fraction représente 0,5 ?',
      options: ['1/4', '1/2', '1/3', '2/3'],
      correctAnswer: 1,
      explanation: '0,5 = 5/10 = 1/2'
    },
    {
      id: 10,
      question: 'Quel est le résultat de (4 + 2) × 3 ?',
      options: ['10', '12', '14', '18'],
      correctAnswer: 3,
      explanation: 'On fait d\'abord la parenthèse : 6 × 3 = 18'
    },
    {
      id: 11,
      question: 'Combien font 0,1 × 100 ?',
      options: ['1', '10', '100', '0,01'],
      correctAnswer: 1,
      explanation: '0,1 × 100 = 10'
    }
  ],

  french: [
    {
      id: 0,
      question: 'Quelle est la classe grammaticale du mot "chat" ?',
      options: ['Verbe', 'Nom', 'Adjectif', 'Adverbe'],
      correctAnswer: 1,
      explanation: '"Chat" est un nom commun qui désigne un animal'
    },
    {
      id: 1,
      question: 'Dans la phrase "Le chien aboie", quel est le sujet ?',
      options: ['Le', 'chien', 'aboie', 'Le chien'],
      correctAnswer: 3,
      explanation: 'Le sujet est "Le chien" (groupe nominal complet)'
    },
    {
      id: 2,
      question: 'Quel est le bon homophone : "Il ... un vélo" ?',
      options: ['a', 'à', 'as', 'ah'],
      correctAnswer: 0,
      explanation: '"Il a" vient du verbe avoir'
    },
    {
      id: 3,
      question: 'Comment accorde-t-on l\'adjectif dans "des fleurs ..." ?',
      options: ['beau', 'beaux', 'belle', 'belles'],
      correctAnswer: 3,
      explanation: 'L\'adjectif s\'accorde avec "fleurs" (féminin pluriel) : belles'
    },
    {
      id: 4,
      question: 'Quel est le COD dans "Je mange une pomme" ?',
      options: ['Je', 'mange', 'une pomme', 'une'],
      correctAnswer: 2,
      explanation: '"une pomme" est le COD (Je mange quoi ? une pomme)'
    },
    {
      id: 5,
      question: 'Quel temps : "Je mangeais" ?',
      options: ['Présent', 'Passé composé', 'Imparfait', 'Futur'],
      correctAnswer: 2,
      explanation: '"Je mangeais" est à l\'imparfait'
    },
    {
      id: 6,
      question: 'Quel est le bon homophone : "Ils ... contents" ?',
      options: ['son', 'sont', 'sons', 'sond'],
      correctAnswer: 1,
      explanation: '"Ils sont" vient du verbe être'
    },
    {
      id: 7,
      question: 'Quelle est la classe grammaticale de "lentement" ?',
      options: ['Nom', 'Verbe', 'Adjectif', 'Adverbe'],
      correctAnswer: 3,
      explanation: '"Lentement" est un adverbe (il modifie le verbe)'
    },
    {
      id: 8,
      question: 'Comment conjugue-t-on "être" au présent avec "nous" ?',
      options: ['nous êtes', 'nous est', 'nous sommes', 'nous suis'],
      correctAnswer: 2,
      explanation: 'Nous sommes (verbe être au présent)'
    },
    {
      id: 9,
      question: 'Quel est le pluriel de "cheval" ?',
      options: ['chevals', 'chevaux', 'chevaus', 'chevales'],
      correctAnswer: 1,
      explanation: 'Le pluriel irrégulier de "cheval" est "chevaux"'
    },
    {
      id: 10,
      question: 'Quel est le bon homophone : "Pierre ... Marie jouent" ?',
      options: ['et', 'est', 'ai', 'es'],
      correctAnswer: 0,
      explanation: '"et" est une conjonction de coordination'
    },
    {
      id: 11,
      question: 'Dans "Elle chante bien", quel est le verbe ?',
      options: ['Elle', 'chante', 'bien', 'Elle chante'],
      correctAnswer: 1,
      explanation: '"chante" est le verbe qui exprime l\'action'
    }
  ],

  history: [
    {
      id: 0,
      question: 'Quand se termine la Préhistoire ?',
      options: ['Avec l\'invention du feu', 'Avec l\'invention de l\'écriture', 'Avec la chute de Rome', 'Avec la Révolution française'],
      correctAnswer: 1,
      explanation: 'La Préhistoire se termine avec l\'invention de l\'écriture (vers 3500 av. J.-C.)'
    },
    {
      id: 1,
      question: 'Quelle civilisation a construit les pyramides ?',
      options: ['Les Grecs', 'Les Romains', 'Les Égyptiens', 'Les Gaulois'],
      correctAnswer: 2,
      explanation: 'Les pyramides ont été construites par les Égyptiens'
    },
    {
      id: 2,
      question: 'En quelle année Christophe Colomb découvre-t-il l\'Amérique ?',
      options: ['1492', '1515', '1789', '1914'],
      correctAnswer: 0,
      explanation: 'Christophe Colomb découvre l\'Amérique en 1492'
    },
    {
      id: 3,
      question: 'Quel événement marque le début de la Révolution française ?',
      options: ['La prise de la Bastille', 'L\'exécution de Louis XVI', 'La déclaration de guerre', 'Le sacre de Napoléon'],
      correctAnswer: 0,
      explanation: 'La Révolution française commence avec la prise de la Bastille le 14 juillet 1789'
    },
    {
      id: 4,
      question: 'Qu\'est-ce qu\'un château fort ?',
      options: ['Une maison de paysan', 'Une habitation fortifiée du Moyen Âge', 'Un temple grec', 'Un palais romain'],
      correctAnswer: 1,
      explanation: 'Un château fort est une habitation fortifiée construite au Moyen Âge'
    },
    {
      id: 5,
      question: 'Qui était Charlemagne ?',
      options: ['Un roi de France', 'Un empereur couronné en 800', 'Un général romain', 'Un pharaon'],
      correctAnswer: 1,
      explanation: 'Charlemagne a été couronné empereur en l\'an 800'
    },
    {
      id: 6,
      question: 'Quelle période vient après l\'Antiquité ?',
      options: ['La Préhistoire', 'Le Moyen Âge', 'Les Temps modernes', 'L\'époque contemporaine'],
      correctAnswer: 1,
      explanation: 'Après l\'Antiquité vient le Moyen Âge (476-1492)'
    },
    {
      id: 7,
      question: 'Comment s\'appelaient les habitants de la Gaule ?',
      options: ['Les Grecs', 'Les Romains', 'Les Gaulois', 'Les Francs'],
      correctAnswer: 2,
      explanation: 'Les habitants de la Gaule étaient les Gaulois'
    },
    {
      id: 8,
      question: 'Qu\'est-ce que la démocratie ?',
      options: ['Le pouvoir d\'un seul', 'Le pouvoir du peuple', 'Le pouvoir des prêtres', 'Le pouvoir des riches'],
      correctAnswer: 1,
      explanation: 'Démocratie vient du grec et signifie "pouvoir du peuple"'
    },
    {
      id: 9,
      question: 'En quelle année Rome est-elle tombée ?',
      options: ['476', '800', '1492', '1789'],
      correctAnswer: 0,
      explanation: 'L\'Empire romain d\'Occident est tombé en 476'
    },
    {
      id: 10,
      question: 'Quel navigateur a fait le premier tour du monde ?',
      options: ['Christophe Colomb', 'Vasco de Gama', 'Magellan', 'Marco Polo'],
      correctAnswer: 2,
      explanation: 'Magellan a réalisé le premier tour du monde (1519-1522)'
    },
    {
      id: 11,
      question: 'Quelle est la date de la Déclaration des droits de l\'Homme ?',
      options: ['14 juillet 1789', '26 août 1789', '21 septembre 1792', '9 novembre 1799'],
      correctAnswer: 1,
      explanation: 'La Déclaration des droits de l\'Homme a été adoptée le 26 août 1789'
    }
  ],

  svt: [
    {
      id: 0,
      question: 'Qu\'est-ce qu\'une cellule ?',
      options: ['Un organisme vivant', 'L\'unité de base du vivant', 'Un organe', 'Un tissu'],
      correctAnswer: 1,
      explanation: 'La cellule est l\'unité de base de tous les êtres vivants'
    },
    {
      id: 1,
      question: 'Quel gaz respirons-nous ?',
      options: ['Dioxyde de carbone', 'Azote', 'Oxygène', 'Hydrogène'],
      correctAnswer: 2,
      explanation: 'Nous respirons l\'oxygène (O2) et rejetons du dioxyde de carbone (CO2)'
    },
    {
      id: 2,
      question: 'Que produit la respiration ?',
      options: ['De l\'oxygène', 'De l\'énergie', 'De la nourriture', 'De l\'eau uniquement'],
      correctAnswer: 1,
      explanation: 'La respiration produit de l\'énergie pour le corps'
    },
    {
      id: 3,
      question: 'Qu\'est-ce que le cytoplasme ?',
      options: ['L\'enveloppe de la cellule', 'Le noyau', 'Le contenu de la cellule', 'L\'ADN'],
      correctAnswer: 2,
      explanation: 'Le cytoplasme est le contenu de la cellule entre la membrane et le noyau'
    },
    {
      id: 4,
      question: 'Quelle est la particularité d\'une cellule végétale ?',
      options: ['Elle n\'a pas de noyau', 'Elle a une paroi et des chloroplastes', 'Elle n\'a pas de membrane', 'Elle est plus petite'],
      correctAnswer: 1,
      explanation: 'La cellule végétale a une paroi rigide et des chloroplastes pour la photosynthèse'
    },
    {
      id: 5,
      question: 'Quel organe permet la respiration chez l\'Homme ?',
      options: ['Le cœur', 'Les poumons', 'L\'estomac', 'Le foie'],
      correctAnswer: 1,
      explanation: 'Les poumons captent l\'oxygène de l\'air lors de la respiration'
    },
    {
      id: 6,
      question: 'Quel est le rôle de l\'estomac ?',
      options: ['Produire de l\'énergie', 'Brasser et décomposer les aliments', 'Filtrer le sang', 'Pomper le sang'],
      correctAnswer: 1,
      explanation: 'L\'estomac brasse et décompose les aliments pendant la digestion'
    },
    {
      id: 7,
      question: 'Comment les plantes se reproduisent-elles ?',
      options: ['Par division cellulaire', 'Par pollinisation', 'Par bourgeonnement', 'Par photocopie'],
      correctAnswer: 1,
      explanation: 'Les plantes à fleurs se reproduisent par pollinisation'
    },
    {
      id: 8,
      question: 'Qu\'est-ce que le pollen ?',
      options: ['Les graines', 'Les cellules reproductrices mâles', 'Les racines', 'Les feuilles'],
      correctAnswer: 1,
      explanation: 'Le pollen contient les cellules reproductrices mâles des plantes'
    },
    {
      id: 9,
      question: 'Quel est le rôle du noyau de la cellule ?',
      options: ['Produire de l\'énergie', 'Protéger la cellule', 'Contenir l\'ADN', 'Digérer les aliments'],
      correctAnswer: 2,
      explanation: 'Le noyau contient l\'ADN, le matériel génétique de la cellule'
    },
    {
      id: 10,
      question: 'Quels sont les trois types de nutriments principaux ?',
      options: ['Eau, air, terre', 'Glucides, lipides, protéines', 'Vitamines, minéraux, fibres', 'Rouge, jaune, vert'],
      correctAnswer: 1,
      explanation: 'Les trois types de nutriments principaux sont les glucides, lipides et protéines'
    },
    {
      id: 11,
      question: 'Comment respirent les poissons ?',
      options: ['Par les poumons', 'Par les branchies', 'Par la peau', 'Par les nageoires'],
      correctAnswer: 1,
      explanation: 'Les poissons respirent grâce à leurs branchies qui captent l\'oxygène dissous dans l\'eau'
    }
  ],

  physique: [
    {
      id: 0,
      question: 'Quels sont les trois états de la matière ?',
      options: ['Chaud, tiède, froid', 'Solide, liquide, gazeux', 'Dur, mou, liquide', 'Grand, moyen, petit'],
      correctAnswer: 1,
      explanation: 'Les trois états de la matière sont : solide, liquide et gazeux'
    },
    {
      id: 1,
      question: 'Qu\'est-ce qu\'un circuit électrique fermé ?',
      options: ['Un circuit sans pile', 'Un circuit où le courant circule', 'Un circuit cassé', 'Un circuit avec interrupteur ouvert'],
      correctAnswer: 1,
      explanation: 'Dans un circuit fermé, le courant peut circuler'
    },
    {
      id: 2,
      question: 'Quelle est la différence entre fusion et solidification ?',
      options: ['Il n\'y en a pas', 'La fusion passe de solide à liquide, la solidification de liquide à solide', 'C\'est la même chose', 'La fusion est plus rapide'],
      correctAnswer: 1,
      explanation: 'Fusion = solide → liquide ; Solidification = liquide → solide'
    },
    {
      id: 3,
      question: 'Quel composant produit le courant électrique ?',
      options: ['La lampe', 'L\'interrupteur', 'La pile', 'Le fil'],
      correctAnswer: 2,
      explanation: 'La pile est le générateur qui produit le courant électrique'
    },
    {
      id: 4,
      question: 'Combien y a-t-il de planètes dans le système solaire ?',
      options: ['7', '8', '9', '10'],
      correctAnswer: 1,
      explanation: 'Il y a 8 planètes dans le système solaire (Pluton n\'est plus considérée comme une planète)'
    },
    {
      id: 5,
      question: 'Quelle planète est la plus proche du Soleil ?',
      options: ['Vénus', 'Terre', 'Mercure', 'Mars'],
      correctAnswer: 2,
      explanation: 'Mercure est la planète la plus proche du Soleil'
    },
    {
      id: 6,
      question: 'Combien de temps la Terre met-elle pour faire le tour du Soleil ?',
      options: ['24 heures', '30 jours', '365 jours', '10 ans'],
      correctAnswer: 2,
      explanation: 'La Terre fait le tour du Soleil en 365 jours (une année)'
    },
    {
      id: 7,
      question: 'Que se passe-t-il quand on chauffe de la glace ?',
      options: ['Elle se solidifie', 'Elle fond', 'Elle disparaît', 'Elle gèle'],
      correctAnswer: 1,
      explanation: 'La glace fond et passe de l\'état solide à l\'état liquide'
    },
    {
      id: 8,
      question: 'Comment la lumière se propage-t-elle ?',
      options: ['En cercles', 'En ligne droite', 'En zigzag', 'En spirale'],
      correctAnswer: 1,
      explanation: 'La lumière se propage en ligne droite'
    },
    {
      id: 9,
      question: 'Qu\'est-ce qu\'une source primaire de lumière ?',
      options: ['La Lune', 'Un miroir', 'Le Soleil', 'Un mur blanc'],
      correctAnswer: 2,
      explanation: 'Une source primaire produit sa propre lumière, comme le Soleil'
    },
    {
      id: 10,
      question: 'Que se passe-t-il dans un circuit ouvert ?',
      options: ['Le courant circule', 'Le courant ne circule pas', 'La lampe s\'allume', 'La pile chauffe'],
      correctAnswer: 1,
      explanation: 'Dans un circuit ouvert, le courant ne peut pas circuler'
    },
    {
      id: 11,
      question: 'Quel type de planète est Jupiter ?',
      options: ['Tellurique', 'Gazeuse', 'Rocheuse', 'Métallique'],
      correctAnswer: 1,
      explanation: 'Jupiter est une planète gazeuse géante'
    }
  ],

  technologie: [
    {
      id: 0,
      question: 'Qu\'est-ce qu\'un matériau naturel ?',
      options: ['Le plastique', 'Le bois', 'L\'acier', 'Le verre'],
      correctAnswer: 1,
      explanation: 'Le bois est un matériau naturel provenant des arbres'
    },
    {
      id: 1,
      question: 'Quelle propriété permet à un matériau de conduire l\'électricité ?',
      options: ['La dureté', 'La conductivité', 'La flexibilité', 'La transparence'],
      correctAnswer: 1,
      explanation: 'La conductivité est la propriété qui permet de conduire l\'électricité'
    },
    {
      id: 2,
      question: 'Qu\'est-ce que la fonction d\'usage d\'un objet ?',
      options: ['Comment il est fabriqué', 'À quoi il sert', 'De quoi il est fait', 'Combien il coûte'],
      correctAnswer: 1,
      explanation: 'La fonction d\'usage indique à quoi sert l\'objet'
    },
    {
      id: 3,
      question: 'Quel matériau est utilisé pour les fils électriques ?',
      options: ['Le bois', 'Le plastique', 'Le cuivre', 'Le coton'],
      correctAnswer: 2,
      explanation: 'Le cuivre est un excellent conducteur utilisé pour les fils électriques'
    },
    {
      id: 4,
      question: 'À quoi servent les engrenages ?',
      options: ['À stocker de l\'énergie', 'À transmettre un mouvement', 'À produire de la lumière', 'À chauffer'],
      correctAnswer: 1,
      explanation: 'Les engrenages transmettent un mouvement d\'une roue à une autre'
    },
    {
      id: 5,
      question: 'Qu\'est-ce qu\'un algorithme ?',
      options: ['Un robot', 'Une méthode de résolution', 'Un ordinateur', 'Un langage'],
      correctAnswer: 1,
      explanation: 'Un algorithme est une méthode pour résoudre un problème étape par étape'
    },
    {
      id: 6,
      question: 'Quel objet utilise des engrenages ?',
      options: ['Un crayon', 'Une gomme', 'Un vélo', 'Une règle'],
      correctAnswer: 2,
      explanation: 'Le vélo utilise des engrenages pour transmettre le mouvement des pédales aux roues'
    },
    {
      id: 7,
      question: 'Que fait un programme informatique ?',
      options: ['Il donne des instructions à l\'ordinateur', 'Il répare l\'ordinateur', 'Il nettoie l\'écran', 'Il charge la batterie'],
      correctAnswer: 0,
      explanation: 'Un programme donne des instructions à l\'ordinateur pour effectuer des tâches'
    },
    {
      id: 8,
      question: 'Quel matériau peut être recyclé ?',
      options: ['Tous les matériaux', 'Le plastique', 'Aucun matériau', 'Seulement le bois'],
      correctAnswer: 1,
      explanation: 'Le plastique peut être recyclé pour fabriquer de nouveaux objets'
    },
    {
      id: 9,
      question: 'Qu\'est-ce qu\'un objet technique ?',
      options: ['Un objet naturel', 'Un objet créé pour répondre à un besoin', 'Un objet ancien', 'Un objet cassé'],
      correctAnswer: 1,
      explanation: 'Un objet technique est créé par l\'homme pour répondre à un besoin'
    },
    {
      id: 10,
      question: 'Quel langage de programmation est souvent utilisé pour débuter ?',
      options: ['Python', 'Scratch', 'C++', 'Assembly'],
      correctAnswer: 1,
      explanation: 'Scratch est un langage visuel idéal pour débuter en programmation'
    },
    {
      id: 11,
      question: 'Pourquoi choisit-on le métal pour une casserole ?',
      options: ['Parce qu\'il est léger', 'Parce qu\'il conduit bien la chaleur', 'Parce qu\'il est transparent', 'Parce qu\'il est mou'],
      correctAnswer: 1,
      explanation: 'Le métal conduit bien la chaleur, ce qui est idéal pour cuisiner'
    }
  ],

  // Quiz pour Histoire-Géographie-EMC
  history_sub: historyQuiz,
  geography_sub: geographyQuiz,
  emc_sub: emcQuiz
};
