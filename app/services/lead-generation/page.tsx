"use client"
import { motion } from "framer-motion"
import { ArrowRight, Target, TrendingUp, Filter, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useModal } from "@/context/modal-context"

export default function LeadGenerationPage() {
  const { setIsCalendarModalOpen } = useModal()

  const leadGenFeatures = [
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Precision Targeting",
      description: "Advanced filtering to identify your exact ideal customer profile",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High-Quality Leads",
      description: "Pre-qualified prospects ready to engage with your solution",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Industry Expertise",
      description: "Specialized knowledge across multiple industries and verticals",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Pipeline",
      description: "Consistent flow of qualified leads to fuel your sales growth",
    },
  ]

  const leadGenTestimonials = [
    {
      name: "Robert Martinez",
      title: "Sales Director @ TechVenture",
      quote:
        "SocialBloom delivered 150 high-quality leads in just 30 days. Our conversion rate increased by 280% with their targeted approach.",
      revenue: "280% Conversion Increase",
    },
    {
      name: "Amanda Foster",
      title: "CEO @ GrowthScale",
      quote:
        "The quality of leads we received was exceptional. We closed $500K in new business from their lead generation campaign.",
      revenue: "$500K New Business",
    },
    {
      name: "Kevin Zhang",
      title: "VP Sales @ InnovateTech",
      quote:
        "Their lead generation service transformed our sales pipeline. We now have a consistent flow of qualified prospects every month.",
      revenue: "Consistent Pipeline",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "ICP Analysis",
      description: "Deep analysis of your ideal customer profile and target market segments",
    },
    {
      step: "02",
      title: "Lead Sourcing",
      description: "Advanced prospecting using multiple data sources and verification tools",
    },
    {
      step: "03",
      title: "Qualification",
      description: "Multi-layer qualification process to ensure lead quality and fit",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Seamless delivery of qualified leads with detailed contact information",
    },
  ]

  const leadQualityMetrics = [
    { metric: "Industry", value: "Fintech", description: "Specialized industry focus" },
    { metric: "Company Size", value: "500+", description: "Employees in target companies" },
    { metric: "Decision Makers", value: "C-Level", description: "Direct access to key stakeholders" },
    { metric: "Revenue Range", value: "$13M+", description: "Annual revenue of target companies" },
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
              Leads That Are Ready To <span className="text-[#2DE6C4]">Convert</span>
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We'll supply you with high-quality leads who are eager to use your solution. By focusing on a
              hyper-personalized approach and leveraging strong buying signals, we ensure that the leads you receive are
              primed for conversion. Our approach prioritizes quality over quantity, delivering nothing but high-quality
              leads to fuel your sales pipeline.
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

          {/* Lead Quality Metrics */}
          <motion.div
            className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                Premium Lead Quality Standards
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Our leads meet strict quality criteria to ensure maximum conversion potential
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {leadQualityMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-[#2d3748]/40 backdrop-blur-[20px] border border-[#4a5568]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#2DE6C4] mb-2">{metric.value}</div>
                  <div className="text-white font-medium text-sm sm:text-base mb-1">{metric.metric}</div>
                  <div className="text-white/60 text-xs sm:text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Why Choose Our <span className="text-[#2DE6C4]">Lead Generation</span>
            </h2>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Our lead generation service delivers pre-qualified prospects who are ready to engage with your solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {leadGenFeatures.map((feature, index) => (
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
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
              A systematic approach that ensures every lead we deliver meets your exact requirements and quality
              standards.
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-7xl mx-auto">
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
              See how our lead generation service has helped businesses build robust sales pipelines and drive revenue
              growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {leadGenTestimonials.map((testimonial, index) => (
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
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Fill Your Pipeline with <span className="text-[#2DE6C4]">Quality Leads?</span>
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join hundreds of businesses that have transformed their sales pipeline with our premium lead generation
              service. Let's discuss how we can deliver qualified prospects ready to convert.
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
