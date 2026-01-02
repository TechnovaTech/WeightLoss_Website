"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, Star, Users, Phone, Calendar, Award, Target, Heart, Zap } from "lucide-react"

export default function GLP1Page() {
  const treatments = [
    {
      name: "Medical Weight Loss Program",
      description: "Physician-supervised weight loss programs designed for safe, effective, and lasting results",
      benefits: ["Medical Supervision", "Personalized Plans", "Health Monitoring"],
      link: "/medical-weight-loss"
    },
    {
      name: "Doctor Mentored",
      description: "Get personalized guidance from experienced physicians who specialize in weight management",
      benefits: ["Expert Medical Guidance", "Personal Mentorship", "Regular Check-ins"],
      link: "/doctor-mentored"
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
                className="text-7xl lg:text-8xl font-light text-white/90 mb-8 tracking-wider"
                style={{ fontFamily: 'serif', color: '#1f3d2b' }}
              >
                GLP-1
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

            </div>
          </div>
        </motion.section>

        {/* Our Programs Section with Background */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Our Programs
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group"
                >
                  <Card className="h-full shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0">
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-forest/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-forest/20 transition-colors">
                          {index === 0 ? (
                            <Heart className="w-8 h-8 text-forest" />
                          ) : (
                            <Users className="w-8 h-8 text-forest" />
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-forest mb-3">{treatment.name}</h3>
                      </div>
                      
                      <p className="text-charcoal/80 mb-8 text-center leading-relaxed">{treatment.description}</p>
                      
                      <div className="flex justify-center">
                        <Button className="bg-forest hover:bg-forest/90 text-white px-8 py-3" asChild>
                          <Link href={treatment.link}>Learn More</Link>
                        </Button>
                      </div>
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
                    className="w-full h-auto rounded-lg shadow-lg" 
                  />
                </motion.div>
                
                {/* Right side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold text-charcoal mb-6">
                    Lose the weight. Get healthy. Feel better in your own body.
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    {[
                      { icon: Heart, text: "If you're ready to lose weight (and do it for good this time), we're the experts you can trust." },
                      { icon: Users, text: "We've worked with hundreds of patients over decades of practice with our doctors, helping people just like you." },
                      { icon: Target, text: "We'll guide you through the fastest & easiest way to lose the weight AND keep it off." }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <item.icon className="w-8 h-8 text-forest flex-shrink-0 mt-1" />
                        <p className="text-charcoal/80">{item.text}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 text-lg">
                      Call Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-sage/10">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-charcoal mb-12 text-center"
            >
              Reviews
            </motion.h2>
            
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {[
                  {
                    name: "Sarah M.",
                    rating: 5,
                    image: "/happy-woman-smiling-confident.jpg",
                    review: "The staff at Wellness Weight Loss Center is amazing! Dr. Smith helped me lose 45 pounds safely and effectively. I finally feel confident in my own skin again."
                  },
                  {
                    name: "Michael R.",
                    rating: 5,
                    image: "/confident-man-smiling-success-healthy.jpg",
                    review: "Professional, caring, and results-driven. The GLP-1 treatment changed my life. I've lost 38 pounds and my energy levels are through the roof!"
                  },
                  {
                    name: "Jennifer L.",
                    rating: 5,
                    image: "/happy-confident-woman-smiling-healthy-lifestyle.jpg",
                    review: "I was skeptical at first, but the medical supervision and personalized approach made all the difference. Down 52 pounds and couldn't be happier!"
                  },
                  {
                    name: "David K.",
                    rating: 5,
                    image: "/happy-man-smiling-healthy-fit-lifestyle.jpg",
                    review: "The doctor-mentored program exceeded my expectations. Lost 41 pounds in 6 months with ongoing support every step of the way."
                  },
                  {
                    name: "Lisa T.",
                    rating: 5,
                    image: "/smiling-woman-healthy-active-lifestyle-outdoors.jpg",
                    review: "Finally found a weight loss solution that works! The medical team is knowledgeable and supportive. I've maintained my 35-pound weight loss for over a year now."
                  },
                  {
                    name: "Sarah M.",
                    rating: 5,
                    image: "/happy-woman-smiling-confident.jpg",
                    review: "The staff at Wellness Weight Loss Center is amazing! Dr. Smith helped me lose 45 pounds safely and effectively. I finally feel confident in my own skin again."
                  },
                  {
                    name: "Michael R.",
                    rating: 5,
                    image: "/confident-man-smiling-success-healthy.jpg",
                    review: "Professional, caring, and results-driven. The GLP-1 treatment changed my life. I've lost 38 pounds and my energy levels are through the roof!"
                  }
                ].map((review, index) => (
                  <Card key={index} className="flex-shrink-0 w-80 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-12 h-12 rounded-full object-cover" 
                        />
                        <div>
                          <p className="font-semibold text-forest">{review.name}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-charcoal/80 italic text-sm">"{review.review}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

      </div>
      <Footer />
    </>
  )
}