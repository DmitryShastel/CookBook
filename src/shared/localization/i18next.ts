import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { EN } from '@/shared/localization/en';
import { FR } from '@/shared/localization/fr';

const resources = {
  en: {
    translation: EN,
  },
  fr: {
    translation: FR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
