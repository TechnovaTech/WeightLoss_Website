"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, ClipboardCheck, TrendingDown, Trophy } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Schedule Consultation",
    description:
      "Meet with our medical team to discuss your goals, health history, and create your personalized roadmap.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Custom Plan Creation",
    description:
      "Receive your tailored program including nutrition guidance, medication if appropriate, and support schedule.",
  },
  {
    icon: TrendingDown,
    number: "03",
    title: "Begin Your Journey",
    description: "Start your program with weekly check-ins, progress tracking, and continuous medical supervision.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Achieve & Maintain",
    description: "Reach your weight goals and learn the tools to maintain your success for life with ongoing support.",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-sage-light/30 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-forest rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-gold rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-sage rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 text-balance">How It Works</h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto text-pretty">
            Your journey to lasting weight loss in four simple steps
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                <motion.div whileHover={{ y: -10 }} className="text-center relative">
                  {/* Glowing icon container */}
                  <div className="relative inline-block mb-6">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                        opacity: hoveredIndex === index ? [0.3, 0.5, 0.3] : 0.2,
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -inset-6 bg-gold/30 rounded-full blur-2xl"
                    />
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className={`relative bg-gradient-to-br from-forest to-forest/80 w-24 h-24 rounded-organic-${(index % 4) + 1} flex items-center justify-center shadow-2xl card-elevated`}
                    >
                      <step.icon className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* Animated number badge */}
                  <motion.div
                    animate={{
                      y: hoveredIndex === index ? [0, -5, 0] : 0,
                    }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    className="text-gold/40 text-7xl font-bold mb-3 leading-none"
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-xl font-semibold text-charcoal mb-4">{step.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed text-pretty">{step.description}</p>

                  {/* Progress indicator */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="mt-6 h-1 bg-gradient-to-r from-forest via-sage to-gold rounded-full"
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>

                {/* Connector Line with animation */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-sage/60 to-gold/40"
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
