import React from 'react'
import { useTranslation } from 'react-i18next'
import './contact.css'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section className="contact" id='contact'>
      <div className="contact__container">
        <h2 className="contact__title">{t('contact_title')}</h2>
        
        <div className="contact__content">
          <p className="contact__subtitle">
            {t('hero_greeting')} Hugo! Si vous avez des questions ou intéressé par une collaboration, n'hésitez pas à me contacter.
          </p>

          <form className="contact__form">
            <div className="contact__group">
              <label htmlFor="email" className="contact__label">
                {t('contact_email_label')}
              </label>
              <input 
                type="email" 
                id="email" 
                className="contact__input" 
                placeholder="votre@email.com"
                required
              />
            </div>

            <div className="contact__group">
              <label htmlFor="message" className="contact__label">
                {t('contact_message_label')}
              </label>
              <textarea 
                id="message" 
                className="contact__textarea" 
                placeholder="Votre message..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__button">
              {t('contact_send')}
            </button>
          </form>

          <div className="contact__info">
            <a href="mailto:hugo@example.com" className="contact__link">
              <i className="fas fa-envelope"></i>
              hugo@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
