import React from 'react'
import { Rocket, GraduationCap, Users, Star, Clock, Globe, Gift, Award, CheckCircle, ArrowRight, Target, Calendar, TrendingUp, DollarSign, Package, Briefcase, Trophy, Zap, MessageCircle, Code, Heart, BookOpen, Headphones, Play, Hash, Mail, Phone, Send, ExternalLink } from 'lucide-react'

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
              <a 
                href="https://forms.gle/gZWPU4H6FcQPoBXN7"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-blue-500/20 hover:bg-blue-500/30 text-blue-700 font-medium px-6 py-2 rounded-xl border border-blue-200/50 transition-all duration-300 hover:scale-105 flex items-center"
              >
                Apply Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
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
              Join Campus OGs and become one of student builders bringing ChatAndBuild to campuses worldwide.
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
                <span className="backdrop-blur-md bg-blue-500/10 text-blue-700 px-4 py-2 rounded-xl border border-blue-200/30">Campus OGs</span>
                <ArrowRight className="w-5 h-5 text-gray-500" />
                <span className="backdrop-blur-md bg-yellow-500/10 text-yellow-700 px-4 py-2 rounded-xl border border-yellow-200/30">Fellow</span>
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
                  <span>Quality over quantity</span>
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
                  <span>Exclusive starter kit + global Discord channel</span>
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
                    <span>Event hosting frequency and delivery</span>
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
                  <span>ChatAndBuild T-shirt</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>ChatAndBuild cap</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>ChatAndBuild sticker pack</span>
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
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                  <span>Global network access</span>
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

      {/* Resources & Support */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Resources & Support</h3>
            <p className="text-xl text-gray-600">Everything you need to succeed in your Campus OG journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Planning Guides */}
            <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Event Planning Guides</h4>
              </div>
              <p className="text-gray-600 text-sm text-center">Step-by-step guides for organizing workshops, hackathons, and community events that drive engagement</p>
            </div>

            {/* Community Support */}
            <div className="backdrop-blur-md bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-200/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Community Support</h4>
              </div>
              <p className="text-gray-600 text-sm text-center">Connect with fellow Campus OGs, share experiences, and get advice from successful ambassadors</p>
            </div>

            {/* Training Materials */}
            <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-200/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Training Materials</h4>
              </div>
              <p className="text-gray-600 text-sm text-center">On-demand training for assistance with ChatAndBuild features</p>
            </div>

            {/* Exclusive Discord Channel */}
            <div className="backdrop-blur-md bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-200/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Hash className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Exclusive Discord Channel</h4>
              </div>
              <p className="text-gray-600 text-sm text-center mb-4">Private channels for Campus OGs to collaborate, ask questions, and receive real-time support from the team</p>
              <div className="text-center">
                <a 
                  href="https://discordapp.com/channels/1348942357692682260/1351603633007099984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  Join Discord Channel
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Resource Library */}
            <div className="backdrop-blur-md bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-200/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Resource Library</h4>
              </div>
              <p className="text-gray-600 text-sm text-center">Comprehensive collection of templates, presentation slides, marketing materials, and best practices</p>
            </div>

            {/* Flexible Support */}
            <div className="backdrop-blur-md bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-200/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">Flexible Support</h4>
              </div>
              <p className="text-gray-600 text-sm text-center">Personalized support that adapts to your schedule, campus culture, and unique community needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-200/30 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Application Process</h3>
              <p className="text-xl text-gray-600">Simple steps to join the Campus OGs program</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Complete Application Form</h4>
                <p className="text-gray-600 text-sm">Fill out our comprehensive application form with your background, interests, and campus details</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Join Scheduled Call</h4>
                <p className="text-gray-600 text-sm">Participate in a brief interview call to discuss your goals and learn more about the program</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Receive Materials</h4>
                <p className="text-gray-600 text-sm">Get your starter kit, access to resources, and begin your Campus OG journey</p>
              </div>
            </div>

            {/* Application Link */}
            <div className="text-center mb-8">
              <a 
                href="https://forms.gle/gZWPU4H6FcQPoBXN7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <Send className="w-6 h-6 mr-3" />
                Apply Today
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Rolling Reviews Note */}
            <div className="backdrop-blur-md bg-yellow-500/10 border border-yellow-200/30 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-yellow-600 mr-2" />
                <h5 className="text-lg font-semibold text-yellow-800">Rolling Application Reviews</h5>
              </div>
              <p className="text-yellow-700">Applications are reviewed on a rolling basis. Apply early to secure your spot in the next cohort!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <p className="text-xl text-gray-600">Get in touch with our Campus OGs program team</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Discord Support */}
              <div className="backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-200/30 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Hash className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Discord Support</h4>
                </div>
                <p className="text-gray-600 text-center mb-4">Join our Discord community for real-time support, collaboration, and updates from the Campus OGs team.</p>
                <div className="text-center">
                  <a 
                    href="https://discordapp.com/channels/1348942357692682260/1351603633007099984"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Join Discord
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Email Support */}
              <div className="backdrop-blur-md bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-200/30 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Email Support</h4>
                </div>
                <p className="text-gray-600 text-center mb-4">Reach out to our team directly for program questions, applications, and personalized support.</p>
                <div className="space-y-2 text-center">
                  <div>
                    <a 
                      href="mailto:bobi@chatandbuild.com"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      bobi@chatandbuild.com
                    </a>
                  </div>
                  <div>
                    <a 
                      href="mailto:niall@chatandbuild.com"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      niall@chatandbuild.com
                    </a>
                  </div>
                  <div>
                    <a 
                      href="mailto:eric@chatandbuild.com"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      eric@chatandbuild.com
                    </a>
                  </div>
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

      {/* Final CTA Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to become a Campus OG?</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our global community of student builders shaping the future of no-code development. 
                <a 
                  href="https://forms.gle/gZWPU4H6FcQPoBXN7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-2"
                >
                  Apply today
                </a> and start your journey!
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="https://forms.gle/gZWPU4H6FcQPoBXN7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center backdrop-blur-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                <Send className="w-6 h-6 mr-3" />
                Apply for Campus OGs Program
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
              <p className="text-sm text-gray-500">Join the first cohort of Campus OGs and make history!</p>
            </div>
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
