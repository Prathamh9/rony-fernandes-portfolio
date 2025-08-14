import { Target, Eye, Heart, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function VisionMission() {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest, transparent advice that puts your interests first, always.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering superior service and solutions that exceed expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead with the latest financial products and strategies.",
    },
    {
      icon: Eye,
      title: "Trust",
      description: "Building lasting relationships through reliability and expertise.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Vision */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="professional-heading text-2xl font-bold text-primary">My Vision</h2>
              </div>
              <p className="professional-body text-lg text-muted-foreground leading-relaxed">
                To be the most trusted financial advisor in the region, known for integrity, expertise, and unwavering
                commitment to client success. I envision a future where every family has access to comprehensive
                financial protection and wealth-building opportunities.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h2 className="professional-heading text-2xl font-bold text-accent-foreground">My Mission</h2>
              </div>
              <p className="professional-body text-lg text-muted-foreground leading-relaxed">
                To provide transparent, reliable, and personalized financial solutions that protect what matters most to
                you. Through comprehensive planning and ongoing support, I help clients achieve their financial goals
                and secure their family's future.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="professional-heading text-3xl font-bold text-primary mb-4">Core Values</h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every interaction and decision in serving my clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="card-hover bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="professional-heading text-lg font-semibold text-card-foreground mb-3">{value.title}</h3>
                <p className="professional-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
