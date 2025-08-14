import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Life Insurance",
    "Health Insurance",
    "Motor Insurance",
    "Investment Planning",
    "Real Estate Advisory",
    "Claim Assistance",
  ]

  const partners = [
    { name: "LIC", logo: "/lic-logo.png" },
    { name: "HDFC ERGO", logo: "/hdfc-ergo-logo.png" },
    { name: "Star Health", logo: "/star-health-logo.png" },
    { name: "National Insurance", logo: "/national-insurance-logo.png" },
    { name: "SBI Mutual Fund", logo: "/sbi-logo.png" },
    { name: "Axis Bank", logo: "/axis-bank-logo.png" },
    { name: "HDFC Bank", logo: "/generic-bank-logo.png" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">RONY FERNANDES</h3>
              <p className="text-gray-300 leading-relaxed">
                Your trusted advisor for insurance, investments, and real estate since 1997. Committed to securing your
                financial future with personalized solutions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">rony.fernandes@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-teal-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-teal-400">Certifications & Credentials</h4>
            <div className="bg-gray-800 p-6 rounded-lg">
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>IRDA Licensed Agent</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>LIC Certified Advisor</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Mutual Fund Distributor</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Real Estate Consultant</span>
                </li>
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">27+ Years of Professional Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 Rony Fernandes. All Rights Reserved.</div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-gray-500">
            <p>
              Insurance is subject to market risk. Please read all scheme related documents carefully. Past performance
              is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
