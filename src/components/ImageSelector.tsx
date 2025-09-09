import { useState, useRef } from 'react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Upload, X } from 'lucide-react'

interface ImageSelectorProps {
  selectedImage: string
  onImageSelect: (imageUrl: string) => void
}

export function ImageSelector({ selectedImage, onImageSelect }: ImageSelectorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // File size check (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be 5MB or less')
        return
      }

      // Check if it's an image file
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }

      // Create Data URL for preview using FileReader
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        onImageSelect(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveImage = () => {
    onImageSelect('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm text-gray-300 mb-2">
        Thumbnail Image
      </label>
      
      {selectedImage ? (
        <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-800">
          <ImageWithFallback
            src={selectedImage}
            alt="Selected image"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 w-8 h-8 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      ) : (
        <div className="w-full h-48 rounded-lg border-2 border-dashed border-gray-600 bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Upload className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">Upload Image</p>
            <p className="text-xs mt-1">JPEG, PNG, WebP (Max 5MB)</p>
          </div>
        </div>
      )}

      <div className="flex gap-2">
        <Button
          type="button"
          onClick={handleButtonClick}
          variant="outline"
          className="flex-1 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-blue-500/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
        >
          <Upload className="w-4 h-4 relative z-10" />
          <span className="relative z-10">{selectedImage ? 'Change Image' : 'Select Image'}</span>
        </Button>
        
        {selectedImage && (
          <Button
            type="button"
            onClick={handleRemoveImage}
            variant="outline"
            className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
          >
            <span className="relative z-10">Remove</span>
          </Button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  )
}