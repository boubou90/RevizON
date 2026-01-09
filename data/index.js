import { mathCourses } from './math.data';
import { frenchCourses } from './french.data';
import { svtCourses } from './svt.data';
import { physiqueCourses } from './physique.data';
import { technologieCourses } from './technologie.data';

import { frenchQuizzes } from './french.quiz';
import { mathQuizzes } from './math.quiz';

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
 * Centralisation des quiz par matière
 */
export const quizzesDataByLesson = {
  french: frenchQuizzes,
  math: mathQuizzes,
};
