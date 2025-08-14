import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatBot from "@/components/chat-bot"
import ServicesHero from "@/components/services-hero"
import InsuranceServices from "@/components/insurance-services"
import InvestmentServices from "@/components/investment-services"
import RealEstateServices from "@/components/real-estate-services"
import QuickServices from "@/components/quick-services"
import ServicesCTA from "@/components/services-cta"

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <InsuranceServices />
      <InvestmentServices />
      <RealEstateServices />
      <QuickServices />
      <ServicesCTA />
      <Footer />
      <ChatBot />
    </main>
  )
}
