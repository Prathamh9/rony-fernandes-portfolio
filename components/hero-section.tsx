"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  const [copyStatus, setCopyStatus] = useState('')
  const phoneNumber = "919876543210"; // Updated phone number from the WhatsApp link

  // Function to copy the phone number to the clipboard
  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopyStatus('Copied!');
    } catch (err) {
      // Fallback for older browsers or restricted environments
      const tempInput = document.createElement("input");
      document.body.appendChild(tempInput);
      tempInput.value = phoneNumber;
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      setCopyStatus('Copied!');
    }
    // Hide the message after a delay
    setTimeout(() => {
      setCopyStatus('');
    }, 2000);
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">Rony Fernandes</h1>
              <p className="text-xl text-gray-600 font-medium">
                Trusted Advisor for Insurance, Finance & Real Estate Since 1997
              </p>
              <p className="text-lg text-gray-500 max-w-lg">
                Your Partner in securing the future with 27+ years of experience in providing personalized insurance
                solutions, investment planning, and real estate advisory.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* "Chat Now" button with WhatsApp link */}
              <a
                href="https://api.whatsapp.com/send/?phone=919876543210&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat Now
                </Button>
              </a>

              {/* "Contact Me" button with clipboard functionality */}
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-teal-600 px-8 py-3 rounded-full text-lg bg-transparent relative"
                onClick={copyPhoneNumber}
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Me
                {copyStatus && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg transition-all duration-300">
                    {copyStatus}
                  </div>
                )}
              </Button>
            </div>


            {/* Partner Logos */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted Partner of Leading Brands</p>
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                <div className="flex items-center justify-center h-12">
                  <Image
                    src="/lic-logo.png"
                    alt="LIC logo"
                    width={80}
                    height={40}
                    className="max-w-full h-auto hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <Image
                    src="/hdfc-ergo-logo.png"
                    alt="HDFC ERGO logo"
                    width={100}
                    height={40}
                    className="max-w-full h-auto hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <Image
                    src="/star-health-logo.png"
                    alt="Star Health logo"
                    width={90}
                    height={40}
                    className="max-w-full h-auto hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <Image
                    src="/sbi-logo.png"
                    alt="SBI logo"
                    width={70}
                    height={40}
                    className="max-w-full h-auto hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <Image
                    src="/axis-bank-logo.png"
                    alt="Axis Bank logo"
                    width={90}
                    height={40}
                    className="max-w-full h-auto hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="flex items-center justify-center h-12">
                  <Image
                    src="/national-insurance-logo.png"
                    alt="National Insurance logo"
                    width={100}
                    height={40}
                    className="max-w-full h-auto hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <Image
                src="/confident-businessman.png"
                alt="Rony Fernandes - Professional Insurance and Financial Advisor"
                width={500}
                height={600}
                className="rounded-xl object-cover"
              />

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-teal-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">27+</div>
                <div className="text-sm">Years Experience</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}