import React, { useState } from 'react'
import { siteConfig } from '../data/site-config'
import { siteContent } from '../data/content'

export function Hero() {
  const [videoError, setVideoError] = useState(false)
  
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Video */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={siteConfig.heroVideoUrl} type="video/mp4" />
        </video>
      )}
      
      {/* Fallback background (when video error or no video) */}
      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      )}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="text-center relative z-10 max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl mb-6 tracking-tight group">
          <span className="inline-block transition-all duration-500 ease-out hover:scale-105 hover:text-white/90 cursor-default">
            {siteContent.hero.name}
          </span>
          <br />
          <span className="text-white/40 transition-all duration-500 ease-out hover:text-white/60 hover:scale-105 cursor-default inline-block">
            {siteContent.hero.subtitle}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed group">
          <span className="inline-block transition-all duration-500 ease-out hover:scale-105 hover:text-white/90 cursor-default">
            {siteContent.hero.name}
          </span>
          <br />
          <span className="inline-block transition-all duration-500 ease-out hover:scale-105 hover:text-white/90 cursor-default">
            {siteContent.hero.title}
          </span>
        </p>
        
        <div className="flex items-center justify-center space-x-8 text-sm text-white/50">
          <div className="transition-all duration-300 ease-out hover:text-white/70 hover:scale-105 cursor-default">
            {siteContent.hero.location}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce group cursor-pointer">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center transition-all duration-300 ease-out group-hover:border-white/60 group-hover:scale-110">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-pulse transition-all duration-300 ease-out group-hover:bg-white/60" />
        </div>
      </div>
    </section>
  )
}