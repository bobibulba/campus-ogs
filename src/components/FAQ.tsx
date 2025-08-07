import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is the time commitment for Campus OGs?",
      answer: "Campus OGs requires approximately 10-15 hours per week, including weekly meetings, project work, and community engagement activities. The program is designed to be flexible around your academic schedule."
    },
    {
      question: "Is there a cost to join Campus OGs?",
      answer: "No, Campus OGs is completely free to join. In fact, members receive stipends for their project work and all program-related expenses are covered, including the annual summit."
    },
    {
      question: "What kind of projects do Campus OGs work on?",
      answer: "Projects vary widely but typically focus on solving real campus or community problems. Examples include developing apps for student services, organizing sustainability initiatives, creating mentorship programs, and launching social impact campaigns."
    },
    {
      question: "Can international students apply?",
      answer: "Yes! Campus OGs welcomes applications from international students. We value diverse perspectives and have members from universities around the world."
    },
    {
      question: "What happens after I graduate?",
      answer: "Campus OGs alumni become part of our global network and often serve as mentors to current members. Many alumni have gone on to leadership roles in top companies, started successful ventures, or pursued advanced degrees at prestigious institutions."
    },
    {
      question: "How selective is the application process?",
      answer: "Campus OGs is highly selective, with an acceptance rate of approximately 15%. We look for students who demonstrate exceptional leadership potential, academic excellence, and a genuine passion for creating positive impact."
    },
    {
      question: "When do applications open?",
      answer: "Applications are accepted on a rolling basis throughout the academic year. However, we have three main intake periods: Fall (August-September), Spring (January-February), and Summer (May-June)."
    },
    {
      question: "What support do members receive?",
      answer: "Members receive comprehensive support including one-on-one mentoring, access to professional development resources, funding for projects, networking opportunities, and career guidance from our alumni network."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 mb-8">
            <HelpCircle className="h-4 w-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about the Campus OGs program.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-2xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center p-8 rounded-2xl backdrop-blur-sm bg-white/20 border border-white/30 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Reach out to us and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@campusogs.com" 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Email Us
            </a>
            <a 
              href="#" 
              className="px-6 py-3 backdrop-blur-sm bg-white/30 border border-white/40 text-gray-700 rounded-full font-medium hover:bg-white/40 transition-all duration-300"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
