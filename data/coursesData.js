import { coursesData as allCourses } from './index';
import { hgeoEmcCourses } from './hgeo-emc.index';

/**
 * Ce fichier sert de pont pour assurer la compatibilité avec le reste de l'application
 */
export const coursesData = {
  ...allCourses,
  // Mapping spécial pour le menu Hist/Géo/EMC
  histoire: hgeoEmcCourses.history,
  geographie: hgeoEmcCourses.geography,
  emc: hgeoEmcCourses.emc,
  // Alias avec _sub pour compatibilité avec le menu Hist/Géo/EMC
  history_sub: hgeoEmcCourses.history,
  geography_sub: hgeoEmcCourses.geography,
  emc_sub: hgeoEmcCourses.emc,
};
