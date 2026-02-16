import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

const rtlLanguages = ['ar', 'ur'];

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar', 'ur'],
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    ns: ['common', 'prayers', 'education', 'duas'],
    defaultNS: 'common',

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },

    react: {
      useSuspense: true,
    },
  });

// Update document direction based on language
i18n.on('languageChanged', (lng) => {
  const dir = rtlLanguages.includes(lng) ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;

  // Add language class to body for styling
  document.body.classList.remove('lang-en', 'lang-ar', 'lang-ur');
  document.body.classList.add(`lang-${lng}`);
});

// Set initial direction
const initialLang = i18n.language || 'en';
const initialDir = rtlLanguages.includes(initialLang) ? 'rtl' : 'ltr';
document.documentElement.dir = initialDir;
document.body.classList.add(`lang-${initialLang}`);

export default i18n;
export { rtlLanguages };
