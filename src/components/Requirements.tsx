import React from 'react'
import { CheckCircle, GraduationCap, TrendingUp, Heart, Clock } from 'lucide-react'

const Requirements = () => {
  const requirements = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Minimum 3.5 GPA and strong academic standing",
      details: ["Consistent academic performance", "Dean's list recognition preferred", "Strong letters of recommendation"]
    },
    {
      icon: TrendingUp,
      title: "Leadership Experience",
      description: "Demonstrated leadership in campus or community activities",
      details: ["Student government experience", "Club leadership roles", "Community service leadership"]
    },
    {
      icon: Heart,
      title: "Passion for Impact",
      description: "Genuine commitment to creating positive change",
      details: ["Clear vision for campus improvement", "History of initiative-taking", "Collaborative mindset"]
    },
    {
      icon: Clock,
      title: "Time Commitment",
      description: "Ability to dedicate 10-15 hours per week to program activities",
      details: ["Weekly meetings and workshops", "Project development time", "Community engagement activities"]
    }
  ]

  return (
    <section id="requirements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Program Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're looking for exceptional students who demonstrate academic excellence, 
            leadership potential, and a genuine passion for making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {requirements.map((requirement, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                  <requirement.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{requirement.title}</h3>
                  <p className="text-gray-600">{requirement.description}</p>
                </div>
              </div>
              <div className="space-y-3">
                {requirement.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Eligibility Checklist */}
        <div className="rounded-3xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Eligibility Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Currently enrolled undergraduate or graduate student</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">At least one year remaining in your program</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Strong English communication skills</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Access to reliable internet and technology</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Willingness to mentor other students</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Commitment to program duration (3 years)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Ability to work in diverse, multicultural teams</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Passion for innovation and problem-solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Requirements
