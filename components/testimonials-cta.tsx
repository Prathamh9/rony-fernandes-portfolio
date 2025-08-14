import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Star } from "lucide-react"

export default function TestimonialsCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-accent/5 rounded-2xl p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-accent text-accent" />
              ))}
            </div>
          </div>

          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="professional-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same level of personalized service and expert guidance that has helped over 1000+ clients
            achieve their financial goals. Your success story starts with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Phone className="w-4 h-4 mr-2" />
              Call Now: +91 98765 43210
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Chat
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="professional-body text-sm text-muted-foreground">
              "The best investment you can make is in your financial security. Let's build your success story together."
            </p>
            <cite className="professional-heading text-primary font-semibold text-sm">— Rony Fernandes</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
