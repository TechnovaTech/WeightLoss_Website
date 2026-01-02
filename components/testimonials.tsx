"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Gina",
    weight: "Significant Loss",
    image: "/happy-confident-woman-smiling-healthy-lifestyle.jpg",
    quote:
      "I had no trouble adhering to the meals and they really helped catapult my progress! The classes were so beneficial to me because they helped change my thinking about how I viewed health, nutrition, and fitness. I will always have my relationship with Scottsdale Weight Loss Center. They truly helped me change my life forever.",
    rating: 5,
  },
  {
    name: "Lauren",
    weight: "60 lbs",
    image: "/smiling-woman-healthy-active-lifestyle-outdoors.jpg",
    quote:
      "Dr. Ziltzer and everyone who I have come in contact with at the Scottsdale Weight Loss office have been so encouraging. It is now a year and 2 months later since I started. I am down 60 lbs., which is the average amount a 9-year-old weighs, it is crazy to think I lost a whole person! I feel amazing, I hit my goal weight in November 2021 just before Thanksgiving. Nothing on my body hurts anymore.",
    rating: 5,
  },
  {
    name: "Chuck",
    weight: "66 lbs",
    image: "/confident-man-smiling-success-healthy.jpg",
    quote:
      "The best thing I did was call the Scottsdale Weight Loss Center. I have a lot more energy, I'm not hungry, and it feels great. You can take it from me that this is a program that produces results. The staff is always positive, supportive, and never judgmental. Your visits always result in positive reinforcement, no matter if you had a good week or a bad week.",
    rating: 5,
  },
  {
    name: "Emily",
    weight: "61.5 lbs",
    image: "/happy-man-smiling-healthy-fit-lifestyle.jpg",
    quote:
      "Here I am at the lowest I have been since high school weighing in at 155lbs. I have lost 61.5lbs, 48.5lb of body fat gone, BMI of 39 when I started, to 27.9. I told myself by my 30th birthday I wanted to be confident in the way I look and I owe it all to SWLC. The entire staff is so welcoming and they are rooting for you just as much as you are rooting for yourself.",
    rating: 5,
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-ivory to-white relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-sage/20 rounded-organic-3 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/10 rounded-organic-2 blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 text-balance">
            Success <span className="gradient-gold-light text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto text-pretty">
            Real results from real patients who transformed their lives
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative perspective-1000" style={{ perspective: "1000px" }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 },
                }}
                className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border-2 border-sage/20 shadow-2xl relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-forest/10 to-transparent rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-gold/10 to-transparent rounded-tl-full" />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
                  <div className="lg:col-span-2 flex justify-center">
                    <div className="relative">
                      {/* Animated glow effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute -inset-8 gradient-forest-sage opacity-20 rounded-organic-1 blur-2xl"
                      />

                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className={`relative w-64 h-64 rounded-organic-${(currentIndex % 4) + 1} object-cover shadow-2xl`}
                      />

                      {/* Animated weight loss badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                          delay: 0.4,
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute -bottom-4 -right-4 gradient-gold-light text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-2xl glow-gold"
                      >
                        -{testimonials[currentIndex].weight}
                      </motion.div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 text-center lg:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Quote className="w-12 h-12 text-forest/20 mb-4 mx-auto lg:mx-0" />

                      <div className="flex gap-1 justify-center lg:justify-start mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-gold text-gold" />
                          </motion.div>
                        ))}
                      </div>

                      <p className="text-xl md:text-2xl text-charcoal/90 mb-8 leading-relaxed text-pretty">
                        "{testimonials[currentIndex].quote}"
                      </p>

                      <div>
                        <p className="text-xl font-bold text-charcoal">{testimonials[currentIndex].name}</p>
                        <p className="text-sm text-charcoal/50">Verified Patient</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-10">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all bg-white h-14 w-14 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all bg-white h-14 w-14 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </motion.div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-forest to-gold w-12"
                      : "bg-sage/30 w-2.5 hover:bg-sage/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
