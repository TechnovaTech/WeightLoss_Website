"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-ivory via-[#f5f7f4] to-sage/10">
      <div className="absolute top-20 right-10 w-96 h-96 bg-forest/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="absolute inset-0 bg-[url('/calm-wellness-spa-lifestyle-woman-meditating-seren.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-forest/10 to-gold/10 border border-forest/20 mb-8">
              <Sparkles className="w-4 h-4 text-forest" />
              <span className="text-sm font-medium text-charcoal">Medical Weight Loss Excellence</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6 leading-tight text-balance">
              Achieve Lasting Weight Loss with{" "}
              <span className="gradient-forest-sage text-gradient">Medical Expertise</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-charcoal/70 mb-12 leading-relaxed text-pretty max-w-3xl mx-auto"
          >
            Harness the power of innovative GLP-1 medications like Ozempic, Mounjaro, Wegovy, and Zepbound with
            personalized medical support to reach your weight loss goals
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-forest hover:bg-forest/90 text-white px-10 py-7 text-lg rounded-2xl shadow-lg hover:shadow-forest/30 hover:scale-105 transition-all duration-300 group card-elevated"
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-forest text-forest hover:bg-forest hover:text-white px-10 py-7 text-lg rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              View Programs
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-charcoal/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sage"></div>
              <span>Over 15 Years Experience</span>
            </div>
            <div className="w-px h-4 bg-charcoal/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <span>Thousands of Success Stories</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent"></div>
    </section>
  )
}
