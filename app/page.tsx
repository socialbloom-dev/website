"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Star,
  Calendar,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
  AlertCircle,
  Target,
  CheckCircle,
  HelpCircle,
  LinkIcon,
  Crown,
  Wrench,
  Rocket,
  TrendingUp,
  Key,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { useModal } from "@/context/modal-context"
import { services, faqs, caseStudies, testimonials, chartData, statsData, ctaStats } from "@/lib/static-data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// New Flipping Testimonial Card Component
function FlippingTestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    unflipped: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  return (
    <motion.div
      className="w-full h-64 [perspective:1000px]"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700"
        style={{ transformStyle: "preserve-3d" }}
        animate={isFlipped ? "flipped" : "unflipped"}
        variants={cardVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl sm:rounded-3xl p-6 flex flex-col items-center justify-center text-center">
          <div className={`px-4 py-2 rounded-lg mb-4 ${testimonial.bgColor}`}>
            <h3 className="text-xl font-bold text-white">{testimonial.company}</h3>
          </div>
          <p className="text-5xl font-bold text-[#2DE6C4] mb-2">{testimonial.revenue}</p>
          <p className="text-lg text-[#2DE6C4]">{testimonial.timeframe}</p>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#101a35] border border-[#4a5568]/30 rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-center">
           <blockquote className="text-white/80 italic text-center text-sm mb-4">
            "{testimonial.quote}"
          </blockquote>
          <div className="text-center mt-auto">
            <p className="text-white font-semibold">{testimonial.name}</p>
            <p className="text-white/60 text-sm">{testimonial.title}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SocialBloomWebsite() {
  const [activeService, setActiveService] = useState("outbound")
  const [animatedNumbers, setAnimatedNumbers] = useState({
    revenue: 0,
    leads: 0,
    clientSuccess: 0,
  })
  const [currentDate, setCurrentDate] = useState(new Date())
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0)

  const { openVideoModal, setIsCalendarModalOpen } = useModal()

  const nextCaseStudy = useCallback(() => {
    setCurrentCaseStudy((prev) => (prev < caseStudies.length - 1 ? prev + 1 : 0))
  }, [caseStudies.length])

  const prevCaseStudy = useCallback(() => {
    setCurrentCaseStudy((prev) => (prev > 0 ? prev - 1 : caseStudies.length - 1))
  }, [caseStudies.length])

  // Effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({ revenue: 200, leads: 18000, clientSuccess: 100 })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setCurrentDate(new Date()), 60000) // Update every minute instead of every second
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextCaseStudy, 8000)
    return () => clearInterval(interval)
  }, [nextCaseStudy])

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
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight max-w-6xl mx-auto px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Instantly Generate Predictable Growth With Our $200M "<span className="text-[#2DE6C4]">Revenue On Demand</span>" Engine!
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Access the same system that's generated over $200M in client pipeline to finally stop chasing leads and start guaranteeing revenue.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.button
                onClick={() => setIsCalendarModalOpen(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-white bg-[#2DE6C4] hover:bg-[#2DE6C4]/90 border border-[#2DE6C4] transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Predictable Growth
              </motion.button>
              <Link href="/#case-studies" passHref legacyBehavior>
              <motion.a
                className="w-full sm:w-auto border-2 border-gray-500 text-gray-400 hover:bg-gray-500/10 hover:border-gray-400 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base backdrop-blur-sm transition-all duration-300 bg-transparent flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                  Case Studies
              </motion.a>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex justify-center mb-8 sm:mb-10 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 w-[238px] overflow-hidden">
                <Script id="clutch-widget-script" type="text/javascript" src="https://widget.clutch.co/static/js/widget.js" strategy="afterInteractive" />
                <div 
                  className="clutch-widget" 
                  data-url="https://widget.clutch.co" 
                  data-widget-type="2" 
                  data-height="45" 
                  data-nofollow="false" 
                  data-expandifr="false" 
                  data-darkbg="darkbg" 
                  data-primary-color="#2de6c4" 
                  data-secondary-color="#2de6c4"
                  data-clutchcompany-id="1813241"
                ></div>
                  </div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <section className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
            <div className="container mx-auto px-4 flex justify-center">
          <motion.div
                className="w-full max-w-4xl rounded-3xl bg-[#181f3a]/90 border border-[#2DE6C4]/10 shadow-2xl p-8 md:p-16 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                  Trusted By Leading Brands, <br /><span className="text-[#2DE6C4]">Backed By Proven Results</span>
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
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
          </motion.div>
                  </div>
          </section>

          {/* Testimonials Section */}
          <section id="case-studies" className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
            <div className="w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <FlippingTestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => setIsCalendarModalOpen(true)}
                className="bg-[#2DE6C4] hover:bg-[#2DE6C4]/90 text-white px-8 py-4 rounded-full text-lg"
              >
                See How We Guarantee Results
              </Button>
            </motion.div>
          </section>
        </div>
      </section>

      {/* Agency Problem Section */}
      <section id="difference" className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
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
      <section className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto px-4">
                    <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              We're The <span className="text-[#2DE6C4]">Anti-Agency</span> Agency
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Finally, An Agency That Works Themselves Out Of A Job…
            </p>
             <p className="text-base sm:text-lg text-white/80 mt-6 max-w-4xl mx-auto leading-relaxed">
              Stop gambling with your marketing budget. Most agencies lock you into endless monthly fees with unpredictable results. We build your growth engine, prove it works with guaranteed results, then <strong className="text-white">put you in complete control</strong>. Calculate your ROI before you start, then own and control your growth system forever.
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
                    Unlike other agencies, we guarantee specific, measurable results so you can calculate your ROI before we even begin. No gambling, no uncertainty.
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
                    We're the anti-agency agency. You own your complete growth system. No ongoing fees. No dependencies. Your growth engine belongs to you forever.
                  </p>
                </CardContent>
              </Card>
          </motion.div>
          </div>
        </div>
      </section>

      {/* How We Transfer Ownership Section */}
      <section id="process" className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How You'll <span className="text-[#2DE6C4]">Never Need Another</span> Agency Again
            </h2>
             <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Get leads immediately while we build your permanent growth engine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                phase: "Instant Results",
                icon: Wrench,
                copy: "Start getting qualified leads immediately using our proven infrastructure while we analyze your business and build your custom growth engine.",
                color: "bg-blue-500/20",
                iconColor: "text-blue-400"
              },
              {
                phase: "Predictable Pipeline",
                icon: Rocket,
                copy: "Watch your calendar fill with qualified appointments from your new growth engine while learning how to be independent.",
                color: "bg-purple-500/20",
                iconColor: "text-purple-400"
              },
              {
                phase: "Complete Control",
                icon: TrendingUp,
                copy: "Your growth engine adapts to your business rhythm. Generate more leads when you're ready, fewer when you're not - it's completely up to you.",
                color: "bg-green-500/20",
                iconColor: "text-green-400"
              },
              {
                phase: "Total Freedom",
                icon: Key,
                copy: "Own your growth engine forever. Never pay another agency fee, never lose your leads if you stop paying someone else. Your growth engine works for you, not against you.",
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
                    <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => setIsCalendarModalOpen(true)}
              className="bg-[#2DE6C4] hover:bg-[#2DE6C4]/90 text-white px-8 py-4 rounded-full text-lg"
            >
              Break Free Today!
            </Button>
                    </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Client <span className="text-[#2DE6C4]">Success Stories</span>
          </motion.h2>

          <div className="relative max-w-6xl mx-auto">
            <motion.div
              className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCaseStudy}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                >
                  <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                    <motion.div
                      className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-4 sm:p-5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                        SocialBloom × {caseStudies[currentCaseStudy].client}
                      </h3>
                      <div className="text-base sm:text-lg md:text-xl font-bold text-[#2DE6C4] mb-2 sm:mb-3">
                        {caseStudies[currentCaseStudy].revenue}
                      </div>
                      <div className="flex gap-2 text-white/60 mb-2 sm:mb-3 flex-wrap">
                        {[
                          caseStudies[currentCaseStudy].client,
                          caseStudies[currentCaseStudy].year,
                          caseStudies[currentCaseStudy].service,
                        ].map((tag, index) => (
                          <span key={index} className="bg-[#4a5568]/30 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-white/80 leading-relaxed text-xs sm:text-sm">
                        {caseStudies[currentCaseStudy].overview}
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
                      {[
                        {
                          title: "Challenge",
                          items: caseStudies[currentCaseStudy].challenges,
                          icon: AlertCircle,
                          color: "text-red-400",
                        },
                        {
                          title: "Process",
                          items: caseStudies[currentCaseStudy].process,
                          icon: Target,
                          color: "text-yellow-400",
                        },
                        {
                          title: "Results",
                          items: caseStudies[currentCaseStudy].results,
                          icon: CheckCircle,
                          color: "text-[#2DE6C4]",
                        },
                      ].map((section, index) => (
                        <motion.div
                          key={section.title}
                          className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        >
                          <h4 className="text-white font-bold mb-2 sm:mb-3 text-xs sm:text-sm flex items-center gap-2">
                            <section.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${section.color} flex-shrink-0`} />
                            {section.title}
                          </h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i} className="text-white/80 flex items-start gap-2">
                                <section.icon className={`w-2 h-2 sm:w-3 sm:h-3 ${section.color} mt-1 flex-shrink-0`} />
                                <span className="text-xs leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <motion.div
                      className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 h-full flex flex-col justify-center cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => openVideoModal(currentCaseStudy)}
                    >
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-3 sm:mb-4 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <motion.div
                            className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                          </motion.div>
                        </div>
                        <iframe
                          src={`https://drive.google.com/file/d/${caseStudies[currentCaseStudy].videoId}/preview`}
                          className="w-full h-full rounded-xl pointer-events-none"
                          allow="autoplay"
                          title={`${caseStudies[currentCaseStudy].client} Case Study Preview`}
                        />
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-center">
                        Case Study Video
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm text-center">Click to watch full video</p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-6 sm:mt-8">
                <motion.button
                  onClick={prevCaseStudy}
                  className="p-2 sm:p-3 bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-full hover:bg-[#4a5568]/30 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous case study"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.button>

                <div className="flex gap-1 sm:gap-2">
                  {caseStudies.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentCaseStudy(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentCaseStudy ? "bg-[#2DE6C4] scale-125" : "bg-white/20 hover:bg-white/40"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Go to case study ${index + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextCaseStudy}
                  className="p-2 sm:p-3 bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-full hover:bg-[#4a5568]/30 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next case study"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
            <Button
              onClick={() => setIsCalendarModalOpen(true)}
              className="bg-[#2DE6C4] hover:bg-[#2DE6C4]/90 text-white px-8 py-4 rounded-full text-lg"
            >
              Write YOUR Success Story
            </Button>
          </motion.div>

        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="text-[#2DE6C4]">No-Risk</span> Performance Guarantee
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
                We guarantee specific, measurable results that allow you to calculate your exact ROI with confidence before you invest. You'll know precisely what to expect and when to expect it. If we don't deliver what we promised, you're protected by our refund guarantee.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Specific, measurable commitments",
                  "Calculate ROI before you start",
                  "Clear success benchmarks",
                  "Performance-based refund policy!",
                  "Predictable business outcomes"
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
              <Button
                onClick={() => setIsCalendarModalOpen(true)}
                className="bg-[#2DE6C4] hover:bg-[#2DE6C4]/90 text-white px-8 py-4 rounded-full text-lg"
              >
                Get Your Guaranteed ROI
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12 md:mb-16"
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
                answer: "You own your complete lead generation system including all campaigns, messaging, contact lists, processes, and lifetime access to our SOPs, training materials, and client community. You get permanent access to use our proprietary AI tools and intellectual property to optimize your owned system."
              },
              {
                question: "What does your performance guarantee actually cover?",
                answer: "We guarantee specific, measurable results that allow you to calculate your exact ROI before we even begin. The specific commitments depend on your business and goals, which we determine during our discovery process. Obviously, your active participation and cooperation is required. But if we don't hit the guarantee... you get a refund!"
              },
              {
                question: "What happens if I don't cooperate or participate actively?",
                answer: "We guarantee specific, measurable results that allow you to calculate your exact ROI before we even begin. The specific commitments depend on your business and goals, which we determine during our discovery process. Obviously, your active participation and cooperation is required. But if we don't hit the guarantee... you get a refund!"
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
                question: "What if something stops working after ownership transfer?",
                answer: "You have lifetime access to our training materials, SOPs, and client community for ongoing support. The system is built to be bulletproof and scalable, and you'll have all the knowledge and tools needed to maintain and optimize your owned system. Plus, since you own everything, you're never dependent on anyone else keeping it running."
              },
              {
                question: "Do I get leads while you're building my custom system?",
                answer: "Yes! You start getting qualified leads on day 1 using our proven infrastructure while we analyze your business and build your custom growth engine. No waiting weeks or months for results like other agencies."
              },
              {
                question: "How long does the entire process take?",
                answer: "You'll start getting leads from day 1, achieve your massive ROI within 90 days, and our guarantee period is 180 days to ensure you're fully supported. The full ownership transfer happens progressively through our proven 4-phase process, but you have lifetime access to everything we build for you."
              },
              {
                question: "What industries do you work with?",
                answer: "We work with B2B service businesses generating $25K+ monthly revenue across various industries including agencies, software development, executive recruiting, B2B SaaS, IT and MSPs to name a few. Our system adapts to any B2B model where qualified sales calls drive revenue growth."
              }
            ].map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Stats Section */}
      <section className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto px-4 flex justify-center">
                <motion.div
            className="w-full max-w-4xl rounded-3xl bg-[#181f3a]/90 border border-[#2DE6C4]/10 shadow-2xl p-8 md:p-12 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight">
              Get <span className="text-[#2DE6C4]">Data-Driven, AI-Powered, Guaranteed Results</span> TODAY!
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
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
                </motion.div>
        </div>
      </section>

      {/* Clutch Reviews Widget Section */}
      <section className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto px-4 flex justify-center">
          <motion.div
            className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              viewport={{ once: true }}
          >
            <div 
              className="clutch-widget" 
              data-url="https://widget.clutch.co" 
              data-widget-type="12" 
              data-height="375" 
              data-nofollow="false" 
              data-expandifr="true" 
              data-scale="100"
              data-darkbg="darkbg"
              data-primary-color="#2de6c4" 
              data-secondary-color="#2de6c4" 
              data-reviews="375031,357314,343756,343036,327678,316677,299750,292605,290290,288033,268634,256766" 
              data-clutchcompany-id="1813241"
            ></div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="pt-8 sm:pt-10 md:pt-12 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-[#0a0a18]/70 backdrop-blur-[30px] border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-center shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div className="mb-3 sm:mb-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/Logo.png"
                  alt="Social Bloom"
                  width={280}
                  height={80}
                  className="h-10 sm:h-12 md:h-16 w-auto mx-auto"
                />
              </motion.div>

              <div className="flex justify-center gap-4 sm:gap-6 mb-4">
                <Link href="/#case-studies" className="text-white/70 hover:text-[#2DE6C4] transition-all duration-300 text-sm">Case Studies</Link>
                <Link href="/#difference" className="text-white/70 hover:text-[#2DE6C4] transition-all duration-300 text-sm">Our Difference</Link>
                <Link href="/#guarantee" className="text-white/70 hover:text-[#2DE6C4] transition-all duration-300 text-sm">Guarantee</Link>
                <Link href="/#faq" className="text-white/70 hover:text-[#2DE6C4] transition-all duration-300 text-sm">FAQs</Link>
                <button onClick={() => setIsCalendarModalOpen(true)} className="text-[#2DE6C4] hover:text-white transition-all duration-300 text-sm font-semibold">Get Started</button>
              </div>

              <div className="flex justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                <Link
                  href="/blog"
                  className="text-[#2DE6C4] hover:text-white transition-all duration-300 text-xs sm:text-sm"
                >
                  Blog
                </Link>
                <span className="text-white/30 text-xs sm:text-sm">|</span>
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-[#2DE6C4] transition-all duration-300 text-xs sm:text-sm"
                >
                  Privacy Policy
                </Link>
              </div>

              <motion.p
                className="text-white/70 text-xs sm:text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} SocialBloom. All rights reserved.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </footer>

      {/* Floating Phone Icon */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.a
          href="tel:+15625737520"
          className="flex items-center justify-center w-14 h-14 bg-[#2DE6C4] rounded-full shadow-2xl hover:bg-[#25c7b3] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          aria-label="Call us"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  )
}

function FAQItem({ faq, index }: { faq: { question: string, answer: string }, index: number }) {
  const [openFaq, setOpenFaq] = useState(false)

  return (
    <motion.div
      key={index}
      className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.button
        onClick={() => setOpenFaq(!openFaq)}
        className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-[#4a5568]/20 transition-all duration-300"
        whileHover={{ backgroundColor: "rgba(74, 85, 104, 0.2)" }}
      >
        <span className="text-white font-semibold pr-4 text-sm sm:text-base md:text-lg">{faq.question}</span>
        <motion.div animate={{ rotate: openFaq ? 45 : 0 }} transition={{ duration: 0.3 }}>
          {openFaq ? (
            <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#2DE6C4] flex-shrink-0" />
          ) : (
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#2DE6C4] flex-shrink-0" />
          )}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {openFaq && (
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
