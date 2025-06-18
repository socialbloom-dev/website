"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  HelpCircle, 
  Link as LinkIcon, 
  Target, 
  Crown, 
  ArrowRight,
  CheckCircle,
  Wrench,
  Rocket,
  TrendingUp,
  Key,
  Star,
  Plus,
  Minus
} from "lucide-react"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

export default function TestLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a18] via-[#3d3b7a] to-[#0a0a18] relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-48 h-48 sm:top-20 sm:left-20 sm:w-96 sm:h-96 bg-[#16213e] rounded-full opacity-30 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 sm:bottom-20 sm:right-20 sm:w-96 sm:h-96 bg-[#0f1419] rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="h-20 md:h-24" aria-hidden="true"></div> {/* Spacer for header */}

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight max-w-6xl mx-auto px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Own Your <span className="text-[#2DE6C4]">Growth Engine</span>
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              The only agency that guarantees results AND transfers complete ownership
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Stop gambling with your marketing budget. Most agencies lock you into endless monthly fees with unpredictable results. We build your growth engine, prove it works with guaranteed results, then hand you the keys. Calculate your ROI before you start, then own and control your growth system forever.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-white bg-[#2DE6C4] hover:bg-[#2DE6C4]/90 border border-[#2DE6C4] transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Calculate My ROI
              </motion.button>
              <motion.button
                className="w-full sm:w-auto border-2 border-gray-500 text-gray-400 hover:bg-gray-500/10 hover:border-gray-400 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base backdrop-blur-sm transition-all duration-300 bg-transparent flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See How It Works <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Agency Problem Section */}
      <section className="py-12 md:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              The <span className="text-[#2DE6C4]">Agency Problem</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Most agencies leave you with two major problems that keep you trapped
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700/50 border-slate-600 text-white shadow-xl h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                      <HelpCircle className="w-8 h-8 text-red-400" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-red-400">No Guarantees</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 leading-relaxed">
                    You're gambling with your marketing budget. No way to predict ROI upfront. Agencies get paid whether you succeed or fail. Months of spending with uncertain outcomes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700/50 border-slate-600 text-white shadow-xl h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <LinkIcon className="w-8 h-8 text-orange-400" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-orange-400">Endless Dependency</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 leading-relaxed">
                    You never own anything. Stop paying, everything stops working. You're trapped in ongoing fees forever. No control over your own growth systems.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-2">
                Result: Unpredictable costs, no ownership, endless risk
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-bold text-[#2DE6C4]">
              There's a better way...
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              The <span className="text-[#2DE6C4]">Social Bloom Solution</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Guaranteed results AND complete ownership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700/50 border-slate-600 text-white shadow-xl h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-green-400">Guaranteed Results</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 leading-relaxed">
                    We guarantee specific, measurable results so you can calculate your ROI before we even begin. No gambling, no uncertainty.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-700/50 border-slate-600 text-white shadow-xl h-full">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#2DE6C4]/20 rounded-full flex items-center justify-center">
                      <Crown className="w-8 h-8 text-[#2DE6C4]" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-[#2DE6C4]">Complete Ownership</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 leading-relaxed">
                    You own your complete growth system. No ongoing fees. No dependencies. Your marketing engine belongs to you forever.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#2DE6C4]/10 border border-[#2DE6C4]/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-[#2DE6C4] mb-4">
                Ready to own your growth engine?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#2DE6C4] hover:bg-[#2DE6C4]/90 text-white px-8 py-3 rounded-full">
                  Calculate My ROI
                </Button>
                <Button variant="outline" className="border-[#2DE6C4] text-[#2DE6C4] hover:bg-[#2DE6C4]/10 px-8 py-3 rounded-full">
                  See How It Works
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How We Transfer Ownership: The <span className="text-[#2DE6C4]">Full Throttle Growth Engine</span> Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                phase: "Phase 1: Build",
                icon: Wrench,
                copy: "We analyze your data, refine your ICP and offer, build your tailored lead generation strategy, and launch campaigns 100% done-for-you.",
                color: "bg-blue-500/20",
                iconColor: "text-blue-400"
              },
              {
                phase: "Phase 2: Campaign Management",
                icon: Rocket,
                copy: "We run your campaigns and provide comprehensive training while you start seeing results and learning the system.",
                color: "bg-purple-500/20",
                iconColor: "text-purple-400"
              },
              {
                phase: "Phase 3: Full Throttle Services",
                icon: TrendingUp,
                copy: "Access to our platform and ongoing coaching while you master the system and prepare for complete ownership.",
                color: "bg-green-500/20",
                iconColor: "text-green-400"
              },
              {
                phase: "Phase 4: Lifetime Access",
                icon: Key,
                copy: "Permanent access to all training materials and tools. You own your growth engine forever.",
                color: "bg-[#2DE6C4]/20",
                iconColor: "text-[#2DE6C4]"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-700/50 border-slate-600 text-white shadow-xl h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center`}>
                        <phase.icon className={`w-8 h-8 ${phase.iconColor}`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-[#2DE6C4]">{phase.phase}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-white/80 leading-relaxed text-sm">
                      {phase.copy}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 flex justify-center">
          <motion.div
            className="w-full max-w-4xl rounded-3xl bg-[#181f3a]/90 border border-[#2DE6C4]/10 shadow-2xl p-8 md:p-16 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Trusted By Leading Brands, <span className="text-[#2DE6C4]">Backed By Proven Results</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8 w-full">
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-bold text-[#2DE6C4] mb-2">$200M</div>
                <div className="text-white/80 text-base md:text-lg">Generated for our clients</div>
              </div>
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-bold text-[#2DE6C4] mb-2">18,000</div>
                <div className="text-white/80 text-base md:text-lg">Leads Generated</div>
              </div>
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-bold text-[#2DE6C4] mb-2">100%</div>
                <div className="text-white/80 text-base md:text-lg">Client Success</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-[#2DE6C4] text-2xl">★★★★★</span>
                <span className="text-[#2DE6C4] font-bold text-lg">4.9</span>
                <span className="text-white/80 text-base ml-1">Clutch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2DE6C4] text-2xl">★★★★★</span>
                <span className="text-[#2DE6C4] font-bold text-lg">5</span>
                <span className="text-white/80 text-base ml-1">Google Reviews</span>
              </div>
            </div>
            <button className="mt-2 px-8 py-3 rounded-full border border-[#2DE6C4] text-[#2DE6C4] font-semibold text-lg hover:bg-[#2DE6C4]/10 transition-all">
              Book a Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 md:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="text-[#2DE6C4]">Performance Guarantee</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Specific commitments, not vague promises
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-slate-700/50 border border-slate-600 rounded-2xl p-8 md:p-12 shadow-xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
                We guarantee specific, measurable results that allow you to calculate your exact ROI before we even begin. This guarantee requires your active participation and cooperation in the process. If we don't deliver the guaranteed results and you've held up your end, you're protected.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Specific, measurable commitments",
                  "Calculate ROI before you start",
                  "Performance-based protection",
                  "Clear cooperation requirements",
                  "Predictable, guaranteed outcomes"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#2DE6C4] flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button className="bg-[#2DE6C4] hover:bg-[#2DE6C4]/90 text-white px-8 py-4 rounded-full text-lg">
                Get My ROI Calculation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-slate-900/50">
        <div className="w-full max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked <span className="text-[#2DE6C4]">Questions</span>
          </motion.h2>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                question: "Why should I go with Social Bloom? What makes you different from similar agencies?",
                answer: "Unlike other agencies that lock you into endless monthly fees, Social Bloom builds your growth engine, proves it works, then transfers ownership to you. You get guaranteed results AND complete ownership of your marketing system. We're the only agency that empowers you with your own growth engine instead of keeping you dependent on us forever."
              },
              {
                question: "What exactly do I 'own' when you transfer ownership?",
                answer: "You own your complete lead generation system including all campaigns, messaging, contact lists, processes, and access to our training materials and tools. You get lifetime access to our SOPs, training materials, and client community. However, our proprietary AI tools and intellectual property remain ours - you get access to use them, not ownership."
              },
              {
                question: "What does your performance guarantee actually cover?",
                answer: "We guarantee specific, measurable results that allow you to calculate your exact ROI before we even begin. The specific commitments depend on your business and goals, which we determine during our discovery process. This guarantee requires your active participation and cooperation throughout the process."
              },
              {
                question: "What happens if I don't cooperate or participate actively?",
                answer: "Your active participation is essential for success. But it's stuff you should expect to do like providing information we need, responding to communications from us and interested leads, implementing recommendations, attending scheduled calls, and following our RedZone process. If you don't do your part, we can't guarantee your success."
              },
              {
                question: "How long does it take to transfer complete ownership?",
                answer: "You get immediate access to training materials and tools, but full ownership transfer happens progressively through our proven process. We'll walk you through the exact timeline during our discovery call, as it can vary based on your specific situation and goals."
              },
              {
                question: "What if my business changes or I want to target new markets?",
                answer: "Since you own your growth system and have lifetime access to our training materials and processes, you can adapt and scale as needed. The beauty of ownership is having complete control to modify and expand your marketing as your business evolves."
              },
              {
                question: "What makes you confident this approach works better than traditional agencies?",
                answer: "Our 100% client success rate speaks for itself. When clients own their growth engine, they're more invested in making it work and can optimize it for their specific needs. Plus, they save thousands in ongoing agency fees while maintaining complete control. The ownership model creates better alignment between our success and yours."
              },
              {
                question: "Do I need marketing expertise to run the system after transfer?",
                answer: "No, the system is designed to be manageable by any business team. You get comprehensive training, lifetime access to our SOPs and materials, plus access to our tools and community. Most clients successfully run and scale their systems without needing marketing experts on staff."
              },
              {
                question: "What happens if something stops working after ownership transfer?",
                answer: "You have lifetime access to our training materials, SOPs, and client community for ongoing support. The system is built to be sustainable and scalable, and you'll have all the knowledge and tools needed to maintain and optimize your owned system."
              }
            ].map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#2DE6C4]/10 border border-[#2DE6C4]/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-[#2DE6C4] mb-4">
                Ready to own your growth engine?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#2DE6C4] hover:bg-[#2DE6C4]/90 text-white px-8 py-3 rounded-full">
                  Calculate My ROI
                </Button>
                <Button variant="outline" className="border-[#2DE6C4] text-[#2DE6C4] hover:bg-[#2DE6C4]/10 px-8 py-3 rounded-full">
                  See How It Works
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// FAQItem component for animated dropdown
interface FAQItemProps {
  faq: { question: string; answer: string }
  index: number
}
function FAQItem({ faq, index }: FAQItemProps) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-[#4a5568]/20 transition-all duration-300"
        whileHover={{ backgroundColor: "rgba(74, 85, 104, 0.2)" }}
      >
        <span className="text-white font-semibold pr-4 text-sm sm:text-base md:text-lg">{faq.question}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
          {open ? (
            <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#2DE6C4] flex-shrink-0" />
          ) : (
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#2DE6C4] flex-shrink-0" />
          )}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 sm:p-6 pt-0 text-white/80 leading-relaxed text-sm sm:text-base md:text-lg">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 