import React, { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { Badge } from './ui/badge'
import { WorkForm } from './WorkForm'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Work } from '../data/works'
import { Pencil, Trash2, Plus, Home } from 'lucide-react'

interface AdminDashboardProps {
  works: Work[]
  onWorksUpdate: (works: Work[]) => void
  onLogout: () => void
  onBackToSite: () => void
}

export function AdminDashboard({ works, onWorksUpdate, onLogout, onBackToSite }: AdminDashboardProps) {
  const [currentView, setCurrentView] = useState<'list' | 'add' | 'edit'>('list')
  const [editingWork, setEditingWork] = useState<Work | null>(null)
  
  // Convert web development works to video works format or use empty array
  const webWorks: Work[] = works

  const handleAddWork = (workData: Omit<Work, 'id'>) => {
    const newId = (Math.max(...webWorks.map(w => parseInt(w.id)), 0) + 1).toString()
    const newWork: Work = { ...workData, id: newId }
    onWorksUpdate([...webWorks, newWork])
    setCurrentView('list')
  }

  const handleEditWork = (workData: Work) => {
    const updatedWorks = webWorks.map(w => w.id === workData.id ? workData : w)
    onWorksUpdate(updatedWorks)
    setCurrentView('list')
    setEditingWork(null)
  }

  const handleDeleteWork = (workId: string) => {
    const updatedWorks = webWorks.filter(w => w.id !== workId)
    onWorksUpdate(updatedWorks)
  }

  const startEdit = (work: Work) => {
    setEditingWork(work)
    setCurrentView('edit')
  }

  const getCategoryBadgeColor = (category: Work['category']) => {
    switch (category) {
      case 'Web Development': return 'bg-blue-600'
      case 'E-commerce': return 'bg-green-600'
      case 'Corporate': return 'bg-purple-600'
      case 'Portfolio': return 'bg-orange-600'
      default: return 'bg-gray-600'
    }
  }

  if (currentView === 'add') {
    return (
      <WorkForm
        onSave={handleAddWork}
        onCancel={() => setCurrentView('list')}
      />
    )
  }

  if (currentView === 'edit' && editingWork) {
    return (
      <WorkForm
        work={editingWork}
        onSave={(workData) => handleEditWork(workData as Work)}
        onCancel={() => {
          setCurrentView('list')
          setEditingWork(null)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl text-white mb-2">Work Management System</h1>
            <p className="text-gray-400">Add, edit, and delete portfolio works</p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={onBackToSite}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Site
            </Button>
            <Button
              onClick={onLogout}
              variant="outline"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-400">Total Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-white">{webWorks.length}</div>
            </CardContent>
          </Card>

          {(['Web Development', 'E-commerce', 'Corporate', 'Portfolio'] as const).map(category => (
            <Card key={category} className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-gray-400">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl text-white">
                  {webWorks.filter(w => w.category === category).length}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl text-white">Works List</h2>
          <Button
            onClick={() => setCurrentView('add')}
            className="bg-white text-black hover:bg-gray-200 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 active:scale-95 flex items-center gap-2 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
          >
            <Plus className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Add New Work</span>
          </Button>
        </div>

        {/* Works List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webWorks.map((work) => (
            <Card key={work.id} className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge className={`${getCategoryBadgeColor(work.category)} text-white`}>
                    {work.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg text-white truncate">{work.title}</h3>
                  <span className="text-sm text-gray-400">{work.year}</span>
                </div>
                
                <div className="text-sm text-gray-400 mb-3">
                  {work.client && <span>Client: {work.client}</span>}
                  <div>Duration: {work.duration}</div>
                </div>
                
                <p className="text-sm text-gray-300 mb-4 overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {work.description}
                </p>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => startEdit(work)}
                    className="flex-1 flex items-center gap-1 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-blue-500/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
                  >
                    <Pencil className="w-3 h-3 relative z-10" />
                    <span className="relative z-10">Edit</span>
                  </Button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1 text-red-400 border-red-400 hover:bg-red-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 active:scale-95 relative overflow-hidden group before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-out"
                      >
                        <Trash2 className="w-3 h-3 relative z-10" />
                        <span className="relative z-10">Delete</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-gray-900 border-gray-700">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">
                          Delete Work?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-400">
                          Delete "{work.title}". This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteWork(work.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {webWorks.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-400 mb-4">No works yet</h3>
            <p className="text-gray-500 mb-6">Add your first work to get started</p>
            <Button
              onClick={() => setCurrentView('add')}
              className="bg-white text-black hover:bg-gray-200"
            >
              Add Work
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}