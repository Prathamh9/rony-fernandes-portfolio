import { Calculator, Heart, Briefcase, Car, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QuickServices() {
  const quickServices = [
    {
      icon: Calculator,
      title: "Premium Calculator",
      description: "Get instant quotes for insurance premiums",
      action: "Calculate Now",
    },
    {
      icon: Heart,
      title: "Claim Assistance",
      description: "Quick support for insurance claims",
      action: "Get Help",
    },
    {
      icon: Briefcase,
      title: "Policy Review",
      description: "Annual portfolio health check",
      action: "Schedule Review",
    },
    {
      icon: Car,
      title: "Renewal Reminders",
      description: "Never miss a policy renewal",
      action: "Set Reminders",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
      action: "Contact Support",
    },
    {
      icon: Phone,
      title: "Free Consultation",
      description: "Personalized financial planning session",
      action: "Book Now",
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Quick Services & Support
          </h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Fast, convenient services to help you manage your financial portfolio efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickServices.map((service, index) => (
            <Card key={index} className="card-hover bg-card border-border group text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="professional-heading text-lg font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="professional-body text-sm text-muted-foreground mb-4">{service.description}</p>
                <Button variant="ghost" className="text-primary hover:text-accent hover:bg-accent/10">
                  {service.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
