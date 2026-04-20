"use client"

import { useState, useRef, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "South Delhi",
    rating: 5,
    text: "I was nervous about getting lip blushing done, but the team made me feel so comfortable. The results are absolutely stunning - my lips look naturally tinted and I haven't worn lipstick in months! Highly recommend to anyone in Delhi.",
    treatment: "Lip Blush Premium",
  },
  {
    name: "Ananya Mehta",
    location: "Gurgaon",
    rating: 5,
    text: "Best decision I ever made! I had dark lips and was self-conscious about it. After the treatment, my lips look so healthy and pink. The Korean technique they use is truly remarkable. Worth every rupee!",
    treatment: "Dark Lip Correction",
  },
  {
    name: "Riya Kapoor",
    location: "Noida",
    rating: 5,
    text: "The attention to detail is incredible. They spent so much time choosing the perfect shade for my skin tone. The healing process was smooth and the final result exceeded my expectations. My go-to place for PMU in Delhi!",
    treatment: "Lip Blush Basic",
  },
  {
    name: "Kaveri Singh",
    location: "Dwarka",
    rating: 5,
    text: "I got the ombre lip technique and I'm obsessed! It looks so natural and beautiful. The artist was patient and explained every step. The clinic is very hygienic and professional. 100% recommend!",
    treatment: "Lip Transformation",
  },
  {
    name: "Shreya Gupta",
    location: "Vasant Kunj",
    rating: 5,
    text: "After seeing so many before/after pictures, I decided to try lip blushing here. The experience was painless (thanks to the numbing!) and the results are gorgeous. I wake up with perfect lips every day now!",
    treatment: "Lip Blush Premium",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  return (
    <section id="testimonials" className="py-20 bg-card overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-widest uppercase font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Client Love
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-light mt-4 mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real Stories, Real <span className="italic text-primary">Transformations</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-pretty font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Don&apos;t just take our word for it. Hear from our happy clients 
            who have experienced the magic of Korean lip blushing.
          </motion.p>
        </motion.div>

        {/* Main testimonial */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative bg-background rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 overflow-hidden">
            {/* Quote icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary" />
            </motion.div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-sans">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <div className="font-medium text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground font-sans">
                    {testimonials[currentIndex].location} • {testimonials[currentIndex].treatment}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full border-border hover:border-primary hover:bg-primary/5 transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full border-border hover:border-primary hover:bg-primary/5 transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google rating banner */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-6 py-3 bg-background rounded-full border border-border shadow-sm"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -180 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <Star className="w-4 h-4 fill-primary text-primary" />
                </motion.div>
              ))}
            </div>
            <span className="text-foreground font-medium">4.9</span>
            <span className="text-muted-foreground text-sm font-sans">
              based on 150+ Google reviews
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
