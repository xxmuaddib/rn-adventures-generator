import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {
  getTranslationsFromScene,
  getLanguages,
  generateTranslationsObject,
} from '../helpers/TranslationsHelper';
import { SCENES } from '../configs/main-scene';

i18n.locale = Localization.locale;
i18n.fallbacks = true;

const everyTranslation = getTranslationsFromScene(SCENES);
const allLanguages = getLanguages(everyTranslation);
const translations = generateTranslationsObject(allLanguages, everyTranslation);

i18n.translations = translations;

export const internationalizeScene = (lasti18nindex, obj) => {
  if (typeof obj === 'object') {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {
        const nexti18nindex =
          lasti18nindex === 'SCENES'
            ? `${lasti18nindex}_${obj[key].name}`
            : `${lasti18nindex}_${key}`;

        if (obj[key].translations !== undefined) {
          // eslint-disable-next-line no-param-reassign
          console.log(nexti18nindex);
          obj[key] = i18n.t(nexti18nindex);
        }
        internationalizeScene(nexti18nindex, obj[key]);
      }
    });
  }
};
