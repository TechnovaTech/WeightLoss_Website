"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/calm-wellness-spa-lifestyle-woman-meditating-seren.jpg')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 lg:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white mb-12 leading-relaxed"
          >
            At Scottsdale Weight Loss Center, we harness the power of groundbreaking medications like Ozempic®, Mounjaro®, Wegovy®, and Zepbound® as part of our GLP-1 weight loss treatment programs. Experience the transformative effects of these innovative therapies alongside personalized support to achieve your weight loss goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="bg-forest hover:bg-forest/90 text-white px-10 py-7 text-lg rounded-2xl shadow-lg hover:shadow-forest/30 hover:scale-105 transition-all duration-300 group"
            >
              View Our Weight Loss Programs
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
