"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Stethoscope, Syringe, Apple, Dumbbell, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Stethoscope,
    title: "Medical Weight Loss",
    description:
      "Comprehensive physician-supervised weight loss programs tailored to your unique health profile. Our board-certified doctors create personalized plans based on your medical history, goals, and lifestyle.",
    features: [
      "Initial medical evaluation",
      "Custom treatment plan",
      "Weekly progress monitoring",
      "Ongoing medical support",
    ],
  },
  {
    icon: Syringe,
    title: "GLP-1 Injectable Therapy",
    description:
      "Advanced medication therapy using proven GLP-1 treatments to help control appetite and achieve sustainable weight loss. Our medical team monitors your response and adjusts as needed.",
    features: ["Medical screening", "Prescription management", "Injection training", "Side effect monitoring"],
  },
  {
    icon: Apple,
    title: "Nutrition Counseling",
    description:
      "Work with our registered dietitians to create a sustainable eating plan that fits your lifestyle. Learn how to make healthy choices without feeling deprived or hungry.",
    features: [
      "Personalized meal plans",
      "Meal replacement options",
      "Grocery shopping guidance",
      "Recipe ideas and tips",
    ],
  },
  {
    icon: Dumbbell,
    title: "Exercise Planning",
    description:
      "Customized fitness recommendations designed for your current fitness level and physical abilities. Build strength, burn calories, and boost your metabolism safely.",
    features: ["Fitness assessment", "Custom exercise plans", "Activity tracking", "Progress adjustments"],
  },
  {
    icon: GraduationCap,
    title: "Education Classes",
    description:
      "Attend our comprehensive wellness classes to learn the tools and strategies for long-term success. Understand nutrition, behavior change, and sustainable habits.",
    features: ["Weekly educational sessions", "Behavior modification", "Stress management", "Maintenance strategies"],
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description:
      "Regular check-ins with our medical team ensure you stay on track and overcome challenges. Receive accountability, encouragement, and expert guidance throughout your journey.",
    features: ["Weekly appointments", "Body composition analysis", "Progress celebration", "Maintenance planning"],
  },
]

export default function ServicesPage() {
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-charcoal/80 text-pretty">
              Comprehensive medical weight loss services designed to help you achieve lasting results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/60 to-sage/10 backdrop-blur-sm border border-sage/20 hover:border-gold/40 hover:shadow-2xl transition-all duration-500">
                  <div className="bg-forest/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-forest" />
                  </div>
                  <h3 className="text-2xl font-semibold text-forest mb-4">{service.title}</h3>
                  <p className="text-charcoal/80 mb-6 leading-relaxed text-pretty">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-charcoal/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="sticky bottom-0 bg-forest text-white py-6 shadow-2xl z-40"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-1">Ready to Get Started?</h3>
              <p className="text-white/80 text-sm">Schedule your free consultation today</p>
            </div>
            <Button className="bg-white text-forest hover:bg-ivory px-8 shadow-lg">Book Consultation</Button>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
