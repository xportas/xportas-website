import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import EN from '../../../public/locales/en/strings.json';
import ES from '../../../public/locales/es/strings.json';
import GAL from '../../../public/locales/gal/strings.json';
import PT from '../../../public/locales/pt/strings.json';

const resources = {
  es: { strings: ES },
  "es-ES": { strings: ES },
  en: { strings: EN },
  pt: { strings: PT },
  gl: { strings: GAL },
  gal: { strings: GAL },
}

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    debug: false,
    detection: {
      order: ['navigator', 'htmlTag', 'querystring', 'cookie', 'localStorage', 'sessionStorage'],
      caches: ['cookie', 'localStorage'],
    },
    fallbackLng: 'en',
    saveMissing: true
  });

export default i18next;