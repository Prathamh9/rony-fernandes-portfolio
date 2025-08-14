import { Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="professional-heading text-4xl md:text-5xl font-bold text-primary mb-6">
          Let's Discuss Your Financial Future
        </h1>
        <p className="professional-body text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Ready to secure your financial goals? I'm here to provide personalized guidance for your insurance,
          investment, and real estate needs. Your success is my priority.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <Phone className="w-4 h-4 mr-2" />
            Call: +91 98765 43210
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Chat
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-3 bg-transparent"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
        </div>

        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 inline-block">
          <p className="professional-body text-sm text-muted-foreground mb-2">
            <strong className="text-primary">Response Time:</strong> Within 2 hours during business hours
          </p>
          <p className="professional-body text-sm text-muted-foreground">
            <strong className="text-primary">Emergency Support:</strong> Available 24/7 for existing clients
          </p>
        </div>
      </div>
    </section>
  )
}
