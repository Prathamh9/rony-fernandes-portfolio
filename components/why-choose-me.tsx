"use client"

import { useState } from "react"
import { CheckCircle, Award, Users, Clock } from "lucide-react"

export default function WhyChooseMe() {
  const [copyStatus, setCopyStatus] = useState("")
  const phoneNumber = "919876543210"

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopyStatus("Copied!")
    } catch {
      // Fallback for older browsers
      const tempInput = document.createElement("input")
      document.body.appendChild(tempInput)
      tempInput.value = phoneNumber
      tempInput.select()
      document.execCommand("copy")
      document.body.removeChild(tempInput)
      setCopyStatus("Copied!")
    }
    setTimeout(() => setCopyStatus(""), 2000)
  }

  const reasons = [
    {
      icon: Award,
      title: "27+ Years Experience",
      description: "Licensed and certified since 1997 with deep market knowledge and proven track record.",
    },
    {
      icon: CheckCircle,
      title: "Trusted Brands Only",
      description: "Partnerships with leading companies like LIC, HDFC ERGO, SBI, and other reputable institutions.",
    },
    {
      icon: Clock,
      title: "Quick Support",
      description: "Fast claim assistance and responsive customer service when you need it most.",
    },
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "One-on-one consultations tailored to your unique financial goals and circumstances.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Rony Fernandes?
          </h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Three decades of building trust through transparent advice and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 mx-auto group-hover:bg-accent/20 transition-colors">
                <reason.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="professional-heading text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
              <p className="professional-body text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="professional-heading text-2xl font-bold text-primary mb-4">
            Ready to Secure Your Financial Future?
          </h3>
          <p className="professional-body text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get personalized advice from a trusted advisor with 27+ years of experience. Schedule your free consultation
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={copyPhoneNumber}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium relative"
            >
              Call Now: +91 98765 43210
              {copyStatus && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow">
                  {copyStatus}
                </span>
              )}
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}