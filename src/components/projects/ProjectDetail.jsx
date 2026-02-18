import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ImageCarousel from '../timeline/ImageCarousel'
import { timelineData } from '../timeline/data'
import './project-detail.css'

const getTypeLabel = (type, t) => {
  const labels = {
    professional: t('type_professional'),
    academic: t('type_academic'),
    personal: t('type_personal')
  }
  return labels[type] || type
}

const ProjectDetail = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()

  const project = timelineData.find((p) => p.id === parseInt(id))

  if (!project) {
    return (
      <section className="project-detail">
        <div className="project-detail__container">
          <p className="project-detail__not-found">{t('project_detail_not_found')}</p>
          <button onClick={() => navigate('/#projects')} className="project-detail__back">
            {t('project_detail_back')}
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="project-detail">
      <div className="project-detail__container">
        <button onClick={() => navigate('/#projects')} className="project-detail__back">
          {t('project_detail_back')}
        </button>

        <div className="project-detail__header">
          <div className="project-detail__info">
            <h1 className="project-detail__title">{t(project.titleKey)}</h1>
            {project.subtitleKey && (
              <p className="project-detail__subtitle">{t(project.subtitleKey)}</p>
            )}
            <div className="project-detail__meta">
              <p className="project-detail__date">{project.date}</p>
              <div className="project-detail__badges">
                {project.types.map((type, idx) => (
                  <span key={idx} className={`project-detail__badge project-detail__badge--${type}`}>
                    {getTypeLabel(type, t)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail__content">
          <div className="project-detail__main">
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t('project_detail_description')}</h2>
              <p className="project-detail__description">{t(project.descriptionKey)}</p>
            </div>

            <div className="project-detail__section">
              <h2 className="project-detail__section-title">{t('project_detail_skills')}</h2>
              <div className="project-detail__skills">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="project-detail__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {project.href && (
              <div className="project-detail__section">
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-detail__link">
                  {t('project_detail_link')}
                </a>
              </div>
            )}
          </div>

          {project.images && project.images.length > 0 && (
            <div className="project-detail__gallery">
              <h2 className="project-detail__section-title">{t('project_detail_gallery')}</h2>
              <ImageCarousel images={project.images} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
