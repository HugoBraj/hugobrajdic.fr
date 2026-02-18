import React from 'react'
import { useTranslation } from 'react-i18next'
import "./hero.css"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="hero" id='home'>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__greeting">{t('hero_greeting')}</span>
            {' '}
            <span className="hero__name">{t('hero_name')}</span>
            <span className="hero__comma">,</span>
          </h1>
          
          <p className="hero__subtitle">
            {t('hero_subtitle')}
            {' '}
            <a href="#contact" className="hero__link">
              <span className="hero__highlight">{t('hero_highlight')}</span>
              <span className="hero__tooltip">{t('hero_tooltip')}</span>
            </a>
            !
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
