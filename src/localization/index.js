import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {
  getTranslationsFromScene,
  getLanguages,
  generateTranslationsObject,
} from '../helpers/TranslationsHelper';
import { SCENES } from '../configs/scenes';

i18n.locale = Localization.locale;
i18n.fallbacks = true;

const collectSceneTranslations = scene => {
  const everyTranslation = getTranslationsFromScene(scene);
  const allLanguages = getLanguages(everyTranslation);
  const translations = generateTranslationsObject(
    allLanguages,
    everyTranslation,
  );
  i18n.translations = translations;
};

export const internationalizeScene = (lasti18nindex, obj) =>
  typeof obj === Object &&
  Object.keys(obj).forEach(key => {
    const nexti18nindex = `${lasti18nindex}_${key}`;
    if (obj[key].translations !== undefined) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = i18n.t[`${nexti18nindex}`];
    }
    internationalizeScene(nexti18nindex, obj[key]);
  });

collectSceneTranslations(SCENES);
