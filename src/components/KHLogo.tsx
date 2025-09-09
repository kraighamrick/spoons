import React from 'react'

interface KHLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function KHLogo({ className = '', size = 'md' }: KHLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl'
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className} group cursor-pointer transition-all duration-300 ease-out hover:scale-110`}>
      {/* Background circle with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-full shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/25" />
      
      {/* Inner circle for depth */}
      <div className="absolute inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-300 group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-indigo-500" />
      
      {/* Text container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-white tracking-wider drop-shadow-sm transition-all duration-300 group-hover:text-white group-hover:tracking-widest group-hover:drop-shadow-md">
          KH
        </span>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-full blur-sm transition-all duration-300 group-hover:from-blue-300/30 group-hover:via-purple-300/30 group-hover:to-indigo-300/30 group-hover:blur-md" />
      
      {/* Hover ring effect */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300 group-hover:border-white/20 group-hover:scale-110" />
      
      {/* Pulse animation on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/0 via-blue-400/0 to-indigo-400/0 transition-all duration-500 group-hover:from-purple-400/10 group-hover:via-blue-400/10 group-hover:to-indigo-400/10 animate-pulse" />
    </div>
  )
}
