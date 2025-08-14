import { Award, Users, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const achievements = [
    {
      icon: Award,
      title: "27+ Years Experience",
      description: "Licensed Branded Agent since 1997",
    },
    {
      icon: Shield,
      title: "IRDA Certified",
      description: "Authorized insurance advisor",
    },
    {
      icon: TrendingUp,
      title: "Mutual Fund Distributor",
      description: "Certified investment advisor",
    },
    {
      icon: Users,
      title: "1000+ Satisfied Clients",
      description: "Trusted by families & businesses",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/insurance-advisor-family-meeting.png"
              alt="Rony Fernandes with clients"
              width={600}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">About Rony Fernandes</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 1997, I have been dedicated to helping individuals, families, and businesses secure their
                financial future through comprehensive insurance solutions, strategic investment planning, and expert
                real estate advisory.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My mission is to provide transparent, reliable, and personalized financial solutions that protect what
                matters most to you. With partnerships across leading insurance companies and financial institutions, I
                ensure you get the best coverage and returns.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">My Vision</h3>
              <p className="text-gray-600">
                To be the most trusted financial advisor in the region, known for integrity, expertise, and unwavering
                commitment to client success.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                    <achievement.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                  <p className="text-xs text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
