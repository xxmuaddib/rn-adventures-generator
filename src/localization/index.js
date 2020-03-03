import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './translations/en/en.json';
import ru from './translations/ru/ru.json';

i18n.locale = Localization.locale;
i18n.fallbacks = true;

i18n.translations = {
  en,
  ru,
};