import { Phone, Mail, MapPin, Clock, MessageCircle, Award, Users, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210 (Primary)", "+91 87654 32109 (Office)"],
      action: "Call Now",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["rony.fernandes@email.com", "info@ronyfernandes.com"],
      action: "Send Email",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["123 Business District", "Mumbai, Maharashtra 400001", "Near Metro Station"],
      action: "Get Directions",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: By Appointment"],
      action: "Schedule Meeting",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  const credentials = [
    {
      icon: Award,
      title: "27+ Years Experience",
      description: "Licensed since 1997",
    },
    {
      icon: Users,
      title: "1000+ Happy Clients",
      description: "Trusted advisor",
    },
    {
      icon: Shield,
      title: "IRDA Certified",
      description: "Fully licensed agent",
    },
  ]

  return (
    <div className="lg:col-span-1 space-y-6">
      <div>
        <h2 className="professional-heading text-2xl font-bold text-primary mb-6">Contact Information</h2>
        <p className="professional-body text-muted-foreground mb-8">
          Multiple ways to reach me for your convenience. I'm committed to responding promptly to all inquiries.
        </p>
      </div>

      {contactInfo.map((info, index) => (
        <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center`}>
                  <info.icon className={`h-6 w-6 ${info.color}`} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="professional-heading font-semibold text-foreground mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="professional-body text-muted-foreground text-sm mb-1">
                    {detail}
                  </p>
                ))}
                <Button variant="link" className={`p-0 h-auto ${info.color} mt-2 hover:underline`}>
                  {info.action}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* WhatsApp CTA */}
      <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 text-center">
          <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="professional-heading font-semibold text-foreground mb-2">Instant WhatsApp Support</h3>
          <p className="professional-body text-sm text-muted-foreground mb-4">
            Get immediate answers to your insurance and investment questions. Available during business hours.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
            <MessageCircle className="w-4 h-4 mr-2" />
            Start WhatsApp Chat
          </Button>
        </CardContent>
      </Card>

      {/* Credentials */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="professional-heading font-semibold text-primary mb-4">Why Choose Me</h3>
          <div className="space-y-4">
            {credentials.map((cred, index) => (
              <div key={index} className="flex items-center space-x-3">
                <cred.icon className="h-5 w-5 text-accent" />
                <div>
                  <p className="professional-heading font-medium text-foreground text-sm">{cred.title}</p>
                  <p className="professional-body text-muted-foreground text-xs">{cred.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
