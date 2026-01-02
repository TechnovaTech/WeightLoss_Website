"use client"

import { Hero } from "@/components/hero"
import { Programs } from "@/components/programs"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { DoctorSection } from "@/components/doctor-section"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <Hero />
      <Programs />
      <HowItWorks />
      <Benefits />
      <DoctorSection />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  )
}
