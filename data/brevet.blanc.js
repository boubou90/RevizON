/**
 * Brevet blanc – Français (3h – 100 points)
 */

export const brevetBlancFrancais = {
  duration: 3 * 60 * 60, // 3 heures en secondes
  totalPoints: 100,

  text: {
    title: 'Texte support',
    author: 'Texte fictif – inspiration autobiographique',
    content: `Je me souviens encore de ce matin-là, comme si le temps s’était figé. 
La rue était silencieuse, inhabituellement calme, et la lumière pâle donnait aux façades un air irréel. 
Je marchais lentement, traînant derrière moi un passé que je n’osais pas affronter.

Chaque pas me rapprochait de l’inconnu. Les passants avaient disparu, 
comme si la ville elle-même retenait son souffle. 
Je sentais mon cœur battre plus vite, partagé entre la peur et l’excitation.

Derrière moi, la porte s’est refermée sans bruit. 
Ce claquement étouffé marquait la fin d’une époque. 
Je savais que je ne reviendrais pas en arrière. 
Je ne me suis pas retourné. Certains souvenirs doivent rester là où ils sont, 
enfouis, pour nous permettre d’avancer.

Au bout de la rue, une silhouette est apparue. 
Elle m’observait, immobile, et j’ai hésité un instant. 
Puis j’ai repris ma marche, convaincu que ce jour-là allait transformer ma vie.`
  },

  sections: [
    /* ================================================= */
    /* COMPRÉHENSION ET INTERPRÉTATION – 40 points       */
    /* ================================================= */
    {
      id: 'comprehension',
      title: 'Compréhension et compétences d’interprétation',
      points: 40,
      questions: [
        {
          id: 1,
          question: 'Quel est le type de texte proposé ? Justifiez votre réponse.',
          points: 5,
          expected: 'Texte narratif à la première personne, proche de l’autobiographie.'
        },
        {
          id: 2,
          question: 'Quel sentiment domine chez le narrateur ? Appuyez-vous sur le texte.',
          points: 5,
          expected: 'La tristesse, la nostalgie ou le regret.'
        },
        {
          id: 3,
          question: 'Expliquez le sens de la phrase : « la ville retenait son souffle ».',
          points: 5,
          expected: 'Expression imagée montrant le silence et la tension.'
        },
        {
          id: 4,
          question: 'Pourquoi le narrateur ne se retourne-t-il pas ?',
          points: 5,
          expected: 'Il veut éviter d’affronter ses émotions ou le passé.'
        },
        {
          id: 5,
          question: 'Montrez que ce texte relève du thème « Se raconter, se représenter ».',
          points: 10,
          expected: 'Présence du « je », souvenir personnel, introspection.'
        },
        {
          id: 6,
          question: 'Relevez une figure de style et expliquez son effet.',
          points: 10,
          expected: 'Personnification : « la ville retenait son souffle ».'
        }
      ]
    },

    /* ================================================= */
    /* GRAMMAIRE ET COMPÉTENCES LINGUISTIQUES – 20 pts   */
    /* ================================================= */
    {
      id: 'grammaire',
      title: 'Grammaire et compétences linguistiques',
      points: 20,
      questions: [
        {
          id: 7,
          question: 'Identifiez la classe grammaticale et la fonction de « la rue ».',
          points: 4,
          expected: 'Groupe nominal / sujet.'
        },
        {
          id: 8,
          question: 'Dans « Je marchais lentement », indiquez la valeur de l’imparfait.',
          points: 4,
          expected: 'Imparfait de description ou de durée.'
        },
        {
          id: 9,
          question: 'Transformez la phrase suivante à la voix passive : « La porte s’est refermée. »',
          points: 4,
          expected: 'La porte a été refermée.'
        },
        {
          id: 10,
          question: 'Identifiez la figure de style dans « la ville retenait son souffle ».',
          points: 4,
          expected: 'Personnification.'
        },
        {
          id: 11,
          question: 'Expliquez la différence entre discours direct et indirect.',
          points: 4,
          expected: 'Direct : paroles exactes / Indirect : paroles intégrées.'
        }
      ]
    },

    /* ================================================= */
    /* DICTÉE – 10 points                               */
    /* ================================================= */
    {
      id: 'dictee',
      title: 'Dictée',
      points: 10,
      instructions: 'Le texte est dicté par le professeur. Une lecture finale est faite.',
      text: `Il marchait dans la ville déserte alors que le soleil se levait à peine, jetant des ombres allongées sur le pavé humide. Il sentait la fraîcheur de l'air matinal sur son visage. Tout semblait possible en ce jour nouveau, et pourtant, une légère appréhension lui serrait la gorge. C'était le moment de partir, de laisser derrière lui les souvenirs de l'enfance pour embrasser un avenir qu'il espérait radieux.`,
      correctionNotes: '–1 par faute grammaticale, –0,5 par faute lexicale.'
    },

    /* ================================================= */
    /* RÉDACTION – 30 points                            */
    /* ================================================= */
    {
      id: 'redaction',
      title: 'Rédaction',
      points: 30,
      subjects: [
        {
          id: 'imagination',
          title: 'Sujet d’imagination',
          text: 'Imaginez la suite du texte en racontant ce que le narrateur va faire après avoir quitté la rue.',
          criteria: [
            'Respect du sujet',
            'Cohérence du récit',
            'Richesse du vocabulaire',
            'Correction grammaticale'
          ]
        },
        {
          id: 'reflexion',
          title: 'Sujet de réflexion',
          text: 'Pensez-vous que les souvenirs jouent un rôle important dans la construction de l’identité ?',
          criteria: [
            'Thèse claire',
            'Arguments développés',
            'Exemples précis',
            'Organisation du texte'
          ]
        }
      ]
    }
  ]
};
