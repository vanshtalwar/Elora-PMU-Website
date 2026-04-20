"use client"

import { useRef } from "react"
import { Sparkles, Clock, Shield, Heart, Droplets, Sun } from "lucide-react"
import { motion, useInView, useMotionValue, useTransform } from "framer-motion"

const benefits = [
  {
    icon: Sparkles,
    title: "Natural Enhancement",
    description: "Achieve a soft, natural tint that enhances your lip color without looking overdone or artificial.",
  },
  {
    icon: Clock,
    title: "Long-Lasting Results",
    description: "Enjoy beautifully tinted lips for 2-3 years with proper care and maintenance touch-ups.",
  },
  {
    icon: Shield,
    title: "Safe & Hygienic",
    description: "We use premium Korean pigments and follow strict sterilization protocols for your safety.",
  },
  {
    icon: Heart,
    title: "Customized Colors",
    description: "Colors are custom-mixed to perfectly complement your skin tone and personal preferences.",
  },
  {
    icon: Droplets,
    title: "Minimal Downtime",
    description: "Resume normal activities within days. No heavy swelling or prolonged recovery period.",
  },
  {
    icon: Sun,
    title: "Wake Up Beautiful",
    description: "Say goodbye to daily lipstick application. Look fresh and polished from morning to night.",
  },
]

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Safe Pigments" },
  { value: "4.9★", label: "Google Rating" },
]

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0], index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)"
      }}
    >
      <motion.div 
        className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <benefit.icon className="w-7 h-7 text-primary" />
      </motion.div>
      <h3 className="text-xl font-medium text-foreground mb-3">
        {benefit.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed font-sans">
        {benefit.description}
      </p>
      
      {/* Hover gradient overlay */}
      <motion.div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      />
    </motion.div>
  )
}

function AnimatedStat({ stat, index }: { stat: typeof stats[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      <motion.div 
        className="text-4xl md:text-5xl font-light text-primary mb-2"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.3 + index * 0.1,
          type: "spring",
          stiffness: 200
        }}
      >
        {stat.value}
      </motion.div>
      <div className="text-muted-foreground text-sm font-sans">{stat.label}</div>
    </motion.div>
  )
}

export function Benefits() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="benefits" className="py-20 bg-background overflow-hidden" ref={sectionRef}>
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
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-light mt-4 mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Benefits of <span className="italic text-primary">Lip Blushing</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-pretty font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Discover why hundreds of women in Delhi choose our Korean lip blushing 
            treatment for naturally beautiful, enhanced lips.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Stats banner */}
        <motion.div 
          className="mt-16 p-8 md:p-12 bg-primary/5 rounded-3xl border border-primary/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {/* Animated background gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 100%" }}
          />
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
