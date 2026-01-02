"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Stethoscope, Syringe, UserCheck, Activity, ArrowRight } from "lucide-react"

const programs = [
  {
    icon: Stethoscope,
    title: "Medical Weight Loss Program",
    description:
      "Physician-supervised treatment plans customized to your unique needs, medical history, and weight loss objectives with comprehensive ongoing support and monitoring.",
    gradient: "from-forest/10 via-sage/5 to-transparent",
    iconBg: "bg-forest",
    iconColor: "text-white",
    image: "/modern-medical-consultation-doctor-patient.jpg",
    shape: "card-asymmetric-1",
  },
  {
    icon: Syringe,
    title: "GLP-1 Medication Therapy",
    description:
      "Access cutting-edge treatments including Ozempic, Mounjaro, Wegovy, and Zepbound to help regulate appetite and achieve sustainable weight loss with medical supervision.",
    gradient: "from-gold/10 via-gold/5 to-transparent",
    iconBg: "bg-gold",
    iconColor: "text-white",
    image: "/medical-injection-syringe-treatment.jpg",
    shape: "card-asymmetric-2",
  },
  {
    icon: UserCheck,
    title: "Meal Replacement Plans",
    description:
      "Structured, convenient meal replacement programs that simplify weight loss while ensuring proper nutrition and calorie control for effective results.",
    gradient: "from-sage/10 via-sage/5 to-transparent",
    iconBg: "bg-sage",
    iconColor: "text-white",
    image: "/personalized-nutrition-plan-healthy-food.jpg",
    shape: "card-asymmetric-1",
  },
  {
    icon: Activity,
    title: "Educational Classes & Support",
    description:
      "Weekly accountability check-ins, expert-led classes, and personalized coaching to equip you with the knowledge and tools for lasting lifestyle changes.",
    gradient: "from-gold-light/20 via-gold-light/5 to-transparent",
    iconBg: "bg-gradient-to-br from-gold to-gold-light",
    iconColor: "text-white",
    image: "/fitness-lifestyle-support-coaching.jpg",
    shape: "card-asymmetric-2",
  },
]

export function Programs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-ivory to-white relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-forest/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 text-balance">
              Our Weight Loss <span className="gradient-forest-sage text-gradient">Programs</span>
            </h2>
          </motion.div>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto text-pretty">
            Evidence-based approaches designed for your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group"
            >
              <motion.div
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? -2 : 2,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`h-full ${program.shape} bg-white border-2 border-sage/20 hover:border-forest/30 transition-all duration-500 overflow-hidden relative`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Image container with organic shape */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Animated icon badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-6 right-6 ${program.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl glow-gold-hover`}
                  >
                    <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                  </motion.div>
                </div>

                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-forest transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-pretty mb-6">{program.description}</p>

                  {/* Animated CTA button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-sm font-semibold text-forest hover:text-gold flex items-center gap-2 transition-all group/btn"
                  >
                    Learn More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
