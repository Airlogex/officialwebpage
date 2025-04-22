import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from '../../locales/en.json';
import spanish from '../../locales/es.json';
import french from '../../locales/fr.json';
import german from '../../locales/de.json';
import italian from '../../locales/it.json';
import portuguese from '../../locales/pt.json';
import russian from '../../locales/ru.json';
import chinese from '../../locales/zh.json';

const resources = {
  en: { translation: english },
  es: { translation: spanish },
  fr: { translation: french },
  de: { translation: german },
  it: { translation: italian },
  pt: { translation: portuguese },
  ru: { translation: russian },
  zh: { translation: chinese }
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
