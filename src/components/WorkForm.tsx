import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ImageSelector } from './ImageSelector'
// Video/Film Work interface for admin panel
interface Work {
  id: string
  title: string
  category: 'MV' | 'Commercial' | 'Short Film' | 'Documentary'
  year: number
  client?: string
  artist?: string
  duration: string
  thumbnail: string
  videoUrl: string
  description: string
  credits: {
    director: string
    editor: string
    cinematographer?: string
    producer?: string
  }
}

interface WorkFormProps {
  work?: Work
  onSave: (work: Omit<Work, 'id'> | Work) => void
  onCancel: () => void
}

export function WorkForm({ work, onSave, onCancel }: WorkFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'MV' as Work['category'],
    year: new Date().getFullYear(),
    client: '',
    artist: '',
    duration: '',
    thumbnail: '',
    videoUrl: '',
    description: '',
    credits: {
      director: 'Kraig Hamrick',
      editor: 'Kraig Hamrick',
      cinematographer: '',
      producer: ''
    }
  })

  useEffect(() => {
    if (work) {
      setFormData({
        title: work.title,
        category: work.category,
        year: work.year,
        client: work.client || '',
        artist: work.artist || '',
        duration: work.duration,
        thumbnail: work.thumbnail,
        videoUrl: work.videoUrl,
        description: work.description,
        credits: {
          director: work.credits.director,
          editor: work.credits.editor,
          cinematographer: work.credits.cinematographer || '',
          producer: work.credits.producer || ''
        }
      })
    }
  }, [work])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Thumbnail image required check
    if (!formData.thumbnail) {
      alert('Please select a thumbnail image')
      return
    }
    
    const workData = {
      ...formData,
      credits: {
        director: formData.credits.director,
        editor: formData.credits.editor,
        ...(formData.credits.cinematographer && { cinematographer: formData.credits.cinematographer }),
        ...(formData.credits.producer && { producer: formData.credits.producer })
      },
      ...(formData.client && { client: formData.client }),
      ...(formData.artist && { artist: formData.artist })
    }

    if (work) {
      onSave({ ...workData, id: work.id })
    } else {
      onSave(workData)
    }
  }

  const updateField = (field: string, value: any) => {
    if (field.startsWith('credits.')) {
      const creditField = field.split('.')[1]
      setFormData(prev => ({
        ...prev,
        credits: {
          ...prev.credits,
          [creditField]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">
            {work ? 'Edit Work' : 'Add New Work'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Work Title *
                </label>
                <Input
                  value={formData.title}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="e.g., Midnight Dreams"
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Category *
                </label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => updateField('category', value as Work['category'])}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="MV">MV (Music Video)</SelectItem>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Short Film">Short Film</SelectItem>
                    <SelectItem value="Documentary">Documentary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Production Year *
                </label>
                <Input
                  type="number"
                  value={formData.year}
                  onChange={(e) => updateField('year', parseInt(e.target.value))}
                  min="2000"
                  max="2030"
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Video Length *
                </label>
                <Input
                  value={formData.duration}
                  onChange={(e) => updateField('duration', e.target.value)}
                  placeholder="e.g., 3:45"
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            </div>

            {/* Category-specific fields */}
            {formData.category === 'MV' && (
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Artist Name
                </label>
                <Input
                  value={formData.artist}
                  onChange={(e) => updateField('artist', e.target.value)}
                  placeholder="e.g., Luna Sky"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            )}

            {formData.category === 'Commercial' && (
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Client Name
                </label>
                <Input
                  value={formData.client}
                  onChange={(e) => updateField('client', e.target.value)}
                  placeholder="e.g., Nike"
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            )}

            {/* Video URL */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Video URL *
              </label>
              <Input
                type="url"
                value={formData.videoUrl}
                onChange={(e) => updateField('videoUrl', e.target.value)}
                placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            {/* Image Selection */}
            <ImageSelector
              selectedImage={formData.thumbnail}
              onImageSelect={(imageUrl) => updateField('thumbnail', imageUrl)}
            />

            {/* Description */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Work Description *
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => updateField('description', e.target.value)}
                placeholder="Enter detailed description of the work..."
                rows={4}
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            {/* Credit Information */}
            <div className="space-y-4">
              <h3 className="text-lg text-white">Credit Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Director *
                  </label>
                  <Input
                    value={formData.credits.director}
                    onChange={(e) => updateField('credits.director', e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Editor *
                  </label>
                  <Input
                    value={formData.credits.editor}
                    onChange={(e) => updateField('credits.editor', e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Cinematographer
                  </label>
                  <Input
                    value={formData.credits.cinematographer}
                    onChange={(e) => updateField('credits.cinematographer', e.target.value)}
                    placeholder="Optional"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Producer
                  </label>
                  <Input
                    value={formData.credits.producer}
                    onChange={(e) => updateField('credits.producer', e.target.value)}
                    placeholder="Optional"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" className="flex-1 bg-white text-black hover:bg-gray-200 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out">
                <span className="relative z-10">{work ? 'Save Changes' : 'Add Work'}</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="flex-1 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-gray-500/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
              >
                <span className="relative z-10">Cancel</span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}