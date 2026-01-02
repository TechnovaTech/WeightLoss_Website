"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function PatientsResultsSection() {
  const stats = [
    {
      number: "32",
      description: "Pounds in the first 3 months",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      number: "50%",
      description: "Reduction in blood pressure & diabetes medications",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      number: "6X",
      description: "More weight lost than with other popular diets",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600"
    }
  ]

  const [counters, setCounters] = useState([0, 0, 0])

  const animateCounter = (finalValue: string, index: number) => {
    const isPercentage = finalValue.includes('%')
    const isMultiplier = finalValue.includes('X')
    const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''))
    
    let current = 0
    const increment = numericValue / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        current = numericValue
        clearInterval(timer)
      }
      
      const newCounters = [...counters]
      if (isPercentage) {
        newCounters[index] = Math.floor(current)
      } else if (isMultiplier) {
        newCounters[index] = Math.floor(current)
      } else {
        newCounters[index] = Math.floor(current)
      }
      setCounters(newCounters)
    }, 50)
  }

  return (
    <section className="py-40 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-emerald-200 to-green-300 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-teal-200 to-cyan-300 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 relative"
            style={{fontFamily: 'Georgia, serif'}}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">
              Our Patients'
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold">
              Results
            </span>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full opacity-30"
            />
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeOut"
                }
              }}
              whileHover={{ 
                y: -20, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              onViewportEnter={() => animateCounter(stat.number, index)}
              className="text-center group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card background with glassmorphism */}
              <motion.div
                className={`${stat.bgColor} backdrop-blur-xl bg-opacity-60 rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden`}
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />
                
                {/* Floating particles */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
                />
                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"
                />

                {/* Number with counter animation */}
                <motion.div 
                  className={`text-6xl md:text-7xl lg:text-8xl font-light mb-6 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent relative z-10`}
                  style={{fontFamily: 'Georgia, serif'}}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number.includes('%') ? `${counters[index]}%` : 
                   stat.number.includes('X') ? `${counters[index]}X` : 
                   counters[index]}
                  
                  {/* Glow effect */}
                  <motion.div
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} blur-2xl opacity-20 -z-10`}
                  />
                </motion.div>

                {/* Description with typewriter effect */}
                <motion.p
                  className={`text-lg md:text-xl ${stat.textColor} leading-relaxed max-w-xs mx-auto font-medium relative z-10`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.description}
                </motion.p>

                {/* Progress bar */}
                <motion.div
                  className="mt-6 h-1 bg-white/30 rounded-full overflow-hidden relative z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: index * 0.3 + 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 2, delay: index * 0.3 + 1 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real results from real patients who transformed their lives with our proven medical weight loss programs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}