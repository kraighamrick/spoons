import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ImageSelector } from './ImageSelector'
import { Work } from '../data/works'

interface WorkFormProps {
  work?: Work
  onSave: (work: Omit<Work, 'id'> | Work) => void
  onCancel: () => void
}

export function WorkForm({ work, onSave, onCancel }: WorkFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Web Development' as Work['category'],
    year: new Date().getFullYear(),
    client: '',
    duration: '',
    thumbnail: '',
    projectUrl: '',
    description: '',
    credits: {
      developer: 'Kraig Hamrick',
      designer: '',
      photographer: '',
      agency: ''
    }
  })

  useEffect(() => {
    if (work) {
      setFormData({
        title: work.title,
        category: work.category,
        year: work.year,
        client: work.client || '',
        duration: work.duration,
        thumbnail: work.thumbnail,
        projectUrl: work.projectUrl,
        description: work.description,
        credits: {
          developer: work.credits.developer,
          designer: work.credits.designer || '',
          photographer: work.credits.photographer || '',
          agency: work.credits.agency || ''
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
        developer: formData.credits.developer,
        ...(formData.credits.designer && { designer: formData.credits.designer }),
        ...(formData.credits.photographer && { photographer: formData.credits.photographer }),
        ...(formData.credits.agency && { agency: formData.credits.agency })
      },
      ...(formData.client && { client: formData.client })
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
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                    <SelectItem value="Corporate">Corporate</SelectItem>
                    <SelectItem value="Portfolio">Portfolio</SelectItem>
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


            {/* Project URL */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Project URL *
              </label>
              <Input
                type="url"
                value={formData.projectUrl}
                onChange={(e) => updateField('projectUrl', e.target.value)}
                placeholder="https://example.com"
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
                    Developer *
                  </label>
                  <Input
                    value={formData.credits.developer}
                    onChange={(e) => updateField('credits.developer', e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Designer
                  </label>
                  <Input
                    value={formData.credits.designer}
                    onChange={(e) => updateField('credits.designer', e.target.value)}
                    placeholder="Optional"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Photographer
                  </label>
                  <Input
                    value={formData.credits.photographer}
                    onChange={(e) => updateField('credits.photographer', e.target.value)}
                    placeholder="Optional"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Agency
                  </label>
                  <Input
                    value={formData.credits.agency}
                    onChange={(e) => updateField('credits.agency', e.target.value)}
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