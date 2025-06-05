"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, X, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TermsOfServicePage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)
  const [calendarLoaded, setCalendarLoaded] = useState(false)

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCalendarModalOpen(false)
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  // Load Cal.com when calendar modal opens
  useEffect(() => {
    if (isCalendarModalOpen) {
      setCalendarLoaded(true)
    }
  }, [isCalendarModalOpen])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a18] via-[#3d3b7a] to-[#0a0a18] relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-48 h-48 sm:top-20 sm:left-20 sm:w-96 sm:h-96 bg-[#16213e] rounded-full opacity-30 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Calendar Modal */}
      <AnimatePresence>
        {isCalendarModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCalendarModalOpen(false)}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative bg-[#0a0a18]/90 backdrop-blur-[30px] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] shadow-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsCalendarModalOpen(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-full hover:bg-[#4a5568]/30 transition-all duration-300 z-10"
              >
                <X className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </button>
              <div className="text-center mb-4 sm:mb-6 px-8 sm:px-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                  Book Your Growth Strategy Call
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/60">
                  Schedule a free consultation to discuss your business growth
                </p>
              </div>
              <div className="rounded-xl bg-white overflow-hidden" style={{ width: "100%", height: "500px" }}>
                {calendarLoaded ? (
                  <iframe
                    src="https://cal.com/team/socialbloom/growth-strategy-call"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    style={{ borderRadius: "12px", background: "white" }}
                    title="Book a call with SocialBloom"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-white rounded-xl">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-[#2DE6C4] mx-auto mb-4"></div>
                      <div className="text-gray-600 text-xs sm:text-sm">Loading calendar...</div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isHeaderVisible ? "py-1 sm:py-2" : "py-2 sm:py-4"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="w-4/5 mx-auto">
            <motion.div
              className="bg-[#0a0a18]/70 backdrop-blur-[30px] border border-white/10 rounded-xl sm:rounded-2xl py-2 sm:py-3 px-3 sm:px-6 shadow-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex items-center justify-between">
                <Link href="/">
                  <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Image
                      src="/images/social-bloom-logo.png"
                      alt="Social Bloom"
                      width={200}
                      height={60}
                      className="h-8 sm:h-10 md:h-14 w-auto"
                    />
                  </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
                  <div className="relative group">
                    <motion.button
                      className="text-white hover:text-[#667eea] transition-all duration-300 flex items-center gap-2 font-medium text-sm xl:text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      Services{" "}
                      <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4 transition-transform group-hover:rotate-180" />
                    </motion.button>
                    <motion.div
                      className="absolute top-full left-0 mt-3 w-48 xl:w-56 bg-[#16213e]/95 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl"
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <Link
                        href="/services/inbound"
                        className="block px-4 py-3 text-white hover:text-[#667eea] hover:bg-[#4a5568]/20 rounded-xl transition-all duration-300 text-sm"
                      >
                        Inbound Marketing
                      </Link>
                      <Link
                        href="/services/outbound"
                        className="block px-4 py-3 text-white hover:text-[#667eea] hover:bg-[#4a5568]/20 rounded-xl transition-all duration-300 text-sm"
                      >
                        Outbound Marketing
                      </Link>
                      <Link
                        href="/services/lead-generation"
                        className="block px-4 py-3 text-white hover:text-[#667eea] hover:bg-[#4a5568]/20 rounded-xl transition-all duration-300 text-sm"
                      >
                        Lead Generation
                      </Link>
                    </motion.div>
                  </div>
                  <Link href="/#faq">
                    <motion.span
                      className="text-white hover:text-[#667eea] transition-all duration-300 font-medium text-sm xl:text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      FAQ
                    </motion.span>
                  </Link>
                  <Link href="/#case-studies">
                    <motion.span
                      className="text-white hover:text-[#667eea] transition-all duration-300 font-medium text-sm xl:text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      Case Studies
                    </motion.span>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-white hover:text-[#667eea] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.button>
                </div>

                {/* Desktop CTA Button */}
                <motion.div className="hidden lg:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => setIsCalendarModalOpen(true)}
                    className="px-4 xl:px-6 py-2 xl:py-2.5 text-xs xl:text-sm font-semibold rounded-xl text-[#2DE6C4] bg-white/15 hover:bg-white/25 border border-[#2DE6C4] transition-all duration-300 shadow-lg"
                  >
                    Book a Call
                  </button>
                </motion.div>
              </nav>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    className="lg:hidden mt-4 pt-4 border-t border-white/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-3">
                      <Link
                        href="/services/inbound"
                        className="block text-white hover:text-[#667eea] transition-all duration-300 font-medium text-sm sm:text-base py-2"
                      >
                        Inbound Marketing
                      </Link>
                      <Link
                        href="/services/outbound"
                        className="block text-white hover:text-[#667eea] transition-all duration-300 font-medium text-sm sm:text-base py-2"
                      >
                        Outbound Marketing
                      </Link>
                      <Link
                        href="/services/lead-generation"
                        className="block text-white hover:text-[#667eea] transition-all duration-300 font-medium text-sm sm:text-base py-2"
                      >
                        Lead Generation
                      </Link>
                      <Link
                        href="/#faq"
                        className="block text-white hover:text-[#667eea] transition-all duration-300 font-medium text-sm sm:text-base py-2"
                      >
                        FAQ
                      </Link>
                      <Link
                        href="/#case-studies"
                        className="block text-white hover:text-[#667eea] transition-all duration-300 font-medium text-sm sm:text-base py-2"
                      >
                        Case Studies
                      </Link>
                      <motion.button
                        onClick={() => {
                          setIsCalendarModalOpen(true)
                          setIsMobileMenuOpen(false)
                        }}
                        className="w-full mt-4 px-4 py-3 text-sm font-semibold rounded-xl text-[#2DE6C4] bg-white/15 hover:bg-white/25 border border-[#2DE6C4] transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Book a Call
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                Terms of <span className="text-[#2DE6C4]">Service</span>
              </h1>

              <div className="space-y-6 sm:space-y-8 text-white/80">
                <div>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Welcome to SocialBloom! These Terms of Service govern your use of our marketing services and
                    website. By engaging with our services, you agree to these terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">1. Service Agreement</h2>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    SocialBloom provides data-driven marketing solutions including outbound marketing, inbound
                    marketing, and lead generation services. Our commitment is to deliver measurable results and 10X ROI
                    for your business.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    All services are provided under specific service agreements that outline deliverables, timelines,
                    and performance metrics tailored to your business needs.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">2. Performance Guarantee</h2>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    We stand behind our work with a money-back guarantee. If you don't achieve at least 2X ROI within
                    the first 6 months of our engagement, you get your money back. No questions asked.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    This guarantee applies to clients who fully implement our recommended strategies and provide
                    necessary access to marketing channels and data.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">3. Client Responsibilities</h2>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed">
                    <li>Provide accurate business information and access to necessary platforms</li>
                    <li>Respond to our requests for feedback and approvals in a timely manner</li>
                    <li>Implement recommended strategies as outlined in your service agreement</li>
                    <li>Maintain professional communication throughout our partnership</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">4. Confidentiality</h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    We treat all client information with the highest level of confidentiality. Your business data,
                    strategies, and results are protected and will never be shared without your explicit consent, except
                    in anonymized case studies where your identity is protected.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">5. Intellectual Property</h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    All strategies, processes, and methodologies developed by SocialBloom remain our intellectual
                    property. However, any content created specifically for your business (campaigns, copy, etc.)
                    becomes your property upon full payment.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">6. Limitation of Liability</h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    While we strive for exceptional results, marketing outcomes can be influenced by factors beyond our
                    control. Our liability is limited to the amount paid for our services. We are not responsible for
                    indirect or consequential damages.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">7. Termination</h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Either party may terminate the service agreement with 30 days written notice. Upon termination, you
                    will receive all completed work and a final report on campaign performance.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">8. Contact Information</h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    For questions about these Terms of Service or our services, please contact us through our website or
                    schedule a consultation call. We're here to help you achieve unprecedented growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
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
              <Link href="/">
                <motion.div className="mb-3 sm:mb-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/images/social-bloom-logo.png"
                    alt="Social Bloom"
                    width={280}
                    height={80}
                    className="h-10 sm:h-12 md:h-16 w-auto mx-auto"
                  />
                </motion.div>
              </Link>

              {/* Terms and Privacy Links */}
              <div className="flex justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                <Link
                  href="/terms"
                  className="text-[#2DE6C4] hover:text-white transition-all duration-300 text-xs sm:text-sm"
                >
                  Terms of Service
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
    </div>
  )
}
