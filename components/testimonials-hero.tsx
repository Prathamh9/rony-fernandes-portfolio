import { Star, Users, Award, TrendingUp } from "lucide-react"

export default function TestimonialsHero() {
  const highlights = [
    {
      icon: Users,
      metric: "1000+",
      label: "Happy Clients",
    },
    {
      icon: Star,
      metric: "4.9/5",
      label: "Average Rating",
    },
    {
      icon: Award,
      metric: "98%",
      label: "Client Satisfaction",
    },
    {
      icon: TrendingUp,
      metric: "₹50Cr+",
      label: "Claims Processed",
    },
  ]

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="professional-heading text-4xl md:text-5xl font-bold text-primary mb-6">What My Clients Say</h1>
          <p className="professional-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over 1000+ satisfied clients trust me with their financial security. Here are their stories of success,
            protection, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                <highlight.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{highlight.metric}</div>
              <div className="professional-body text-muted-foreground">{highlight.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
