import React, { useMemo, useRef, useEffect, useState } from 'react'
import { Work } from '../data/works'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface WorksSectionProps {
  works: Work[]
  onWorkClick: (work: Work) => void
}

export function WorksSection({ works, onWorkClick }: WorksSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const [autoScrollSpeed, setAutoScrollSpeed] = useState(0.5) // pixels per frame
  const animationFrameRef = useRef<number>()

  const sortedWorks = useMemo(() => {
    console.log('WorksSection received works:', works.length, 'works')
    const sorted = [...works].sort((a, b) => a.year - b.year)
    console.log('Sorted works:', sorted.map(w => ({ title: w.title, thumbnail: w.thumbnail })))
    return sorted
  }, [works])

  // Auto-scroll animation
  const autoScroll = () => {
    if (!scrollContainerRef.current || isUserScrolling) {
      animationFrameRef.current = requestAnimationFrame(autoScroll)
      return
    }

    const container = scrollContainerRef.current
    const maxScroll = container.scrollWidth - container.clientWidth
    
    if (maxScroll <= 0) {
      animationFrameRef.current = requestAnimationFrame(autoScroll)
      return
    }

    // Reset to beginning when reaching the end
    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0
    } else {
      container.scrollLeft += autoScrollSpeed
    }

    animationFrameRef.current = requestAnimationFrame(autoScroll)
  }

  // Handle user scroll interaction
  const handleUserScroll = () => {
    setIsUserScrolling(true)
    setAutoScrollSpeed(0) // Pause auto-scroll
    
    // Resume auto-scroll after user stops scrolling
    setTimeout(() => {
      setIsUserScrolling(false)
      setAutoScrollSpeed(0.5) // Resume auto-scroll
    }, 3000) // 3 seconds pause after user interaction
  }

  // Handle mouse enter/leave
  const handleMouseEnter = () => {
    setAutoScrollSpeed(0.2) // Slow down on hover
  }

  const handleMouseLeave = () => {
    if (!isUserScrolling) {
      setAutoScrollSpeed(0.5) // Resume normal speed
    }
  }

  useEffect(() => {
    // Start auto-scroll
    animationFrameRef.current = requestAnimationFrame(autoScroll)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [autoScrollSpeed, isUserScrolling])
  
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl transition-all duration-500 ease-out hover:scale-105 hover:text-white/90 cursor-default inline-block">
              Selected Works
            </h2>
            {!isUserScrolling && (
              <div className="flex items-center gap-1 text-white/40 text-sm">
                <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                <span>Auto-scrolling</span>
              </div>
            )}
          </div>
          <p className="text-white/60 text-lg max-w-2xl transition-all duration-300 ease-out hover:text-white/80 cursor-default">
          A curated collection of premium web experiences featuring cutting-edge design aesthetics, optimized user interaction patterns, and sophisticated interface flows that deliver both visual impact and effortless usability.
          </p>
        </div>
        
        {/* Works grid - horizontal scroll with auto-scroll */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          onScroll={handleUserScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex space-x-8 pb-4" style={{ width: 'max-content' }}>
            {sortedWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => onWorkClick(work)}
                className="group cursor-pointer flex-shrink-0 transition-all duration-500 ease-out hover:scale-105"
              >
                <div className="relative w-96 h-56 bg-gray-900 rounded-lg overflow-hidden mb-4 transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-white/10">
                  <ImageWithFallback
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Elegant hover overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/30 group-hover:via-black/10 group-hover:to-black/20 transition-all duration-500 ease-out" />
                  
                  {/* Category badge with enhanced hover */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs tracking-wide transition-all duration-300 ease-out group-hover:bg-white/20 group-hover:text-black group-hover:scale-105">
                      {work.category}
                    </span>
                  </div>
                  
                  {/* Duration with enhanced hover */}
                  <div className="absolute bottom-4 right-4">
                    <span className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs transition-all duration-300 ease-out group-hover:bg-white/20 group-hover:text-black group-hover:scale-105">
                      {work.duration}
                    </span>
                  </div>
                  
                  {/* Subtle play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-white/20">
                      <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl transition-all duration-300 ease-out group-hover:text-white group-hover:scale-105">
                    {work.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-white/50 transition-all duration-300 ease-out group-hover:text-white/70">
                    <span>{work.year}</span>
                    {work.client && (
                      <>
                        <span>•</span>
                        <span>{work.client}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}