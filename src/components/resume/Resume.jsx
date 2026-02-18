import React from 'react'
import { useTranslation } from 'react-i18next'
import './resume.css'

const Resume = () => {
  const { t } = useTranslation()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Hugo_Brajdic_CV.pdf'
    link.download = 'Hugo_Brajdic_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="resume" id="resume">
      <div className="resume__container">
        <h2 className="resume__title">{t('resume_title')}</h2>
        
        <div className="resume__content">
          <p className="resume__subtitle">{t('resume_subtitle')}</p>
          
          <button
            className="resume__button"
            onClick={handleDownload}
            aria-label={t('resume_download')}
          >
            <span className="resume__icon">📄</span>
            {t('resume_download')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Resume
