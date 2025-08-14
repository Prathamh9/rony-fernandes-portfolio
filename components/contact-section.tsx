import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["rony.fernandes@email.com", "info@ronyfernandes.com"],
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Business District", "Mumbai, Maharashtra 400001"],
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: "Schedule Meeting",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to secure your financial future? Let's discuss your insurance, investment, and real estate needs. I'm
            here to help you make informed decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-teal-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                      <Button variant="link" className="p-0 h-auto text-teal-600 mt-2">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp CTA */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Quick WhatsApp Consultation</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get instant answers to your insurance and investment queries
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Chat on WhatsApp</Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Service Interest</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Select a service</option>
                    <option>Life Insurance</option>
                    <option>Health Insurance</option>
                    <option>Motor Insurance</option>
                    <option>Investment Planning</option>
                    <option>Real Estate Advisory</option>
                    <option>General Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea placeholder="Tell me about your requirements or questions..." rows={5} />
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3">Send Message</Button>

                <p className="text-sm text-gray-500 text-center">
                  I'll get back to you within 24 hours. For urgent matters, please call directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-0">
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Office Location: Mumbai Business District</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
