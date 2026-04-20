"use client"

import { useState, useRef } from "react"
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, useInView, AnimatePresence } from "framer-motion"

const contactItems = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98776 95827",
    href: "tel:+919877695827",
    isLink: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/919877695827",
    isLink: true,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "South Delhi, India",
    isLink: false,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 10AM - 7PM",
    isLink: false,
  },
]

function ContactItem({ item, index }: { item: typeof contactItems[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  const content = (
    <motion.div
      ref={ref}
      className={`flex items-center gap-4 p-4 bg-card rounded-xl border border-border transition-all ${
        item.isLink ? "hover:border-primary/30 cursor-pointer group" : ""
      }`}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={item.isLink ? { scale: 1.02, x: 5 } : {}}
    >
      <motion.div 
        className={`w-12 h-12 bg-accent rounded-full flex items-center justify-center transition-colors ${
          item.isLink ? "group-hover:bg-primary/10" : ""
        }`}
        whileHover={item.isLink ? { rotate: 5 } : {}}
      >
        <item.icon className="w-5 h-5 text-primary" />
      </motion.div>
      <div>
        <div className="text-sm text-muted-foreground font-sans">{item.label}</div>
        <div className="text-lg font-medium text-foreground">{item.value}</div>
      </div>
    </motion.div>
  )

  if (item.isLink) {
    return (
      <a 
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    )
  }

  return content
}

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const whatsappNumber = "919877695827"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to WhatsApp with form data
    const message = encodeURIComponent(
      `Hi! I'm interested in Lip Blushing treatment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\nPlease contact me for a consultation.`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "" })
    }, 4000)
  }

  return (
    <section id="booking" className="py-20 bg-background overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span 
                className="text-primary text-sm font-medium tracking-widest uppercase font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
              >
                Book Now
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-5xl font-light mt-4 mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                Start Your <span className="italic text-primary">Transformation</span>
              </motion.h2>
              <motion.p 
                className="text-muted-foreground mb-10 leading-relaxed text-pretty font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                Ready to achieve beautifully tinted lips? Fill out the form or 
                contact us directly. We&apos;ll get back to you within 2 hours to 
                schedule your consultation.
              </motion.p>

              {/* Contact info */}
              <div className="space-y-4">
                {contactItems.map((item, index) => (
                  <ContactItem key={item.label} item={item} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div 
              className="bg-card p-8 md:p-10 rounded-3xl border border-border relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Decorative gradient */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              <motion.h3 
                className="text-2xl font-medium text-foreground mb-2 relative"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                Get a Free Consultation
              </motion.h3>
              <motion.p 
                className="text-muted-foreground mb-8 font-sans relative"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                Fill in your details and we&apos;ll contact you shortly.
              </motion.p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <motion.div 
                      className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </motion.div>
                    </motion.div>
                    <motion.h4 
                      className="text-2xl font-medium text-foreground mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Thank You!
                    </motion.h4>
                    <motion.p 
                      className="text-muted-foreground font-sans"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      We&apos;ll contact you within 2 hours.
                    </motion.p>
                    
                    {/* Confetti-like animation */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-primary rounded-full"
                          initial={{ 
                            x: "50%", 
                            y: "50%", 
                            scale: 0 
                          }}
                          animate={{ 
                            x: `${20 + Math.random() * 60}%`,
                            y: `${20 + Math.random() * 60}%`,
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ 
                            duration: 1,
                            delay: 0.2 + i * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <motion.div
                        animate={{ 
                          scale: focusedField === "name" ? 1.01 : 1,
                          boxShadow: focusedField === "name" 
                            ? "0 0 0 3px rgba(var(--primary), 0.1)" 
                            : "none"
                        }}
                        className="rounded-xl"
                      >
                        <Input
                          id="name"
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 bg-background border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <motion.div
                        animate={{ 
                          scale: focusedField === "phone" ? 1.01 : 1,
                          boxShadow: focusedField === "phone" 
                            ? "0 0 0 3px rgba(var(--primary), 0.1)" 
                            : "none"
                        }}
                        className="rounded-xl"
                      >
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 bg-background border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-sans shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all relative overflow-hidden"
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Sending...
                            </motion.div>
                          ) : (
                            <motion.div
                              key="submit"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <Sparkles className="w-5 h-5" />
                              Book Free Consultation
                              <Send className="w-5 h-5" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </motion.div>

                    <motion.p 
                      className="text-center text-muted-foreground text-sm font-sans"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      Or message us directly on{" "}
                      <a 
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        WhatsApp
                      </a>
                    </motion.p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
