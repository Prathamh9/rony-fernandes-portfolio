import { Users, Star, Award, TrendingUp, Shield, Home } from "lucide-react"

export default function TestimonialsStats() {
  const stats = [
    {
      icon: Users,
      metric: "1000+",
      label: "Happy Clients",
      description: "Families and businesses served",
    },
    {
      icon: Star,
      metric: "4.9/5",
      label: "Average Rating",
      description: "Based on client feedback",
    },
    {
      icon: Award,
      metric: "98%",
      label: "Client Satisfaction",
      description: "Would recommend to others",
    },
    {
      icon: TrendingUp,
      metric: "₹50Cr+",
      label: "Claims Processed",
      description: "Successfully settled",
    },
    {
      icon: Shield,
      metric: "15+",
      label: "Insurance Partners",
      description: "Leading companies",
    },
    {
      icon: Home,
      metric: "500+",
      label: "Properties Advised",
      description: "Successful transactions",
    },
  ]

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Track Record of Excellence
          </h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to client success and satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
              <div className="professional-heading text-lg font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="professional-body text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
