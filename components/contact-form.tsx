"use client"

import { useState } from "react"
import { Send, User, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [submitted, setSubmitted] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    coverage: "",
    message: "",
  })

  const services = [
    "Life Insurance",
    "Health Insurance",
    "Motor Insurance",
    "General Insurance",
    "Fire & Theft Insurance",
    "Building Insurance",
    "Mutual Fund Investment",
    "SIP Planning",
    "Real Estate Advisory",
    "Property Investment",
    "General Consultation",
  ]

  // Validation function
  const isFormValid = () => {
    const { name, phone, email, service, message } = formData
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return (
      name.trim() !== "" &&
      phone.trim() !== "" &&
      emailRegex.test(email) &&
      service.trim() !== "" &&
      message.trim() !== ""
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!isFormValid()) {
      toast({
        title: "Form Incomplete ❌",
        description: "Please fill all required fields correctly before submitting.",
        variant: "destructive",
      })
      return
    }

    setSubmitted(true)

    toast({
      title: "Message Submitted ✅",
      description: "Thank you for reaching out! I'll get back to you within 24 hours.",
    })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="lg:col-span-2">
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-t-lg">
          <CardTitle className="professional-heading text-2xl text-primary flex items-center">
            <MessageSquare className="w-6 h-6 mr-3" />
            Send Me a Message
          </CardTitle>
          <p className="professional-body text-muted-foreground">
            Fill out the form below and I'll get back to you within 24 hours. For urgent matters, please call directly.
          </p>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="professional-heading text-sm font-medium flex items-center">
                <User className="w-4 h-4 mr-2 text-primary" />
                Full Name *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <label className="professional-heading text-sm font-medium flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                Phone Number *
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="professional-heading text-sm font-medium flex items-center">
              <Mail className="w-4 h-4 mr-2 text-primary" />
              Email Address *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>

          <div className="space-y-2">
            <label className="professional-heading text-sm font-medium">Service Interest *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border border-primary/20 rounded-md"
            >
              <option value="">Select a service you're interested in</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="professional-heading text-sm font-medium">Current Coverage (Optional)</label>
            <Input
              name="coverage"
              value={formData.coverage}
              onChange={handleChange}
              placeholder="Do you have existing insurance or investments?"
            />
          </div>

          <div className="space-y-2">
            <label className="professional-heading text-sm font-medium">Message *</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your requirements..."
              rows={6}
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid() || submitted}
            className={`w-full sm:w-auto py-4 px-6 text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed
    ${submitted ? "bg-green-600 text-white" : "bg-primary hover:bg-primary/90 text-primary-foreground"}`}
          >
            {submitted ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2 animate-bounce" />
                <span className="font-semibold">Message Submitted</span>
                <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded shadow animate-fade-in">
                  Thank you!
                </span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
