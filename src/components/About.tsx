import React from 'react'
import { Target, Lightbulb, Network, Award } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What is Campus OGs?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Campus OGs is an exclusive leadership development program designed to identify, 
            nurture, and empower the next generation of student leaders across universities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission-Driven</h3>
                <p className="text-gray-600">
                  We identify and develop exceptional student leaders who will drive positive change 
                  in their communities and beyond.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation Focus</h3>
                <p className="text-gray-600">
                  Members work on cutting-edge projects that solve real campus and community problems 
                  using the latest technologies and methodologies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 shadow-lg">
                <Network className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Network</h3>
                <p className="text-gray-600">
                  Connect with like-minded leaders from top universities around the world and 
                  build relationships that last a lifetime.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Recognition</h3>
                <p className="text-gray-600">
                  Gain official recognition for your leadership contributions and access to 
                  exclusive opportunities in your career journey.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/10 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Team collaboration"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl backdrop-blur-sm bg-white/90 border border-white/30 shadow-lg">
              <div className="text-2xl font-bold text-gray-800">3 Years</div>
              <div className="text-gray-600">Program Duration</div>
            </div>
          </div>
        </div>

        {/* Program Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Leadership Development</h3>
            <p className="text-gray-600">
              Comprehensive training in leadership skills, emotional intelligence, and strategic thinking.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Execution</h3>
            <p className="text-gray-600">
              Lead real-world projects that create meaningful impact in your campus community.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Network Building</h3>
            <p className="text-gray-600">
              Connect with industry leaders, alumni, and peers to build your professional network.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
