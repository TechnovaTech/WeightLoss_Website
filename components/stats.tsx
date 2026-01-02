"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingDown, Activity, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingDown,
    value: "20+",
    label: "Pounds Lost",
    sublabel: "in the first 3 months",
    color: "forest",
  },
  {
    icon: Activity,
    value: "50%",
    label: "Reduction",
    sublabel: "in blood pressure & diabetes medications",
    color: "gold",
  },
  {
    icon: Award,
    value: "2x",
    label: "More Weight Lost",
    sublabel: "than with other popular diets",
    color: "sage",
  },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-forest to-forest/90 relative overflow-hidden">
      {/* Animated background patterns */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Our Patients' Results</h2>
          <p className="text-ivory/80 text-lg">Results are typical but not guaranteed</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-xl border-2 border-white/20 hover:border-gold/40 transition-all duration-500"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20 mb-6"
                >
                  <stat.icon className="w-10 h-10 text-gold" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring" }}
                  className="text-5xl md:text-6xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>

                <div className="text-xl font-semibold text-ivory mb-2">{stat.label}</div>
                <div className="text-sm text-ivory/70">{stat.sublabel}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
