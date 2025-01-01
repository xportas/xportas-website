import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ES from '../../../public/locales/es/strings.json';
import EN from '../../../public/locales/en/strings.json';
import PT from '../../../public/locales/pt/strings.json';
import GAL from '../../../public/locales/gal/strings.json';

const resources = {
  es: {
    strings: ES,
  },
  en: {
    strings: EN,
  },
  pt: {
    strings: PT,
  },
  gal: {
    strings: GAL,
  },
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    debug: false,
    fallbackLng: 'en',
    saveMissing: true
  });

export default i18next;