import { TrendingUp, PieChart, Target, Calculator } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function InvestmentServices() {
  const investmentServices = [
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Diversified investment options across equity, debt, and hybrid funds",
      features: ["Equity Funds", "Debt Funds", "Hybrid Funds", "Tax-Saving ELSS"],
      partners: ["LIC Mutual Fund", "SBI Mutual Fund", "HDFC Mutual Fund", "Axis Mutual Fund"],
    },
    {
      icon: Calculator,
      title: "SIP Planning",
      description: "Systematic Investment Plans for disciplined wealth creation",
      features: ["Monthly SIP", "Quarterly SIP", "Step-up SIP", "Flexible SIP"],
      partners: ["All Major AMCs"],
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Professional portfolio construction and rebalancing services",
      features: ["Risk Assessment", "Asset Allocation", "Portfolio Rebalancing", "Performance Monitoring"],
      partners: ["Multiple Fund Houses"],
    },
    {
      icon: Target,
      title: "Goal-Based Planning",
      description: "Investment strategies aligned with your life goals",
      features: ["Retirement Planning", "Child Education", "Home Purchase", "Wealth Creation"],
      partners: ["Comprehensive Planning"],
    },
  ]

  const investmentBenefits = [
    "Professional fund management",
    "Diversification across asset classes",
    "Tax-efficient investment options",
    "Liquidity and flexibility",
    "Regular monitoring and review",
    "Goal-based investment approach",
  ]

  return (
    <section id="investments" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Investment & Wealth Management
          </h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic investment solutions to help you build wealth systematically and achieve your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {investmentServices.map((service, index) => (
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

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Partners:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.partners.map((partner, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full font-medium"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Start Investing</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="professional-heading text-2xl font-bold text-primary text-center mb-8">
            Why Choose Our Investment Services?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="professional-body text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
