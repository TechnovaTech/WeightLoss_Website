"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    { icon: Phone, title: "Call Us", desc: "Speak directly with our team", info: "(480) 949-6570" },
    { icon: Mail, title: "Email Us", desc: "Send us your questions", info: "info@scottsdaleweightloss.com" },
    { icon: Calendar, title: "Schedule", desc: "Book your consultation", info: "Online scheduling available" },
    { icon: MessageSquare, title: "Text Us", desc: "Quick questions & support", info: "(480) 949-6570" }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ]

  const locations = [
    {
      title: "Main Office",
      address: "Scottsdale, Arizona",
      phone: "(480) 949-6570",
      description: "Our primary location serving Scottsdale and surrounding areas"
    }
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
                Contact Us
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-white/80 mb-8 max-w-md mx-auto"
              >
                Ready to Start Your Weight Loss Journey?
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
                Get In Touch
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Contact Scottsdale Weight Loss Center today to schedule your consultation and take the first step toward achieving your weight loss goals with our expert medical team.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Methods Section */}
        <section className="py-16 bg-sage/10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              How to Reach Us
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-forest/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-forest" />
                      </div>
                      <h3 className="text-lg font-bold text-charcoal mb-3">{method.title}</h3>
                      <p className="text-charcoal/70 mb-2 text-sm">{method.desc}</p>
                      <p className="text-forest font-semibold text-sm break-words">{method.info}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Hours & Location Section */}
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
              Office Hours & Location
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full shadow-xl bg-white/95 backdrop-blur-sm border-0">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center mb-6">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-charcoal mb-6">Office Hours</h4>
                    <div className="space-y-4">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-charcoal font-medium">{schedule.day}</span>
                          <span className="text-forest font-semibold">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full shadow-xl bg-white/95 backdrop-blur-sm border-0">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center mb-6">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-charcoal mb-6">Our Location</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-lg font-semibold text-charcoal mb-2">Main Office</h5>
                        <p className="text-charcoal/80 mb-2">Scottsdale, Arizona</p>
                        <p className="text-forest font-semibold mb-3">(480) 949-6570</p>
                        <p className="text-charcoal/70 text-sm">Serving Scottsdale, Phoenix, Chandler, and Glendale</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-charcoal mb-6"
              >
                Ready to Get Started?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-charcoal/80 mb-8"
              >
                Schedule your consultation today and take the first step toward achieving your weight loss goals with our expert medical team.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  className="bg-forest hover:bg-forest/90 text-white px-8 py-4 text-lg rounded-full"
                >
                  Schedule Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-forest text-forest hover:bg-forest hover:text-white px-8 py-4 text-lg rounded-full"
                >
                  Call (480) 949-6570
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}