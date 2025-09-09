import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }

    // Monitor performance metrics
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry)
          }
          if (entry.entryType === 'paint') {
            console.log('Paint timing:', entry)
          }
        }
      })

      observer.observe({ entryTypes: ['navigation', 'paint'] })
    }
  }, [])

  return null
}
