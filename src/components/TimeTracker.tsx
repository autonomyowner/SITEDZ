import { useEffect } from 'react'
import { trackEvent } from '../utils/facebookPixel'

const TimeTracker = () => {
  useEffect(() => {
    const startTime = Date.now()
    let timeTracked = new Set<number>()
    
    const trackTimeMilestones = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      const milestones = [30, 60, 120, 300, 600] // 30s, 1m, 2m, 5m, 10m
      
      milestones.forEach(milestone => {
        if (timeSpent >= milestone && !timeTracked.has(milestone)) {
          timeTracked.add(milestone)
          trackEvent('ViewContent', {
            content_name: `Time on Page ${milestone}s`,
            content_category: 'engagement',
            content_type: 'time_spent',
            time_spent: milestone
          })
        }
      })
    }

    const interval = setInterval(trackTimeMilestones, 10000) // Check every 10 seconds
    
    return () => {
      clearInterval(interval)
    }
  }, [])

  return null
}

export default TimeTracker
