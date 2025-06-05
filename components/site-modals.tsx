"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useModal } from "@/context/modal-context"

export default function SiteModals() {
  const {
    isCalendarModalOpen,
    setIsCalendarModalOpen,
    isVideoModalOpen,
    setIsVideoModalOpen,
    videoModalCaseStudy,
    closeModals,
    caseStudies,
  } = useModal()
  const [calendarLoaded, setCalendarLoaded] = useState(false)

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModals()
      }
    },
    [closeModals],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [handleEscape])

  useEffect(() => {
    if (isCalendarModalOpen) {
      setCalendarLoaded(true)
    }
  }, [isCalendarModalOpen])

  return (
    <>
      {/* Calendar Modal */}
      <AnimatePresence>
        {isCalendarModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModals}
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
                onClick={closeModals}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-full hover:bg-[#4a5568]/30 transition-all duration-300 z-10"
                aria-label="Close modal"
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

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModals}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative bg-[#16213e]/90 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 w-full max-w-4xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModals}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-full hover:bg-[#4a5568]/30 transition-all duration-300 z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </button>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                <iframe
                  src={`https://drive.google.com/file/d/${caseStudies[videoModalCaseStudy].videoId}/preview`}
                  className="w-full h-full"
                  allow="autoplay"
                  title={`${caseStudies[videoModalCaseStudy].client} Case Study Video`}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                  {caseStudies[videoModalCaseStudy].client} Case Study
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/60 mb-4">
                  {caseStudies[videoModalCaseStudy].revenue}
                </p>
                <motion.button
                  onClick={() => setIsCalendarModalOpen(true)}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-full text-[#2DE6C4] bg-white/15 hover:bg-white/25 border border-[#2DE6C4] transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Call
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
