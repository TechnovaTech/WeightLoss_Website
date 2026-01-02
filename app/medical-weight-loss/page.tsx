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
                Medical Weight Loss
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
                Medical Weight Loss
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Medical Weight Loss is a doctor-supervised, science-based program designed to help you lose weight safely, effectively, and sustainably. Unlike fad diets, our program is personalized to your body, health history, and lifestyle—so you get real, long-term results.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-16 bg-sage/10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Why Choose Medical Weight Loss?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
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

        {/* What Is Medical Weight Loss Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/modern-medical-consultation-doctor-patient.jpg" 
              alt="Medical consultation" 
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
              Our Medical Weight Loss Program Includes
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "1",
                  title: "Doctor-Supervised Care",
                  description: "Your journey begins with a complete medical evaluation, including health history, body composition, and metabolic assessment. Your plan is designed and monitored by licensed medical providers."
                },
                {
                  number: "2",
                  title: "Personalized Weight Loss Plan",
                  description: "No one-size-fits-all approach. Your program may include: Customized nutrition plans, Lifestyle and habit coaching, Exercise guidance tailored to your ability, Medical support when needed."
                },
                {
                  number: "3",
                  title: "FDA-Approved Weight Loss Medications (If Appropriate)",
                  description: "For eligible patients, we may prescribe FDA-approved weight loss medications to help control appetite, reduce cravings, and improve metabolism—always under close medical supervision."
                },
                {
                  number: "4",
                  title: "Ongoing Monitoring & Support",
                  description: "Regular check-ins ensure your progress stays on track. Your plan is adjusted as your body changes, keeping weight loss safe and effective."
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

        {/* What Is Medical Weight Loss Info Section */}
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
                    What Is Medical Weight Loss?
                  </h2>
                  <p className="text-lg text-charcoal/80 leading-relaxed">
                    Medical Weight Loss combines clinical evaluation, FDA-approved treatments, nutrition guidance, and ongoing medical support to help you reach and maintain a healthy weight. Every plan is customized and monitored by experienced healthcare professionals.
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

      </div>
      <Footer />
    </>
  )
}