const Services = () => {
  const services = [
    {
      title: "Interactive Debates",
      description: "Engage in thought-provoking discussions on current events, technology, culture, and more.",
      features: ["Real-world topics", "Structured format", "Peer feedback"]
    },
    {
      title: "Networking Sessions",
      description: "Connect with like-minded individuals and build professional relationships.",
      features: ["Professional networking", "Cultural exchange", "Community building"]
    },
    {
      title: "Skill Development",
      description: "Improve your English speaking, listening, and critical thinking skills.",
      features: ["Public speaking", "Critical thinking", "Leadership skills"]
    }
  ]

  return (
    <section id="services" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="premium-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our comprehensive English development program designed for intermediate to advanced speakers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {services.map((service, index) => (
            <div key={index} className="premium-card p-4 sm:p-6 md:p-8 hover:transform hover:scale-105">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="premium-text mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Background Image Section */}
        <div 
          className="w-full h-96 bg-cover bg-center bg-no-repeat rounded-2xl mb-8 sm:mb-12 md:mb-16"
          style={{
            backgroundImage: `url('/pics/templates/safar-safarov-LKsHwgzyk7c-unsplash.jpg')`
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-40 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Community</h3>
              <p className="text-lg md:text-xl">Connect, Learn, and Grow Together</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="premium-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Simple & Transparent Pricing</h3>
            <p className="text-gray-300">No hidden fees, no long-term commitments</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            {/* Pricing Card */}
            <div className="premium-gradient p-4 sm:p-6 md:p-8 rounded-2xl text-center shadow-2xl">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-2">500 DA</div>
              <div className="text-slate-900 text-base sm:text-lg mb-4 sm:mb-6">Per Session</div>
              <ul className="space-y-3 text-slate-900 text-left">
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  2-hour interactive session
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Professional guidance
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Networking opportunities
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  Skill development materials
                </li>
              </ul>
            </div>

            {/* Requirements */}
            <div className="space-y-6">
              <div className="premium-card p-6">
                <h4 className="text-xl font-bold text-white mb-4">Requirements to Join</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="premium-text mr-3">•</span>
                    Age: 17-35 years old
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="premium-text mr-3">•</span>
                    English Level: Intermediate or Advanced
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="premium-text mr-3">•</span>
                    Willingness to participate actively
                  </div>
                </div>
              </div>

              <div className="premium-card p-6">
                <h4 className="text-xl font-bold text-white mb-4">What You'll Get</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">•</span>
                    Improved English speaking skills
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">•</span>
                    Professional network connections
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">•</span>
                    Personal development opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 