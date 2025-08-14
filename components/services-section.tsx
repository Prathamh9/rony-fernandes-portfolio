import { Shield, TrendingUp, Home, Car, Heart, Briefcase, Calculator } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      category: "Insurance Solutions",
      icon: Shield,
      color: "bg-blue-100 text-blue-600",
      services: [
        { name: "Life Insurance (LIC)", description: "Term plans, endowment, retirement plans" },
        { name: "Health Insurance", description: "Star Health, HDFC ERGO, National Insurance" },
        { name: "Motor Insurance", description: "Car, bike, commercial vehicle coverage" },
        { name: "General Insurance", description: "Travel, business risk protection" },
        { name: "Fire & Theft Insurance", description: "Property & asset protection" },
        { name: "Building Insurance", description: "Residential & commercial coverage" },
      ],
    },
    {
      category: "Investment & Wealth Management",
      icon: TrendingUp,
      color: "bg-green-100 text-green-600",
      services: [
        { name: "Mutual Funds", description: "LIC, SBI, HDFC, Axis fund options" },
        { name: "SIP Planning", description: "Systematic investment planning" },
        { name: "Portfolio Management", description: "Diversified investment strategies" },
        { name: "Retirement Planning", description: "Long-term wealth building" },
      ],
    },
    {
      category: "Real Estate Advisory",
      icon: Home,
      color: "bg-orange-100 text-orange-600",
      services: [
        { name: "Property Buying/Selling", description: "Expert guidance for transactions" },
        { name: "Investment Properties", description: "Rental & commercial opportunities" },
        { name: "Market Analysis", description: "Property valuation & trends" },
        { name: "Legal Assistance", description: "Documentation & compliance" },
      ],
    },
  ]

  const quickServices = [
    { icon: Calculator, title: "Premium Calculator", description: "Get instant quotes" },
    { icon: Heart, title: "Claim Assistance", description: "Quick claim support" },
    { icon: Briefcase, title: "Policy Review", description: "Annual portfolio check" },
    { icon: Car, title: "Renewal Reminders", description: "Never miss a renewal" },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Financial Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From insurance protection to investment growth and real estate opportunities, I provide end-to-end financial
            solutions tailored to your needs.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.color} mb-4`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{service.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.services.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-6 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Quick Services & Support</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                  <service.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Rony Fernandes?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">27+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">100%</div>
              <div className="text-gray-600">Trusted Brands Only</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">24/7</div>
              <div className="text-gray-600">Claim Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">1:1</div>
              <div className="text-gray-600">Personalized Guidance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
