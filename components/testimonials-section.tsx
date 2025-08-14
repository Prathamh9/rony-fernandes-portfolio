import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Business Owner",
      image: "/professional-indian-woman-smiling.png",
      rating: 5,
      text: "Rony helped us secure comprehensive business insurance and guided our family through a smooth claim process. His expertise and personal attention are unmatched.",
    },
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      image: "/professional-indian-man-casual.png",
      rating: 5,
      text: "Thanks to Rony's investment advice, my SIP portfolio has grown significantly. He explains complex financial products in simple terms and always puts client interests first.",
    },
    {
      name: "Meera Patel",
      role: "Teacher",
      image: "/indian-teacher-smiling.png",
      rating: 5,
      text: "Rony found us the perfect health insurance plan within our budget. When my husband needed surgery, the claim was processed smoothly thanks to his guidance.",
    },
    {
      name: "Amit Desai",
      role: "Real Estate Investor",
      image: "/confident-indian-businessman.png",
      rating: 5,
      text: "Rony's real estate insights helped me make profitable property investments. His market knowledge and honest advice have been invaluable for my portfolio growth.",
    },
    {
      name: "Sunita Joshi",
      role: "Homemaker",
      image: "/indian-woman-warm-smile.png",
      rating: 5,
      text: "After my husband's retirement, Rony restructured our insurance and investments perfectly. We now have better coverage at lower premiums and growing savings.",
    },
    {
      name: "Vikram Singh",
      role: "Small Business Owner",
      image: "/sikh-businessman-turban.png",
      rating: 5,
      text: "Rony secured comprehensive coverage for my restaurant business. When we faced a fire incident, his quick claim assistance helped us recover and rebuild faster.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What My Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 1000+ satisfied clients trust me with their financial security. Here's what they have to say about
            their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-teal-600 opacity-50" />
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>

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
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-teal-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-teal-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹50Cr+</div>
              <div className="text-teal-100">Claims Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-teal-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-teal-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
