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
 * Quiz de Français – Organisés par leçon
 * @type {LessonQuiz[]}
 */
export const frenchQuizzes = [
  {
    lessonId: 0,
    questions: [
      {
        id: 0,
        question: 'Dans la phrase « Le chat mange la souris », quelle est la fonction de « le chat » ?',
        options: ['COD', 'COI', 'Sujet', 'Attribut'],
        correctAnswer: 2,
        explanation: 'Le sujet est celui qui fait l’action du verbe.'
      },
      {
        id: 1,
        question: 'Dans « Je regarde le film », quelle est la fonction de « le film » ?',
        options: ['Sujet', 'COD', 'COI', 'Complément circonstanciel'],
        correctAnswer: 1,
        explanation: 'Le COD répond à la question « quoi ? » après le verbe.'
      },
      {
        id: 2,
        question: 'Quelle est la classe grammaticale du mot « rapidement » ?',
        options: ['Nom', 'Adjectif', 'Adverbe', 'Verbe'],
        correctAnswer: 2,
        explanation: 'Un adverbe modifie le sens d’un verbe, d’un adjectif ou d’un autre adverbe.'
      },
      {
        id: 3,
        question: 'Dans « Il parle à son ami », « à son ami » est :',
        options: ['COD', 'COI', 'Sujet', 'Attribut'],
        correctAnswer: 1,
        explanation: 'Un COI est introduit par une préposition.'
      },
      {
        id: 4,
        question: 'Classe grammaticale et fonction sont :',
        options: ['Toujours identiques', 'Toujours différentes', 'Deux notions distinctes', 'Inutiles'],
        correctAnswer: 2,
        explanation: 'La classe indique la nature du mot, la fonction indique son rôle.'
      }
    ]
  },
  {
    lessonId: 1,
    questions: [
      {
        id: 0,
        question: 'Une phrase complexe contient :',
        options: ['Un seul verbe conjugué', 'Deux verbes conjugués ou plus', 'Aucun verbe', 'Toujours trois verbes'],
        correctAnswer: 1,
        explanation: 'La présence de plusieurs verbes conjugués caractérise la phrase complexe.'
      },
      {
        id: 1,
        question: '« Le livre que je lis est intéressant » contient une subordonnée :',
        options: ['Complétive', 'Relative', 'Circonstancielle', 'Indépendante'],
        correctAnswer: 1,
        explanation: 'La subordonnée relative est introduite par un pronom relatif.'
      },
      {
        id: 2,
        question: 'Quelle subordonnée est introduite par « que » ?',
        options: ['Relative', 'Complétive', 'Circonstancielle', 'Juxtaposée'],
        correctAnswer: 1,
        explanation: 'Les subordonnées complétives sont souvent introduites par « que ».'
      },
      {
        id: 3,
        question: '« Quand il pleut, je reste chez moi » contient une subordonnée :',
        options: ['Relative', 'Complétive', 'Circonstancielle de temps', 'Attributive'],
        correctAnswer: 2,
        explanation: 'Elle exprime le temps.'
      },
      {
        id: 4,
        question: 'La proposition principale est :',
        options: [
          'Toujours la première',
          'Celle qui dépend d’une autre',
          'Celle dont dépend la subordonnée',
          'Toujours introduite par un pronom'
        ],
        correctAnswer: 2,
        explanation: 'La subordonnée dépend toujours de la principale.'
      }
    ]
  },
  {
    lessonId: 2,
    questions: [
      {
        id: 0,
        question: '« Ferme la porte ! » est une phrase :',
        options: ['Déclarative', 'Interrogative', 'Impérative', 'Exclamative'],
        correctAnswer: 2,
        explanation: 'L’impératif exprime un ordre ou un conseil.'
      },
      {
        id: 1,
        question: 'Une phrase négative contient :',
        options: ['Toujours « ne…pas »', 'Un mot de négation', 'Un point d’exclamation', 'Un verbe à l’infinitif'],
        correctAnswer: 1,
        explanation: 'La négation peut être exprimée par différents mots.'
      },
      {
        id: 2,
        question: '« La souris est mangée par le chat » est à la voix :',
        options: ['Active', 'Passive', 'Pronominale', 'Impersonnelle'],
        correctAnswer: 1,
        explanation: 'Le sujet subit l’action.'
      },
      {
        id: 3,
        question: 'Une phrase peut être :',
        options: [
          'D’un seul type',
          'D’une seule forme',
          'D’un type et de plusieurs formes',
          'Impossible à classer'
        ],
        correctAnswer: 2,
        explanation: 'Types et formes sont cumulables.'
      },
      {
        id: 4,
        question: '« Ce film est incroyable ! » est une phrase :',
        options: ['Déclarative', 'Impérative', 'Interrogative', 'Exclamative'],
        correctAnswer: 3,
        explanation: 'Elle exprime une émotion forte.'
      }
    ]
  },
  {
    lessonId: 3,
    questions: [
      {
        id: 0,
        question: 'L’imparfait exprime souvent :',
        options: ['Une action brève', 'Une action future', 'Une description ou une habitude', 'Un ordre'],
        correctAnswer: 2,
        explanation: 'Il sert à décrire ou exprimer une durée.'
      },
      {
        id: 1,
        question: 'Le conditionnel est utilisé pour exprimer :',
        options: ['Une certitude', 'Un ordre', 'Une hypothèse', 'Une action passée'],
        correctAnswer: 2,
        explanation: 'Le conditionnel exprime une action soumise à une condition.'
      },
      {
        id: 2,
        question: '« Je veux qu’il réussisse » est au mode :',
        options: ['Indicatif', 'Impératif', 'Conditionnel', 'Subjonctif'],
        correctAnswer: 3,
        explanation: 'Le subjonctif exprime le souhait ou le doute.'
      },
      {
        id: 3,
        question: 'Le passé composé exprime généralement :',
        options: ['Une habitude', 'Une action terminée', 'Une description', 'Une hypothèse'],
        correctAnswer: 1,
        explanation: 'Le passé composé indique une action achevée.'
      },
      {
        id: 4,
        question: '« Il pleut depuis ce matin » est au :',
        options: ['Présent', 'Imparfait', 'Futur', 'Conditionnel'],
        correctAnswer: 0,
        explanation: 'Le présent peut exprimer une action qui dure.'
      }
    ]
  },
  {
    lessonId: 4,
    questions: [
      {
        id: 0,
        question: 'Dans une phrase à la voix passive, le sujet :',
        options: ['Fait l’action', 'Subit l’action', 'N’existe pas', 'Est toujours un pronom'],
        correctAnswer: 1,
        explanation: 'Le sujet subit l’action à la voix passive.'
      },
      {
        id: 1,
        question: 'La voix passive se forme avec :',
        options: ['Avoir + infinitif', 'Être + participe passé', 'Deux verbes', 'Un pronom'],
        correctAnswer: 1,
        explanation: 'C’est la construction canonique.'
      },
      {
        id: 2,
        question: 'Le complément d’agent est introduit par :',
        options: ['À', 'De ou par', 'Avec', 'Sans'],
        correctAnswer: 1,
        explanation: 'Il indique qui fait réellement l’action.'
      },
      {
        id: 3,
        question: 'Toutes les phrases actives peuvent être passivées :',
        options: ['Oui', 'Non'],
        correctAnswer: 1,
        explanation: 'Certaines phrases n’ont pas de COD.'
      },
      {
        id: 4,
        question: '« Le chien mord le facteur » devient :',
        options: [
          'Le facteur est mordu par le chien',
          'Le facteur mord le chien',
          'Le chien est mordu',
          'Phrase incorrecte'
        ],
        correctAnswer: 0,
        explanation: 'Transformation correcte à la voix passive.'
      }
    ]
  },
  {
    lessonId: 5,
    questions: [
      {
        id: 0,
        question: 'Le discours direct utilise :',
        options: ['Des guillemets', 'Un pronom relatif', 'Un infinitif', 'Un adverbe'],
        correctAnswer: 0,
        explanation: 'Il rapporte les paroles telles quelles.'
      },
      {
        id: 1,
        question: 'Dans le discours indirect, on change :',
        options: ['Les temps et les pronoms', 'Le sujet seulement', 'La ponctuation seulement', 'Rien'],
        correctAnswer: 0,
        explanation: 'Les transformations sont grammaticales.'
      },
      {
        id: 2,
        question: 'Le discours indirect libre :',
        options: [
          'Utilise des guillemets',
          'Est toujours introduit par « que »',
          'Mélange narration et paroles',
          'Est interdit au Brevet'
        ],
        correctAnswer: 2,
        explanation: 'Il est courant en littérature.'
      },
      {
        id: 3,
        question: '« Il dit qu’il viendra » est :',
        options: ['Discours direct', 'Discours indirect', 'Indirect libre', 'Narration'],
        correctAnswer: 1,
        explanation: 'Les paroles sont intégrées à la phrase.'
      },
      {
        id: 4,
        question: 'Le discours indirect libre est souvent :',
        options: ['Difficile à repérer', 'Toujours signalé', 'Rare', 'Incorrect'],
        correctAnswer: 0,
        explanation: 'Il n’est pas introduit par un verbe de parole.'
      }
    ]
  },
  {
    lessonId: 6,
    questions: [
      {
        id: 0,
        question: 'Le verbe s’accorde avec :',
        options: ['Le COD', 'Le sujet', 'Le complément', 'L’attribut'],
        correctAnswer: 1,
        explanation: 'C’est la règle fondamentale.'
      },
      {
        id: 1,
        question: 'Avec « être », le participe passé s’accorde avec :',
        options: ['Le COD', 'Le sujet', 'Rien', 'Le complément d’agent'],
        correctAnswer: 1,
        explanation: 'Accord systématique avec le sujet.'
      },
      {
        id: 2,
        question: 'Avec « avoir », le participe passé s’accorde si :',
        options: [
          'Le sujet est pluriel',
          'Le COD est placé avant',
          'Le verbe est pronominal',
          'Toujours'
        ],
        correctAnswer: 1,
        explanation: 'Condition essentielle à connaître.'
      },
      {
        id: 3,
        question: '« Les lettres que j’ai écrites » est correct car :',
        options: [
          'Le sujet est pluriel',
          'Le COD est avant',
          'Le verbe est être',
          'C’est une exception'
        ],
        correctAnswer: 1,
        explanation: 'Le COD « lettres » est placé avant.'
      },
      {
        id: 4,
        question: 'Les erreurs d’accord sont :',
        options: ['Peu importantes', 'Tolérées', 'Très pénalisantes', 'Facultatives'],
        correctAnswer: 2,
        explanation: 'Surtout dans la dictée.'
      }
    ]
  },
  {
    lessonId: 7,
    questions: [
      {
        id: 0,
        question: 'Choisir la bonne phrase :',
        options: ['Il a manger', 'Il à mangé', 'Il a mangé', 'Il à manger'],
        correctAnswer: 2,
        explanation: '« a » est le verbe avoir.'
      },
      {
        id: 1,
        question: '« Ils sont contents » : « sont » est :',
        options: ['Déterminant', 'Verbe être', 'Adjectif', 'Nom'],
        correctAnswer: 1,
        explanation: 'C’est le verbe être.'
      },
      {
        id: 2,
        question: '« Son ami arrive » : « son » est :',
        options: ['Verbe', 'Pronom', 'Déterminant', 'Adverbe'],
        correctAnswer: 2,
        explanation: 'Déterminant possessif.'
      },
      {
        id: 3,
        question: '« Où vas-tu ? » : « où » indique :',
        options: ['Un choix', 'Un lieu', 'Une action', 'Une négation'],
        correctAnswer: 1,
        explanation: '« Où » indique un lieu.'
      },
      {
        id: 4,
        question: 'Les homophones sont :',
        options: [
          'Des mots de même sens',
          'Des mots de même orthographe',
          'Des mots qui se prononcent pareil',
          'Des mots inventés'
        ],
        correctAnswer: 2,
        explanation: 'Même prononciation, sens différent.'
      }
    ]
  },
  {
    lessonId: 8,
    questions: [
      {
        id: 0,
        question: '« Fort comme un lion » est une :',
        options: ['Métaphore', 'Comparaison', 'Hyperbole', 'Anaphore'],
        correctAnswer: 1,
        explanation: 'Présence d’un outil de comparaison.'
      },
      {
        id: 1,
        question: '« La mer de lumière » est une :',
        options: ['Comparaison', 'Métaphore', 'Personnification', 'Hyperbole'],
        correctAnswer: 1,
        explanation: 'Comparaison implicite.'
      },
      {
        id: 2,
        question: '« La ville s’endort » est une :',
        options: ['Hyperbole', 'Comparaison', 'Personnification', 'Anaphore'],
        correctAnswer: 2,
        explanation: 'Caractéristique humaine.'
      },
      {
        id: 3,
        question: 'L’anaphore est :',
        options: [
          'Une répétition',
          'Une exagération',
          'Une comparaison',
          'Une opposition'
        ],
        correctAnswer: 0,
        explanation: 'Répétition en début de phrase.'
      },
      {
        id: 4,
        question: 'Les figures de style servent à :',
        options: [
          'Rendre le texte plus riche',
          'Simplifier le texte',
          'Éviter les images',
          'Supprimer les émotions'
        ],
        correctAnswer: 0,
        explanation: 'Elles produisent un effet sur le lecteur.'
      }
    ]
  },
  {
    lessonId: 9,
    questions: [
      {
        id: 0,
        question: 'Le registre comique vise à :',
        options: ['Faire pleurer', 'Faire réfléchir', 'Faire rire', 'Faire peur'],
        correctAnswer: 2,
        explanation: 'Il provoque le rire.'
      },
      {
        id: 1,
        question: 'Le registre tragique évoque souvent :',
        options: ['La joie', 'La fatalité', 'La surprise', 'L’humour'],
        correctAnswer: 1,
        explanation: 'Destin inévitable.'
      },
      {
        id: 2,
        question: 'Le registre pathétique cherche à :',
        options: ['Faire rire', 'Faire réfléchir', 'Émouvoir', 'Convaincre'],
        correctAnswer: 2,
        explanation: 'Il suscite la pitié.'
      },
      {
        id: 3,
        question: 'Le registre lyrique exprime :',
        options: ['Des règles', 'Des sentiments', 'Des faits', 'Des lois'],
        correctAnswer: 1,
        explanation: 'Expression personnelle.'
      },
      {
        id: 4,
        question: 'Un texte peut contenir :',
        options: [
          'Un seul registre',
          'Aucun registre',
          'Plusieurs registres',
          'Seulement le comique'
        ],
        correctAnswer: 2,
        explanation: 'Les registres peuvent se combiner.'
      }
    ]
  },
  {
    lessonId: 10,
    questions: [
      {
        id: 0,
        question: '« Se raconter, se représenter » concerne :',
        options: ['La poésie', 'L’autobiographie', 'Le théâtre', 'Le fantastique'],
        correctAnswer: 1,
        explanation: 'Il s’agit de récits de soi.'
      },
      {
        id: 1,
        question: 'Les textes engagés servent à :',
        options: ['Divertir', 'Informer', 'Dénoncer', 'Décrire'],
        correctAnswer: 2,
        explanation: 'Ils critiquent la société.'
      },
      {
        id: 2,
        question: 'La poésie moderne est étudiée du :',
        options: ['XVe au XVIIe siècle', 'XIXe au XXIe siècle', 'Moyen Âge', 'XVIIIe siècle'],
        correctAnswer: 1,
        explanation: 'Programme officiel.'
      },
      {
        id: 3,
        question: '« Agir dans la cité » concerne souvent :',
        options: ['La description', 'Le pouvoir et l’individu', 'La nature', 'Le rêve'],
        correctAnswer: 1,
        explanation: 'Rapports individu / société.'
      },
      {
        id: 4,
        question: 'Ces thèmes servent à :',
        options: [
          'Organiser les lectures',
          'Supprimer la grammaire',
          'Remplacer l’écriture',
          'Éviter les textes'
        ],
        correctAnswer: 0,
        explanation: 'Ils structurent l’année.'
      }
    ]
  },
  {
    lessonId: 11,
    questions: [
      {
        id: 0,
        question: 'La rédaction du Brevet est notée sur :',
        options: ['10 points', '20 points', '30 points', '40 points'],
        correctAnswer: 2,
        explanation: 'C’est l’exercice le plus long.'
      },
      {
        id: 1,
        question: 'Un bon texte doit être :',
        options: ['Court', 'Sans fautes uniquement', 'Organisé et clair', 'Original seulement'],
        correctAnswer: 2,
        explanation: 'Structure + langue.'
      },
      {
        id: 2,
        question: 'Une argumentation comprend :',
        options: ['Un récit', 'Une thèse', 'Un dialogue', 'Une description'],
        correctAnswer: 1,
        explanation: 'Thèse + arguments.'
      },
      {
        id: 3,
        question: 'La réécriture évalue surtout :',
        options: ['L’imagination', 'La grammaire', 'Le vocabulaire', 'Le style'],
        correctAnswer: 1,
        explanation: 'Maîtrise de la langue.'
      },
      {
        id: 4,
        question: 'Le respect des consignes est :',
        options: ['Secondaire', 'Optionnel', 'Essentiel', 'Inutile'],
        correctAnswer: 2,
        explanation: 'Critère majeur de notation.'
      }
    ]
  }
];
