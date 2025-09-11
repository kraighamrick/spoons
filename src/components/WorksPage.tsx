import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'

interface WorksPageProps {
  onBack: () => void
}

export function WorksPage({ onBack }: WorksPageProps) {
  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 text-white/60 hover:text-white hover:bg-white/5 p-0"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Placeholder Content */}
          <div className="w-full max-w-3xl">
            <h1 className="text-5xl mb-6">Works</h1>
            <p className="text-xl text-white/70 mb-12">
              A comprehensive showcase of digital projects and creative solutions
            </p>
            
            {/* Placeholder for Framer content */}
            <div className="bg-white/5 rounded-lg p-12 border border-white/10 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white/20 rounded"></div>
                </div>
                <h2 className="text-2xl mb-4">Framer Page Coming Soon</h2>
                <p className="text-white/60 mb-6">
                  This page will be replaced with your custom Framer design
                </p>
                <div className="text-sm text-white/40">
                  Placeholder content - Replace with Framer embed
                </div>
              </div>
            </div>
            
            {/* Additional placeholder sections */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg mb-4">Project Gallery</h3>
                <p className="text-white/60 text-sm">
                  Interactive showcase of selected works with detailed case studies and project insights.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-lg mb-4">Featured Work</h3>
                <p className="text-white/60 text-sm">
                  Highlighted projects demonstrating technical expertise and creative problem-solving.
                </p>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="text-center">
              <p className="text-white/60 mb-4">
                Ready to see the full experience?
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
      </div>
    </div>
  )
}
