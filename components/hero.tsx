"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export function Hero() {
  const whatsappNumber = "919877695827"
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in Lip Blushing treatment in Delhi.")
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-20 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-8 shadow-sm"
          variants={scaleIn}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.span 
            className="w-2 h-2 bg-primary rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase font-sans">
            Korean Aesthetic Excellence
          </span>
        </motion.div>
        
        {/* Main heading with text reveal */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
          variants={fadeInUp}
        >
          <motion.span 
            className="block text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the Art of
          </motion.span>
          <motion.span 
            className="block text-primary font-semibold italic mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Lip Blushing in Delhi
          </motion.span>
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty font-sans"
          variants={fadeInUp}
        >
          Experience the transformative power of Korean lip tint techniques. 
          Achieve naturally beautiful, perfectly tinted lips that enhance your 
          unique beauty for up to 2-3 years.
        </motion.p>
        
        {/* Price badge with shimmer effect */}
        <motion.div 
          className="inline-block px-6 py-3 bg-card rounded-xl border border-border mb-10 relative overflow-hidden group"
          variants={scaleIn}
          whileHover={{ scale: 1.05, y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="text-muted-foreground text-sm font-sans">Starting from</span>
          <span className="block text-3xl font-semibold text-primary">₹15,000</span>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-sans shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
              asChild
            >
              <a href="#booking">
                Book Your Consultation
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans transition-all duration-300"
              asChild
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto px-8 py-6 text-lg text-muted-foreground hover:text-primary font-sans"
              asChild
            >
              <a href="tel:+919877695827">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Trust indicators with counter animation */}
        <motion.div 
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-semibold text-foreground">500+</span>
            <span className="text-sm font-sans">Happy Clients</span>
          </motion.div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-semibold text-foreground">4.9★</span>
            <span className="text-sm font-sans">Google Rating</span>
          </motion.div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-semibold text-foreground">5+</span>
            <span className="text-sm font-sans">Years Experience</span>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
