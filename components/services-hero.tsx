import { Shield, TrendingUp, Home } from "lucide-react"

export default function ServicesHero() {
  const serviceCategories = [
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive protection for life, health, and assets",
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic wealth building and portfolio management",
    },
    {
      icon: Home,
      title: "Real Estate Advisory",
      description: "Expert guidance for property investments",
    },
  ]

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="professional-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Comprehensive Financial Services
          </h1>
          <p className="professional-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From insurance protection to investment growth and real estate opportunities, I provide end-to-end financial
            solutions tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 mx-auto group-hover:bg-accent/20 transition-colors">
                <category.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="professional-heading text-xl font-semibold text-foreground mb-3">{category.title}</h3>
              <p className="professional-body text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
