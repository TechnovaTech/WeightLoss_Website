"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Pill, Utensils, Calendar } from "lucide-react"

export function ImageSection() {
  const services = [
    {
      icon: Pill,
      title: "Medication to control your appetite",
      description: "We're here to help you achieve your weight loss goals with cutting-edge treatments, including GLP-1, Mounjaro, Ozempic, and Wegovy."
    },
    {
      icon: Utensils,
      title: "The right diet & nutrition with time-saving, and cost-effective meal replacements",
      description: "Our full meal replacement plans provide a structured, convenient, simple-to-follow way to lose weight effectively."
    },
    {
      icon: Calendar,
      title: "Regular check-ins with our friendly doctors to keep you motivated and on track",
      description: "The team at Scottsdale Weight Loss Center offers ongoing support and monitoring for lasting success."
    }
  ]

  return (
    <section className="py-40 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-8 leading-tight">
                We offer proven, doctor-approved & science-backed programs you won't find anywhere else, including...
              </h2>
            </motion.div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-tight">
                      {service.title}
                    </h3>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom text and buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <p className="text-gray-600 mb-8 leading-relaxed">
                As experts in obesity medicine, we can customize the best and safest approach for you, given your medical history and past experience with dieting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
                >
                  CALL NOW
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-tl from-green-400 to-green-500 rounded-full transform rotate-12 opacity-20"></div>
              <div className="relative z-10">
                <img 
                  src="/i1.png" 
                  alt="Happy woman" 
                  className="w-full max-w-md mx-auto rounded-2xl "
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}