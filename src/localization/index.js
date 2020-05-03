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

export { i18n };
