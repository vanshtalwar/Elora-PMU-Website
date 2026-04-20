"use client"

import { useRef } from "react"
import { Check, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

const packages = [
  {
    name: "Lip Blush Basic",
    price: "15,000",
    description: "Perfect for first-timers wanting a subtle, natural enhancement",
    features: [
      "Detailed consultation",
      "Custom color selection",
      "Premium Korean pigments",
      "Numbing for comfort",
      "Aftercare kit included",
      "1 touch-up session",
    ],
    popular: false,
  },
  {
    name: "Lip Blush Premium",
    price: "22,000",
    description: "Our most popular package for stunning, long-lasting results",
    features: [
      "Everything in Basic, plus:",
      "Dark lip correction",
      "Lip liner definition",
      "Extended pigment coverage",
      "Premium aftercare products",
      "2 touch-up sessions",
      "Priority booking",
    ],
    popular: true,
  },
  {
    name: "Lip Transformation",
    price: "30,000",
    description: "Complete lip makeover for dramatic yet natural results",
    features: [
      "Everything in Premium, plus:",
      "Full lip color correction",
      "Ombre lip technique",
      "Lip contouring",
      "VIP treatment experience",
      "Unlimited touch-ups (1 year)",
      "Complimentary lip care set",
    ],
    popular: false,
  },
]

function PricingCard({ pkg, index }: { pkg: typeof packages[0], index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })
  const whatsappNumber = "919877695827"

  return (
    <motion.div
      ref={cardRef}
      className={`relative p-8 rounded-3xl transition-all ${
        pkg.popular
          ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30"
          : "bg-card border border-border hover:border-primary/30"
      }`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: pkg.popular ? 1.05 : 1 
      } : { 
        opacity: 0, 
        y: 50, 
        scale: 0.95 
      }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {pkg.popular && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full flex items-center gap-2 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: index * 0.15 + 0.3 }}
        >
          <Sparkles className="w-4 h-4" />
          Most Popular
        </motion.div>
      )}

      <div className="mb-6">
        <motion.h3 
          className={`text-xl font-medium mb-2 ${pkg.popular ? "text-primary-foreground" : "text-foreground"}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.15 + 0.2 }}
        >
          {pkg.name}
        </motion.h3>
        <p className={`text-sm font-sans ${pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {pkg.description}
        </p>
      </div>

      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
      >
        <span className={`text-sm font-sans ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          Starting from
        </span>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-light ${pkg.popular ? "text-primary-foreground" : "text-primary"}`}>
            ₹{pkg.price}
          </span>
        </div>
      </motion.div>

      <ul className="space-y-3 mb-8">
        {pkg.features.map((feature, featureIndex) => (
          <motion.li 
            key={featureIndex} 
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: index * 0.15 + 0.4 + featureIndex * 0.05 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ 
                delay: index * 0.15 + 0.4 + featureIndex * 0.05,
                type: "spring",
                stiffness: 300
              }}
            >
              <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-primary-foreground" : "text-primary"}`} />
            </motion.div>
            <span className={`text-sm font-sans ${pkg.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          className={`w-full py-6 rounded-full font-sans transition-all ${
            pkg.popular
              ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
              : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
          }`}
          asChild
        >
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package.`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Enquire Now
          </a>
        </Button>
      </motion.div>
      
      {/* Shimmer effect for popular card */}
      {pkg.popular && (
        <motion.div 
          className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}

export function Pricing() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section id="pricing" className="py-20 bg-background overflow-hidden" ref={sectionRef}>
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
            Investment
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-light mt-4 mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Lip Blushing <span className="italic text-primary">Packages</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-pretty font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Choose the perfect package for your lip transformation journey. 
            All packages include premium Korean pigments and expert application.
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {packages.map((pkg, index) => (
            <PricingCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.p 
          className="text-center text-muted-foreground text-sm mt-12 max-w-2xl mx-auto font-sans"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          * Prices may vary based on lip condition and desired results. 
          A detailed assessment will be provided during your consultation. 
          EMI options available.
        </motion.p>
      </div>
    </section>
  )
}
