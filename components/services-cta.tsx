"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export default function ServicesCTA() {
  const stats = [
    { number: "27+", label: "Years Experience" },
    { number: "100%", label: "Trusted Brands Only" },
    { number: "24/7", label: "Claim Support" },
    { number: "1:1", label: "Personalized Guidance" },
  ]

  // Copy phone number function
  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("+919876543210")
    alert("Phone number copied: +91 98765 43210")
  }

  // Open WhatsApp function
  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank")
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Rony Fernandes?
          </h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Three decades of building trust through transparent advice and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="professional-body text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="professional-heading text-2xl font-bold text-primary mb-4">
            Ready to Secure Your Financial Future?
          </h3>
          <p className="professional-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized advice from a trusted advisor with 27+ years of experience. Take the first step towards
            financial security today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={copyPhoneNumber}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now: +91 98765 43210
            </Button>
            <Button
              onClick={openWhatsApp}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
