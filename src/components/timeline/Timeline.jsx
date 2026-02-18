import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import TimelineItem from './TimelineItem';
import { timelineData } from './data';
import './timeline.css';

const Timeline = () => {
  const [timelineRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  // Alterner la position (gauche/droite) automatiquement
  const enrichedData = timelineData.map((item, index) => ({
    ...item,
    position: index % 2 === 0 ? 'right' : 'left'
  }));

  return (
    <section 
      ref={timelineRef}
      className={`container reveal ${isVisible ? 'visible' : ''}`}
      id='timeline'
    >
      <h2>Mon Parcours</h2>
      <p className="timeline__intro">
        Une vue chronologique de mon expérience professionnelle, académique et de mes projets personnels
      </p>

      <div className="timeline">
        {/* Ligne verticale centrale */}
        <div className="timeline__line" />

        {/* Éléments de la timeline */}
        <div className="timeline__items">
          {enrichedData.map((item, index) => (
            <TimelineItem 
              key={item.id} 
              item={item} 
              index={index}
            />
          ))}
        </div>

        {/* Indicateur de fin */}
        <div className="timeline__end">
          <div className="timeline__end-icon">⭐</div>
          <p>Le début de l'aventure</p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
