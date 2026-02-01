import React from 'react';
import { useTranslation } from 'react-i18next';
import './language-switcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <button
      className="lang-toggle-btn"
      onClick={toggleLang}
      title={i18n.language === 'fr' ? 'Switch to English' : 'Passer au français'}
    >
      {i18n.language === 'fr' ? 'EN' : 'FR'}
    </button>
  );
};

export default LanguageSwitcher;
