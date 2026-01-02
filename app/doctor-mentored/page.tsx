"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { CheckCircle, Users, MessageCircle, Calendar, Award, Stethoscope, Heart, Target } from "lucide-react"

export default function DoctorMentoredPage() {
  const mentorshipFeatures = [
    { icon: Stethoscope, title: "Expert Medical Guidance", desc: "Direct access to board-certified physicians specializing in weight management" },
    { icon: MessageCircle, title: "Personal Mentorship", desc: "One-on-one guidance tailored to your unique health profile and goals" },
    { icon: Calendar, title: "Regular Check-ins", desc: "Scheduled consultations to monitor progress and adjust treatment plans" },
    { icon: Award, title: "Proven Expertise", desc: "Learn from doctors with decades of experience in obesity medicine" }
  ]

  const programs = [
    {
      title: "Premium Doctor Mentorship",
      duration: "6 months",
      price: "$4,997",
      popular: true,
      features: [
        "Weekly 1-on-1 doctor consultations",
        "24/7 direct doctor access via secure messaging",
        "Personalized treatment protocols",
        "Advanced metabolic testing",
        "Prescription medication management",
        "Nutritional coaching with medical oversight",
        "Behavioral modification strategies",
        "Long-term maintenance planning"
      ]
    },
    {
      title: "Standard Doctor Mentorship",
      duration: "3 months",
      price: "$2,997",
      popular: false,
      features: [
        "Bi-weekly doctor consultations",
        "Email support between visits",
        "Basic health assessments",
        "Medication guidance",
        "Nutrition plan review",
        "Progress monitoring"
      ]
    }
  ]

  const mentorshipBenefits = [
    "Personalized medical expertise for your specific needs",
    "Faster results through professional medical guidance",
    "Safe weight loss with continuous medical supervision",
    "Treatment of underlying health conditions affecting weight",
    "Evidence-based strategies proven in clinical practice",
    "Long-term relationship for sustained success"
  ]

  const doctors = [
    { name: "Dr. Robert Ziltzer", specialty: "Obesity Medicine Certified", experience: "25+ years", patients: "5000+" },
    { name: "Dr. John De Guzman", specialty: "Internal Medicine & Weight Management", experience: "20+ years", patients: "3500+" },
    { name: "Dr. Craig Primack", specialty: "Obesity Medicine Specialist", experience: "15+ years", patients: "4000+" }
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
                Doctor Mentored Weight Loss
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-charcoal/80 mb-8"
              >
                Get personalized guidance from experienced physicians who specialize in weight management and obesity medicine
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 justify-center"
              >
                <Button className="bg-forest hover:bg-forest/90 text-white px-8 py-3 text-lg">
                  Meet Your Doctor Mentor
                </Button>
                <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 text-lg">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mentorship Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Why Choose Doctor Mentorship?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentorshipFeatures.map((feature, index) => (
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
              Doctor Mentorship Programs
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
                  <Card className={`h-full shadow-lg hover:shadow-xl transition-all relative ${program.popular ? 'ring-2 ring-forest' : ''}`}>
                    {program.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-forest text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-charcoal mb-2">{program.title}</h3>
                        <div className="flex items-center justify-center gap-2 text-charcoal/70 mb-4">
                          <Calendar className="w-4 h-4" />
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
                      
                      <Button className={`w-full ${program.popular ? 'bg-forest hover:bg-forest/90' : 'bg-sage hover:bg-sage/90'} text-white`}>
                        Start Mentorship Program
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctor Profiles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Meet Your Doctor Mentors
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 bg-forest/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Stethoscope className="w-12 h-12 text-forest" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">{doctor.name}</h3>
                      <p className="text-forest font-semibold mb-2">{doctor.specialty}</p>
                      <div className="space-y-1 text-sm text-charcoal/70">
                        <p>{doctor.experience} experience</p>
                        <p>{doctor.patients} patients helped</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-sage/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-charcoal mb-8 text-center"
              >
                Benefits of Doctor Mentorship
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {mentorshipBenefits.map((benefit, index) => (
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              How Doctor Mentorship Works
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Initial Consultation", desc: "Meet your doctor mentor and discuss your health goals" },
                { step: "2", title: "Personalized Plan", desc: "Receive a customized treatment plan based on your needs" },
                { step: "3", title: "Regular Mentorship", desc: "Ongoing guidance and support from your dedicated doctor" },
                { step: "4", title: "Achieve Success", desc: "Reach your goals with expert medical supervision" }
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
              <h2 className="text-4xl font-bold mb-4">Ready to Start Your Doctor Mentored Journey?</h2>
              <p className="text-xl mb-8 opacity-90">Connect with a board-certified physician who will guide you every step of the way</p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-white text-forest hover:bg-ivory text-lg px-8 py-3">
                  Meet Your Doctor Mentor
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest text-lg px-8 py-3">
                  Schedule Consultation
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