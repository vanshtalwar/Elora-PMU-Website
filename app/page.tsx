"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BeforeAfter } from "@/components/before-after"
import { Benefits } from "@/components/benefits"
import { Procedure } from "@/components/procedure"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { PageTransition } from "@/components/page-transition"

export default function LipBlushingDelhi() {
  return (
    <PageTransition>
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Benefits />
        <Procedure />
        <Pricing />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <StickyCTA />
    </PageTransition>
  )
}
