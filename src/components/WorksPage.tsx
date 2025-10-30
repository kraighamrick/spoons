import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { Work } from '../data/works'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface WorksPageProps {
  onBack: () => void
  works?: Work[]
  onWorkClick?: (work: Work) => void
}

export function WorksPage({ onBack, works = [], onWorkClick }: WorksPageProps) {
  const handleWorkClick = (work: Work) => {
    if (onWorkClick) {
      onWorkClick(work)
    }
  }

  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 text-white/60 hover:text-white hover:bg-white/5 p-0"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl mb-6">Works</h1>
          <p className="text-xl text-white/70 max-w-2xl">
            A comprehensive showcase of digital projects and creative solutions
          </p>
        </div>
        
        {/* Quad Box Layout */}
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {works.map((work, index) => (
            <div
              key={work.id}
              onClick={() => handleWorkClick(work)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Thumbnail */}
                <div className="relative mb-6 overflow-hidden rounded-2xl bg-white/5">
                  <ImageWithFallback
                    src={work.thumbnail}
                    alt={work.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/60 font-medium uppercase tracking-wide">
                      {work.category}
                    </span>
                    <span className="text-xs text-white/40">
                      {work.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
                    {work.title}
                  </h3>
                  
                  {work.client && (
                    <p className="text-sm text-white/60 mb-3">
                      {work.client}
                    </p>
                  )}
                  
                  <p className="text-sm text-white/70 leading-relaxed">
                    {work.description.length > 120 
                      ? `${work.description.substring(0, 120)}...` 
                      : work.description
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-4">
            Ready to explore more?
          </p>
          <Button
            variant="outline"
            onClick={onBack}
            className="border-white/20 text-white hover:bg-white/10"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
