"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/calm-wellness-spa-lifestyle-woman-meditating-seren.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(126, 135, 114, 0.85), rgba(126, 135, 114, 0.75), rgba(126, 135, 114, 0.85))'}}></div>

      <div className="container mx-auto px-4 lg:px-8 py-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <p className="text-sm md:text-base font-medium tracking-widest uppercase mb-6" style={{color: '#7E8772'}}>
              WELCOME
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
              Scottsdale Weight Loss Center
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl mb-12 leading-relaxed max-w-4xl mx-auto text-white"
          >
            Welcome to Scottsdale Weight Loss Center, where we help individuals achieve their weight loss goals through a personalized approach. Our <span className="underline">expert team</span> of physicians, dietitians, and fitness specialists create customized weight loss plans that are tailored to your unique needs and lifestyle. Our comprehensive approach includes medical weight loss, nutrition counseling, and fitness training to ensure long-term success. With over 15 years of experience, we have helped thousands of patients achieve their desired weight and improve their overall health. Contact us today to start your weight loss journey!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-base rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              SCHEDULE CONSULTATION
            </Button>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-base rounded-full transition-all duration-300"
            >
              CALL US
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}