"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { CheckCircle, Heart, Users, Target, Award, Stethoscope, Calendar, Clock } from "lucide-react"

export default function MedicalWeightLossPage() {
  const features = [
    { icon: Stethoscope, title: "Medical Supervision", desc: "Board-certified physicians oversee your entire journey" },
    { icon: Target, title: "Personalized Plans", desc: "Customized programs based on your medical history and goals" },
    { icon: Heart, title: "Health Monitoring", desc: "Regular health assessments and vital sign monitoring" },
    { icon: Award, title: "Proven Results", desc: "Clinically proven methods with high success rates" }
  ]

  const programs = [
    {
      title: "Comprehensive Medical Program",
      duration: "16 weeks",
      price: "$3,997",
      features: [
        "Complete medical evaluation",
        "Lab work and body composition analysis",
        "Prescription medications (if needed)",
        "Weekly physician consultations",
        "Nutritional counseling",
        "Exercise physiology guidance",
        "Behavioral therapy sessions",
        "24/7 medical support"
      ]
    },
    {
      title: "Standard Medical Program",
      duration: "12 weeks",
      price: "$2,497",
      features: [
        "Initial medical assessment",
        "Basic lab work",
        "Bi-weekly physician visits",
        "Meal planning guidance",
        "Exercise recommendations",
        "Progress monitoring"
      ]
    }
  ]

  const benefits = [
    "Safe and effective weight loss under medical supervision",
    "Treatment of obesity-related health conditions",
    "Prescription weight loss medications when appropriate",
    "Comprehensive health monitoring throughout the program",
    "Evidence-based treatment protocols",
    "Long-term weight maintenance strategies"
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-sage/10 to-ivory">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-16"
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl font-bold text-charcoal mb-6"
              >
                Medical Weight Loss Program
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-charcoal/80 mb-8"
              >
                Physician-supervised weight loss programs designed for safe, effective, and lasting results
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 justify-center"
              >
                <Button className="bg-forest hover:bg-forest/90 text-white px-8 py-3 text-lg">
                  Schedule Medical Consultation
                </Button>
                <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 text-lg">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Why Choose Medical Weight Loss?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <feature.icon className="w-16 h-16 text-forest mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Our Medical Programs
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-charcoal mb-2">{program.title}</h3>
                        <div className="flex items-center justify-center gap-2 text-charcoal/70 mb-4">
                          <Clock className="w-4 h-4" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="text-4xl font-bold text-forest mb-4">{program.price}</div>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                            <span className="text-charcoal/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full bg-forest hover:bg-forest/90 text-white">
                        Start This Program
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-charcoal mb-8 text-center"
              >
                Program Benefits
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-forest mt-1 flex-shrink-0" />
                    <span className="text-charcoal/80 text-lg">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-sage/10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              How Our Medical Program Works
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Medical Evaluation", desc: "Comprehensive health assessment and medical history review" },
                { step: "2", title: "Custom Treatment Plan", desc: "Personalized program based on your medical needs" },
                { step: "3", title: "Regular Monitoring", desc: "Ongoing medical supervision and progress tracking" },
                { step: "4", title: "Long-term Success", desc: "Maintenance plan for sustained weight management" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-forest text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-forest text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">Ready to Start Your Medical Weight Loss Journey?</h2>
              <p className="text-xl mb-8 opacity-90">Schedule your medical consultation with our board-certified physicians</p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-white text-forest hover:bg-ivory text-lg px-8 py-3">
                  Schedule Medical Consultation
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest text-lg px-8 py-3">
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}