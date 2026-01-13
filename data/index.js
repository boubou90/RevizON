import { mathCourses } from './math.data';
import { frenchCourses } from './french.data';
import { svtCourses } from './svt.data';
import { physiqueCourses } from './physique.data';
import { technologieCourses } from './technologie.data';

import { frenchQuizzes } from './french.quiz';
import { mathQuizzes } from './math.quiz';
import { svtQuizzes } from './svt.quiz';
import { physiqueQuizzes } from './physique.quiz';
import { technologieQuizzes } from './technologie.quiz';
import { historyQuizzes } from './history.quiz-by-lesson';
import { geographyQuizzes } from './geography.quiz-by-lesson';
import { emcQuizzes } from './emc.quiz-by-lesson';

/**
 * @typedef {import('./math.data').Lesson} Lesson
 */

/**
 * Centralisation des données de cours par matière
 * Note: Histoire, Géographie et EMC sont gérés séparément via hgeo-emc.index.js
 * @type {Object.<string, Lesson[]>}
 */
export const coursesData = {
  math: mathCourses,
  french: frenchCourses,
  svt: svtCourses,
  physique: physiqueCourses,
  technologie: technologieCourses,
};

/**
 * Centralisation des quiz par matière (organisés par leçon)
 */
export const quizzesDataByLesson = {
  french: frenchQuizzes,
  math: mathQuizzes,
  svt: svtQuizzes,
  physique: physiqueQuizzes,
  technologie: technologieQuizzes,
  histoire: historyQuizzes,
  geographie: geographyQuizzes,
  emc: emcQuizzes,
  // Alias avec _sub pour compatibilité avec le menu Hist/Géo/EMC
  history_sub: historyQuizzes,
  geography_sub: geographyQuizzes,
  emc_sub: emcQuizzes,
};
