"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-ivory/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-semibold text-forest">
            Wellness Center
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-charcoal hover:text-forest transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-charcoal hover:text-forest transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-charcoal hover:text-forest transition-colors">
              Contact
            </Link>
            <Button className="bg-forest hover:bg-forest/90 text-white px-6 shadow-lg hover:shadow-xl transition-all">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-forest" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ivory border-t border-sage/20"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                href="/services"
                className="text-charcoal hover:text-forest transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-charcoal hover:text-forest transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-charcoal hover:text-forest transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-forest hover:bg-forest/90 text-white w-full">Book Consultation</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
