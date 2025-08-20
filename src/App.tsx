import React from 'react'
import { Rocket, GraduationCap, Users, Star, Clock, Globe, Gift, Award, CheckCircle, ArrowRight, Target, Calendar, TrendingUp, DollarSign, Package, Briefcase, Trophy, Zap, MessageCircle, Code, Heart } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 font-inter">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-lg px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-800">ChatAndBuild</span>
              </div>
              <button className="backdrop-blur-md bg-blue-500/20 hover:bg-blue-500/30 text-blue-700 font-medium px-6 py-2 rounded-xl border border-blue-200/50 transition-all duration-300 hover:scale-105">
                Apply Now
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Blue Header Callout */}
          <div className="backdrop-blur-md bg-blue-500/10 border border-blue-200/30 rounded-2xl p-6 mb-12 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl md:text-3xl font-bold text-blue-800">Ready to lead the no-code revolution at your university?</h1>
            </div>
            <p className="text-lg text-blue-700 leading-relaxed">
              Join Campus OGs and become the first cohort of student builders bringing ChatAndBuild to campuses worldwide.
            </p>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Campus <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">OGs</span> Program
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The premier student ambassador program for the next generation of no-code builders
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-gray-100/30 border border-white/30 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Program Overview</h3>
              <div className="flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-gray-600 mr-3" />
                <p className="text-xl text-gray-700">
                  Campus OGs is the entry tier of the ChatAndBuild Ambassador Program for university students building no-code communities on campus.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4 text-lg font-medium">
                <span className="backdrop-blur-md bg-blue-500/10 text-blue-700 px-4 py-2 rounded-xl border border-blue-200/30">🎓 Campus OGs</span>
                <ArrowRight className="w-5 h-5 text-gray-500" />
                <span className="backdrop-blur-md bg-yellow-500/10 text-yellow-700 px-4 py-2 rounded-xl border border-yellow-200/30">🌟 Fellow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Blocks */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Time Commitment */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Time Commitment</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>3-month initial term</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Flexible schedule</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Work around your classes</span>
                </li>
              </ul>
            </div>

            {/* Global Student Community */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Global Community</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Connect with student builders worldwide</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Share experiences and best practices</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Collaborate on projects</span>
                </li>
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800">Key Benefits</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                  <span>Event funding</span>
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                  <span>Certification & recommendations</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Fellow advancement path</span>
                </li>
                <li className="flex items-center">
                  <Gift className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span>Exclusive starter kit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Your Mission as a Campus OG */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Your Mission as a Campus OG</h3>
              <p className="text-xl text-gray-600">Drive no-code adoption and build thriving communities on your campus</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Event Organization */}
              <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200/30 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Event Organization</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Target className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Host workshops & tutorials</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span>Organize mini hackathons</span>
                  </li>
                  <li className="flex items-center">
                    <Trophy className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span>Run full hackathons</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span>Create innovative formats</span>
                  </li>
                </ul>
              </div>

              {/* Community Growth */}
              <div className="backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-200/30 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Community Growth</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Users className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                    <span>Onboard new users</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                    <span>Build campus networks</span>
                  </li>
                  <li className="flex items-center">
                    <Code className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Create engaging content</span>
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Foster global connections</span>
                  </li>
                </ul>
              </div>

              {/* Key Success Metrics */}
              <div className="backdrop-blur-md bg-gradient-to-br from-teal-500/10 to-green-500/10 border border-teal-200/30 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Success Metrics</h4>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Gift className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                    <span>Referral code usage</span>
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Event hosting frequency</span>
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span>Discord participation</span>
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span>Community engagement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Perks & Benefits</h3>
            <p className="text-xl text-gray-600">Everything you need to succeed as a Campus OG</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Financial Support */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Financial Support</h4>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Event reimbursements</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Referral earnings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>Exclusive discount codes</span>
                </li>
              </ul>
            </div>

            {/* Starter Kit */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Starter Kit</h4>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Branded t-shirt</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Campus OG cap</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Sticker pack</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Event materials</span>
                </li>
              </ul>
            </div>

            {/* Professional Growth */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Professional Growth</h4>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Program certification</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Recommendation letters</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Early access features</span>
                </li>
              </ul>
            </div>

            {/* Role Advancement */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Role Advancement</h4>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                  <span>Partner internships</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                  <span>Expert role opportunities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                  <span>Advanced benefits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Journey */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/30 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Growth Journey</h3>
              <p className="text-xl text-gray-600">Your path to becoming a successful Campus OG</p>
            </div>

            {/* Program Timeline */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">Program Timeline</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h5 className="text-xl font-semibold text-gray-800 mb-3">Launch</h5>
                  <p className="text-gray-600 mb-2 font-medium">Month 1</p>
                  <p className="text-gray-600 text-sm">Get started with your starter kit, join the community, and plan your first event</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h5 className="text-xl font-semibold text-gray-800 mb-3">Growth</h5>
                  <p className="text-gray-600 mb-2 font-medium">Month 2-3</p>
                  <p className="text-gray-600 text-sm">Host events, grow your campus community, and track your success metrics</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h5 className="text-xl font-semibold text-gray-800 mb-3">Evaluation</h5>
                  <p className="text-gray-600 mb-2 font-medium">Month 3+</p>
                  <p className="text-gray-600 text-sm">Review performance, receive certification, and advance to Fellow status</p>
                </div>
              </div>
            </div>

            {/* What Makes a Successful Campus OG */}
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">What Makes a Successful Campus OG</h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Initiative</h5>
                  <p className="text-gray-600 text-sm">Take ownership of your campus community and proactively organize events and activities</p>
                </div>

                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Community Impact</h5>
                  <p className="text-gray-600 text-sm">Create meaningful connections and help fellow students discover the power of no-code</p>
                </div>

                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-3">Builder Success</h5>
                  <p className="text-gray-600 text-sm">Help students create amazing projects and achieve their goals with ChatAndBuild</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/30 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Who Should Apply</h3>
              <p className="text-lg text-gray-600 mb-8">We're looking for passionate students ready to make an impact</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Passionate About No-Code</h4>
                <p className="text-gray-600">You believe in the power of no-code tools to democratize software development</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Natural Organizer</h4>
                <p className="text-gray-600">You have leadership potential and enjoy bringing people together</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Currently Enrolled</h4>
                <p className="text-gray-600">You're a current university or college student with campus access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-gray-600 mb-8">Join the first cohort of Campus OGs and help shape the future of no-code education</p>
            <button className="backdrop-blur-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg">
              Apply for Campus OGs Program
            </button>
            <p className="text-sm text-gray-500 mt-4">Applications are reviewed on a rolling basis</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-800">ChatAndBuild</span>
              </div>
              <p className="text-gray-600 mb-4">Empowering the next generation of builders</p>
              <p className="text-sm text-gray-500">© 2024 ChatAndBuild. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
