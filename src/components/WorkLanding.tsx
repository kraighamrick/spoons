import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Work } from '../data/works'

interface WorkLandingProps {
  work: Work
  onBack: () => void
  onVisitSite: () => void
}

export function WorkLanding({ work, onBack, onVisitSite }: WorkLandingProps) {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 text-white/60 hover:text-white hover:bg-white/5 p-0"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Works
        </Button>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="relative">
            <a 
              href={work.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block cursor-pointer group transition-transform hover:scale-105"
            >
              <div className="relative w-full h-96 lg:h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full text-sm tracking-wide">
                    {work.category}
                  </span>
                </div>
                
                {/* Duration badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-2 bg-black/70 backdrop-blur-sm rounded text-sm">
                    {work.duration}
                  </span>
                </div>
                
                {/* Click overlay for LinksDAO */}
                {work.id === '1' && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </a>
          </div>
          
          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{work.title}</h1>
              <div className="flex items-center space-x-4 text-white/60 mb-6">
                <span className="text-lg">{work.year}</span>
                {work.client && (
                  <>
                    <span>•</span>
                    <span className="text-lg">{work.client}</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {work.description}
              </p>
            </div>
            
            {/* Credits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Credits</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-white/60">Developer:</span>
                  <span className="ml-2 text-white">{work.credits.developer}</span>
                </div>
                {work.credits.designer && (
                  <div>
                    <span className="text-white/60">Designer:</span>
                    <span className="ml-2 text-white">{work.credits.designer}</span>
                  </div>
                )}
                {work.credits.photographer && (
                  <div>
                    <span className="text-white/60">Photographer:</span>
                    <span className="ml-2 text-white">{work.credits.photographer}</span>
                  </div>
                )}
                {work.credits.agency && (
                  <div>
                    <span className="text-white/60">Agency:</span>
                    <span className="ml-2 text-white">{work.credits.agency}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              {work.projectUrl && work.projectUrl !== '#' && (
                <Button
                  onClick={onVisitSite}
                  className="flex items-center space-x-1 bg-gradient-to-r from-white via-gray-100 to-white text-black hover:from-gray-100 hover:via-white hover:to-gray-100 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 border border-white/20 w-auto"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Visit Website</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Home Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <a 
          href="/"
          className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-100 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 group rounded-full border border-white/20 min-w-0"
        >
          <span className="text-center group-hover:translate-x-1 transition-transform duration-300">Home</span>
          <ArrowLeft className="w-3 h-3 ml-1 group-hover:-translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  )
}
