import React from 'react'

interface FooterProps {
  on404?: () => void
}

export function Footer({ on404 }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl mb-4 transition-all duration-500 ease-out hover:scale-105 hover:text-white/90 cursor-default inline-block">
              Kraig Hamrick
            </h3>
            <p className="text-white/60 leading-relaxed transition-all duration-300 ease-out hover:text-white/80 cursor-default">
              A curated collection of premium web experiences featuring cutting-edge design aesthetics, optimized user interaction patterns, and sophisticated interface flows that deliver both visual impact and effortless usability.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 transition-all duration-300 ease-out hover:scale-105 hover:text-white/90 cursor-default inline-block">
              Contact
            </h4>
            <div className="space-y-2 text-white/70">
              <p className="transition-all duration-300 ease-out hover:text-white hover:scale-105 cursor-pointer">
                Kraighamrick@gmail.com
              </p>
              <p className="transition-all duration-300 ease-out hover:text-white hover:scale-105 cursor-pointer">
                702-637-6227
              </p>
              <p className="transition-all duration-300 ease-out hover:text-white hover:scale-105 cursor-pointer">
                Florida/Nevada
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 transition-all duration-300 ease-out hover:scale-105 hover:text-white/90 cursor-default inline-block">
              Connect
            </h4>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-all duration-300 ease-out hover:scale-105 relative group">
                <span className="relative z-10">Instagram</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-all duration-300 ease-out hover:scale-105 relative group">
                <span className="relative z-10">Vimeo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-all duration-300 ease-out hover:scale-105 relative group">
                <span className="relative z-10">Twitter</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p className="transition-all duration-300 ease-out hover:text-white/70 hover:scale-105 cursor-default">
            &copy; 2024 Kraig Hamrick. All rights reserved.
          </p>
          <p className="transition-all duration-300 ease-out hover:text-white/70 hover:scale-105 cursor-default">
            Portfolio designed for visual excellence
          </p>
          {on404 && (
            <button 
              onClick={on404}
              className="mt-4 text-xs text-white/20 hover:text-white/40 transition-colors duration-300"
            >
              Test 404 Page
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}