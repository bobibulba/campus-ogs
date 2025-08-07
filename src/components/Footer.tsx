import React from 'react'
import { Users, Mail, MapPin, Phone, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/10 border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">Campus OGs</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering the next generation of student leaders through exclusive programs, 
              mentorship, and global networking opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-colors">
                <Twitter className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-colors">
                <Instagram className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-600" />
              </a>
              <a href="#" className="p-2 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-colors">
                <Youtube className="h-5 w-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Program</a></li>
              <li><a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Benefits</a></li>
              <li><a href="#requirements" className="text-gray-600 hover:text-blue-600 transition-colors">Requirements</a></li>
              <li><a href="#apply" className="text-gray-600 hover:text-blue-600 transition-colors">Apply Now</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="text-gray-600">hello@campusogs.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-500 mt-1" />
                <span className="text-gray-600">
                  123 Innovation Drive<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2024 Campus OGs Program. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>

        {/* Built with ChatAndBuild */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-gray-500">
            Built with ❤️ using{' '}
            <a 
              href="https://chatandbuild.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ChatAndBuild
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
