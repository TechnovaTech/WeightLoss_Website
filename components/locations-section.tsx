"use client"

import { motion } from "framer-motion"
import { MapPin, Phone } from "lucide-react"

export function LocationsSection() {
  const locations = [
    {
      city: "Scottsdale",
      address: "9989 N 95th St",
      cityState: "Scottsdale, AZ 85258",
      phone: "(480) 366-4400"
    },
    {
      city: "Phoenix",
      address: "2525 E Arizona Biltmore Cir., Ste B-124",
      cityState: "Phoenix, AZ 85016",
      phone: "(602) 955-0945"
    },
    {
      city: "Chandler",
      address: "600 S Dobson Rd., Bldg D Ste 33",
      cityState: "Chandler, AZ 85224",
      phone: "(480) 265-9099"
    },
    {
      city: "Glendale",
      address: "18301 N 79th Ave., Ste C-126",
      cityState: "Glendale, AZ 85308",
      phone: "(623) 776-0110"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-green-200"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">Y</span>
                </div>
                
                <h3 className="text-2xl font-bold text-green-600 mb-4">{location.city}</h3>
                
                <div className="space-y-2 text-gray-600">
                  <div className="text-sm leading-relaxed">
                    {location.address}<br/>
                    {location.cityState}
                  </div>
                  
                  <a 
                    href={`tel:${location.phone}`}
                    className="inline-block text-lg font-semibold text-green-600 hover:text-green-700 transition-colors mt-3"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}