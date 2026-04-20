"use client"

import { useRef } from "react"
import { Instagram, Facebook, MapPin, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"

const quickLinks = [
  { href: "#results", label: "Before & After" },
  { href: "#benefits", label: "Benefits" },
  { href: "#procedure", label: "Procedure" },
  { href: "#pricing", label: "Pricing" },
  { href: "#booking", label: "Book Now" },
]

const services = [
  { href: "#", label: "Lip Blushing" },
  { href: "https://eloraspmu.com/services/permanent-makeup/eyebrow-services", label: "Eyebrow Microblading" },
  { href: "https://eloraspmu.com/services/korean-esthetics/treatment", label: "Korean Esthetics" },
  { href: "https://eloraspmu.com/services/laser-treatment", label: "Laser Treatments" },
]

const locations = ["Delhi", "Chandigarh", "Pune", "London"]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })

  return (
    <footer className="bg-foreground text-background py-16 overflow-hidden" ref={footerRef}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-light mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Elora&apos;s <span className="italic text-primary">PMU</span>
            </motion.h3>
            <p className="text-background/70 mb-6 max-w-md leading-relaxed font-sans">
              Premium Korean lip blushing and permanent makeup services in Delhi. 
              Transform your beauty with our expert techniques and personalized care.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/eloraspmu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Instagram"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com/eloraspmu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Follow us on Facebook"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <motion.a 
                    href={link.href} 
                    className="text-background/70 hover:text-primary transition-colors font-sans inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-medium mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.a 
                    href={service.href} 
                    className="text-background/70 hover:text-primary transition-colors font-sans inline-block"
                    whileHover={{ x: 5 }}
                    target={service.href.startsWith("http") ? "_blank" : undefined}
                    rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {service.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Locations */}
        <motion.div 
          className="mt-12 pt-8 border-t border-background/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div 
            className="flex flex-wrap items-center gap-6 text-sm text-background/70 mb-8 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
          >
            {locations.map((location, index) => (
              <motion.div 
                key={location}
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span>{location}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.p 
              className="text-background/50 text-sm font-sans flex items-center gap-1"
              whileHover={{ scale: 1.02 }}
            >
              &copy; {currentYear} Elora&apos;s PMU. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-primary inline fill-primary" />
              </motion.span>
              {" "}in Delhi.
            </motion.p>
            <div className="flex gap-6 text-sm font-sans">
              <motion.a 
                href="#" 
                className="text-background/50 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-background/50 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
