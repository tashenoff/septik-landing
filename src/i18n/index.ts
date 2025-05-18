import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru.json';
import kk from './locales/kk.json';

// Функция для обновления языковых атрибутов
const updateLanguageAttributes = (language: string) => {
  // Обновляем атрибут lang у html
  document.documentElement.lang = language;
  
  // Обновляем или создаем мета-тег для языка
  let languageMeta = document.querySelector('meta[name="language"]');
  if (!languageMeta) {
    languageMeta = document.createElement('meta');
    languageMeta.setAttribute('name', 'language');
    document.head.appendChild(languageMeta);
  }
  languageMeta.setAttribute('content', language);
};

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
}).then(() => {
  // Обновляем атрибуты при инициализации
  updateLanguageAttributes(i18n.language);
  
  // Добавляем слушатель для обновления атрибутов при смене языка
  i18n.on('languageChanged', updateLanguageAttributes);
});

export default i18n; 