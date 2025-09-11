'use client'

import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WorksSection } from './components/WorksSection'
import { Footer } from './components/Footer'
import { PerformanceMonitor } from './components/PerformanceMonitor'
import { works as initialWorks, Work } from './data/works'

// Lazy load components for better performance
const AboutSection = lazy(() => import('./components/AboutSection').then(module => ({ default: module.AboutSection })))
const WorksPage = lazy(() => import('./components/WorksPage').then(module => ({ default: module.WorksPage })))
const WorkLanding = lazy(() => import('./components/WorkLanding').then(module => ({ default: module.WorkLanding })))
const WorkDetail = lazy(() => import('./components/WorkDetail').then(module => ({ default: module.WorkDetail })))
const AdminLogin = lazy(() => import('./components/AdminLogin').then(module => ({ default: module.AdminLogin })))
const AdminDashboard = lazy(() => import('./components/AdminDashboard').then(module => ({ default: module.AdminDashboard })))
const NotFound = lazy(() => import('./components/NotFound').then(module => ({ default: module.NotFound })))

const STORAGE_KEY = 'kraig_hamrick_portfolio_works'

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'works' | 'work-landing' | 'work' | 'about' | 'admin-login' | 'admin' | '404'>('home')
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [works, setWorks] = useState<Work[]>([])
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  // Load data from localStorage on initialization
  useEffect(() => {
    try {
      // Force refresh with updated works data
      console.log('Loading works data...')
      setWorks(initialWorks)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialWorks))
      console.log('Works data loaded:', initialWorks.length, 'works')
    } catch (error) {
      console.error('Failed to load works from localStorage:', error)
      setWorks(initialWorks)
    }
  }, [])

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work)
    setCurrentView('work-landing')
  }

  const handleVisitSite = () => {
    if (selectedWork && selectedWork.projectUrl && selectedWork.projectUrl !== '#') {
      window.open(selectedWork.projectUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const handleBackToHome = () => {
    setCurrentView('home')
    setSelectedWork(null)
  }

  const handleWorksClick = () => {
    setCurrentView('works')
  }

  const handleAboutClick = () => {
    setCurrentView('about')
  }

  const handleAdminClick = () => {
    if (isAdminLoggedIn) {
      setCurrentView('admin')
    } else {
      setCurrentView('admin-login')
    }
  }

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true)
    setCurrentView('admin')
  }

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false)
    setCurrentView('home')
  }

  const handleWorksUpdate = (updatedWorks: Work[]) => {
    setWorks(updatedWorks)
    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedWorks))
    } catch (error) {
      console.error('Failed to save works to localStorage:', error)
    }
  }

  const handle404 = () => {
    setCurrentView('404')
  }

  const handleBackFrom404 = () => {
    setCurrentView('home')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <PerformanceMonitor />
      {currentView === 'admin-login' && (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <AdminLogin onLogin={handleAdminLogin} />
        </Suspense>
      )}
      
      {currentView === 'admin' && (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <AdminDashboard
            works={works}
            onWorksUpdate={handleWorksUpdate}
            onLogout={handleAdminLogout}
            onBackToSite={handleBackToHome}
          />
        </Suspense>
      )}
      
      {!['admin-login', 'admin'].includes(currentView) && (
        <>
          <Header 
            onHomeClick={handleBackToHome}
            onWorksClick={handleWorksClick}
            onAboutClick={handleAboutClick}
            onAdminClick={handleAdminClick}
            currentView={currentView}
          />
          
          {currentView === 'home' && (
            <>
              <Hero />
              <WorksSection works={works} onWorkClick={handleWorkClick} />
            </>
          )}
          
          {currentView === 'works' && (
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <WorksPage onBack={handleBackToHome} />
            </Suspense>
          )}
          
          {currentView === 'work-landing' && selectedWork && (
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <WorkLanding 
                work={selectedWork} 
                onBack={handleBackToHome} 
                onVisitSite={handleVisitSite}
              />
            </Suspense>
          )}
          
          {currentView === 'work' && selectedWork && (
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <WorkDetail work={selectedWork} onBack={handleBackToHome} />
            </Suspense>
          )}
          
      {currentView === 'about' && (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <AboutSection onBack={handleBackToHome} />
        </Suspense>
      )}
      
      {currentView === '404' && (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <NotFound onBack={handleBackFrom404} />
        </Suspense>
      )}
      
      {currentView !== '404' && <Footer on404={handle404} />}
        </>
      )}
    </div>
  )
}