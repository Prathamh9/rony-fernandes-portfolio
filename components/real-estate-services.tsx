import { Home, Search, TrendingUp, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RealEstateServices() {
  const realEstateServices = [
    {
      icon: Search,
      title: "Property Buying Assistance",
      description: "Expert guidance for finding and purchasing the right property",
      features: ["Property Search", "Market Analysis", "Price Negotiation", "Legal Verification"],
    },
    {
      icon: Home,
      title: "Property Selling Support",
      description: "Comprehensive support for selling your property at the best price",
      features: ["Property Valuation", "Marketing Strategy", "Buyer Screening", "Documentation"],
    },
    {
      icon: TrendingUp,
      title: "Investment Properties",
      description: "Identify lucrative real estate investment opportunities",
      features: ["Rental Properties", "Commercial Investments", "ROI Analysis", "Market Trends"],
    },
    {
      icon: FileText,
      title: "Legal & Documentation",
      description: "Complete legal assistance for property transactions",
      features: ["Title Verification", "Legal Documentation", "Registration Support", "Compliance Check"],
    },
  ]

  const propertyTypes = [
    "Residential Apartments",
    "Independent Houses",
    "Commercial Offices",
    "Retail Spaces",
    "Industrial Properties",
    "Land & Plots",
  ]

  return (
    <section id="real-estate" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Real Estate Advisory
          </h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert guidance for all your property needs, from buying your dream home to making smart real estate
            investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {realEstateServices.map((service, index) => (
            <Card key={index} className="card-hover bg-card border-border group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="professional-heading text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="professional-body text-muted-foreground">{service.description}</p>

                <div className="space-y-2">
                  <h4 className="professional-heading text-sm font-semibold text-card-foreground">Services Include:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="professional-heading text-2xl font-bold text-accent-foreground mb-6">
                Property Types We Handle
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {propertyTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="professional-body text-muted-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="professional-heading text-xl font-semibold text-accent-foreground mb-4">
                Ready to Make Your Property Move?
              </h4>
              <p className="professional-body text-muted-foreground mb-6">
                Whether you're buying your first home or expanding your investment portfolio, I'm here to guide you
                through every step of the process.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
