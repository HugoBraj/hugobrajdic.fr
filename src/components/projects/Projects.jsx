import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ImageCarousel from '../timeline/ImageCarousel'
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
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">{t('projects_title')}</h2>
        
        <div className="projects__grid">
          {timelineData.map((project) => (
            <div
              key={project.id}
              className="projects__card"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="projects__header">
                <div className="projects__info">
                  <h3 className="projects__name">{project.title}</h3>
                  <p className="projects__company">{project.company}</p>
                </div>
                <span className={`projects__badge projects__badge--${project.type}`}>
                  {getTypeLabel(project.type, t)}
                </span>
              </div>

              <p className="projects__date">{project.date}</p>
              <p className="projects__description">{project.description}</p>

              <div className="projects__skills">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="projects__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {project.images && project.images.length > 0 && (
                <div className={`projects__carousel-wrapper ${hoveredId === project.id ? 'active' : ''}`}>
                  <ImageCarousel images={project.images} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
