"use client"
import { motion } from "framer-motion"
import { TrendingUp, Users, Search, Share2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useModal } from "@/context/modal-context"

export default function InboundMarketingPage() {
  const { setIsCalendarModalOpen } = useModal()

  const inboundFeatures = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Rank higher on search engines and attract organic traffic that converts",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Content Marketing",
      description: "Create valuable content that attracts and engages your ideal audience",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Media Strategy",
      description: "Build a strong social presence that drives engagement and conversions",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Conversion Optimization",
      description: "Turn your website visitors into qualified leads and paying customers",
    },
  ]

  const inboundTestimonials = [
    {
      name: "David Thompson",
      title: "Marketing Director @ GrowthTech",
      quote:
        "Our inbound strategy with SocialBloom increased our organic traffic by 450% and generated $1.2M in qualified leads.",
      revenue: "450% Traffic Increase",
    },
    {
      name: "Lisa Park",
      title: "CEO @ InnovateCorp",
      quote:
        "The content marketing strategy they developed helped us establish thought leadership and close $800K in new business.",
      revenue: "$800K New Business",
    },
    {
      name: "James Wilson",
      title: "Founder @ ScaleUp Solutions",
      quote: "Their inbound approach transformed our lead quality. We now get 3x more qualified prospects than before.",
      revenue: "3x More Qualified Leads",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Audience Research",
      description: "Deep dive into your target audience's needs, pain points, and behaviors",
    },
    {
      step: "02",
      title: "Content Strategy",
      description: "Develop a comprehensive content plan that attracts and educates prospects",
    },
    {
      step: "03",
      title: "SEO & Distribution",
      description: "Optimize content for search engines and distribute across relevant channels",
    },
    {
      step: "04",
      title: "Lead Nurturing",
      description: "Convert visitors into leads and nurture them through the sales funnel",
    },
  ]

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

      {/* Main Content */}
      <div className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          {/* Hero Section */}
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
              Turn Your Audience Into <span className="text-[#2DE6C4]">Paying Clients</span>
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Transform your existing followers into loyal, paying clients and unlock that hidden revenue opportunity
              gap. By helping you build trust, boost conversions, and maximize the potential of your existing audience
              to drive growth and revenue.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <button
                  onClick={() => setIsCalendarModalOpen(true)}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-[#2DE6C4] bg-white/15 hover:bg-white/25 border border-[#2DE6C4] transition-all duration-300 shadow-lg"
                >
                  Get Started Today
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="/#case-studies"
                  className="w-full sm:w-auto border-2 border-[#2DE6C4]/50 text-[#2DE6C4] hover:bg-[#2DE6C4]/10 hover:border-[#2DE6C4] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base backdrop-blur-sm transition-all duration-300 bg-transparent flex items-center justify-center gap-2"
                >
                  View Case Studies <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <section className="py-12 sm:py-16 md:py-20">
            <motion.div
              className="text-center mb-8 sm:mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Why Choose Our <span className="text-[#2DE6C4]">Inbound Marketing</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Our inbound strategies attract, engage, and delight your ideal customers through valuable content and
                experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {inboundFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-[#2DE6C4] mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-3">{feature.title}</h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="py-12 sm:py-16 md:py-20">
            <motion.div
              className="text-center mb-8 sm:mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Our <span className="text-[#2DE6C4]">Proven Process</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                A systematic approach that attracts qualified leads and nurtures them into loyal customers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-[#2DE6C4] font-bold text-2xl sm:text-3xl mb-4">{step.step}</div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-3">{step.title}</h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-12 sm:py-16 md:py-20">
            <motion.div
              className="text-center mb-8 sm:mb-12 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Client <span className="text-[#2DE6C4]">Success Stories</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                See how our inbound marketing strategies have helped businesses attract and convert their ideal
                customers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {inboundTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="text-[#2DE6C4] font-bold text-lg sm:text-xl mb-3">{testimonial.revenue}</div>
                  <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-white text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-white/70 text-xs sm:text-sm">{testimonial.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="text-center">
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
                  Ready to Transform Your <span className="text-[#2DE6C4]">Inbound Strategy?</span>
                </motion.h2>
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Join hundreds of businesses that have transformed their marketing with our proven inbound strategies.
                  Let's discuss how we can help you attract and convert your ideal customers.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full max-w-xs mx-auto"
                >
                  <button
                    onClick={() => setIsCalendarModalOpen(true)}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full text-[#2DE6C4] bg-white/15 hover:bg-white/25 border border-[#2DE6C4] transition-all duration-300 shadow-lg"
                  >
                    Book Your Strategy Call
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>

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
                  href="/blog"
                  className="text-[#2DE6C4] hover:text-white transition-all duration-300 text-xs sm:text-sm"
                >
                  Blog
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
