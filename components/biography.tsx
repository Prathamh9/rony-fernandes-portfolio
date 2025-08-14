import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Biography() {
  const milestones = [
    {
      year: "1997",
      title: "Started Career",
      description: "Began as a Licensed Insurance Agent with LIC, focusing on life insurance solutions.",
      icon: Briefcase,
    },
    {
      year: "2003",
      title: "Expanded Services",
      description: "Added health and general insurance products, partnering with leading insurance companies.",
      icon: GraduationCap,
    },
    {
      year: "2010",
      title: "Investment Advisory",
      description: "Became a certified Mutual Fund Distributor, offering comprehensive investment solutions.",
      icon: Calendar,
    },
    {
      year: "2015",
      title: "Real Estate Expertise",
      description: "Added real estate advisory services, helping clients with property investments.",
      icon: MapPin,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            My Professional Journey
          </h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A career built on trust, expertise, and unwavering commitment to client success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <Card key={index} className="card-hover bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                    <milestone.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <div className="h-px bg-border flex-1"></div>
                    </div>
                    <h3 className="professional-heading text-lg font-semibold text-card-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="professional-body text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="professional-heading text-2xl font-bold text-primary mb-6">Personal Philosophy</h3>
            <blockquote className="professional-body text-lg text-muted-foreground italic leading-relaxed mb-6">
              "Financial planning is not just about numbers and policies—it's about understanding dreams, protecting
              families, and building legacies. Every client is unique, and every solution should be tailored to their
              specific needs and aspirations."
            </blockquote>
            <div className="text-right">
              <cite className="professional-heading text-primary font-semibold">— Rony Fernandes</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
