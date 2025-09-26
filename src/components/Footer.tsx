import { useState } from 'react'

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      alert('Please enter your email address')
      return
    }

    try {
      // Use the same Google Apps Script endpoint as contact page
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcTJsZzOps9jtqm-fcQS0sEIeofbTht101LwWYhGjtmorVt1a4tQpv-QmhEdHfLiVotg/exec'
      
      // Create form data to avoid CORS issues
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', 'Newsletter')
      formDataToSend.append('lastName', 'Subscriber')
      formDataToSend.append('email', email)
      formDataToSend.append('phone', 'N/A')
      formDataToSend.append('projectType', 'newsletter')
      formDataToSend.append('budget', 'N/A')
      formDataToSend.append('description', 'Newsletter subscription request from footer')
      formDataToSend.append('timestamp', new Date().toISOString())
      formDataToSend.append('source', 'footer_newsletter_signup')

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        alert('Thank you! You are now subscribed to our newsletter.')
        setEmail('')
      } else {
        alert('Error subscribing to newsletter. Please try again.')
      }
    } catch (error) {
      alert('Error subscribing to newsletter. Please try again.')
    }
  }

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle chat message
    console.log('Chat message sent')
  }

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300 luxora-bg">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight luxora-text">
              Stay Connected
            </h2>
            <p className="mb-6 text-gray-600">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-green-600 text-white transition-transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-green-500/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold luxora-text">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="/"
                className="block transition-colors hover:text-green-600 text-gray-600"
              >
                Home
              </a>
              <a
                href="/about"
                className="block transition-colors hover:text-green-600 text-gray-600"
              >
                About Us
              </a>
              <a
                href="/services"
                className="block transition-colors hover:text-green-600 text-gray-600"
              >
                Services
              </a>
              <a
                href="/portfolio"
                className="block transition-colors hover:text-green-600 text-gray-600"
              >
                Portfolio
              </a>
              <a
                href="/contact"
                className="block transition-colors hover:text-green-600 text-gray-600"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold luxora-text">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-gray-600">
              <p>Algiers, Algeria</p>
              <p>Phone: +213 797 339 451</p>
              <p>Email: contact@sitedz.store</p>
              <p>WhatsApp: +213 797 339 451</p>
            </address>
          </div>

          {/* Social Media */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold luxora-text">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <a
                href="https://www.facebook.com/sitedz.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                title="Follow us on Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/site.dz.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                title="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/213797339451"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 transform hover:scale-110"
                title="Contact us on WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-center md:flex-row">
          <p className="text-sm text-gray-600">
            © 2024 SITEDZ Store. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="/privacy" className="transition-colors hover:text-green-600 text-gray-600">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-green-600 text-gray-600">
              Terms of Service
            </a>
            <a href="/contact" className="transition-colors hover:text-green-600 text-gray-600">
              Contact Us
            </a>
          </nav>
        </div>
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition-colors"
      >
        {isChatOpen ? "Close Chat" : "Open Chat"}
      </button>

      {/* Chat Widget */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 rounded-lg border bg-white p-4 shadow-lg">
          <h4 className="mb-4 text-lg font-semibold luxora-text">Live Chat</h4>
          <div className="mb-4 h-40 overflow-y-auto rounded border p-2 bg-gray-50">
            <p className="mb-2 text-sm">
              <strong>Support:</strong> Hello! How can I assist you today?
            </p>
          </div>
          <form className="flex gap-2" onSubmit={handleChatSubmit}>
            <textarea
              placeholder="Type your message..."
              className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={2}
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </footer>
  )
}

export default Footer 