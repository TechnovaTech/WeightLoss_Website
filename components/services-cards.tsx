"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Pill, Utensils, GraduationCap, Activity } from "lucide-react"

export function ServicesCards() {
  const services = [
    {
      icon: Pill,
      title: "Medications",
      image: "/medical-injection-syringe-treatment.jpg",
      description: "We're here to help you achieve your weight loss goals with cutting-edge treatments, including GLP-1, Mounjaro, Ozempic, and Wegovy. In addition, the use of meal replacements makes it simple to follow.",
      buttonText: "Learn More"
    },
    {
      icon: Utensils,
      title: "Meal Replacements",
      image: "/personalized-nutrition-plan-healthy-food.jpg",
      description: "Our full meal replacement plans provide a structured, convenient, simple-to-follow way to lose weight effectively while maintaining proper nutrition and reducing calories.",
      buttonText: "Learn More"
    },
    {
      icon: GraduationCap,
      title: "Education",
      image: "/modern-medical-consultation-doctor-patient.jpg",
      description: "The team at Scottsdale Weight Loss Center is proud to offer weight loss treatment classes so our clients learn the tools and information needed to make lasting change.",
      buttonText: "Learn More"
    },
    {
      icon: Activity,
      title: "Activity",
      image: "/fitness-lifestyle-support-coaching.jpg",
      description: "Exercise is key to your medical weight loss program, aiding long-term weight management by burning calories, building muscle, and boosting metabolism.",
      buttonText: "Learn More"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive weight loss solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <div className="relative h-80 w-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg">
                  <div 
                    className="w-full h-full bg-cover bg-center relative"
                    style={{backgroundImage: `url(${service.image})`}}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/80">Hover to learn more</p>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col justify-center text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Button 
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-base"
                  >
                    {service.buttonText}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}