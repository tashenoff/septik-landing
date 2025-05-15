import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru.json';
import kk from './locales/kk.json';

const i18nInstance = i18n
  .use(LanguageDetector)
  .use(initReactI18next);

export const i18nInit = i18nInstance.init({
  resources: {
    ru: { translation: ru },
    kk: { translation: kk }
  },
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  }
});

export default i18n; 