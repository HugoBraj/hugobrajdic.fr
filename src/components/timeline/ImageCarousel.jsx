import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si pas d'images, afficher un placeholder
  if (!images || images.length === 0) {
    return (
      <div className="carousel__placeholder">
        <span>📷</span>
        <p>Aucune image disponible</p>
      </div>
    );
  }

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        {images.length > 1 && (
          <button 
            className="carousel__button carousel__button--prev" 
            onClick={goToPrevious}
            aria-label="Image précédente"
          >
            ‹
          </button>
        )}

        <div className="carousel__image-wrapper">
          <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`}
            className="carousel__image"
          />
        </div>

        {images.length > 1 && (
          <button 
            className="carousel__button carousel__button--next" 
            onClick={goToNext}
            aria-label="Image suivante"
          >
            ›
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel__indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel__indicator ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={(e) => goToSlide(index, e)}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
