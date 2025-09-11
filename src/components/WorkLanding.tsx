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
            </div>
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
                  className="flex items-center space-x-2 bg-gradient-to-r from-white via-gray-100 to-white text-black hover:from-gray-100 hover:via-white hover:to-gray-100 px-6 py-2.5 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 border border-white/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Website</span>
                </Button>
              )}
              
              <Button
                variant="outline"
                onClick={onBack}
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-6 py-2.5 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">View More Works</span>
                <ArrowLeft className="w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
