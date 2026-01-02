"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Hero } from "@/components/hero"
import { ServicesCards } from "@/components/services-cards"
import { ImageSection } from "@/components/image-section"
import { LocationsSection } from "@/components/locations-section"
import { PatientsResultsSection } from "@/components/patients-results-section"
import { Programs } from "@/components/programs"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { DoctorSection } from "@/components/doctor-section"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { ScrollingBanner } from "@/components/scrolling-banner"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Hero />
      <ServicesCards />
      <ImageSection />
      <ScrollingBanner />
      
      {/* Weight Loss Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Our Weight Loss Programs
            </h2>
            <p className="text-lg text-charcoal/70">
              Choose the program that's right for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-forest/5 to-sage/10 rounded-2xl p-8 border border-forest/20 hover:shadow-lg transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-forest mb-3">Medical Weight Loss</h3>
                <div className="text-3xl font-bold text-charcoal mb-4">
                  Starting at <span className="text-forest">$250</span>
                </div>
                <p className="text-charcoal/80 mb-6">
                  Physician-supervised weight loss programs designed for safe, effective, and lasting results
                </p>
                <Button className="bg-forest hover:bg-forest/90 text-white px-8 py-3" asChild>
                  <Link href="/medical-weight-loss">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-sage/5 to-forest/10 rounded-2xl p-8 border border-sage/20 hover:shadow-lg transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-forest mb-3">Doctor Mentored</h3>
                <div className="text-3xl font-bold text-charcoal mb-4">
                  Starting at <span className="text-forest">$250</span>
                </div>
                <p className="text-charcoal/80 mb-6">
                  Get personalized guidance from experienced physicians who specialize in weight management
                </p>
                <Button className="bg-forest hover:bg-forest/90 text-white px-8 py-3" asChild>
                  <Link href="/doctor-mentored">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  )
}
