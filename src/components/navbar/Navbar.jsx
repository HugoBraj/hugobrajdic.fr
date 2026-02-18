import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../language-switcher/LanguageSwitcher'
import './navbar.css'

const Navbar = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo Signature */}
        <Link to="/#hero" className="navbar__logo" onClick={closeMenu}>
          <svg width="60" height="56" viewBox="0 0 94 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='navbar__signature' d="M23.3405 6.40903C23.3405 6.40903 38.8246 46 42 70C43.0881 78.2244 33 77 31.5 65C30.111 53.8877 33.1426 50.9724 39.6754 39.4374C46.8161 26.8288 47.1665 6.40903 47.0104 3.09064C46.8544 -0.227752 55.2819 88.7984 53.7213 68.9399C52.1606 49.0815 51.9005 25.2824 51.9005 18.8011C51.9005 12.3199 62.4341 7.76327 71.2526 12.3199C78.0221 15.8178 81.839 21.6774 80.9286 29.2229C79.5731 40.4584 53.7213 39.4374 53.7213 39.4374C53.7213 39.4374 74.9378 33.9125 83.4777 41.8225C88.1634 46.1625 91.3521 49.9764 90.9688 56.3404C90.6251 62.0496 87.4696 68.1495 83.4777 72.2583C59.5997 96.8351 5.96524 80.9172 3 65.7771" stroke="#B0DEFF" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </Link>

        {/* Burger Menu Button */}
        <button 
          className={`navbar__burger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar__links">
            <li>
              <Link to="/#projects" className="navbar__link" onClick={closeMenu}>
                {t('nav_projects')}
              </Link>
            </li>
            <li>
              <Link to="/#resume" className="navbar__link" onClick={closeMenu}>
                {t('nav_resume')}
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="navbar__link" onClick={closeMenu}>
                {t('nav_contact')}
              </Link>
            </li>
          </ul>

          {/* Socials & Language */}
          <div className="navbar__actions">
            <div className="navbar__socials">
              <a href="https://www.linkedin.com/in/hugo-brajdic-b655b2235/?originalSubdomain=fr" className="navbar__social-link" target='_blank' rel="noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/HugoBraj" className="navbar__social-link" target='_blank' rel="noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/hugo_braj/" className="navbar__social-link" target='_blank' rel="noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar