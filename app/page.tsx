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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useModal } from "@/context/modal-context"
import { services, faqs, caseStudies, testimonials, chartData, statsData, ctaStats } from "@/lib/static-data"

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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight max-w-6xl mx-auto px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Predictable, Data-Driven Growth That Delivers <span className="text-[#2DE6C4]">10X More ROI</span>
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Socialbloom is your silver bullet for unlocking scalable growth through omnichannel marketing solutions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button
                onClick={() => setIsCalendarModalOpen(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-[#2DE6C4] bg-white/15 hover:bg-white/25 border border-[#2DE6C4] transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Call
              </motion.button>
              <motion.a
                href="#case-studies"
                className="w-full sm:w-auto border-2 border-gray-500 text-gray-400 hover:bg-gray-500/10 hover:border-gray-400 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base backdrop-blur-sm transition-all duration-300 bg-transparent flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Case Studies <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-8 sm:mb-10 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {[
                { rating: "4.9", platform: "Clutch" },
                { rating: "5", platform: "Google Reviews" },
              ].map((badge, index) => (
                <motion.div
                  key={badge.platform}
                  className="flex items-center justify-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 + index * 0.5 + i * 0.1 }}
                      >
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-[#2DE6C4] text-[#2DE6C4]" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-[#2DE6C4] font-bold text-xs sm:text-sm md:text-base">{badge.rating}</span>
                  <span className="text-white font-medium text-xs sm:text-sm md:text-base">{badge.platform}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Dashboard */}
          <motion.div
            className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="text-center mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex justify-center items-center gap-2 text-xs sm:text-sm text-white/60 mb-2 sm:mb-3">
                <motion.div
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2DE6C4] rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                As of {currentDate.toLocaleDateString()}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">B2B solutions that drive growth</h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-2 sm:p-4"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-1"
                      style={{ color: stat.color }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 2 + index * 0.3 }}
                    >
                      {(() => {
                        if (stat.label === "Generated") return animatedNumbers.revenue || stat.value;
                        if (stat.label === "Leads Generated") return animatedNumbers.leads || stat.value;
                        if (stat.label === "Client Success") return animatedNumbers.clientSuccess || stat.value;
                        return stat.value;
                      })()}
                      {stat.suffix}
                    </motion.div>
                    <div className="text-white/80 text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 h-16 sm:h-20 md:h-24">
                {chartData.map((data, index) => (
                  <motion.div
                    key={data.month}
                    className="flex flex-col items-center justify-end"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 + index * 0.3 }}
                  >
                    <motion.div
                      className="bg-gradient-to-t from-[#2DE6C4] to-[#25c7b3] backdrop-blur-[10px] rounded-t-lg w-full mb-1 sm:mb-2 shadow-lg relative flex items-center justify-center"
                      style={{ height: `${(index + 1) * 12 + 12}px` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${(index + 1) * 12 + 12}px` }}
                      transition={{ duration: 1.5, delay: 2.5 + index * 0.3, ease: "easeOut" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-white font-bold text-xs">{data.percentage}</span>
                    </motion.div>
                    <span className="text-white text-xs font-medium">{data.month}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {testimonials.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed italic">
                    "{review.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-[#2DE6C4] text-sm sm:text-base">{review.name}</div>
                    <div className="text-white/70 text-xs sm:text-sm">{review.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-[#2DE6C4]">Services</span>
            </h2>
            <motion.div
              className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
                Discover our comprehensive suite of marketing solutions designed to drive measurable growth and maximize
                your ROI.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Service Selector */}
            <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 px-2">
              <div className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-full p-1 sm:p-2 shadow-2xl w-full max-w-4xl mx-auto">
                <div className="flex gap-1 sm:gap-2 justify-center">
                  {[
                    { key: "outbound", label: "Outbound Marketing" },
                    { key: "inbound", label: "Inbound Marketing" },
                  ].map((service) => (
                    <motion.button
                      key={service.key}
                      onClick={() => setActiveService(service.key)}
                      className={`px-2 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-full font-semibold transition-all duration-500 relative overflow-hidden text-xs sm:text-sm md:text-base whitespace-nowrap ${
                        activeService === service.key
                          ? "text-white shadow-lg"
                          : "text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-[20px]"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeService === service.key && (
                        <motion.div
                          className="absolute inset-0 bg-white/15 backdrop-blur-[20px] border border-[#2DE6C4]/50 rounded-full"
                          layoutId="activeService"
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      )}
                      <span className="relative z-10">{service.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
                  <div className="space-y-4 sm:space-y-6">
                    <motion.div
                      className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#2DE6C4] leading-tight">
                        {services[activeService].title}
                      </h3>
                    </motion.div>
                    <motion.div
                      className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
                        {services[activeService].description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Dashboard Animation */}
                  <div className="space-y-3 sm:space-y-4">
                    <motion.div
                      className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="flex justify-center items-center space-x-1 sm:space-x-2">
                        {[
                          { src: "/images/caleb.jpeg", alt: "Caleb" },
                          { src: "/images/dustin.jpeg", alt: "Dustin" },
                          { src: "/images/client-1.png", alt: "Team Member" },
                        ].map((member, index) => (
                          <motion.div
                            key={index}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white relative shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Image
                              src={member.src || "/placeholder.svg"}
                              alt={member.alt}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-[#2DE6C4] rounded-full border-2 border-white animate-pulse" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <motion.div
                        className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#2DE6C4] mb-1">
                          {services[activeService].revenue}
                        </div>
                        <div className="text-white/80 text-xs sm:text-sm">Generated</div>
                      </motion.div>
                      <motion.div
                        className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#2DE6C4] mb-1">
                          {services[activeService].goal}
                        </div>
                        <div className="text-white/80 text-xs sm:text-sm">Weekly Growth Goal</div>
                      </motion.div>
                    </div>

                    {activeService !== "leadgen" && (
                      <motion.div
                        className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#2DE6C4] flex-shrink-0" />
                          <span className="text-white/80 text-xs sm:text-sm">Jan 19th 9am CST - Touching base</span>
                        </div>
                      </motion.div>
                    )}

                    <div className="space-y-2 sm:space-y-3">
                      {activeService === "leadgen" && (
                        <motion.div
                          className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center mb-3 sm:mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <div className="text-lg sm:text-xl font-bold text-white mb-2">High Quality Leads</div>
                        </motion.div>
                      )}
                      {services[activeService].channels.map((channel, index) => (
                        <motion.div
                          key={index}
                          className="bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex justify-between items-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(102, 126, 234, 0.1)" }}
                        >
                          <span className="text-white/80 font-medium text-xs sm:text-sm">{channel.name}</span>
                          <span className="text-[#2DE6C4] font-bold text-xs sm:text-sm">{channel.amount}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Answering Your <span className="text-[#2DE6C4]">Common Questions</span>
          </motion.h2>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
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
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-center hover:bg-[#4a5568]/20 transition-all duration-300"
                  whileHover={{ backgroundColor: "rgba(74, 85, 104, 0.2)" }}
                >
                  <span className="text-white font-semibold pr-4 text-sm sm:text-base md:text-lg">{faq.question}</span>
                  <motion.div animate={{ rotate: openFaq === index ? 45 : 0 }} transition={{ duration: 0.3 }}>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#2DE6C4] flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#2DE6C4] flex-shrink-0" />
                    )}
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openFaq === index && (
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
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto text-center">
          <motion.div
            className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-5xl mx-auto shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Unlock <span className="text-[#2DE6C4]">Hidden Growth</span> Today
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join over 100's of businesses that have unlocked 10X ROI with us—scaling faster and dominating their markets.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {ctaStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-sm sm:text-base md:text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { rating: "4.9", platform: "Clutch" },
                { rating: "5", platform: "Google Reviews" },
              ].map((badge) => (
                <motion.div
                  key={badge.platform}
                  className="flex items-center justify-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-[#2DE6C4] text-[#2DE6C4]" />
                    ))}
                  </div>
                  <span className="text-[#2DE6C4] font-bold text-xs sm:text-sm md:text-base">{badge.rating}</span>
                  <span className="text-white font-medium text-xs sm:text-sm md:text-base">{badge.platform}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => setIsCalendarModalOpen(true)}
              className="w-full max-w-xs mx-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-[#2DE6C4] bg-white/15 hover:bg-white/25 border border-[#2DE6C4] transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6">
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
                  src="/images/social-bloom-logo.png"
                  alt="Social Bloom"
                  width={280}
                  height={80}
                  className="h-10 sm:h-12 md:h-16 w-auto mx-auto"
                />
              </motion.div>

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
