"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with a detailed consultation to understand your goals, discuss color options, and assess your lip condition.",
    duration: "30 mins",
  },
  {
    number: "02",
    title: "Color Selection",
    description: "Our expert artists help you choose the perfect shade by custom-mixing pigments to complement your skin tone.",
    duration: "15 mins",
  },
  {
    number: "03",
    title: "Numbing Application",
    description: "A medical-grade topical anesthetic is applied to ensure your comfort throughout the procedure.",
    duration: "20 mins",
  },
  {
    number: "04",
    title: "Lip Blushing",
    description: "Using Korean micro-pigmentation techniques, we carefully deposit color into the lips for a natural gradient effect.",
    duration: "90-120 mins",
  },
  {
    number: "05",
    title: "Aftercare Guidance",
    description: "You'll receive detailed aftercare instructions and premium healing products to ensure optimal results.",
    duration: "15 mins",
  },
  {
    number: "06",
    title: "Touch-Up Session",
    description: "A complimentary touch-up after 6-8 weeks perfects your results and ensures long-lasting color retention.",
    duration: "60 mins",
  },
]

function StepItem({ step, index, isLast }: { step: typeof steps[0], index: number, isLast: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div 
      ref={ref}
      className="relative flex gap-6 md:gap-10 pb-12"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Number circle */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div 
          className="w-16 h-16 md:w-24 md:h-24 bg-background border-2 border-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/10"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 30px rgba(var(--primary), 0.3)"
          }}
        >
          <span className="text-2xl md:text-3xl font-light text-primary">
            {step.number}
          </span>
        </motion.div>
        
        {/* Animated connecting line */}
        {!isLast && (
          <motion.div 
            className="absolute top-16 md:top-24 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary to-primary/20"
            initial={{ height: 0 }}
            animate={isInView ? { height: "calc(100% - 4rem)" } : { height: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15 + 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div 
        className="flex-1 pt-2 md:pt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.15 + 0.3
        }}
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="text-xl md:text-2xl font-medium text-foreground">
            {step.title}
          </h3>
          <motion.span 
            className="px-3 py-1 bg-accent text-primary text-sm rounded-full font-sans"
            whileHover={{ scale: 1.05 }}
          >
            {step.duration}
          </motion.span>
        </div>
        <p className="text-muted-foreground leading-relaxed font-sans">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function Procedure() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="procedure" className="py-20 bg-card overflow-hidden" ref={sectionRef}>
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
            The Process
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-light mt-4 mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your <span className="italic text-primary">Lip Blushing</span> Journey
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-pretty font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A step-by-step guide to your transformation. We ensure a comfortable, 
            safe, and enjoyable experience from start to finish.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {steps.map((step, index) => (
              <StepItem 
                key={index} 
                step={step} 
                index={index} 
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Total time */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-8 py-4 bg-primary/5 rounded-full border border-primary/10"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 40px -10px rgba(var(--primary), 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-muted-foreground font-sans">Total procedure time:</span>
            <motion.span 
              className="text-xl font-medium text-primary"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
            >
              2.5 - 3 hours
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
