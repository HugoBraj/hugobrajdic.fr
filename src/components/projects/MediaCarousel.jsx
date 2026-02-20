import React, { useRef, useState } from 'react'
import MediaModal from './MediaModal'
import './media-carousel.css'

const MediaCarousel = ({ images }) => {
  const scrollContainerRef = useRef(null)
  const [selectedMedia, setSelectedMedia] = useState(null)

  if (!images || images.length === 0) {
    return null
  }

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // largeur d'un média + gap
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <div className="media-carousel">
        <div className="media-carousel__wrapper">
          {images.length > 1 && (
            <button
              className="media-carousel__arrow media-carousel__arrow--left"
              onClick={() => handleScroll('left')}
              aria-label="Défiler vers la gauche"
            >
              ‹
            </button>
          )}

          <div className="media-carousel__container" ref={scrollContainerRef}>
            {images.map((media, index) => {
              const isVideo = media.endsWith('.mp4') || media.endsWith('.webm')
              return (
                <div key={index} className="media-carousel__item">
                  {isVideo ? (
                    <video
                      className="media-carousel__media media-carousel__video"
                      src={media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      className="media-carousel__media media-carousel__image"
                      src={media}
                      alt={`Media ${index + 1}`}
                    />
                  )}
                  <button
                    className="media-carousel__overlay-btn"
                    onClick={() => setSelectedMedia(media)}
                    title="Afficher en grand"
                  />
                </div>
              )
            })}
          </div>

          {images.length > 1 && (
            <button
              className="media-carousel__arrow media-carousel__arrow--right"
              onClick={() => handleScroll('right')}
              aria-label="Défiler vers la droite"
            >
              ›
            </button>
          )}
        </div>
      </div>

      {selectedMedia && <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />}
    </>
  )
}

export default MediaCarousel
