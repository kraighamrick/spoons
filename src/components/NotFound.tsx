import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ArrowLeft, Home, Search, Coffee, Bug } from 'lucide-react'

interface NotFoundProps {
  onBack: () => void
}

export function NotFound({ onBack }: NotFoundProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentJoke, setCurrentJoke] = useState(0)

  const wittyMessages = [
    "Looks like this page went on vacation without telling anyone! 🏖️",
    "This page is more elusive than a good Wi-Fi signal at a coffee shop ☕",
    "Even my server can't find this page, and it's supposed to know everything! 🤖",
    "This page is playing hide and seek... and it's winning! 🎭",
    "404: The page you're looking for is probably having a better time than you right now 🎉",
    "This page is so lost, it's asking Siri for directions 📱",
    "404: The page you're looking for is currently unavailable. It's probably updating its LinkedIn profile 💼"
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentJoke(prev => (prev + 1) % wittyMessages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div 
        className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* 404 Number with animation */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400 animate-pulse">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse" />
        </div>

        {/* Witty message with rotation */}
        <div className="mb-12 h-24 flex items-center justify-center">
          <p 
            key={currentJoke}
            className="text-xl md:text-2xl text-white/80 leading-relaxed font-light animate-fade-in"
            style={{
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            {wittyMessages[currentJoke]}
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Don't worry, even the best developers get lost sometimes. 
          Let's get you back on track to explore some amazing work!
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={onBack}
            className="bg-white text-black hover:bg-gray-200 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 active:scale-95 flex items-center gap-2 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
          >
            <ArrowLeft className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Back to Works</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="border-white/30 text-white hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95 flex items-center gap-2 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
          >
            <Home className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Go Home</span>
          </Button>
        </div>

        {/* Fun stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center group cursor-default">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 ease-out group-hover:bg-white/10 group-hover:scale-110">
              <Search className="w-6 h-6 text-white/60 group-hover:text-white/80" />
            </div>
            <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
              Pages Searched
            </p>
            <p className="text-2xl font-light text-white group-hover:text-white/90 transition-colors duration-300">
              404
            </p>
          </div>

          <div className="text-center group cursor-default">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 ease-out group-hover:bg-white/10 group-hover:scale-110">
              <Coffee className="w-6 h-6 text-white/60 group-hover:text-white/80" />
            </div>
            <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
              Coffee Consumed
            </p>
            <p className="text-2xl font-light text-white group-hover:text-white/90 transition-colors duration-300">
              ∞
            </p>
          </div>

          <div className="text-center group cursor-default">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 ease-out group-hover:bg-white/10 group-hover:scale-110">
              <Bug className="w-6 h-6 text-white/60 group-hover:text-white/80" />
            </div>
            <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
              Bugs Found
            </p>
            <p className="text-2xl font-light text-white group-hover:text-white/90 transition-colors duration-300">
              0
            </p>
          </div>

          <div className="text-center group cursor-default">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 transition-all duration-300 ease-out group-hover:bg-white/10 group-hover:scale-110">
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
              Coolness Level
            </p>
            <p className="text-2xl font-light text-white group-hover:text-white/90 transition-colors duration-300">
              100%
            </p>
          </div>
        </div>

        {/* Footer message */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            "The best way to find out if you can trust somebody is to trust them." 
            <br />
            <span className="text-white/20">- Ernest Hemingway (probably about 404 pages)</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
