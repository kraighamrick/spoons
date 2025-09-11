import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { Work } from '../data/works'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { FeaturedIn } from './FeaturedIn'

interface WorkDetailProps {
  work: Work
  onBack: () => void
}

export function WorkDetail({ work, onBack }: WorkDetailProps) {
  const handleThumbnailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Thumbnail clicked, opening URL:', work.projectUrl)
    if (work.projectUrl && work.projectUrl !== '#') {
      window.open(work.projectUrl, '_blank')
    } else {
      console.log('No valid project URL found')
    }
  }

  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 text-white/60 hover:text-white hover:bg-white/5 px-3 py-2 text-sm hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
        >
          <ArrowLeft className="w-3 h-3 mr-1 relative z-10" />
          <span className="relative z-10">Back to Works</span>
        </Button>
        
        {/* Hero section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {work.category}
                </span>
                <span className="text-white/60">{work.year}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl mb-8">{work.title}</h1>
              
              <div className="bg-white text-black p-6 rounded-lg mb-8">
                <p className="text-lg leading-relaxed">
                  {work.description}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer group transition-transform hover:scale-105"
                onClick={handleThumbnailClick}
              >
                <ImageWithFallback
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                
                {/* ホバー効果とプレイボタン */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-0 h-0 border-l-10 border-l-black border-t-8 border-t-transparent border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
              
              <p className="text-center text-sm text-white/60 mt-4">
                Click to visit website
              </p>
            </div>
          </div>
        </div>
        
        {/* Featured In section - only for LinksDAO */}
        {work.id === '1' && <FeaturedIn />}
        
        {/* Credits section */}
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-2xl mb-8">Credits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white/60 text-sm mb-2">Developer</h3>
              <p>{work.credits.developer}</p>
            </div>
            
            {work.credits.designer && (
              <div>
                <h3 className="text-white/60 text-sm mb-2">Designer</h3>
                <p>{work.credits.designer}</p>
              </div>
            )}
            
            {work.credits.photographer && (
              <div>
                <h3 className="text-white/60 text-sm mb-2">Photographer</h3>
                <p>{work.credits.photographer}</p>
              </div>
            )}
            
            {work.credits.agency && (
              <div>
                <h3 className="text-white/60 text-sm mb-2">Agency</h3>
                <p>{work.credits.agency}</p>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  )
}