"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Bot, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message:
        "Hello! I'm Rony's AI assistant. I can help you with LIC policies, insurance quotes, renewal reminders, premium calculator, and more. How can I assist you today?",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [showCalculator, setShowCalculator] = useState(false)
  const [calcData, setCalcData] = useState({ age: "", coverage: "", tenure: "" })
  const [calcResult, setCalcResult] = useState<string | null>(null)

  const quickQuestions = [
    "Get LIC policy quote",
    "Renewal reminders",
    "Premium calculator",
    "Health insurance options",
    "Investment planning",
    "Claim assistance",
    "Real estate advice",
    "Connect on WhatsApp",
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    setMessages((prev) => [...prev, { type: "user", message: inputMessage }])

    setTimeout(() => {
      let response =
        "Thank you for your question! I'll connect you with Rony for personalized assistance. You can also call +91 98765 43210 for immediate help."

      if (inputMessage.toLowerCase().includes("quote")) {
        response = "Sure! Please provide your age and policy preference, and I’ll generate a LIC policy quote for you."
      } else if (inputMessage.toLowerCase().includes("renewal")) {
        response = "I can remind you about your premium due date. Please share your policy number to set up renewal reminders."
      } else if (inputMessage.toLowerCase().includes("premium")) {
        setShowCalculator(true)
        response = "Great! Please enter your details in the premium calculator below."
      } else if (inputMessage.toLowerCase().includes("whatsapp")) {
        response = "Click here to chat with us on WhatsApp: https://wa.me/919876543210"
      }

      setMessages((prev) => [...prev, { type: "bot", message: response }])
    }, 1000)

    setInputMessage("")
  }

  const handleCalculatePremium = () => {
    const age = parseInt(calcData.age)
    const coverage = parseInt(calcData.coverage)
    const tenure = parseInt(calcData.tenure)

    if (isNaN(age) || isNaN(coverage) || isNaN(tenure)) {
      setCalcResult("Please fill all fields with valid numbers.")
      return
    }

    // Simple premium formula (example)
    const premium = ((coverage / tenure) * (age / 30)).toFixed(2)
    setCalcResult(`Estimated Premium: ₹${premium} per year`)
  }

  const handleClearChat = () => {
    setMessages([
      {
        type: "bot",
        message:
          "Chat cleared. Hello! I'm Rony's AI assistant. How can I help you today?",
      },
    ])
    setShowCalculator(false)
    setCalcData({ age: "", coverage: "", tenure: "" })
    setCalcResult(null)
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-green-600 hover:scale-110 text-white shadow-xl transition-all duration-300"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[550px] z-50 animate-fadeIn">
          <Card className="h-full flex flex-col shadow-2xl rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-t-2xl flex justify-between items-center">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Bot className="h-5 w-5" />
                <span>Rony's Insurance Assistant</span>
              </CardTitle>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleClearChat}
                className="text-white hover:bg-teal-700 rounded-full"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs px-3 py-2 rounded-2xl text-sm shadow ${
                        msg.type === "user" ? "bg-teal-600 text-white" : "bg-white text-gray-800 border"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}

                {/* Premium Calculator */}
                {showCalculator && (
                  <div className="bg-white border rounded-lg p-3 space-y-2 shadow">
                    <p className="text-sm font-medium text-gray-700">Premium Calculator</p>
                    <Input
                      type="number"
                      placeholder="Enter Age"
                      value={calcData.age}
                      onChange={(e) => setCalcData({ ...calcData, age: e.target.value })}
                    />
                    <Input
                      type="number"
                      placeholder="Coverage Amount (₹)"
                      value={calcData.coverage}
                      onChange={(e) => setCalcData({ ...calcData, coverage: e.target.value })}
                    />
                    <Input
                      type="number"
                      placeholder="Tenure (Years)"
                      value={calcData.tenure}
                      onChange={(e) => setCalcData({ ...calcData, tenure: e.target.value })}
                    />
                    <Button onClick={handleCalculatePremium} className="bg-teal-600 hover:bg-teal-700 w-full">
                      Calculate
                    </Button>
                    {calcResult && <p className="text-sm text-gray-800 mt-2">{calcResult}</p>}
                  </div>
                )}
              </div>

              {/* Quick Questions */}
              <div className="p-3 border-t bg-gray-100">
                <p className="text-xs text-gray-600 mb-2">Quick actions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(question)}
                      className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 hover:bg-teal-50 hover:border-teal-300 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 rounded-full"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 rounded-full"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}




