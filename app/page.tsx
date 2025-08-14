import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServiceHighlights from "@/components/service-highlights"
import WhyChooseMe from "@/components/why-choose-me"
import PartnerLogos from "@/components/partner-logos"
import Footer from "@/components/footer"
import ChatBot from "@/components/chat-bot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServiceHighlights />
      <WhyChooseMe />
      <PartnerLogos />
      <Footer />
      <ChatBot />
    </main>
  )
}
