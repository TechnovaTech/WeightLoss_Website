"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

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
            <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6 text-balance">Get In Touch</h1>
            <p className="text-xl text-charcoal/80 text-pretty">
              Ready to start your weight loss journey? Contact us today to schedule your free consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-gradient-to-br from-white/60 to-sage/10 backdrop-blur-sm rounded-3xl p-8 border border-sage/20 shadow-lg">
                <h2 className="text-3xl font-bold text-forest mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="bg-forest/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-forest" />
                    </div>
                    <h3 className="text-2xl font-semibold text-forest mb-2">Thank You!</h3>
                    <p className="text-charcoal/70">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-charcoal block mb-2">First Name</label>
                        <Input required placeholder="John" className="bg-white/80 border-sage/30" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-charcoal block mb-2">Last Name</label>
                        <Input required placeholder="Doe" className="bg-white/80 border-sage/30" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-charcoal block mb-2">Email</label>
                      <Input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="bg-white/80 border-sage/30"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-charcoal block mb-2">Phone</label>
                      <Input type="tel" placeholder="(555) 123-4567" className="bg-white/80 border-sage/30" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-charcoal block mb-2">Message</label>
                      <Textarea
                        required
                        placeholder="Tell us about your weight loss goals..."
                        rows={5}
                        className="bg-white/80 border-sage/30 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-forest hover:bg-forest/90 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-forest mb-6">Contact Information</h2>
                <p className="text-charcoal/70 mb-8 leading-relaxed">
                  Have questions? Our friendly team is here to help you start your weight loss journey with confidence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-sage/20 hover:border-gold/40 transition-all">
                  <div className="bg-forest/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Phone</h3>
                    <p className="text-charcoal/70">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-sage/20 hover:border-gold/40 transition-all">
                  <div className="bg-forest/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Email</h3>
                    <p className="text-charcoal/70">info@wellnesscenter.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-sage/20 hover:border-gold/40 transition-all">
                  <div className="bg-forest/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Location</h3>
                    <p className="text-charcoal/70">
                      1234 Wellness Drive
                      <br />
                      Suite 100
                      <br />
                      Phoenix, AZ 85001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-sage/20 hover:border-gold/40 transition-all">
                  <div className="bg-forest/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest mb-1">Hours</h3>
                    <p className="text-charcoal/70">
                      Monday - Friday: 8am - 6pm
                      <br />
                      Saturday: 9am - 3pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-gold/10 to-sage/10 border border-gold/20">
                <h3 className="font-semibold text-forest mb-2">Free Consultation</h3>
                <p className="text-charcoal/70 text-sm">
                  Book your no-obligation consultation today and discover how we can help you achieve your weight loss
                  goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
