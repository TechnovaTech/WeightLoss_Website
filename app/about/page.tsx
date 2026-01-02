"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Heart, Target, Users, CheckCircle2, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and understanding",
  },
  {
    icon: Shield,
    title: "Medical Excellence",
    description: "Board-certified physicians using evidence-based treatments",
  },
  {
    icon: Target,
    title: "Personalized Approach",
    description: "Customized plans tailored to your unique needs and goals",
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "Dedicated team guiding you every step of your journey",
  },
]

const timeline = [
  { year: "2010", event: "Founded with a mission to provide medical weight loss" },
  { year: "2015", event: "Expanded to include GLP-1 therapy and nutrition services" },
  { year: "2020", event: "Reached milestone of 5,000+ successful patients" },
  { year: "2025", event: "Leading medical weight loss center with proven results" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-sage/10 to-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6 text-balance">About Our Center</h1>
            <p className="text-xl text-charcoal/80 leading-relaxed text-pretty">
              For over 15 years, we've helped thousands of patients achieve lasting weight loss through
              physician-supervised programs, personalized care, and proven medical treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-forest/5 to-sage/10 rounded-3xl p-8 lg:p-12 border border-sage/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-charcoal/80 leading-relaxed text-center text-pretty">
                To provide compassionate, evidence-based medical weight loss care that empowers individuals to achieve
                their health goals and maintain lasting results. We believe everyone deserves personalized support from
                qualified medical professionals who understand the complexities of weight management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sage/5 to-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Our Values</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-sage/20 hover:border-gold/40 hover:shadow-xl transition-all duration-500">
                  <div className="bg-forest/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="text-lg font-semibold text-forest mb-2">{value.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed text-pretty">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Our Journey</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">Growing and evolving to serve you better</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-forest w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 h-full bg-sage/30 mt-2"></div>}
                </div>
                <div className="pb-8">
                  <div className="text-2xl font-bold text-gold mb-2">{item.year}</div>
                  <p className="text-lg text-charcoal/80">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-forest via-forest/95 to-sage">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Success Story</h2>
            <p className="text-xl text-white/90 mb-8">
              Become part of our community of successful patients who achieved their weight loss goals
            </p>
            <Button className="bg-white text-forest hover:bg-ivory px-8 py-6 text-lg shadow-2xl hover:scale-105 transition-all">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
