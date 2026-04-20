"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Phone, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const whatsappNumber = "919877695827"
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in Lip Blushing treatment in Delhi.")

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile bottom bar */}
          <motion.div 
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-card/95 backdrop-blur-xl border-t border-border p-4 shadow-2xl shadow-foreground/10">
              <div className="flex gap-3">
                <motion.div 
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full py-6 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl shadow-lg font-sans"
                    asChild
                  >
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </motion.div>
                <motion.div 
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-sans transition-all"
                    asChild
                  >
                    <a href="tel:+919877695827">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Desktop floating buttons */}
          <motion.div 
            className="fixed bottom-6 right-6 z-50 hidden lg:flex flex-col items-end gap-3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="px-6 py-4 bg-card hover:bg-accent text-foreground border border-border rounded-full shadow-xl font-sans"
                      asChild
                    >
                      <a href="tel:+919877695827">
                        <Phone className="w-5 h-5 mr-2" />
                        +91 98776 95827
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="px-6 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-xl font-sans"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                size="lg"
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-16 h-16 rounded-full shadow-2xl transition-all relative overflow-hidden ${
                  isExpanded 
                    ? "bg-foreground text-background hover:bg-foreground/90" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                aria-label={isExpanded ? "Close contact options" : "Open contact options"}
              >
                <AnimatePresence mode="wait">
                  {isExpanded ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="message"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MessageCircle className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Pulse ring animation */}
                {!isExpanded && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{ 
                      scale: [1, 1.5, 1.5],
                      opacity: [0.5, 0, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                )}
              </Button>
            </motion.div>
            
            {/* Floating label */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  className="absolute -left-36 top-1/2 -translate-y-1/2 px-4 py-2 bg-foreground text-background text-sm rounded-full font-sans whitespace-nowrap shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Book Now
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Spacer for mobile bottom bar */}
          <div className="h-24 lg:hidden" />
        </>
      )}
    </AnimatePresence>
  )
}
