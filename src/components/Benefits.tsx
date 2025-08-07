import React from 'react'
import { Gift, Briefcase, Users, BookOpen, Globe, Zap } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Perks",
      description: "Access to premium resources, tools, and platforms typically reserved for professionals.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Direct pathways to internships and job opportunities with our partner companies.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "One-on-one mentoring from industry leaders and successful alumni.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Comprehensive training in leadership, technology, and entrepreneurship.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with Campus OGs from universities around the world.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Innovation Labs",
      description: "Access to cutting-edge technology and innovation spaces on campus.",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Program Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Campus OGs members enjoy exclusive access to resources, opportunities, 
            and experiences that accelerate their personal and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Benefit */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm bg-white/10 border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
          <div className="relative p-12 md:p-16 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Gift className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Annual Campus OGs Summit
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join hundreds of Campus OGs from around the world at our annual summit. 
              Network with industry leaders, attend exclusive workshops, and showcase your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="px-6 py-3 backdrop-blur-sm bg-white/30 border border-white/40 rounded-full">
                <span className="font-semibold text-gray-800">All expenses paid</span>
              </div>
              <div className="px-6 py-3 backdrop-blur-sm bg-white/30 border border-white/40 rounded-full">
                <span className="font-semibold text-gray-800">3 days of networking</span>
              </div>
              <div className="px-6 py-3 backdrop-blur-sm bg-white/30 border border-white/40 rounded-full">
                <span className="font-semibold text-gray-800">Exclusive workshops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
