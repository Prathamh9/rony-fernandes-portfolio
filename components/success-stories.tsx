import { TrendingUp, Shield, Home, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SuccessStories() {
  const successStories = [
    {
      icon: Shield,
      title: "Family Protected During Medical Emergency",
      client: "The Agarwal Family",
      challenge: "Needed comprehensive health coverage for elderly parents with pre-existing conditions",
      solution: "Structured a multi-tier health insurance plan with senior citizen coverage and critical illness rider",
      result: "₹8 lakh medical expenses covered seamlessly during father's cardiac surgery",
      savings: "Saved ₹6 lakh in out-of-pocket expenses",
    },
    {
      icon: TrendingUp,
      title: "Retirement Corpus Built Through SIPs",
      client: "Mr. Rohit Mehta",
      challenge: "Starting investment planning at age 45 with limited savings for retirement",
      solution: "Designed aggressive SIP strategy across equity and hybrid funds with step-up investments",
      result: "Built ₹1.2 crore corpus in 15 years through disciplined investing",
      savings: "On track for comfortable retirement by age 60",
    },
    {
      icon: Home,
      title: "Profitable Real Estate Investment",
      client: "Mrs. Kavita Jain",
      challenge: "First-time property investor looking for rental income opportunities",
      solution: "Identified undervalued commercial property in growing business district",
      result: "25% capital appreciation and ₹35,000 monthly rental income within 2 years",
      savings: "Generated ₹8.4 lakh annual passive income",
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">Success Stories</h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations and financial victories achieved through strategic planning and expert guidance.
          </p>
        </div>

        <div className="space-y-8">
          {successStories.map((story, index) => (
            <Card key={index} className="card-hover bg-card border-border">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Story Header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                        <story.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="professional-heading text-xl font-semibold text-card-foreground">
                          {story.title}
                        </h3>
                        <p className="text-sm text-accent font-medium">{story.client}</p>
                      </div>
                    </div>
                  </div>

                  {/* Story Details */}
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="professional-heading text-sm font-semibold text-card-foreground mb-2">
                          Challenge
                        </h4>
                        <p className="professional-body text-sm text-muted-foreground leading-relaxed">
                          {story.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="professional-heading text-sm font-semibold text-card-foreground mb-2">
                          Solution
                        </h4>
                        <p className="professional-body text-sm text-muted-foreground leading-relaxed">
                          {story.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="professional-heading text-sm font-semibold text-card-foreground mb-2">Result</h4>
                        <p className="professional-body text-sm text-muted-foreground leading-relaxed mb-3">
                          {story.result}
                        </p>
                        <div className="bg-accent/10 px-3 py-2 rounded-lg">
                          <p className="text-sm font-medium text-accent">{story.savings}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            Share Your Success Story
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
