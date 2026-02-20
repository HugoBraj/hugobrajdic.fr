import React, { useRef } from 'react'
import { useLeafAnimation } from '../../hooks/useLeafAnimation'
import './leaf-animation.css'

const LeafAnimation = () => {
  const containerRef = useRef(null)
  useLeafAnimation(containerRef)

  return (
    <div 
      className="leaf-animation-container"
      ref={containerRef}
      aria-label="Animated leaf background"
    />
  )
}

export default LeafAnimation
