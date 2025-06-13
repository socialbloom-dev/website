"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useModal } from "@/context/modal-context"

export default function SiteHeader() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setIsCalendarModalOpen } = useModal()

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMobileMenuOpen(false)
    }
  }, [])

  const handleScroll = useCallback(() => {
    setIsHeaderVisible(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("keydown", handleEscape)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleEscape)
    }
  }, [handleScroll, handleEscape])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHeaderVisible ? "py-1 sm:py-2" : "py-2 sm:py-4"
      }`}
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
              <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Link href="/">
                  <Image
                    src="/images/social-bloom-logo.png"
                    alt="Social Bloom"
                    width={200}
                    height={60}
                    className="h-8 sm:h-10 md:h-14 w-auto"
                    priority
                  />
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
                <div className="relative group">
                  <motion.button
                    className="text-white hover:text-[#2DE6C4] transition-all duration-300 flex items-center gap-2 font-medium text-sm xl:text-base"
                    whileHover={{ scale: 1.05 }}
                  >
                    Services{" "}
                    <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 xl:w-4 xl:h-4 transition-transform group-hover:rotate-180" />
                  </motion.button>
                  <motion.div className="absolute top-full left-0 mt-3 w-48 xl:w-56 bg-[#16213e]/95 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                    <Link
                      href="/services/inbound"
                      className="block px-4 py-3 text-white hover:text-[#2DE6C4] hover:bg-[#4a5568]/20 rounded-xl transition-all duration-300 text-sm"
                    >
                      Inbound Marketing
                    </Link>
                    <Link
                      href="/services/outbound"
                      className="block px-4 py-3 text-white hover:text-[#2DE6C4] hover:bg-[#4a5568]/20 rounded-xl transition-all duration-300 text-sm"
                    >
                      Outbound Marketing
                    </Link>
                  </motion.div>
                </div>
                {[
                  { name: "FAQ", href: "/#faq" },
                  { name: "Case Studies", href: "/#case-studies" },
                ].map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-[#2DE6C4] transition-all duration-300 font-medium text-sm xl:text-base"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  key="Blog"
                  href="/blog"
                  className="text-white hover:text-[#2DE6C4] transition-all duration-300 font-medium text-sm xl:text-base"
                  whileHover={{ scale: 1.05 }}
                >
                  Blog
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-white hover:text-[#2DE6C4] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle mobile menu"
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
                    {[
                      { href: "/services/inbound", label: "Inbound Marketing" },
                      { href: "/services/outbound", label: "Outbound Marketing" },
                      { href: "/#faq", label: "FAQ" },
                      { href: "/#case-studies", label: "Case Studies" },
                      { href: "/blog", label: "Blog" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-white hover:text-[#2DE6C4] transition-all duration-300 font-medium text-sm sm:text-base py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
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
  )
}
