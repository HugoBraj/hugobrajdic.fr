import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

// Détecter la langue de l'appareil
const getDefaultLanguage = () => {
  // Vérifier d'abord le stockage local
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    return savedLang;
  }

  // Déterminer la langue de l'appareil
  const browserLang = navigator.language || navigator.userLanguage;
  
  // Si la langue commence par 'fr', utiliser le français, sinon l'anglais
  if (browserLang.startsWith('fr')) {
    return 'fr';
  }
  
  return 'en'; // Anglais par défaut
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
