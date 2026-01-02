"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { CheckCircle, Star, Users, Phone, Calendar, Award, Target, Heart, Zap } from "lucide-react"

export default function GLP1Page() {
  const treatments = [
    {
      name: "Mounjaro",
      description: "Potent GLP-1 receptor agonist with remarkable effectiveness",
      benefits: ["Proven Results", "Appetite Suppression", "Long-Term Success"],
      image: "/medical-injection-syringe-treatment.jpg"
    },
    {
      name: "Ozempic",
      description: "Cutting-edge GLP-1 receptor agonist for substantial weight loss",
      benefits: ["Impressive Weight Loss", "Appetite Control", "Metabolic Boost"],
      image: "/medical-injection-syringe-treatment.jpg"
    },
    {
      name: "Wegovy",
      description: "Revolutionary GLP-1 receptor agonist for sustained results",
      benefits: ["Significant Weight Loss", "Appetite Management", "Sustainable Results"],
      image: "/medical-injection-syringe-treatment.jpg"
    },
    {
      name: "Zepbound",
      description: "Personalized treatment designed for your unique goals",
      benefits: ["Customized Plan", "Expert Support", "Proven Effectiveness"],
      image: "/medical-injection-syringe-treatment.jpg"
    }
  ]

  const testimonials = [
    { name: "Chuck", weight: "66 lbs", quote: "The best thing I did was call the Scottsdale Weight Loss Center. I have a lot more energy, I'm not hungry, and it feels great." },
    { name: "Emily", weight: "61 lbs", quote: "Here I am at the lowest I have been since high school weighing in at 155lbs. I have lost 61.5lbs." },
    { name: "Gina", weight: "44.5 lbs", quote: "They truly helped me change my life forever." },
    { name: "Lauren", weight: "60 lbs", quote: "I am down 60 lbs., which is the average amount a 9-year-old weighs, it is crazy to think I lost a whole person!" }
  ]

  const doctors = [
    { name: "Jillian Swope, DNP, FNP-C", specialty: "Specializing in Obesity Medicine" },
    { name: "Dr. John De Guzman", specialty: "Obesity Medicine Certified Physician" },
    { name: "Kimberly Roberts, DNP, FNP-C", specialty: "Specializing in Obesity Medicine" },
    { name: "Robert Ziltzer, MD, FACP, FAAP, FOMA", specialty: "Obesity Medicine Certified Physician" }
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
                className="text-6xl font-bold text-charcoal mb-6"
              >
                GLP-1
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-charcoal/80 mb-4"
              >
                Conveniently Located To Serve Scottsdale, Phoenix, Chandler, and Glendale
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 justify-center mb-8"
              >
                <Button className="bg-forest hover:bg-forest/90 text-white px-8 py-3 text-lg">
                  Schedule Consultation
                </Button>
              </motion.div>
            </div>
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-charcoal mb-8 text-center">
                GLP-1 Treatment at Wellness Weight Loss Center
              </h2>
              <div className="prose prose-lg max-w-none text-charcoal/80 mb-8">
                <p className="mb-6">
                  Welcome to the Wellness Weight Loss Center, where we are committed to helping you achieve your weight loss goals through cutting-edge treatments. We are proud to offer exceptional weight loss solutions, including our GLP-1 Weight Loss Treatment.
                </p>
                <p className="mb-6">
                  GLP-1 is a potent GLP-1 receptor agonist that has garnered significant attention for its efficacy in helping individuals shed excess pounds and improve their overall health.
                </p>
                <p className="mb-8">
                  GLP-1 is just one option available to our patients. We have also successfully treated countless patients with Mounjaro, Ozempic, and Wegovy.
                </p>
              </div>
              <div className="text-center">
                <Button className="bg-forest hover:bg-forest/90 text-white px-8 py-3 text-lg mr-4">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 text-lg">
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Treatments Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Our GLP-1 Treatments
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <h3 className="text-3xl font-bold text-forest mb-4">{treatment.name}</h3>
                      <p className="text-charcoal/80 mb-6">{treatment.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-charcoal mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {treatment.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-forest" />
                              <span className="text-charcoal/80">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-forest hover:bg-forest/90 text-white">
                          Learn More About {treatment.name}
                        </Button>
                        <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white">
                          Schedule Consultation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-forest text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Schedule Your Consultation</h2>
            <p className="text-xl mb-8 opacity-90">
              To learn more about how these proven weight loss treatments are integrated into personalized weight loss protocols at Wellness Weight Loss Center, contact us to schedule a consultation today.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-white text-forest hover:bg-ivory text-lg px-8 py-3">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-forest text-lg px-8 py-3">
                Call Now
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img src="/happy-woman-smiling-confident.jpg" alt="Happy woman" className="w-64 h-64 object-cover rounded-full mx-auto mb-8" />
                <h2 className="text-4xl font-bold text-charcoal mb-6">
                  Lose the weight. Get healthy. Feel better in your own body.
                </h2>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: Heart, text: "If you're ready to lose weight (and do it for good this time), we're the experts you can trust." },
                  { icon: Users, text: "We've worked with hundreds of patients over decades of practice with our doctors, helping people just like you." },
                  { icon: Target, text: "We'll guide you through the fastest & easiest way to lose the weight AND keep it off." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <item.icon className="w-16 h-16 text-forest mx-auto mb-4" />
                    <p className="text-charcoal/80">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex gap-4 justify-center mt-8">
                <Button className="bg-forest hover:bg-forest/90 text-white px-8 py-3 text-lg">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 text-lg">
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-sage/10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Success Stories
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-forest">{testimonial.name}</h3>
                        <p className="text-2xl font-bold text-charcoal">Lost {testimonial.weight}</p>
                      </div>
                      <p className="text-charcoal/80 text-sm italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Meet Our Medical Team
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center shadow-lg">
                    <CardContent className="p-6">
                      <div className="w-24 h-24 bg-sage/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12 text-forest" />
                      </div>
                      <h3 className="font-bold text-charcoal mb-2">{doctor.name}</h3>
                      <p className="text-charcoal/70 text-sm">{doctor.specialty}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-sage/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-8 h-8 text-yellow-500 fill-current" />
                <span className="text-3xl font-bold text-charcoal">Excellent rating</span>
              </div>
              <p className="text-xl text-charcoal/80 mb-2">Based on 495 reviews</p>
              <Badge className="bg-forest text-white">Trustindex Verified</Badge>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}