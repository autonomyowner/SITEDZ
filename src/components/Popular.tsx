import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { templates } from '../data/templates'

const Popular = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Create multiple copies for perfect seamless loop
  const duplicatedTemplates = [...templates, ...templates, ...templates, ...templates]

  // Handle touch events for mobile scrolling and perfect loop management
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let isScrolling = false
    let startX = 0
    let scrollLeft = 0

    // Function to reset animation position for perfect loop
    const resetAnimationPosition = () => {
      if (container) {
        // Reset to beginning of first set of templates
        container.style.animation = 'none'
        container.offsetHeight // Trigger reflow
        container.style.animation = 'scroll 40s linear infinite'
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      isScrolling = true
      startX = e.touches[0].pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      // Pause auto-scroll animation
      container.style.animationPlayState = 'paused'
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isScrolling) return
      e.preventDefault()
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = (x - startX) * 2 // Scroll speed multiplier
      container.scrollLeft = scrollLeft - walk
    }

    const handleTouchEnd = () => {
      isScrolling = false
      // Resume auto-scroll animation after a delay
      setTimeout(() => {
        if (container) {
          container.style.animationPlayState = 'running'
          // Reset position for perfect loop if needed
          resetAnimationPosition()
        }
      }, 2000)
    }

    // Mouse events for desktop
    const handleMouseDown = (e: MouseEvent) => {
      isScrolling = true
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      container.style.animationPlayState = 'paused'
      container.style.cursor = 'grabbing'
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isScrolling) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * 2
      container.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
      isScrolling = false
      container.style.cursor = 'grab'
      setTimeout(() => {
        if (container) {
          container.style.animationPlayState = 'running'
          // Reset position for perfect loop if needed
          resetAnimationPosition()
        }
      }, 2000)
    }

    const handleMouseLeave = () => {
      isScrolling = false
      container.style.cursor = 'grab'
    }

    // Add event listeners
    container.addEventListener('touchstart', handleTouchStart, { passive: false })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd)
    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="popular" className="py-16 px-4 md:px-0 luxora-bg overflow-hidden">
      {/* Title section with container */}
      <div className="max-w-7xl mx-auto mb-16" dir="rtl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            الأكثر شعبية
          </h2>
          <p className="text-gray-400 text-sm md:hidden">
            اسحب يساراً أو يميناً للتصفح • اضغط واسحب للتمرير
          </p>
        </div>
      </div>

      {/* Edge-to-edge cards section */}
      <div className="relative w-full">
        <div 
          ref={scrollContainerRef}
          className="flex animate-scroll overflow-x-auto scrollbar-hide cursor-grab select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {duplicatedTemplates.map((template, index) => (
              <div 
                key={`${template.id}-${index}`} 
                className="flex-shrink-0 mx-4 md:mx-6 group cursor-pointer"
                onClick={() => navigate(`/template/${template.id}`)}
              >
                {/* Image */}
                <div className="w-80 h-64 rounded-lg overflow-hidden shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold luxora-green-text text-center">
                  {template.name}
                </h3>
                
                {/* Price Badge */}
                <div className="text-center mt-2">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {template.price.toLocaleString()} DA
                  </span>
                  {template.discount && (
                    <div className="text-xs text-gray-600 mt-1">خصم {template.discount}%</div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Popular
