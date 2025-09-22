import { useEffect } from 'react'
import { trackEvent } from '../utils/facebookPixel'

const ScrollTracker = () => {
  useEffect(() => {
    let scrollPercentages = new Set<number>()
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      
      // Track milestone scroll percentages
      const milestones = [25, 50, 75, 90, 100]
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollPercentages.has(milestone)) {
          scrollPercentages.add(milestone)
          trackEvent('ViewContent', {
            content_name: `Page Scroll ${milestone}%`,
            content_category: 'engagement',
            content_type: 'scroll_depth',
            scroll_depth: milestone
          })
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

export default ScrollTracker
