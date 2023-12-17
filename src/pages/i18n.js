import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../../public/locales/en/translation.json';
import arTranslation from '../../public/locales/ar/translation.json';
import frTranslation from '../../public/locales/fr/translation.json';
import itTranslation from '../../public/locales/it/translation.json';
import ruTranslation from '../../public/locales/ru/translation.json';
import chTranslation from '../../public/locales/ch/translation.json';

const resources = {
  en: { translation: enTranslation },
  ar: { translation: arTranslation },
  fr: { translation: frTranslation },
  it: { translation: itTranslation },
  ru: { translation: ruTranslation },
  ch: { translation: chTranslation },
};

i18n
  ?.use(initReactI18next)
  ?.init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;