import React from 'react'
import { Button } from './ui/button'
import { KHLogo } from './KHLogo'

interface HeaderProps {
  onHomeClick: () => void
  onAboutClick: () => void
  onAdminClick?: () => void
  currentView: 'home' | 'work' | 'about' | 'admin-login' | 'admin'
}

export function Header({ onHomeClick, onAboutClick, onAdminClick, currentView }: HeaderProps) {
  let clickCount = 0
  let clickTimer: NodeJS.Timeout | null = null

  const handleLogoClick = () => {
    clickCount++
    
    if (clickCount === 1) {
      clickTimer = setTimeout(() => {
        clickCount = 0
        onHomeClick()
      }, 800) // Extended time to make triple-click easier
    } else if (clickCount === 2) {
      // Do nothing on second click
      return
    } else if (clickCount === 3) {
      if (clickTimer) clearTimeout(clickTimer)
      clickCount = 0
      // Hidden command: triple-click to access admin panel
      if (onAdminClick) {
        onAdminClick()
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="text-2xl tracking-wider transition-opacity hover:opacity-70 select-none"
          >
            Kraig Hamrick
          </button>
          
          <div className="flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={onHomeClick}
              className={`text-white hover:text-white/70 hover:bg-white/5 hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out ${
                currentView === 'home' ? 'text-white' : 'text-white/60'
              }`}
            >
              <span className="relative z-10">Works</span>
            </Button>
            <Button
              variant="ghost"
              onClick={onAboutClick}
              className={`text-white hover:text-white/70 hover:bg-white/5 hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out ${
                currentView === 'about' ? 'text-white' : 'text-white/60'
              }`}
            >
              <span className="relative z-10">About</span>
            </Button>
            
            {/* KH Logo in top right */}
            <KHLogo size="sm" className="ml-4" />
          </div>
        </nav>
      </div>
    </header>
  )
}