import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatBot from "@/components/chat-bot"
import TestimonialsHero from "@/components/testimonials-hero"
import ClientTestimonials from "@/components/client-testimonials"
import SuccessStories from "@/components/success-stories"
import TestimonialsStats from "@/components/testimonials-stats"
import TestimonialsCTA from "@/components/testimonials-cta"

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <TestimonialsHero />
      <ClientTestimonials />
      <SuccessStories />
      <TestimonialsStats />
      <TestimonialsCTA />
      <Footer />
      <ChatBot />
    </main>
  )
}
