"use client"

import { createContext, useState, useContext, useCallback, type ReactNode } from "react"
import { caseStudies } from "@/lib/static-data"
import type { CaseStudy } from "@/types/data"

interface ModalContextType {
  isCalendarModalOpen: boolean
  setIsCalendarModalOpen: (isOpen: boolean) => void
  isVideoModalOpen: boolean
  setIsVideoModalOpen: (isOpen: boolean) => void
  videoModalCaseStudy: number
  setVideoModalCaseStudy: (index: number) => void
  openVideoModal: (index: number) => void
  closeModals: () => void
  caseStudies: CaseStudy[]
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [videoModalCaseStudy, setVideoModalCaseStudy] = useState(0)

  const closeModals = useCallback(() => {
    setIsVideoModalOpen(false)
    setIsCalendarModalOpen(false)
  }, [])

  const openVideoModal = useCallback((index: number) => {
    setVideoModalCaseStudy(index)
    setIsVideoModalOpen(true)
  }, [])

  const value = {
    isCalendarModalOpen,
    setIsCalendarModalOpen,
    isVideoModalOpen,
    setIsVideoModalOpen,
    videoModalCaseStudy,
    setVideoModalCaseStudy,
    openVideoModal,
    closeModals,
    caseStudies,
  }

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}
