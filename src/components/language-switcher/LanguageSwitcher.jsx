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
      {i18n.language === 'fr' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
          aria-hidden="true"
          focusable="false"
        >
          <mask id="SVGuywqVbel">
            <circle cx="256" cy="256" r="256" fill="#fff" />
          </mask>
          <g mask="url(#SVGuywqVbel)">
            <path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
            <path fill="#0052b4" d="M0 0h167v512H0z" />
            <path fill="#d80027" d="M345 0h167v512H345z" />
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
          aria-hidden="true"
          focusable="false"
        >
          <mask id="SVGuywqVbel">
            <circle cx="256" cy="256" r="256" fill="#fff" />
          </mask>
          <g mask="url(#SVGuywqVbel)">
            <path
              fill="#eee"
              d="M256 0L0 256v64l32 32l-32 32v128l22-8l23 8h23l54-32l54 32h32l48-32l48 32h32l54-32l54 32h68l-8-22l8-23v-23l-32-54l32-54v-32l-32-48l32-48v-32l-32-54l32-54V0z"
            />
            <path
              fill="#d80027"
              d="M224 64v64h160l64-64zm0 128l32 64l-48 48v208h96V304h208v-96H304l16-16zM0 320v64h128l-64 64H0v64h45l131-131v-45l16-16zm336 16l176 176v-45L381 336Z"
            />
            <path
              fill="#0052b4"
              d="M0 0v256h256V0zm512 68L404 176h108zM404 336l108 108V336zm-228 68L68 512h108zm160 0v108h108z"
            />
            <path
              fill="#eee"
              d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67Zm-81 0l57-41H12l57 41l-22-67Z"
            />
          </g>
        </svg>
      )}
    </button>
  );
};

export default LanguageSwitcher;
