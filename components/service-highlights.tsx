import Link from "next/link"
import { Shield, TrendingUp, Home, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServiceHighlights() {
  const services = [
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive coverage for life, health, motor, and property protection with trusted brands.",
      features: ["Life Insurance (LIC)", "Health Insurance", "Motor Insurance", "Fire & Theft Protection"],
      href: "/services#insurance",
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic wealth building through mutual funds and systematic investment plans.",
      features: ["Mutual Funds", "SIP Planning", "Portfolio Management", "Retirement Planning"],
      href: "/services#investments",
    },
    {
      icon: Home,
      title: "Real Estate Advisory",
      description: "Expert guidance for property buying, selling, and investment opportunities.",
      features: ["Property Buying/Selling", "Investment Properties", "Market Analysis", "Legal Assistance"],
      href: "/services#real-estate",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Three decades of expertise in securing your financial future through insurance, investments, and real
            estate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover bg-card border-border group">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="professional-heading text-xl font-semibold text-card-foreground mb-4">
                  {service.title}
                </h3>

                <p className="professional-body text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={service.href}>
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-accent">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
