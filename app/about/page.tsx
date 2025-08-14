import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ChatBot from "@/components/chat-bot"
import AboutHero from "@/components/about-hero"
import Biography from "@/components/biography"
import Credentials from "@/components/credentials"
import VisionMission from "@/components/vision-mission"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <Biography />
      <Credentials />
      <VisionMission />
      <Footer />
      <ChatBot />
    </main>
  )
}
