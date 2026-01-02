"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest/95 to-sage"></div>
      <div className="absolute inset-0 bg-[url('/wellness-spa-calm-lifestyle.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">Start Your Journey Today</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed text-pretty">
            Take the first step towards lasting weight loss success with our expert medical team by your side
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-forest hover:bg-ivory px-8 py-6 text-lg shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-forest px-8 py-6 text-lg transition-all duration-300 bg-transparent"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </Button>
          </div>

          <p className="mt-8 text-white/80 text-sm">
            No obligation consultation • Insurance accepted • Flexible payment plans
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-sage/10 rounded-full blur-3xl"></div>
    </section>
  )
}
