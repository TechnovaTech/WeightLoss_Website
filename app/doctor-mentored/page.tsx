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
          className="relative h-[50vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-r from-sage/20 via-forest/10 to-sage/30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-4">
            {/* Center Content */}
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-light text-white/90 mb-8 tracking-wider"
                style={{ fontFamily: 'serif', color: '#1f3d2b' }}
              >
                Doctor Mentored
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/80 mb-8 max-w-md mx-auto"
              >
                Conveniently Located To Serve Scottsdale, Phoenix, Chandler, and Glendale
              </motion.p>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-forest/80 via-sage/60 to-forest/90"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage/40 to-transparent"></div>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-charcoal mb-8">
                Doctor Mentored Weight Loss
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Doctor Mentored Weight Loss is a safe, guided, and personalized weight loss program where experienced doctors closely monitor and mentor you throughout your weight loss journey. This program focuses on long-term results, not quick or unhealthy fixes.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Mentorship Features */}
        <section className="py-16 bg-sage/10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Why Choose Doctor Mentorship?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {mentorshipFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-forest/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-forest" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-4">{feature.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is Doctor Mentorship Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/professional-male-doctor-smiling-medical-expertise.jpg" 
              alt="Doctor consultation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/80 to-sage/70"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white mb-12 text-center"
            >
              Benefits of Doctor Mentored Weight Loss
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "1",
                  title: "Doctor-supervised & medically safe",
                  description: "Professional medical oversight ensures your weight loss journey is safe and effective with continuous health monitoring."
                },
                {
                  number: "2",
                  title: "Personalized for your unique needs",
                  description: "Customized treatment plans designed specifically for your health profile, lifestyle, and weight loss goals."
                },
                {
                  number: "3",
                  title: "Better accountability & motivation",
                  description: "Regular check-ins with your doctor mentor provide ongoing support, motivation, and accountability for lasting success."
                },
                {
                  number: "4",
                  title: "Sustainable, long-term weight loss",
                  description: "Focus on lifestyle changes and healthy habits that promote lasting weight management and improved overall health."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="h-full shadow-xl bg-white/95 backdrop-blur-sm border-0">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                        {item.number}
                      </div>
                      <h4 className="text-lg font-bold text-charcoal mb-3">{item.title}</h4>
                      <p className="text-charcoal/80 text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is Doctor Mentorship Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src="https://www.scottsdaleweightloss.com/wp-content/uploads/2024/10/1-beautiful-slim-womanposing-and-smiling-scottsdale-weightloss-center.webp" 
                    alt="Beautiful slim woman" 
                    className="w-full h-auto rounded-lg " 
                  />
                </motion.div>
                
                {/* Right side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold text-charcoal mb-6">
                    What Is Doctor Mentored Weight Loss?
                  </h2>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Doctor Mentored Weight Loss is a medically guided approach where your progress is regularly reviewed by a licensed medical professional. Instead of guessing what works, your plan is adjusted based on your body, health conditions, and response to treatment.
                  </p>
                </motion.div>
              </div>
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
              How Our Doctor Mentorship Works
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Initial Medical Consultation", desc: "Your journey begins with a detailed consultation that includes: Medical history review, Weight & BMI assessment, Lifestyle and eating habits evaluation" },
                { step: "2", title: "Customized Weight Loss Plan", desc: "Your doctor creates a plan that may include: Personalized nutrition guidance, Lifestyle and behavior coaching, Safe physical activity recommendations, Medical support when required" },
                { step: "3", title: "Continuous Doctor Mentorship", desc: "You are not alone. Doctors: Monitor your progress regularly, Adjust your plan as needed, Ensure safe and healthy weight loss, Provide motivation and accountability" },
                { step: "4", title: "Ongoing Support & Education", desc: "You'll receive education on: Healthy eating habits, Portion control, Managing cravings, Maintaining weight after loss" }
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

      </div>
      <Footer />
    </>
  )
}