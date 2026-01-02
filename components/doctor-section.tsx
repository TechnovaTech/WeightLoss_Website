"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, GraduationCap, Users2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Board-Certified Obesity Medicine Physician",
    image: "/professional-female-doctor-smiling-medical-coat.jpg",
    specialty: "Obesity Medicine",
  },
  {
    name: "Dr. James Anderson",
    title: "Obesity Medicine Specialist",
    image: "/professional-male-doctor-smiling-medical-expertise.jpg",
    specialty: "Weight Management",
  },
  {
    name: "Dr. Emily Chen",
    title: "Certified Weight Management Physician",
    image: "/professional-asian-female-doctor-smiling-confident.jpg",
    specialty: "Metabolic Health",
  },
]

const credentials = [
  { icon: Award, text: "Board-Certified Obesity Medicine", color: "forest" },
  { icon: GraduationCap, text: "15+ Years Combined Experience", color: "gold" },
  { icon: Users2, text: "Thousands of Success Stories", color: "sage" },
  { icon: CheckCircle2, text: "Evidence-Based Approach", color: "gold" },
]

export function DoctorSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-white to-ivory">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 text-balance">
            Meet Our <span className="gradient-forest-sage text-gradient">Expert Team</span>
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto text-pretty">
            Experienced physicians dedicated to your health and success
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="group"
              >
                <motion.div
                  whileHover={{
                    y: -15,
                    rotateY: 5,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`relative overflow-hidden card-asymmetric-${(index % 2) + 1} bg-white shadow-xl hover:shadow-2xl transition-all duration-500`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="aspect-[3/4] relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 gradient-forest-sage z-10"
                    />

                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Specialty badge with animation */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-forest shadow-lg"
                    >
                      {doctor.specialty}
                    </motion.div>
                  </div>

                  <div className="p-6 bg-gradient-to-b from-white to-sage-light/20">
                    <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-forest transition-colors duration-300">
                      {doctor.name}
                    </h3>
                    <p className="text-charcoal/60 text-sm text-pretty leading-relaxed">{doctor.title}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border-2 border-sage/20 shadow-2xl relative overflow-hidden">
            {/* Animated background pattern */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-forest/5 via-transparent to-gold/5 rounded-full blur-3xl"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 relative z-10">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-${credential.color}/10 p-4 rounded-organic-${(index % 4) + 1} shadow-lg`}
                  >
                    <credential.icon className={`w-7 h-7 text-${credential.color}`} />
                  </motion.div>
                  <p className="text-charcoal/80 text-sm font-medium text-pretty leading-tight">{credential.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center border-t border-sage/20 pt-10 relative z-10">
              <p className="text-lg text-charcoal/70 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
                Our physicians specialize in obesity medicine and are dedicated to providing personalized, compassionate
                care to help you achieve your health goals safely and effectively.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-forest to-forest/90 hover:from-forest/90 hover:to-forest text-white px-10 py-6 text-lg rounded-2xl shadow-xl hover:shadow-forest/30 transition-all duration-300">
                  Schedule Your Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
