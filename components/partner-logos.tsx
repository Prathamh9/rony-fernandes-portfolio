import Image from "next/image"

export default function PartnerLogos() {
  const partners = [
    { name: "LIC", logo: "/lic-logo.png" },
    { name: "HDFC ERGO", logo: "/hdfc-ergo-logo.png" },
    { name: "National Insurance", logo: "/national-insurance-logo.png" },
    { name: "Star Health", logo: "/star-health-logo.png" },
    { name: "SBI", logo: "/sbi-logo.png" },
    { name: "Axis Bank", logo: "/axis-bank-logo.png" },
  ]

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="professional-heading text-2xl font-bold text-primary mb-4">Trusted Partners</h2>
          <p className="professional-body text-muted-foreground">
            Working with India's leading financial institutions to serve you better
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="professional-body text-sm text-muted-foreground">
            IRDA Licensed Agent | Mutual Fund Distributor | Certified Financial Advisor
          </p>
        </div>
      </div>
    </section>
  )
}
