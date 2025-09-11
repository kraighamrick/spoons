import React, { useMemo, useRef, useEffect, useState } from 'react'
import { Work } from '../data/works'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface WorksSectionProps {
  works: Work[]
  onWorkClick: (work: Work) => void
}

export function WorksSection({ works, onWorkClick }: WorksSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const sortedWorks = useMemo(() => {
    console.log('WorksSection received works:', works.length, 'works')
    const sorted = [...works].sort((a, b) => a.year - b.year)
    console.log('Sorted works:', sorted.map(w => ({ title: w.title, thumbnail: w.thumbnail })))
    return sorted
  }, [works])

  // Create duplicated works for seamless infinite loop
  const duplicatedWorks = useMemo(() => {
    return [...sortedWorks, ...sortedWorks]
  }, [sortedWorks])


  // Intersection observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully in view
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  
  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl transition-all duration-500 ease-out hover:scale-105 hover:text-white/90 cursor-default inline-block">
              Selected Works
            </h2>
          </div>
          <p className="text-white/60 text-lg max-w-2xl transition-all duration-300 ease-out hover:text-white/80 cursor-default">
          A curated collection of premium web experiences featuring cutting-edge design aesthetics, optimized user interaction patterns, and sophisticated interface flows that deliver both visual impact and effortless usability.
          </p>
        </div>
        
        {/* Works grid - infinite flowing animation */}
        <div className="overflow-hidden">
          <div 
            className="flex space-x-8 pb-4"
            style={{
              animation: isVisible ? 'flowLeft 60s linear infinite' : 'none',
              width: 'max-content'
            }}
          >
            {duplicatedWorks.map((work, index) => (
              <div
                key={`${work.id}-${index}`}
                className={`group flex-shrink-0 transition-all duration-500 ease-out hover:scale-105 ${
                  work.projectUrl && work.projectUrl !== '#' ? 'cursor-pointer' : 'cursor-default'
                }`}
                onClick={() => {
                  if (work.projectUrl && work.projectUrl !== '#') {
                    onWorkClick(work)
                  }
                }}
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