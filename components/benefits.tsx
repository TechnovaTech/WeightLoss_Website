"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Stethoscope, HeartPulse, LineChart, Users } from "lucide-react"

const benefits = [
  {
    icon: Stethoscope,
    title: "Medical-Grade Weight Loss",
    description:
      "Doctor-approved, science-backed programs customized to your medical history and weight loss experience.",
    color: "forest",
    delay: 0,
  },
  {
    icon: HeartPulse,
    title: "Personalized Support & Accountability",
    description: "Weekly check-ins with friendly doctors and dedicated medical specialists to keep you motivated.",
    color: "gold",
    delay: 0.1,
  },
  {
    icon: LineChart,
    title: "Quick & Lasting Results",
    description: "Proven to help patients lose more weight than other popular diets with sustainable outcomes.",
    color: "sage",
    delay: 0.2,
  },
  {
    icon: Users,
    title: "Comprehensive Care Team",
    description: "Expert physicians, dietitians, and fitness specialists working together for your success.",
    color: "forest",
    delay: 0.3,
  },
]

export function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-40 bg-gradient-to-b from-white to-sage-light/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 text-balance">
            What Makes Us <span className="gradient-gold-light text-gradient">Different</span>
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto text-pretty">
            With your dedicated medical weight loss specialist, we offer weekly accountability, lab work, classes,
            counseling, medication, and medical-grade nutrition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: benefit.delay,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group"
            >
              <motion.div
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  rotateX: 5,
                }}
                transition={{ duration: 0.4 }}
                className="h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-sage/20 hover:border-forest/40 transition-all duration-500 relative overflow-hidden card-elevated"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    opacity: [0, 0.1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: benefit.delay,
                  }}
                  className={`absolute inset-0 bg-${benefit.color}/5 rounded-3xl`}
                />

                {/* Icon with morphing background */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative z-10 mb-6"
                >
                  <div
                    className={`bg-${benefit.color}/10 w-20 h-20 rounded-organic-${(index % 4) + 1} flex items-center justify-center relative`}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: benefit.delay * 2,
                      }}
                      className={`absolute inset-0 bg-${benefit.color}/5 rounded-organic-${(index % 4) + 1} blur-md`}
                    />
                    <benefit.icon className={`w-9 h-9 text-${benefit.color} relative z-10`} />
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-charcoal mb-4 relative z-10 group-hover:text-forest transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed text-pretty text-sm relative z-10">
                  {benefit.description}
                </p>

                {/* Corner accent */}
                <div
                  className={`absolute bottom-0 right-0 w-24 h-24 bg-${benefit.color}/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
