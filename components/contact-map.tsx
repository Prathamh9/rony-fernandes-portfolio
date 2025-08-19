import { MapPin, Navigation, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactMap() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="professional-heading text-3xl font-bold text-primary mb-4">Visit My Office</h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Mumbai's business district, my office is easily accessible by public transport and
            has ample parking facilities.
          </p>
        </div>
      
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="professional-heading text-xl font-semibold text-primary mb-2">Interactive Map</h3>
                    <p className="professional-body">123 Business District, Mumbai, Maharashtra 400001</p>
                    <p className="professional-body text-sm mt-2">Near Metro Station & Major Bus Routes</p>
                  </div>

                 {/* Overlay with directions button */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=123+Business+District,+Mumbai,+Maharashtra+400001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </div>

                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="professional-heading font-semibold text-primary mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Office Address
                </h3>
                <div className="professional-body text-muted-foreground space-y-1">
                  <p>Rony Fernandes</p>
                  <p>Licensed Insurance & Investment Advisor</p>
                  <p>123 Business District</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="professional-heading font-semibold text-primary mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Office Hours
                </h3>
                <div className="professional-body text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="professional-heading font-semibold text-primary mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Contact
                </h3>
                <p className="professional-body text-muted-foreground mb-4">
                  For existing clients with urgent policy or claim matters:
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  24/7 Emergency Line
                </Button>
              </CardContent>
            </Card>

            <div className="bg-accent/10 rounded-lg p-4">
              <h4 className="professional-heading font-semibold text-primary mb-2">Transportation</h4>
              <ul className="professional-body text-sm text-muted-foreground space-y-1">
                <li>• 2 minutes walk from Metro Station</li>
                <li>• Multiple bus routes nearby</li>
                <li>• Parking available in building</li>
                <li>• Wheelchair accessible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
