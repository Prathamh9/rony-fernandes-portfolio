import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="professional-heading text-4xl md:text-5xl font-bold text-primary">Meet Rony Fernandes</h1>
              <p className="text-xl text-accent font-medium">Your Trusted Financial Partner Since 1997</p>
              <p className="professional-body text-lg text-muted-foreground leading-relaxed">
                With over 27 years of experience in insurance, investments, and real estate, I have dedicated my career
                to helping individuals and families achieve financial security and peace of mind.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-primary">IRDA Licensed</span>
              </div>
              <div className="bg-accent/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">Mutual Fund Distributor</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-primary">Real Estate Advisor</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/financial-advisor-office.png"
                alt="Rony Fernandes - Professional Financial Advisor"
                width={500}
                height={600}
                className="object-cover w-full h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">27+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
