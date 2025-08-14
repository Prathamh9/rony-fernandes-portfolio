import { Award, Shield, TrendingUp, Users, CheckCircle, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Credentials() {
  const certifications = [
    {
      icon: Shield,
      title: "IRDA Licensed Agent",
      description: "Authorized by Insurance Regulatory and Development Authority of India",
      year: "Since 1997",
    },
    {
      icon: TrendingUp,
      title: "Mutual Fund Distributor",
      description: "AMFI registered distributor for mutual fund investments",
      year: "Since 2010",
    },
    {
      icon: Award,
      title: "LIC Certified Agent",
      description: "Life Insurance Corporation of India certified professional",
      year: "Since 1997",
    },
    {
      icon: Users,
      title: "Financial Planning Certified",
      description: "Comprehensive financial planning and advisory certification",
      year: "Since 2005",
    },
  ]

  const achievements = [
    {
      icon: Star,
      metric: "1000+",
      label: "Satisfied Clients",
      description: "Families and businesses served",
    },
    {
      icon: CheckCircle,
      metric: "₹50Cr+",
      label: "Claims Processed",
      description: "Successfully settled for clients",
    },
    {
      icon: Award,
      metric: "15+",
      label: "Industry Awards",
      description: "Recognition for excellence",
    },
    {
      icon: TrendingUp,
      metric: "₹100Cr+",
      label: "Assets Under Advisory",
      description: "Client investments managed",
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Credentials & Achievements
          </h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and track record that demonstrate expertise and trustworthiness.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                  <cert.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="professional-heading text-lg font-semibold text-card-foreground mb-2">{cert.title}</h3>
                <p className="professional-body text-sm text-muted-foreground mb-3 leading-relaxed">
                  {cert.description}
                </p>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{cert.year}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="professional-heading text-2xl font-bold text-primary text-center mb-12">
            Track Record of Excellence
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                  <achievement.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.metric}</div>
                <div className="professional-heading text-lg font-semibold text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="professional-body text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
