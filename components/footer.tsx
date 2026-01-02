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
            <h3 className="text-2xl font-bold mb-4">Wellness Center</h3>
            <p className="text-white/80 mb-4 text-pretty">
              Medical weight loss designed for real, lasting results with compassionate expert care.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Medical Weight Loss
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  GLP-1 Injections
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Personalized Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Lifestyle Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gold transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/80 text-sm mb-4">
              Get weight loss tips and wellness insights delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-gold hover:bg-gold/90 text-forest font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>© 2025 Wellness Center. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-gold transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
