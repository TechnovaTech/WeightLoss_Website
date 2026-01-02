"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-forest text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Scottsdale Weight Loss Center</h3>
            <p className="text-white/80 mb-4 text-pretty">
              Transforming lives through personalized medical weight loss programs. Over 15 years of proven results in Scottsdale, Arizona.
            </p>
            <div className="mb-4">
              <p className="text-white/90 font-medium">📍 Scottsdale, Arizona</p>
              <p className="text-white/90 font-medium">📞 (480) 949-6570</p>
              <p className="text-white/90 font-medium">✉️ info@scottsdaleweightloss.com</p>
            </div>
            <div className="flex gap-3">
              <a href="https://facebook.com/scottsdaleweightloss" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/scottsdaleweightloss" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/swlcenter" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/scottsdale-weight-loss" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/medical-weight-loss" className="hover:text-gold transition-colors">
                  Medical Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/glp-1" className="hover:text-gold transition-colors">
                  GLP-1 Medications
                </Link>
              </li>
              <li>
                <Link href="/doctor-mentored" className="hover:text-gold transition-colors">
                  Doctor Mentored Programs
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-gold transition-colors">
                  Nutrition Counseling
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-gold transition-colors">
                  Lifestyle Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Dr. Ziltzer
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-gold transition-colors">
                  Weight Loss Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-gold transition-colors">
                  Patient Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Insurance & Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="text-white/80 text-sm mb-4 space-y-1">
              <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
              <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Ready to start your weight loss journey? Schedule your consultation today!
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email for updates"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                suppressHydrationWarning
              />
              <Button className="bg-gold hover:bg-gold/90 text-forest font-semibold" suppressHydrationWarning>
                Get Updates
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© 2025 Scottsdale Weight Loss Center. All rights reserved. | Licensed Medical Practice</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/hipaa" className="hover:text-gold transition-colors">
                HIPAA Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
