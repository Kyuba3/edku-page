import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPL from './assets/translations/translationPL.json'
import translationEN from './assets/translations/translationEN.json'


i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'pl',
    resources: {
      pl: {
        translations: translationPL
      },
      en: {
        translations: translationEN
      }
    }
  });

export default i18n;