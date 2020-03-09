import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {
  getTranslationsFromScene,
  getLanguages,
  generateTranslationsObject,
} from '../helpers/TranslationsHelper';

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

const mutateObjectProperty = (lasti18nindex, obj) =>
  obj.constructor === Object &&
  Object.keys(obj).forEach(key => {
    const nexti18nindex = `${lasti18nindex}_${key}`;
    if (obj[key].translations !== undefined) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = i18n.t[`${nexti18nindex}`];
    }
    mutateObjectProperty(nexti18nindex, obj[key]);
  });

export const internationalizeScene = scene => {
  collectSceneTranslations(scene);
  mutateObjectProperty('SCENES', scene);
};
