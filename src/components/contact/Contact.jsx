import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import './contact.css'

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSending) {
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ type: 'error', message: t('contact_status_error') })
      return
    }

    setIsSending(true)
    setStatus({ type: 'sending', message: t('contact_status_sending') })

    const payload = {
      email: formData.email,
      title: formData.subject,
      message: formData.message,
      name: formData.email.split('@')[0] || 'Visitor',
      time: new Date().toLocaleString()
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, {
        publicKey: PUBLIC_KEY
      })
      setStatus({ type: 'success', message: t('contact_status_success') })
      setFormData({ email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: t('contact_status_error') })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="contact" id='contact'>
      <div className="contact__container">
        <h2 className="contact__title">{t('contact_title')}</h2>
        
        <div className="contact__content">
          <p className="contact__subtitle">
            {t('contact_subtitle')}
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__group">
              <label htmlFor="email" className="contact__label">
                {t('contact_email_label')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                placeholder={t('contact_email_placeholder')}
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__group">
              <label htmlFor="subject" className="contact__label">
                {t('contact_subject_label')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="contact__input"
                placeholder={t('contact_subject_placeholder')}
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__group">
              <label htmlFor="message" className="contact__label">
                {t('contact_message_label')}
              </label>
              <textarea
                id="message"
                name="message"
                className="contact__textarea"
                placeholder={t('contact_message_placeholder')}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact__button" disabled={isSending}>
              {isSending ? t('contact_status_sending') : t('contact_send')}
            </button>

            {status.message && (
              <p
                className={`contact__status contact__status--${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
