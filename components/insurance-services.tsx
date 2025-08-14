import { Shield, Heart, Car, Briefcase, Flame, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function InsuranceServices() {
  const insuranceServices = [
    {
      icon: Shield,
      title: "Life Insurance (LIC)",
      description: "Comprehensive life coverage with trusted LIC policies",
      features: ["Term Life Plans", "Endowment Policies", "Retirement Plans", "Child Education Plans"],
      partners: ["LIC of India"],
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Medical coverage for individuals and families",
      features: [
        "Individual Health Plans",
        "Family Floater Policies",
        "Critical Illness Cover",
        "Senior Citizen Plans",
      ],
      partners: ["Star Health", "HDFC ERGO", "National Insurance"],
    },
    {
      icon: Car,
      title: "Motor Insurance",
      description: "Complete vehicle protection and third-party coverage",
      features: ["Car Insurance", "Two-Wheeler Insurance", "Commercial Vehicle", "Third-Party Coverage"],
      partners: ["HDFC ERGO", "National Insurance", "Star Health"],
    },
    {
      icon: Briefcase,
      title: "General Insurance",
      description: "Protection for travel, business, and personal risks",
      features: ["Travel Insurance", "Business Risk Cover", "Personal Accident", "Liability Insurance"],
      partners: ["HDFC ERGO", "National Insurance"],
    },
    {
      icon: Flame,
      title: "Fire & Theft Insurance",
      description: "Asset protection against fire, theft, and natural disasters",
      features: ["Fire Insurance", "Theft Protection", "Natural Disaster Cover", "Asset Protection"],
      partners: ["National Insurance", "HDFC ERGO"],
    },
    {
      icon: Building,
      title: "Building Insurance",
      description: "Comprehensive property and structure protection",
      features: ["Residential Buildings", "Commercial Properties", "Structure Insurance", "Contents Coverage"],
      partners: ["National Insurance", "HDFC ERGO"],
    },
  ]

  return (
    <section id="insurance" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">Insurance Solutions</h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive protection plans to safeguard you, your family, and your assets against life's uncertainties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceServices.map((service, index) => (
            <Card key={index} className="card-hover bg-card border-border group">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="professional-heading text-lg font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="professional-body text-sm text-muted-foreground text-center">{service.description}</p>

                <div className="space-y-2">
                  <h4 className="professional-heading text-sm font-semibold text-card-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Partners:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.partners.map((partner, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
