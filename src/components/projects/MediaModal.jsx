import React, { useEffect } from 'react'
import './media-modal.css'

const MediaModal = ({ media, onClose }) => {
  const isVideo = media.endsWith('.mp4') || media.endsWith('.webm')

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="media-modal" onClick={handleBackdropClick}>
      <div className="media-modal__content">
        <button className="media-modal__close" onClick={onClose} aria-label="Fermer">
          ✕
        </button>

        {isVideo ? (
          <video
            className="media-modal__media media-modal__video"
            src={media}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        ) : (
          <img className="media-modal__media media-modal__image" src={media} alt="Modal media" />
        )}
      </div>
    </div>
  )
}

export default MediaModal
