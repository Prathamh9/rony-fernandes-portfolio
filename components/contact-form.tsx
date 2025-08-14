import { Send, User, Phone, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
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
              <label className="professional-heading text-sm font-medium text-foreground flex items-center">
                <User className="w-4 h-4 mr-2 text-primary" />
                Full Name *
              </label>
              <Input
                placeholder="Enter your full name"
                className="border-primary/20 focus:border-primary focus:ring-primary/20"
              />
            </div>
            <div className="space-y-2">
              <label className="professional-heading text-sm font-medium text-foreground flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                Phone Number *
              </label>
              <Input
                placeholder="Enter your phone number"
                className="border-primary/20 focus:border-primary focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="professional-heading text-sm font-medium text-foreground flex items-center">
              <Mail className="w-4 h-4 mr-2 text-primary" />
              Email Address *
            </label>
            <Input
              type="email"
              placeholder="Enter your email address"
              className="border-primary/20 focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <label className="professional-heading text-sm font-medium text-foreground">Service Interest</label>
            <select className="w-full p-3 border border-primary/20 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background professional-body">
              <option>Select a service you're interested in</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="professional-heading text-sm font-medium text-foreground">
              Current Coverage (Optional)
            </label>
            <Input
              placeholder="Do you have existing insurance or investments?"
              className="border-primary/20 focus:border-primary focus:ring-primary/20"
            />
          </div>

          <div className="space-y-2">
            <label className="professional-heading text-sm font-medium text-foreground">Message *</label>
            <Textarea
              placeholder="Please describe your requirements, questions, or how I can help you achieve your financial goals..."
              rows={6}
              className="border-primary/20 focus:border-primary focus:ring-primary/20 professional-body"
            />
          </div>

          <div className="bg-accent/5 rounded-lg p-4">
            <h4 className="professional-heading font-semibold text-primary mb-2">What to Expect Next:</h4>
            <ul className="professional-body text-sm text-muted-foreground space-y-1">
              <li>• Personal response within 24 hours</li>
              <li>• Free initial consultation (30 minutes)</li>
              <li>• Customized recommendations based on your needs</li>
              <li>• No obligation - just expert advice</li>
            </ul>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg">
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </Button>

          <div className="text-center pt-4 border-t border-border">
            <p className="professional-body text-sm text-muted-foreground">
              Your information is secure and will never be shared with third parties.
            </p>
            <p className="professional-body text-sm text-muted-foreground mt-1">
              For immediate assistance, call <strong className="text-primary">+91 98765 43210</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
