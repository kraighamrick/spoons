import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleError = () => {
    console.log('Image failed to load:', props.src)
    setDidError(true)
  }

  const handleLoad = () => {
    console.log('Image loaded successfully:', props.src)
    setIsLoaded(true)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const { src, alt, style, className, ...rest } = props

  // Check if it's a GIF
  const isGif = src && src.toLowerCase().includes('.gif')

  // If src is empty or undefined, show nothing
  if (!src || src.trim() === '') {
    console.log('No src provided for image')
    return (
      <div
        className={`inline-block bg-gray-900 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          {/* Empty div - no image placeholder */}
        </div>
      </div>
    )
  }

  console.log('Rendering image with src:', src)

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img 
      src={src}
      alt={alt} 
      className={className} 
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0.5,
        transition: 'opacity 0.3s ease-in-out',
        // For GIFs, control animation based on hover
        ...(isGif && {
          animationPlayState: isHovered ? 'running' : 'paused'
        })
      }}
      {...rest} 
      onError={handleError}
      onLoad={handleLoad}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      loading="lazy"
      decoding="async"
    />
  )
}
