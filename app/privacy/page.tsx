"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, X, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
                Privacy <span className="text-[#2DE6C4]">Policy</span>
              </h1>

              <div className="space-y-6 sm:space-y-8 text-white/80">
                <div>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    At SocialBloom, we're committed to protecting your privacy and handling your data with the highest
                    level of security. This Privacy Policy explains how we collect, use, and safeguard your information
                    when you use our marketing services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">1. Information We Collect</h2>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    <strong>Business Information:</strong> Company details, contact information, industry data, and
                    marketing objectives to deliver personalized growth strategies.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    <strong>Marketing Data:</strong> Campaign performance metrics, lead generation data, and ROI
                    analytics to optimize your marketing results.
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed">
                    <strong>Communication Records:</strong> Emails, call recordings, and meeting notes to ensure
                    consistent service delivery and track progress toward your goals.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">2. How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed">
                    <li>Develop and execute data-driven marketing strategies tailored to your business</li>
                    <li>Generate high-quality leads and optimize conversion rates</li>
                    <li>Provide detailed performance reports and ROI analysis</li>
                    <li>Communicate updates, insights, and recommendations for growth</li>
                    <li>Improve our services based on campaign performance and client feedback</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">3. Data Security & Protection</h2>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    We implement enterprise-grade security measures to protect your data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed">
                    <li>End-to-end encryption for all data transmission and storage</li>
                    <li>Regular security audits and compliance monitoring</li>
                    <li>Restricted access controls with multi-factor authentication</li>
                    <li>Secure cloud infrastructure with automated backups</li>
                    <li>GDPR and CCPA compliance protocols</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">4. Information Sharing</h2>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    We never sell your data. Information is only shared in these limited circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed">
                    <li>With trusted marketing platforms necessary to execute your campaigns</li>
                    <li>In anonymized case studies to demonstrate our success (with your permission)</li>
                    <li>When required by law or to protect our legal rights</li>
                    <li>With your explicit consent for specific business purposes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">5. Your Data Rights</h2>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">You have complete control over your data:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base leading-relaxed">
                    <li>Access and review all data we have about your business</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Delete your data from our systems (subject to legal requirements)</li>
                    <li>Export your data in a portable format</li>
                    <li>Opt-out of non-essential communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">6. Cookies & Tracking</h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Our website uses cookies to improve your experience and track campaign performance. These help us
                    understand which marketing strategies are most effective and optimize your ROI. You can control
                    cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">7. Data Retention</h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    We retain your data only as long as necessary to provide our services and demonstrate ROI results.
                    Campaign data is typically kept for 3 years to track long-term performance, while contact
                    information is maintained until you request deletion or terminate our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2DE6C4] mb-4">8. Contact Us</h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Questions about your privacy or data? We're here to help. Contact us through our website or schedule
                    a call to discuss any privacy concerns. Your trust is essential to our partnership and your business
                    growth.
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
                  className="text-white/70 hover:text-[#2DE6C4] transition-all duration-300 text-xs sm:text-sm"
                >
                  Terms of Service
                </Link>
                <span className="text-white/30 text-xs sm:text-sm">|</span>
                <Link
                  href="/privacy"
                  className="text-[#2DE6C4] hover:text-white transition-all duration-300 text-xs sm:text-sm"
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
