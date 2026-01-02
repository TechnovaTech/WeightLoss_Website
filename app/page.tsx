"use client"

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
      
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  )
}
