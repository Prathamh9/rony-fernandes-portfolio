"use client"

import { useState, useRef, useEffect } from "react"
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
  const [showPolicyForm, setShowPolicyForm] = useState(false);
  const [calcData, setCalcData] = useState({ age: "", coverage: "", tenure: "" })
  const [policyData, setPolicyData] = useState({ age: "", policyType: "", goals: "" })
  const [calcResult, setCalcResult] = useState<string | null>(null)

  // State for draggable window
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const chatWindowRef = useRef(null)
  const chatButtonRef = useRef(null)
  const messagesEndRef = useRef(null) // Ref for auto-scrolling

  // Updated quick questions as per user request
  const quickQuestions = [
    "Investment Quotes",
    "Premium Calculator",
    "LIC Policy Assistance",
    "Connect to WhatsApp",
  ]

  // A larger list of investment-focused quotes
  const investmentQuotes = [
    "The best investment you can make is in yourself.",
    "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it.",
    "Don't save what is left after spending; spend what is left after saving.",
    "An investment in knowledge pays the best interest.",
    "The stock market is a device for transferring money from the impatient to the patient.",
    "Risk comes from not knowing what you're doing.",
    "Rule No.1: Never lose money. Rule No.2: Never forget rule No.1.",
    "Successful investing is about managing risk, not avoiding it.",
    "Time is your biggest asset when it comes to investing.",
    "Diversification is protection against ignorance.",
    "Never depend on a single income. Make an investment to create a second source.",
    "The goal of a successful trader is to make the best trades. Money is secondary.",
    "Invest in what you know.",
    "If you don't find a way to make money while you sleep, you will work until you die.",
    "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.",
    "The biggest risk is not taking any risk.",
    "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
    "The intelligent investor is a realist who sells to optimists and buys from pessimists.",
    "The only way to win is to not play the game.",
    "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    "In the short run, the market is a voting machine, but in the long run, it is a weighing machine.",
    "The secret to a great investment is a great business.",
    "Don't put all your eggs in one basket.",
    "Look at market fluctuations as your friend rather than your enemy.",
    "It's not about timing the market, it's about time in the market.",
    "Patience is a key element of success.",
    "The more you learn, the more you earn.",
    "The time of maximum pessimism is the best time to buy.",
    "A solid investment plan is a blueprint for your financial future.",
    "Your savings will not outrun inflation. You need to invest to grow your money.",
  ];

  // Handle drag events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    if (chatWindowRef.current) {
      const el = chatWindowRef.current as HTMLDivElement
      const rect = el.getBoundingClientRect()
      setIsDragging(true)
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && chatWindowRef.current) {
      const newX = e.clientX - offset.x
      const newY = e.clientY - offset.y
      setPosition({ x: newX, y: newY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Handle click outside to close the chatbot
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if click is outside the chat window and not on the chat button
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node) &&
        chatButtonRef.current &&
        !chatButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpen])

  // Add and remove global mouse event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    } else {
      window.removeEventListener("mousemove", handleMouseUp)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  // Auto-scroll messages to the bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = inputMessage.trim().toLowerCase()
    setMessages((prev) => [...prev, { type: "user", message: inputMessage }])
    setInputMessage("")
    setCalcResult(null); // Clear previous calc results

    let response = ""
    let showCalc = false; 
    let showPolicy = false;

    if (userMessage.includes("investment quotes")) {
      const randomIndex = Math.floor(Math.random() * investmentQuotes.length)
      response = investmentQuotes[randomIndex]
    } else if (userMessage.includes("premium calculator")) {
      showCalc = true;
      response = "Great! Please enter your details below to use the premium calculator."
    } else if (userMessage.includes("lic policy assistance")) {
      showPolicy = true;
      response = "Please provide your age, desired policy type (e.g., Term, ULIP, Endowment), and investment goals below."
    } else if (userMessage.includes("connect to whatsapp")) {
      response = "Click here to chat with us on WhatsApp: https://wa.me/919876543210"
    } else {
      response = "I'm sorry, I can only assist with Investment Quotes, Premium Calculator, LIC Policy Assistance, and connecting to WhatsApp. Please choose one of the quick actions below."
    }

    setMessages((prev) => [...prev, { type: "bot", message: response }])
    setShowCalculator(showCalc); 
    setShowPolicyForm(showPolicy);
  }

  const handleCalculatePremium = () => {
    const age = parseInt(calcData.age)
    const coverage = parseInt(calcData.coverage)
    const tenure = parseInt(calcData.tenure)

    if (isNaN(age) || isNaN(coverage) || isNaN(tenure) || age <= 0 || coverage <= 0 || tenure <= 0) {
      setCalcResult("Please fill all fields with valid numbers.")
      return
    }

    const basePremium = coverage / tenure / 100
    const ageFactor = age / 25
    const premium = (basePremium * ageFactor * 12).toFixed(2)

    setMessages((prev) => [
      ...prev,
      { type: "bot", message: `Estimated Premium for Age: ${age}, Coverage: ₹${coverage}, and Tenure: ${tenure} years is ₹${premium} per year.` },
    ]);

    setCalcData({ age: "", coverage: "", tenure: "" });
    setCalcResult(null); 
    setShowCalculator(false);
  }
  
  const handlePolicyAssistanceRequest = () => {
    const { age, policyType, goals } = policyData;

    if (!age || !policyType || !goals) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", message: "Please fill all fields to receive assistance." },
      ]);
      return;
    }
    
    const personalizedResponse = `Thank you for providing your details. Based on your age of ${age}, interest in a ${policyType} policy, and goal of "${goals}", we recommend a detailed consultation. A financial advisor will be in touch shortly to discuss the best options for you.`;
    
    setMessages((prev) => [
      ...prev,
      { type: "bot", message: personalizedResponse },
    ]);

    setPolicyData({ age: "", policyType: "", goals: "" });
    setShowPolicyForm(false);
  }

  const handleQuickQuestionClick = (question: string) => {
    setShowCalculator(false);
    setShowPolicyForm(false);
    setInputMessage(question);
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
    setShowPolicyForm(false)
    setCalcData({ age: "", coverage: "", tenure: "" })
    setPolicyData({ age: "", policyType: "", goals: "" });
    setCalcResult(null)
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-[1000]" ref={chatButtonRef}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-green-600 hover:scale-110 text-white shadow-xl transition-all duration-300"
          style={{ position: 'relative', zIndex: 1000 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          className="fixed bottom-24 right-6 w-96 h-[450px] z-[999] animate-fadeIn"
        >
          <Card className="h-full flex flex-col shadow-2xl rounded-2xl">
            {/* Draggable Handle */}
            <div
              className="w-full h-12 bg-transparent absolute top-0 rounded-t-2xl cursor-grab"
              onMouseDown={handleMouseDown}
            />

            <CardHeader className="bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-t-2xl flex justify-between items-center select-none z-10 flex-shrink-0">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Bot className="h-5 w-5" />
                <span>Rony's Insurance Assistant</span>
              </CardTitle>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleClearChat}
                className="text-white hover:bg-teal-700 rounded-full cursor-pointer"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </CardHeader>

            {/* Main content area */}
            <CardContent className="flex flex-col flex-grow p-0 overflow-hidden">
                {/* Scrollable Message Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-0">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`max-w-xs px-3 py-2 rounded-2xl text-sm shadow ${
                                    msg.type === "user" ? "bg-teal-600 text-white" : "bg-white text-gray-800 border"
                                } break-words`}
                            >
                                {msg.message}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                
                {/* A dedicated container for the dynamic elements: calculator or quick actions */}
                <div className="flex-shrink-0">
                    {showCalculator ? (
                        <div className="bg-white border-t p-3 space-y-2 shadow">
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
                    ) : showPolicyForm ? (
                        <div className="bg-white border-t p-3 space-y-2 shadow">
                            <p className="text-sm font-medium text-gray-700">Policy Assistance Form</p>
                            <Input
                                type="number"
                                placeholder="Enter Age"
                                value={policyData.age}
                                onChange={(e) => setPolicyData({ ...policyData, age: e.target.value })}
                            />
                            <Input
                                type="text"
                                placeholder="Desired Policy Type (e.g., Term, ULIP)"
                                value={policyData.policyType}
                                onChange={(e) => setPolicyData({ ...policyData, policyType: e.target.value })}
                            />
                            <Input
                                type="text"
                                placeholder="Investment Goals"
                                value={policyData.goals}
                                onChange={(e) => setPolicyData({ ...policyData, goals: e.target.value })}
                            />
                            <Button onClick={handlePolicyAssistanceRequest} className="bg-teal-600 hover:bg-teal-700 w-full">
                                Get Assistance
                            </Button>
                        </div>
                    ) : (
                        <div className="p-3 border-t bg-gray-100">
                            <p className="text-xs text-gray-600 mb-2">Quick actions:</p>
                            <div className="flex flex-wrap gap-2">
                                {quickQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuickQuestionClick(question)}
                                        className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 hover:bg-teal-50 hover:border-teal-300 transition-colors"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Input Area - ALWAYS RENDERED */}
                <div className="p-4 border-t bg-white z-10 flex-shrink-0">
                    <div className="flex items-center space-x-2">
                        <Input
                            value={inputMessage}
                            onChange={(e) => se tInputMessage(e.target.value)}
                            placeholder="Type your message..."
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            className="flex-1 rounded-full pl-4"
                        />
                        <Button
                            onClick={handleSendMessage}
                            size="sm"
                            className="bg-teal-600 hover:bg-teal-700 rounded-full flex-shrink-0"
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
