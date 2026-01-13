/**
 * Quiz SVT – Programme de 3e (Cycle 4 – Brevet)
 * 5 questions par leçon
 */
export const svtQuizzes = [
  {
    lessonId: 0,
    questions: [
      {
        id: 0,
        question: "Qu'est-ce qu'un séisme ?",
        options: [
          "Une vibration brutale du sol provoquée par la rupture soudaine de roches en profondeur",
          "Un mouvement lent des plaques tectoniques",
          "Une éruption volcanique sous-marine",
          "Un glissement de terrain"
        ],
        correctAnswer: 0,
        explanation: "Un séisme est une vibration brutale du sol provoquée par la rupture soudaine de roches en profondeur. Cette rupture libère une grande quantité d'énergie qui se propage sous forme d'ondes sismiques."
      },
      {
        id: 1,
        question: "Quelle est la principale cause des séismes ?",
        options: [
          "Les éruptions volcaniques",
          "Les mouvements des plaques tectoniques",
          "L'érosion des montagnes",
          "Les activités humaines"
        ],
        correctAnswer: 1,
        explanation: "Les séismes sont principalement liés aux mouvements des plaques tectoniques. Ils se produisent souvent le long des failles situées aux limites de ces plaques."
      },
      {
        id: 2,
        question: "Quelle est la différence entre magnitude et intensité ?",
        options: [
          "La magnitude mesure les dégâts, l'intensité mesure l'énergie",
          "La magnitude mesure l'énergie, l'intensité mesure les dégâts",
          "Ce sont deux termes identiques",
          "La magnitude est utilisée pour les volcans, l'intensité pour les séismes"
        ],
        correctAnswer: 1,
        explanation: "La magnitude mesure l'énergie libérée par le séisme, tandis que l'intensité mesure les dégâts et les effets observés en surface."
      },
      {
        id: 3,
        question: "Peut-on prévoir précisément un séisme ?",
        options: [
          "Oui, avec des sismographes modernes",
          "Oui, en surveillant les failles",
          "Non, mais on peut limiter ses conséquences par la prévention",
          "Oui, grâce aux satellites"
        ],
        correctAnswer: 2,
        explanation: "On ne peut pas empêcher ni prévoir précisément un séisme. En revanche, il est possible de limiter ses conséquences grâce à la prévention : construction de bâtiments parasismiques, information des populations et organisation des secours."
      },
      {
        id: 4,
        question: "Qu'est-ce qu'une norme parasismique ?",
        options: [
          "Une règle pour prédire les séismes",
          "Une règle de construction pour limiter les dégâts des séismes",
          "Une échelle de mesure des séismes",
          "Un dispositif d'alerte précoce"
        ],
        correctAnswer: 1,
        explanation: "Les normes parasismiques sont des règles de construction qui permettent de limiter les dégâts causés par les séismes et de réduire le nombre de victimes."
      }
    ]
  },
  {
    lessonId: 1,
    questions: [
      {
        id: 0,
        question: "Qu'est-ce qu'un volcan ?",
        options: [
          "Une montagne très haute",
          "Une structure géologique par laquelle du magma remonte à la surface",
          "Une faille tectonique",
          "Un cratère créé par un météorite"
        ],
        correctAnswer: 1,
        explanation: "Un volcan est une structure géologique par laquelle du magma provenant du manteau terrestre remonte à la surface."
      },
      {
        id: 1,
        question: "Quelle est la caractéristique des volcans effusifs ?",
        options: [
          "Ils produisent des coulées de lave fluides peu dangereuses",
          "Ils provoquent des éruptions violentes",
          "Ils n'entrent jamais en éruption",
          "Ils produisent uniquement des cendres"
        ],
        correctAnswer: 0,
        explanation: "Les volcans effusifs produisent des coulées de lave fluides peu dangereuses, contrairement aux volcans explosifs qui provoquent des éruptions violentes."
      },
      {
        id: 2,
        question: "Qu'est-ce qu'une nuée ardente ?",
        options: [
          "Une coulée de lave très chaude",
          "Un phénomène lié aux volcans explosifs, très dangereux",
          "Une éruption sous-marine",
          "Un type de lave solidifiée"
        ],
        correctAnswer: 1,
        explanation: "Les nuées ardentes sont des projections accompagnant les éruptions des volcans explosifs. Ce sont des phénomènes très dangereux."
      },
      {
        id: 3,
        question: "D'où provient le magma ?",
        options: [
          "Du noyau terrestre",
          "De la croûte terrestre",
          "Du manteau terrestre",
          "De l'atmosphère"
        ],
        correctAnswer: 2,
        explanation: "Le magma provient du manteau terrestre et remonte à la surface lors des éruptions volcaniques."
      },
      {
        id: 4,
        question: "Comment surveille-t-on les volcans ?",
        options: [
          "Uniquement avec des satellites",
          "Par observation des séismes, déformations du sol et émissions de gaz",
          "On ne peut pas les surveiller",
          "Uniquement avec des caméras"
        ],
        correctAnswer: 1,
        explanation: "La surveillance volcanique repose sur l'observation de nombreux paramètres : séismes, déformations du sol, émissions de gaz. Elle permet de réduire les risques pour les populations."
      }
    ]
  },
  {
    lessonId: 2,
    questions: [
      {
        id: 0,
        question: "Qu'est-ce qu'un aléa ?",
        options: [
          "Un phénomène naturel potentiellement dangereux",
          "Les populations exposées à un danger",
          "Le risque de catastrophe",
          "Une carte géographique"
        ],
        correctAnswer: 0,
        explanation: "Un aléa est un phénomène naturel potentiellement dangereux, comme un séisme, une inondation ou une éruption volcanique."
      },
      {
        id: 1,
        question: "Que représentent les enjeux ?",
        options: [
          "Les phénomènes naturels",
          "Les populations, les biens et les infrastructures exposés à un aléa",
          "Les zones sans danger",
          "Les moyens de prévention"
        ],
        correctAnswer: 1,
        explanation: "Les enjeux correspondent aux populations, aux biens et aux infrastructures exposés à un aléa."
      },
      {
        id: 2,
        question: "Comment définit-on le risque naturel ?",
        options: [
          "Risque = aléa seulement",
          "Risque = enjeux seulement",
          "Risque = aléa + enjeux",
          "Risque = prévention + aléa"
        ],
        correctAnswer: 2,
        explanation: "Le risque naturel résulte de la rencontre entre un aléa (phénomène naturel) et des enjeux (populations, biens, infrastructures)."
      },
      {
        id: 3,
        question: "Quel est un exemple d'enjeu en zone inondable ?",
        options: [
          "La pluie",
          "Les populations et les bâtiments en zone urbanisée",
          "Le climat",
          "Les nuages"
        ],
        correctAnswer: 1,
        explanation: "Les inondations en zone urbanisée représentent un exemple typique où les enjeux (populations, bâtiments) sont exposés à un aléa (inondation)."
      },
      {
        id: 4,
        question: "Sur quoi repose la prévention des risques naturels ?",
        options: [
          "Uniquement sur les prévisions météo",
          "Sur l'aménagement du territoire, l'information des populations et l'adoption de comportements adaptés",
          "Uniquement sur la construction de digues",
          "Sur l'arrêt de toute activité humaine"
        ],
        correctAnswer: 1,
        explanation: "La prévention repose sur l'aménagement du territoire, l'information des populations et l'adoption de comportements adaptés afin de limiter les conséquences des catastrophes."
      }
    ]
  },
  {
    lessonId: 3,
    questions: [
      {
        id: 0,
        question: "De quoi ont besoin tous les êtres vivants ?",
        options: [
          "Uniquement d'eau",
          "De matière et d'énergie",
          "Uniquement de lumière",
          "Uniquement d'oxygène"
        ],
        correctAnswer: 1,
        explanation: "Tous les êtres vivants ont besoin de matière et d'énergie pour vivre et se développer."
      },
      {
        id: 1,
        question: "Comment les végétaux chlorophylliens produisent-ils leur matière organique ?",
        options: [
          "En consommant d'autres êtres vivants",
          "Par la photosynthèse, à partir d'eau, de CO₂ et d'énergie lumineuse",
          "En absorbant des minéraux uniquement",
          "Par la respiration"
        ],
        correctAnswer: 1,
        explanation: "Les végétaux chlorophylliens produisent leur propre matière organique grâce à la photosynthèse, à partir d'eau, de dioxyde de carbone et d'énergie lumineuse."
      },
      {
        id: 2,
        question: "Où a lieu la photosynthèse dans les cellules végétales ?",
        options: [
          "Dans les mitochondries",
          "Dans le noyau",
          "Dans les chloroplastes",
          "Dans le cytoplasme"
        ],
        correctAnswer: 2,
        explanation: "La photosynthèse a lieu dans les chloroplastes des cellules végétales."
      },
      {
        id: 3,
        question: "Comment obtiennent leur matière les animaux ?",
        options: [
          "Par photosynthèse",
          "En consommant de la matière organique produite par d'autres êtres vivants",
          "En absorbant la lumière",
          "Par l'eau uniquement"
        ],
        correctAnswer: 1,
        explanation: "Les animaux doivent consommer de la matière organique produite par d'autres êtres vivants, contrairement aux végétaux qui la produisent eux-mêmes."
      },
      {
        id: 4,
        question: "Quel est le rôle de la respiration cellulaire ?",
        options: [
          "Produire de la matière organique",
          "Libérer l'énergie contenue dans la matière organique",
          "Absorber la lumière",
          "Fabriquer des chloroplastes"
        ],
        correctAnswer: 1,
        explanation: "À l'échelle des cellules, la respiration permet de libérer l'énergie contenue dans la matière organique."
      }
    ]
  },
  {
    lessonId: 4,
    questions: [
      {
        id: 0,
        question: "Qu'est-ce qu'une chaîne alimentaire ?",
        options: [
          "Un ensemble de restaurants",
          "Une succession d'êtres vivants où chacun se nourrit du précédent",
          "Un type de réseau social",
          "Une liste de courses"
        ],
        correctAnswer: 1,
        explanation: "Une chaîne alimentaire est une succession d'êtres vivants où chacun se nourrit du précédent."
      },
      {
        id: 1,
        question: "Qu'est-ce qu'un réseau trophique ?",
        options: [
          "Un seul animal",
          "Une seule plante",
          "L'ensemble des chaînes alimentaires d'un écosystème",
          "Un type de fossile"
        ],
        correctAnswer: 2,
        explanation: "L'ensemble des chaînes alimentaires forme un réseau trophique qui relie tous les êtres vivants d'un écosystème."
      },
      {
        id: 2,
        question: "Dans la chaîne 'Herbe → lapin → renard', qui est le producteur ?",
        options: [
          "L'herbe",
          "Le lapin",
          "Le renard",
          "Tous sont producteurs"
        ],
        correctAnswer: 0,
        explanation: "L'herbe est le producteur car elle produit sa propre matière organique par photosynthèse. Les chaînes alimentaires commencent toujours par un producteur."
      },
      {
        id: 3,
        question: "Que peut causer la disparition d'une espèce dans un écosystème ?",
        options: [
          "Aucun effet",
          "Un déséquilibre de tout l'écosystème",
          "Une amélioration de l'écosystème",
          "La multiplication des autres espèces"
        ],
        correctAnswer: 1,
        explanation: "L'équilibre d'un écosystème est fragile : la disparition ou l'introduction d'une espèce peut perturber tout le réseau et déséquilibrer l'écosystème."
      },
      {
        id: 4,
        question: "Quels sont les trois types d'organismes dans un écosystème ?",
        options: [
          "Prédateurs, proies, parasites",
          "Producteurs, consommateurs, décomposeurs",
          "Herbivores, carnivores, omnivores",
          "Grands, moyens, petits"
        ],
        correctAnswer: 1,
        explanation: "Dans un écosystème, on distingue trois types d'organismes : les producteurs (végétaux), les consommateurs (animaux) et les décomposeurs (bactéries, champignons)."
      }
    ]
  },
  {
    lessonId: 5,
    questions: [
      {
        id: 0,
        question: "Qu'est-ce que la biodiversité ?",
        options: [
          "La diversité des êtres vivants présents sur Terre",
          "Le nombre de plantes dans un jardin",
          "La diversité des climats",
          "Le nombre de pays dans le monde"
        ],
        correctAnswer: 0,
        explanation: "La biodiversité correspond à la diversité des êtres vivants présents sur Terre."
      },
      {
        id: 1,
        question: "Qu'est-ce que la sélection naturelle ?",
        options: [
          "Un processus où l'homme sélectionne les espèces",
          "Un processus où les individus les mieux adaptés survivent et se reproduisent",
          "Une technique agricole",
          "Un type de croisement"
        ],
        correctAnswer: 1,
        explanation: "Au cours du temps, les espèces évoluent sous l'effet de la sélection naturelle. Les individus les mieux adaptés à leur environnement ont plus de chances de survivre et de se reproduire."
      },
      {
        id: 2,
        question: "Que nous apprennent les fossiles ?",
        options: [
          "Le climat actuel",
          "L'histoire de la vie et les variations de la biodiversité",
          "La composition des roches",
          "La profondeur des océans"
        ],
        correctAnswer: 1,
        explanation: "Les fossiles permettent de retracer l'histoire de la vie et de montrer que la biodiversité a beaucoup varié au cours des temps géologiques."
      },
      {
        id: 3,
        question: "Qui évolue selon la théorie de l'évolution ?",
        options: [
          "Un individu au cours de sa vie",
          "Une espèce au cours du temps",
          "Uniquement les animaux",
          "Uniquement les plantes"
        ],
        correctAnswer: 1,
        explanation: "Une espèce évolue au cours du temps, pas un individu au cours de sa vie. C'est un point clé de la théorie de l'évolution."
      },
      {
        id: 4,
        question: "Qu'est-ce qu'une crise biologique ?",
        options: [
          "Une maladie grave",
          "Une période où de nombreuses espèces disparaissent",
          "Une augmentation de la biodiversité",
          "Un changement de climat"
        ],
        correctAnswer: 1,
        explanation: "Une crise biologique est une période de l'histoire de la Terre où de nombreuses espèces disparaissent, comme lors de l'extinction des dinosaures."
      }
    ]
  },
  {
    lessonId: 6,
    questions: [
      {
        id: 0,
        question: "Qu'est-ce que la fécondation ?",
        options: [
          "La formation d'un ovule",
          "La rencontre d'un spermatozoïde et d'un ovule",
          "La naissance d'un bébé",
          "La formation de spermatozoïdes"
        ],
        correctAnswer: 1,
        explanation: "La fécondation correspond à la rencontre d'un spermatozoïde et d'un ovule, marquant le début d'une nouvelle vie."
      },
      {
        id: 1,
        question: "Qu'est-ce qu'un gamète ?",
        options: [
          "Un organe reproducteur",
          "Une cellule reproductrice (spermatozoïde ou ovule)",
          "Un embryon",
          "Un chromosome"
        ],
        correctAnswer: 1,
        explanation: "Les gamètes sont les cellules reproductrices : le spermatozoïde chez l'homme et l'ovule chez la femme."
      },
      {
        id: 2,
        question: "Qu'est-ce que le cycle menstruel ?",
        options: [
          "La durée de la grossesse",
          "Le cycle de production et de libération d'ovules",
          "La période de puberté",
          "La durée de vie d'un spermatozoïde"
        ],
        correctAnswer: 1,
        explanation: "Le cycle menstruel est le cycle de production et de libération d'ovules chez la femme, qui se répète environ tous les 28 jours."
      },
      {
        id: 3,
        question: "Pourquoi la contraception est-elle importante ?",
        options: [
          "Pour avoir plus d'enfants",
          "Pour une sexualité responsable et éviter les grossesses non désirées",
          "Pour guérir les maladies",
          "Pour accélérer la puberté"
        ],
        correctAnswer: 1,
        explanation: "La contraception et la prévention des IST sont essentielles pour une sexualité responsable, permettant d'éviter les grossesses non désirées et de se protéger des infections."
      },
      {
        id: 4,
        question: "Que signifie IST ?",
        options: [
          "Infection Sexuellement Transmissible",
          "Institut de Santé et Technologie",
          "Interruption Sanitaire Temporaire",
          "Indication Scientifique et Thérapeutique"
        ],
        correctAnswer: 0,
        explanation: "IST signifie Infection Sexuellement Transmissible. La prévention des IST est essentielle pour une sexualité responsable."
      }
    ]
  },
  {
    lessonId: 7,
    questions: [
      {
        id: 0,
        question: "Quel est le rôle du système immunitaire ?",
        options: [
          "Digérer les aliments",
          "Protéger l'organisme contre les agents pathogènes",
          "Faire circuler le sang",
          "Transmettre les messages nerveux"
        ],
        correctAnswer: 1,
        explanation: "Le système immunitaire protège l'organisme contre les agents pathogènes (virus, bactéries, etc.)."
      },
      {
        id: 1,
        question: "Quelle est la caractéristique de la réponse immunitaire non spécifique ?",
        options: [
          "Elle est lente et ciblée",
          "Elle agit rapidement grâce aux barrières naturelles et à l'inflammation",
          "Elle produit des anticorps",
          "Elle nécessite une vaccination"
        ],
        correctAnswer: 1,
        explanation: "La réponse immunitaire non spécifique agit rapidement grâce aux barrières naturelles (peau, muqueuses) et à l'inflammation."
      },
      {
        id: 2,
        question: "Que sont les anticorps ?",
        options: [
          "Des virus",
          "Des molécules produites par les lymphocytes pour neutraliser les agents pathogènes",
          "Des bactéries",
          "Des médicaments"
        ],
        correctAnswer: 1,
        explanation: "Les anticorps sont des molécules produites par les lymphocytes lors de la réponse immunitaire spécifique pour neutraliser les agents pathogènes."
      },
      {
        id: 3,
        question: "Sur quoi repose la vaccination ?",
        options: [
          "Sur la destruction immédiate des virus",
          "Sur la mémoire immunitaire",
          "Sur les antibiotiques",
          "Sur l'inflammation"
        ],
        correctAnswer: 1,
        explanation: "La vaccination repose sur la mémoire immunitaire : après un premier contact avec un agent pathogène (vaccin), l'organisme garde en mémoire comment le combattre."
      },
      {
        id: 4,
        question: "Les antibiotiques agissent-ils sur les virus ?",
        options: [
          "Oui, ils tuent tous les microbes",
          "Non, ils n'agissent que sur les bactéries",
          "Oui, uniquement sur les virus",
          "Oui, mais seulement à forte dose"
        ],
        correctAnswer: 1,
        explanation: "Les antibiotiques n'agissent pas sur les virus, mais uniquement sur les bactéries. C'est un point clé à retenir pour le Brevet."
      }
    ]
  },
  {
    lessonId: 8,
    questions: [
      {
        id: 0,
        question: "De quoi est constitué le système nerveux ?",
        options: [
          "Du cœur et des poumons",
          "Du cerveau, de la moelle épinière et des nerfs",
          "Des muscles et des os",
          "De l'estomac et des intestins"
        ],
        correctAnswer: 1,
        explanation: "Le système nerveux est constitué du cerveau, de la moelle épinière et des nerfs."
      },
      {
        id: 1,
        question: "Quel est le rôle des neurones ?",
        options: [
          "Produire de l'énergie",
          "Assurer la transmission du message nerveux",
          "Digérer les aliments",
          "Fabriquer du sang"
        ],
        correctAnswer: 1,
        explanation: "Les neurones assurent la transmission du message nerveux dans tout l'organisme."
      },
      {
        id: 2,
        question: "Quelle est la nature du message nerveux ?",
        options: [
          "Uniquement chimique",
          "Uniquement électrique",
          "Électrique et chimique",
          "Mécanique"
        ],
        correctAnswer: 2,
        explanation: "Le message nerveux est à la fois électrique (le long du neurone) et chimique (entre les neurones au niveau des synapses)."
      },
      {
        id: 3,
        question: "Qu'est-ce qu'un réflexe ?",
        options: [
          "Une action volontaire",
          "Une réponse rapide et involontaire à un stimulus",
          "Un mouvement lent",
          "Une pensée consciente"
        ],
        correctAnswer: 1,
        explanation: "Un réflexe est une réponse rapide et involontaire à un stimulus, comme le retrait de la main d'une source de chaleur. Il passe par un arc réflexe."
      },
      {
        id: 4,
        question: "Quel effet peuvent avoir les drogues sur le système nerveux ?",
        options: [
          "Aucun effet",
          "Elles améliorent toujours son fonctionnement",
          "Elles peuvent perturber son fonctionnement et créer des addictions",
          "Elles le renforcent"
        ],
        correctAnswer: 2,
        explanation: "Certains comportements, comme la consommation de drogues ou d'alcool, peuvent perturber le fonctionnement du système nerveux et créer des addictions."
      }
    ]
  }
];
