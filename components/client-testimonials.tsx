import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Business Owner",
      image: "/professional-indian-woman-smiling.png",
      rating: 5,
      category: "Business Insurance",
      text: "Rony helped us secure comprehensive business insurance and guided our family through a smooth claim process. His expertise and personal attention are unmatched. When we faced a challenging claim situation, he was there every step of the way.",
    },
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      image: "/professional-indian-man-casual.png",
      rating: 5,
      category: "Investment Planning",
      text: "Thanks to Rony's investment advice, my SIP portfolio has grown significantly over the past 5 years. He explains complex financial products in simple terms and always puts client interests first. My retirement planning is now on track.",
    },
    {
      name: "Meera Patel",
      role: "Teacher",
      image: "/indian-teacher-smiling.png",
      rating: 5,
      category: "Health Insurance",
      text: "Rony found us the perfect health insurance plan within our budget. When my husband needed surgery, the claim was processed smoothly thanks to his guidance. He even helped coordinate with the hospital for cashless treatment.",
    },
    {
      name: "Amit Desai",
      role: "Real Estate Investor",
      image: "/confident-indian-businessman.png",
      rating: 5,
      category: "Real Estate Advisory",
      text: "Rony's real estate insights helped me make profitable property investments in Mumbai. His market knowledge and honest advice have been invaluable for my portfolio growth. I've seen 25% returns on my investments.",
    },
    {
      name: "Sunita Joshi",
      role: "Homemaker",
      image: "/indian-woman-warm-smile.png",
      rating: 5,
      category: "Retirement Planning",
      text: "After my husband's retirement, Rony restructured our insurance and investments perfectly. We now have better coverage at lower premiums and growing savings. Our financial stress has completely disappeared.",
    },
    {
      name: "Vikram Singh",
      role: "Small Business Owner",
      image: "/sikh-businessman-turban.png",
      rating: 5,
      category: "Claim Support",
      text: "Rony secured comprehensive coverage for my restaurant business. When we faced a fire incident, his quick claim assistance helped us recover and rebuild faster. He personally followed up with the insurance company daily.",
    },
  ]

  const categories = ["All", "Insurance", "Investment Planning", "Real Estate", "Claims"]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="professional-heading text-3xl md:text-4xl font-bold text-primary mb-4">Client Testimonials</h2>
          <p className="professional-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real clients across insurance, investments, and real estate services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-card border-border group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-accent opacity-50" />
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                    {testimonial.category}
                  </span>
                </div>

                <p className="professional-body text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="professional-heading font-semibold text-card-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
