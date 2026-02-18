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
      <i className={`fa-solid fa-${i18n.language === 'fr' ? 'earth-americas' : 'earth-europe'}`}></i>
      <span className="lang-toggle-text">{i18n.language === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
};

export default LanguageSwitcher;
