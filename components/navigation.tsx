"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isGlpDropdownOpen, setIsGlpDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)

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
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-semibold text-forest">
            Wellness Center
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-charcoal hover:text-forest transition-colors font-medium">
              Home
            </Link>
            <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <Link href="/programs" className="flex items-center gap-1 text-charcoal hover:text-forest transition-colors font-medium">
                Weight Loss Program
                <ChevronDown className="w-4 h-4" />
              </Link>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-sage/20 py-2"
                  >
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsGlpDropdownOpen(true)} 
                      onMouseLeave={() => setIsGlpDropdownOpen(false)}
                    >
                      <Link href="/glp-1" className="flex items-center justify-between px-4 py-2 text-charcoal hover:bg-sage/10 hover:text-forest transition-colors">
                        <span>GLP-1</span>
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                      <AnimatePresence>
                        {isGlpDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-full top-0 ml-2 w-56 bg-white rounded-lg shadow-lg border border-sage/20 py-2"
                          >
                            <Link href="/medical-weight-loss" className="block px-4 py-2 text-charcoal hover:bg-sage/10 hover:text-forest transition-colors">
                              Medical Weight Loss Program
                            </Link>
                            <Link href="/doctor-mentored" className="block px-4 py-2 text-charcoal hover:bg-sage/10 hover:text-forest transition-colors">
                              Doctor Mentored
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/contact" className="text-charcoal hover:text-forest transition-colors font-medium">
              Contact
            </Link>
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
                href="/"
                className="text-charcoal hover:text-forest transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Weight Loss Program Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="flex items-center justify-between text-charcoal hover:text-forest transition-colors py-2 font-medium text-left"
                >
                  Weight Loss Program
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isMobileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 flex flex-col gap-2"
                    >
                      <Link
                        href="/glp-1"
                        className="text-charcoal/80 hover:text-forest transition-colors py-1 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        GLP-1
                      </Link>
                      <Link
                        href="/medical-weight-loss"
                        className="text-charcoal/80 hover:text-forest transition-colors py-1 text-sm ml-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Medical Weight Loss Program
                      </Link>
                      <Link
                        href="/doctor-mentored"
                        className="text-charcoal/80 hover:text-forest transition-colors py-1 text-sm ml-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Doctor Mentored
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link
                href="/contact"
                className="text-charcoal hover:text-forest transition-colors py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
