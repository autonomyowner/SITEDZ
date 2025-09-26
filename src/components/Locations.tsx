import { useTranslation } from 'react-i18next'

const Locations = () => {
  const { t } = useTranslation()
  const locations = [
    {
      city: "Algiers Centre",
      status: "Active",
      schedules: [
        { time: "Saturday 1:00 PM - 3:00 PM", available: true },
        { time: "Saturday 3:30 PM - 5:30 PM", available: true }
      ],
      mapUrl: "https://maps.app.goo.gl/umc16T5RYNvepSnf8?g%5Fst=com.google.maps.preview.copy",
      description: "Our flagship location in the heart of Algiers, offering convenient access and modern facilities."
    },
    {
      city: "Tlemcen",
      status: "Coming Soon",
      schedules: [
        { time: "Saturday 1:00 PM - 3:30 PM", available: false },
        { time: "Saturday 4:00 PM - 6:30 PM", available: false }
      ],
      mapUrl: "https://maps.app.goo.gl/3Bt7sB3oSzWXjSWf7?g%5Fst=ic",
      description: "Expanding to Tlemcen to serve our growing community in western Algeria."
    }
  ]

  return (
    <section id="locations" className="section-padding glass-effect">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('locations.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('locations.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {locations.map((location, index) => (
            <div key={index} className="premium-card p-4 sm:p-6 md:p-8 hover:transform hover:scale-105">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{location.city}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  location.status === "Active" 
                    ? "bg-green-500/20 text-green-400 border border-green-400/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                }`}>
                  {location.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {location.description}
              </p>

              {/* Schedules */}
              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Available Sessions:</h4>
                <div className="space-y-2">
                  {location.schedules.map((schedule, scheduleIndex) => (
                    <div key={scheduleIndex} className={`flex items-center justify-between p-3 rounded-lg ${
                      schedule.available 
                        ? "bg-green-500/10 border border-green-400/20" 
                        : "bg-gray-500/10 border border-gray-400/20"
                    }`}>
                      <span className={`text-xs sm:text-sm ${
                        schedule.available ? "text-green-400" : "text-gray-400"
                      }`}>
                        {schedule.time}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        schedule.available 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-gray-500/20 text-gray-400"
                      }`}>
                        {schedule.available ? "Available" : "Coming Soon"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Link */}
              <a 
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center premium-text hover:text-yellow-300 transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 premium-card p-4 sm:p-6 md:p-8">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Join?</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              Choose your preferred location and time slot when registering. 
              We'll send you a confirmation email with all the details.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2VuR-BR-i3TWiM1E8ePIPlGjMVWy3bthaUTKx8N29YtVRBw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations 