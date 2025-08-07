import React from 'react'
import { Users, Mail } from 'lucide-react'

const GoogleFormEmbed = () => {
  return (
    <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Users className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-300">Join the Community</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to become a 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Campus OG</span>?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fill out the application below and take the first step towards joining an exclusive community of student leaders.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-lg font-semibold text-white">Application Form</span>
          </div>
          
          {/* Google Form Embed */}
          <div className="w-full h-[800px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSf_PLACEHOLDER_FORM_ID/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="rounded-2xl"
              title="Campus OGs Application Form"
            >
              Loading…
            </iframe>
          </div>
          
          {/* Fallback Link */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm mb-4">
              Having trouble with the form above?
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_PLACEHOLDER_FORM_ID/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full font-medium hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
            >
              Open Form in New Tab
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Questions? Contact us at{' '}
            <a href="mailto:hello@campusogs.com" className="text-purple-400 hover:text-purple-300 transition-colors">
              hello@campusogs.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export default GoogleFormEmbed
