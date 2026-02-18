import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { timelineData } from '../timeline/data'
import './projects.css'

const getTypeLabel = (type, t) => {
  const labels = {
    professional: t('type_professional'),
    academic: t('type_academic'),
    personal: t('type_personal')
  }
  return labels[type] || type
}

const Projects = () => {
  const { t } = useTranslation()

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">{t('projects_title')}</h2>
        
        <div className="projects__grid">
          {timelineData.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="projects__card-link"
            >
              <div className="projects__card">
                <div className="projects__header">
                  <div className="projects__info">
                    <div className="projects__title-badges">
                      <h3 className="projects__name">{t(project.titleKey)}</h3>
                      <div className="projects__badges">
                        {project.types.map((type, idx) => (
                          <span key={idx} className={`projects__badge projects__badge--${type}`}>
                            {getTypeLabel(type, t)}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.subtitleKey && (
                      <p className="projects__subtitle">{t(project.subtitleKey)}</p>
                    )}
                  </div>
                  <div className="projects__arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>

                <div className="projects__skills">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="projects__skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
