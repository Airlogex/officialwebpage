import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from '../../locales/en.json';
import spanish from '../../locales/es.json';

const resources = {
  en: { translation: english },
  es: { translation: spanish }
};

// Load saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
