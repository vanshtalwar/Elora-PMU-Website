"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"

const transformations = [
  {
    id: 1,
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    name: "Priya S.",
    treatment: "Full Lip Blush",
  },
  {
    id: 2,
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    name: "Ananya M.",
    treatment: "Dark Lip Correction",
  },
  {
    id: 3,
    before: "/images/before-3.jpg",
    after: "/images/after-3.jpg",
    name: "Riya K.",
    treatment: "Lip Enhancement",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  return (
    <section id="results" className="py-20 bg-card overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-widest uppercase font-sans"
            variants={fadeInUp}
          >
            Real Results
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-light mt-4 mb-6 text-balance"
            variants={fadeInUp}
          >
            Before & After <span className="italic text-primary">Transformations</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-pretty font-sans"
            variants={fadeInUp}
          >
            See the stunning results our clients have achieved with our Korean lip blushing technique. 
            Natural, beautiful, and long-lasting.
          </motion.p>
        </motion.div>

        {/* Main comparison slider */}
        <motion.div 
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-2xl shadow-primary/10 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            {/* Before image */}
            <div className="absolute inset-0">
              <Image
                src={transformations[activeIndex].before}
                alt={`Before treatment - ${transformations[activeIndex].name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* After image (clipped) */}
            <motion.div 
              className="absolute inset-0 overflow-hidden"
              animate={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              transition={{ duration: 0.05 }}
            >
              <Image
                src={transformations[activeIndex].after}
                alt={`After treatment - ${transformations[activeIndex].name}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Slider control */}
            <motion.div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
              animate={{ 
                boxShadow: isDragging 
                  ? "0 0 30px rgba(255,255,255,0.8)" 
                  : "0 0 15px rgba(255,255,255,0.5)"
              }}
            >
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  scale: isDragging ? 1.1 : 1,
                  boxShadow: isDragging 
                    ? "0 0 30px rgba(var(--primary), 0.5)" 
                    : "0 4px 20px rgba(0,0,0,0.2)"
                }}
              >
                <svg 
                  className="w-6 h-6 text-primary-foreground" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Range input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Before and after comparison slider"
            />

            {/* Labels */}
            <motion.div 
              className="absolute top-4 left-4 px-4 py-2 bg-foreground/90 backdrop-blur-sm text-background text-sm rounded-full font-sans"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Before
            </motion.div>
            <motion.div 
              className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-full font-sans"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              After
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-center text-muted-foreground mt-4 text-sm font-sans"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            Drag the slider to compare before and after results
          </motion.p>
        </motion.div>

        {/* Thumbnail gallery */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {transformations.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden ${
                activeIndex === index 
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-card" 
                  : "opacity-60"
              }`}
              whileHover={{ scale: 1.08, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: activeIndex === index ? 1.05 : 1,
                opacity: activeIndex === index ? 1 : 0.6
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src={item.after}
                alt={`Thumbnail - ${item.name}`}
                fill
                className="object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-primary/20"
                initial={false}
                animate={{ opacity: activeIndex === index ? 0 : 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Client info */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            className="text-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg font-medium text-foreground">
              {transformations[activeIndex].name}
            </p>
            <p className="text-primary text-sm font-sans">
              {transformations[activeIndex].treatment}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
