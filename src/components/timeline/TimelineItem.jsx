import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';

const TimelineItem = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const typeIcons = {
    professional: '💼',
    academic: '🎓',
    personal: '🚀'
  };

  const typeLabels = {
    professional: 'Professionnel',
    academic: 'Académique',
    personal: 'Personnel'
  };

  return (
    <div 
      className={`timeline__item timeline__item--${item.position} ${
        isExpanded ? 'timeline__item--expanded' : ''
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Point sur la timeline */}
      <div className="timeline__point">
        <span className="timeline__icon">{typeIcons[item.type]}</span>
      </div>

      {/* Carte de contenu */}
      <div className="timeline__card">
        {/* En-tête */}
        <div className="timeline__header">
          <span className={`timeline__badge timeline__badge--${item.type}`}>
            {typeLabels[item.type]}
          </span>
          <span className="timeline__date">{item.date}</span>
        </div>

        {/* Contenu principal */}
        <div className="timeline__content">
          <h3 className="timeline__title">{item.title}</h3>
          <p className="timeline__company">{item.company}</p>
          <p className="timeline__description">{item.description}</p>

          {/* Compétences */}
          <div className="timeline__skills">
            {item.skills.map((skill, idx) => (
              <span key={idx} className="timeline__skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Carrousel d'images (visible au hover) */}
        <div className={`timeline__carousel-wrapper ${
          isExpanded ? 'timeline__carousel-wrapper--visible' : ''
        }`}>
          <ImageCarousel images={item.images} />
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
