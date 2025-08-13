// DOM Elements
const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const quoteModal = document.getElementById("quoteModal")
const chatbot = document.getElementById("chatbot")
const chatMessages = document.getElementById("chatMessages")
const chatInput = document.getElementById("chatInput")

// Navigation functionality
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

hamburger.addEventListener("click", (e) => {
  e.stopPropagation()
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")

  // Prevent body scroll when menu is open
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
})

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    document.body.style.overflow = "auto"
  }
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    document.body.style.overflow = "auto"
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Services tabs functionality
const tabButtons = document.querySelectorAll(".tab-btn")
const tabPanes = document.querySelectorAll(".tab-pane")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab")

    // Remove active class from all buttons and panes
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabPanes.forEach((pane) => pane.classList.remove("active"))

    // Add active class to clicked button and corresponding pane
    button.classList.add("active")
    document.getElementById(targetTab).classList.add("active")
  })
})

// Testimonials slider
let currentSlide = 0
const testimonialCards = document.querySelectorAll(".testimonial-card")
const navDots = document.querySelectorAll(".nav-dot")

function showSlide(index) {
  testimonialCards.forEach((card) => card.classList.remove("active"))
  navDots.forEach((dot) => dot.classList.remove("active"))

  testimonialCards[index].classList.add("active")
  navDots[index].classList.add("active")
}

navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index
    showSlide(currentSlide)
  })
})

// Auto-advance testimonials
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonialCards.length
  showSlide(currentSlide)
}, 5000)

// Quote Modal functionality
function openQuoteModal() {
  quoteModal.style.display = "block"
  document.body.style.overflow = "hidden"
}

function closeQuoteModal() {
  quoteModal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Close modal when clicking outside
quoteModal.addEventListener("click", (e) => {
  if (e.target === quoteModal) {
    closeQuoteModal()
  }
})

// Close modal with close button
document.querySelector(".close").addEventListener("click", closeQuoteModal)

// Quote form submission
document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Thank you for your quote request! Rony will contact you within 24 hours.")
  closeQuoteModal()
  e.target.reset()
})

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Thank you for your message! We will get back to you soon.")
  e.target.reset()
})

// WhatsApp functionality
function openWhatsApp(messageType = "general") {
  const phoneNumber = "+919876543210"
  let message = ""

  switch (messageType) {
    case "premium":
      message = "Hi Rony, I need help calculating insurance premium. Can you assist me?"
      break
    case "renewal":
      message = "Hi Rony, I want to set up renewal reminders for my policy. Please help."
      break
    case "claim":
      message = "Hi Rony, I need assistance with insurance claim process. Please guide me."
      break
    case "investment":
      message = "Hi Rony, I'm interested in investment planning through mutual funds. Can we discuss?"
      break
    default:
      message = "Hello Rony, I would like to know more about your services."
  }

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappURL, "_blank")
}

// Chatbot functionality
function openChat() {
  chatbot.style.display = "flex"
}

function closeChat() {
  chatbot.style.display = "none"
}

function sendMessage() {
  const message = chatInput.value.trim()
  if (message) {
    addMessage(message, "user")
    chatInput.value = ""

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(message)
      addMessage(botResponse, "bot")
    }, 1000)
  }
}

function addMessage(text, sender) {
  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${sender}-message`
  messageDiv.innerHTML = `<p>${text}</p>`
  chatMessages.appendChild(messageDiv)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase()

  // Premium Calculator responses
  if (message.includes("premium") || message.includes("calculate") || message.includes("cost")) {
    return `I can help calculate premiums! Please provide:
    📋 Age: __
    💼 Coverage amount: __
    🏥 Policy type: Life/Health/Motor
    
    Or click here for instant calculator: <button onclick="openPremiumCalculator()" style="background: #1e40af; color: white; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">Calculate Premium</button>`
  }

  // Renewal reminders
  else if (message.includes("renewal") || message.includes("renew") || message.includes("expire")) {
    return `🔔 Renewal Services Available:
    • Policy renewal reminders via SMS/Email
    • Auto-renewal setup for seamless coverage
    • Grace period notifications
    
    Share your policy number to set up reminders: <button onclick="setupRenewalReminder()" style="background: #059669; color: white; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">Setup Reminder</button>`
  }

  // LIC specific queries
  else if (message.includes("lic") || message.includes("life insurance")) {
    return `🏛️ LIC Policies I offer:
    • Term Plans (₹5L - ₹2Cr coverage)
    • Endowment Plans (Savings + Insurance)
    • Pension Plans (Retirement planning)
    • Child Plans (Education funding)
    
    Which LIC plan interests you? I can provide instant quotes!`
  }

  // Health insurance
  else if (message.includes("health") || message.includes("medical")) {
    return `🏥 Health Insurance Options:
    • Star Health (₹3L - ₹1Cr coverage)
    • HDFC ERGO (Family floater plans)
    • National Insurance (Senior citizen plans)
    
    Family size & age details needed for accurate quotes.`
  }

  // Motor insurance
  else if (
    message.includes("car") ||
    message.includes("bike") ||
    message.includes("motor") ||
    message.includes("vehicle")
  ) {
    return `🚗 Motor Insurance Services:
    • Car Insurance (Comprehensive/Third-party)
    • Two-wheeler Insurance
    • Commercial Vehicle Coverage
    
    Vehicle details needed: Make, Model, Year, Registration
    
    <button onclick="getMotorQuote()" style="background: #dc2626; color: white; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">Get Motor Quote</button>`
  }

  // Investment queries
  else if (message.includes("investment") || message.includes("mutual fund") || message.includes("sip")) {
    return `📈 Investment Planning:
    • SIP starting from ₹500/month
    • Equity, Debt, Hybrid funds
    • Tax-saving ELSS funds
    • Portfolio review & rebalancing
    
    Risk appetite: Low/Medium/High?
    Investment horizon: __years`
  }

  // Real estate
  else if (
    message.includes("property") ||
    message.includes("real estate") ||
    message.includes("buy") ||
    message.includes("sell")
  ) {
    return `🏠 Real Estate Advisory:
    • Property buying/selling assistance
    • Investment property analysis
    • Legal documentation support
    • Market trend insights
    
    Location & budget range needed for recommendations.`
  }

  // Contact and availability
  else if (message.includes("contact") || message.includes("call") || message.includes("meet")) {
    return `📞 Contact Rony Fernandes:
    • Phone: +91 98765 43210
    • Email: rony.fernandes@email.com
    • Office Hours: Mon-Sat, 9 AM - 6 PM
    • Emergency: Available 24/7 for claims
    
    <button onclick="openWhatsApp()" style="background: #25d366; color: white; padding: 5px 10px; border: none; border-radius: 4px; cursor: pointer;">WhatsApp Now</button>`
  }

  // Claims assistance
  else if (message.includes("claim") || message.includes("settlement")) {
    return `🛡️ Claims Assistance:
    • 24/7 claim support
    • Document preparation help
    • Follow-up with insurance companies
    • Quick settlement guidance
    
    Policy type & claim details needed. I'll guide you through the process!`
  }

  // Default response with quick actions
  else {
    return `👋 Hi! I'm Rony's AI assistant. I can help with:
    
    🔹 Insurance quotes & policies
    🔹 Premium calculations
    🔹 Renewal reminders
    🔹 Investment planning
    🔹 Real estate advice
    
    Quick Actions:
    <div style="margin-top: 10px;">
      <button onclick="addMessage('Calculate premium for life insurance', 'user'); setTimeout(() => addMessage(getBotResponse('Calculate premium for life insurance'), 'bot'), 500)" style="background: #1e40af; color: white; padding: 5px 8px; margin: 2px; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Premium Calculator</button>
      <button onclick="addMessage('Setup renewal reminder', 'user'); setTimeout(() => addMessage(getBotResponse('Setup renewal reminder'), 'bot'), 500)" style="background: #059669; color: white; padding: 5px 8px; margin: 2px; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Renewal Reminder</button>
      <button onclick="openWhatsApp()" style="background: #25d366; color: white; padding: 5px 8px; margin: 2px; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">WhatsApp</button>
    </div>`
  }
}

function openPremiumCalculator() {
  const calculatorHTML = `
    <div id="premiumCalculator" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 10000;">
      <div style="background: white; padding: 30px; border-radius: 10px; max-width: 500px; width: 90%;">
        <h3 style="margin-bottom: 20px; color: #1e40af;">Premium Calculator</h3>
        <form id="premiumForm">
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Policy Type:</label>
            <select id="policyType" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
              <option value="term">Term Life Insurance</option>
              <option value="health">Health Insurance</option>
              <option value="motor">Motor Insurance</option>
            </select>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Age:</label>
            <input type="number" id="age" min="18" max="80" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;" required>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Coverage Amount (₹):</label>
            <select id="coverage" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
              <option value="500000">₹5 Lakh</option>
              <option value="1000000">₹10 Lakh</option>
              <option value="2500000">₹25 Lakh</option>
              <option value="5000000">₹50 Lakh</option>
              <option value="10000000">₹1 Crore</option>
            </select>
          </div>
          <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button type="submit" style="flex: 1; background: #1e40af; color: white; padding: 12px; border: none; border-radius: 5px; cursor: pointer;">Calculate Premium</button>
            <button type="button" onclick="closePremiumCalculator()" style="flex: 1; background: #6b7280; color: white; padding: 12px; border: none; border-radius: 5px; cursor: pointer;">Close</button>
          </div>
        </form>
        <div id="premiumResult" style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 5px; display: none;">
          <h4 style="color: #1e40af; margin-bottom: 10px;">Estimated Premium:</h4>
          <p id="premiumAmount" style="font-size: 18px; font-weight: bold; color: #059669;"></p>
          <p style="font-size: 12px; color: #6b7280; margin-top: 10px;">*This is an approximate calculation. Final premium may vary based on medical tests and other factors.</p>
          <button onclick="addMessage('I want to proceed with this policy', 'user'); setTimeout(() => addMessage('Great! I will contact you within 2 hours to complete the application process. Please keep your documents ready.', 'bot'), 500); closePremiumCalculator();" style="width: 100%; background: #059669; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;">Proceed with Application</button>
        </div>
      </div>
    </div>
  `

  document.body.insertAdjacentHTML("beforeend", calculatorHTML)

  document.getElementById("premiumForm").addEventListener("submit", (e) => {
    e.preventDefault()
    calculatePremium()
  })
}

function calculatePremium() {
  const policyType = document.getElementById("policyType").value
  const age = Number.parseInt(document.getElementById("age").value)
  const coverage = Number.parseInt(document.getElementById("coverage").value)

  let basePremium = 0
  let policyName = ""

  switch (policyType) {
    case "term":
      basePremium = (coverage / 1000) * (age / 10) * 0.8
      policyName = "Term Life Insurance"
      break
    case "health":
      basePremium = (coverage / 10000) * (age / 5) * 1.2
      policyName = "Health Insurance"
      break
    case "motor":
      basePremium = coverage * 0.03
      policyName = "Motor Insurance"
      break
  }

  const annualPremium = Math.round(basePremium)
  const monthlyPremium = Math.round(basePremium / 12)

  document.getElementById("premiumResult").style.display = "block"
  document.getElementById("premiumAmount").innerHTML = `
    <strong>${policyName}</strong><br>
    Annual: ₹${annualPremium.toLocaleString()}<br>
    Monthly: ₹${monthlyPremium.toLocaleString()}
  `
}

function closePremiumCalculator() {
  const calculator = document.getElementById("premiumCalculator")
  if (calculator) {
    calculator.remove()
  }
}

function setupRenewalReminder() {
  const reminderHTML = `
    <div id="renewalReminder" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 10000;">
      <div style="background: white; padding: 30px; border-radius: 10px; max-width: 500px; width: 90%;">
        <h3 style="margin-bottom: 20px; color: #059669;">Setup Renewal Reminder</h3>
        <form id="renewalForm">
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Policy Number:</label>
            <input type="text" id="policyNumber" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;" required>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Policy Type:</label>
            <select id="renewalPolicyType" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
              <option value="life">Life Insurance</option>
              <option value="health">Health Insurance</option>
              <option value="motor">Motor Insurance</option>
              <option value="property">Property Insurance</option>
            </select>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Renewal Date:</label>
            <input type="date" id="renewalDate" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;" required>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Mobile Number:</label>
            <input type="tel" id="mobileNumber" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;" required>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Email:</label>
            <input type="email" id="emailAddress" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;" required>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: flex; align-items: center; gap: 10px;">
              <input type="checkbox" id="smsReminder" checked>
              <span>SMS Reminder (30, 15, 7 days before)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
              <input type="checkbox" id="emailReminder" checked>
              <span>Email Reminder (30, 15, 7 days before)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
              <input type="checkbox" id="whatsappReminder">
              <span>WhatsApp Reminder</span>
            </label>
          </div>
          <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button type="submit" style="flex: 1; background: #059669; color: white; padding: 12px; border: none; border-radius: 5px; cursor: pointer;">Setup Reminder</button>
            <button type="button" onclick="closeRenewalReminder()" style="flex: 1; background: #6b7280; color: white; padding: 12px; border: none; border-radius: 5px; cursor: pointer;">Close</button>
          </div>
        </form>
      </div>
    </div>
  `

  document.body.insertAdjacentHTML("beforeend", reminderHTML)

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0]
  document.getElementById("renewalDate").min = today

  document.getElementById("renewalForm").addEventListener("submit", (e) => {
    e.preventDefault()
    processRenewalReminder()
  })
}

function processRenewalReminder() {
  const policyNumber = document.getElementById("policyNumber").value
  const renewalDate = document.getElementById("renewalDate").value
  const mobile = document.getElementById("mobileNumber").value

  // Simulate saving reminder (in real app, this would go to a database)
  const reminderData = {
    policyNumber,
    renewalDate,
    mobile,
    createdAt: new Date().toISOString(),
  }

  // Store in localStorage for demo purposes
  const reminders = JSON.parse(localStorage.getItem("renewalReminders") || "[]")
  reminders.push(reminderData)
  localStorage.setItem("renewalReminders", JSON.stringify(reminders))

  closeRenewalReminder()

  // Add success message to chat
  addMessage("Setup renewal reminder for policy " + policyNumber, "user")
  setTimeout(() => {
    addMessage(
      `✅ Renewal reminder successfully set up!
    
    📋 Policy: ${policyNumber}
    📅 Renewal Date: ${new Date(renewalDate).toLocaleDateString()}
    📱 Mobile: ${mobile}
    
    You'll receive reminders 30, 15, and 7 days before renewal.
    
    I'll also personally call you 1 week before to ensure smooth renewal process!`,
      "bot",
    )
  }, 500)
}

function closeRenewalReminder() {
  const reminder = document.getElementById("renewalReminder")
  if (reminder) {
    reminder.remove()
  }
}

function getMotorQuote() {
  const motorQuoteHTML = `
    <div id="motorQuote" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 10000;">
      <div style="background: white; padding: 30px; border-radius: 10px; max-width: 500px; width: 90%; max-height: 90%; overflow-y: auto;">
        <h3 style="margin-bottom: 20px; color: #dc2626;">Motor Insurance Quote</h3>
        <form id="motorQuoteForm">
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Vehicle Type:</label>
            <select id="vehicleType" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
              <option value="car">Car</option>
              <option value="bike">Two Wheeler</option>
              <option value="commercial">Commercial Vehicle</option>
            </select>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Vehicle Make:</label>
            <input type="text" id="vehicleMake" placeholder="e.g., Maruti, Honda, Tata" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;" required>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Vehicle Model:</label>
            <input type="text" id="vehicleModel" placeholder="e.g., Swift, City, Nexon" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;" required>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Manufacturing Year:</label>
            <select id="vehicleYear" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
              ${generateYearOptions()}
            </select>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Registration Number:</label>
            <input type="text" id="registrationNumber" placeholder="e.g., MH01AB1234" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;" required>
          </div>
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; font-weight: bold;">Coverage Type:</label>
            <select id="coverageType" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
              <option value="comprehensive">Comprehensive</option>
              <option value="thirdparty">Third Party Only</option>
            </select>
          </div>
          <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button type="submit" style="flex: 1; background: #dc2626; color: white; padding: 12px; border: none; border-radius: 5px; cursor: pointer;">Get Quote</button>
            <button type="button" onclick="closeMotorQuote()" style="flex: 1; background: #6b7280; color: white; padding: 12px; border: none; border-radius: 5px; cursor: pointer;">Close</button>
          </div>
        </form>
        <div id="motorQuoteResult" style="margin-top: 20px; padding: 15px; background: #fef2f2; border-radius: 5px; display: none;">
          <h4 style="color: #dc2626; margin-bottom: 10px;">Motor Insurance Quote:</h4>
          <div id="motorQuoteDetails"></div>
          <button onclick="addMessage('I want to buy this motor insurance policy', 'user'); setTimeout(() => addMessage('Excellent choice! I will prepare your motor insurance proposal and contact you within 2 hours with the policy documents. Please keep your RC, driving license, and previous policy ready.', 'bot'), 500); closeMotorQuote();" style="width: 100%; background: #059669; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;">Buy This Policy</button>
        </div>
      </div>
    </div>
  `

  document.body.insertAdjacentHTML("beforeend", motorQuoteHTML)

  document.getElementById("motorQuoteForm").addEventListener("submit", (e) => {
    e.preventDefault()
    calculateMotorQuote()
  })
}

function generateYearOptions() {
  const currentYear = new Date().getFullYear()
  let options = ""
  for (let year = currentYear; year >= currentYear - 20; year--) {
    options += `<option value="${year}">${year}</option>`
  }
  return options
}

function calculateMotorQuote() {
  const vehicleType = document.getElementById("vehicleType").value
  const make = document.getElementById("vehicleMake").value
  const model = document.getElementById("vehicleModel").value
  const year = Number.parseInt(document.getElementById("vehicleYear").value)
  const coverageType = document.getElementById("coverageType").value

  const currentYear = new Date().getFullYear()
  const vehicleAge = currentYear - year

  let basePremium = 0
  let idv = 0

  // Calculate IDV and premium based on vehicle type and age
  switch (vehicleType) {
    case "car":
      idv = Math.max(200000 - vehicleAge * 20000, 50000)
      basePremium = coverageType === "comprehensive" ? idv * 0.04 : 2000
      break
    case "bike":
      idv = Math.max(80000 - vehicleAge * 8000, 15000)
      basePremium = coverageType === "comprehensive" ? idv * 0.05 : 1500
      break
    case "commercial":
      idv = Math.max(500000 - vehicleAge * 50000, 100000)
      basePremium = coverageType === "comprehensive" ? idv * 0.06 : 5000
      break
  }

  const gst = basePremium * 0.18
  const totalPremium = Math.round(basePremium + gst)

  document.getElementById("motorQuoteResult").style.display = "block"
  document.getElementById("motorQuoteDetails").innerHTML = `
    <div style="background: white; padding: 15px; border-radius: 5px; margin-bottom: 10px;">
      <strong>Vehicle Details:</strong><br>
      ${make} ${model} (${year})<br>
      Coverage: ${coverageType === "comprehensive" ? "Comprehensive" : "Third Party Only"}<br><br>
      
      <strong>Premium Breakdown:</strong><br>
      IDV (Insured Declared Value): ₹${idv.toLocaleString()}<br>
      Base Premium: ₹${Math.round(basePremium).toLocaleString()}<br>
      GST (18%): ₹${Math.round(gst).toLocaleString()}<br>
      <hr style="margin: 10px 0;">
      <strong style="color: #dc2626; font-size: 18px;">Total Premium: ₹${totalPremium.toLocaleString()}</strong>
    </div>
    
    <div style="background: #f0f9ff; padding: 10px; border-radius: 5px; font-size: 12px;">
      <strong>Coverage Includes:</strong><br>
      ${
        coverageType === "comprehensive"
          ? "✅ Own Damage Cover<br>✅ Third Party Liability<br>✅ Personal Accident Cover<br>✅ 24/7 Roadside Assistance"
          : "✅ Third Party Liability<br>✅ Personal Accident Cover (Owner-Driver)"
      }
    </div>
  `
}

function closeMotorQuote() {
  const quote = document.getElementById("motorQuote")
  if (quote) {
    quote.remove()
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Add welcome message to chatbot when page loads
  setTimeout(() => {
    if (chatMessages && chatMessages.children.length === 0) {
      addMessage(
        "👋 Welcome! I'm Rony's AI assistant. I can help you with insurance quotes, premium calculations, renewal reminders, and more. How can I assist you today?",
        "bot",
      )
    }
  }, 1000)
})

// Observe elements for animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  },
  { threshold: 0.1 },
)

document.querySelectorAll(".service-card, .contact-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.textContent)
    const suffix = counter.textContent.replace(/[0-9]/g, "")
    let current = 0
    const increment = target / 50

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current) + suffix
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = target + suffix
      }
    }

    updateCounter()
  })
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters()
      heroObserver.unobserve(entry.target)
    }
  })
})

const heroSection = document.querySelector(".hero")
if (heroSection) {
  heroObserver.observe(heroSection)
}

function enhanceFormValidation() {
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, select, textarea")

    inputs.forEach((input) => {
      // Add proper input types for mobile keyboards
      if (input.name === "phone" || input.placeholder?.toLowerCase().includes("phone")) {
        input.type = "tel"
        input.pattern = "[0-9+\\-\\s()]*"
      }

      if (input.name === "email" || input.placeholder?.toLowerCase().includes("email")) {
        input.type = "email"
        input.autocomplete = "email"
      }

      if (input.name === "name" || input.placeholder?.toLowerCase().includes("name")) {
        input.autocomplete = "name"
      }
    })
  })
}

function handleResponsiveImages() {
  const images = document.querySelectorAll("img")

  images.forEach((img) => {
    img.loading = "lazy"

    img.addEventListener("error", function () {
      this.src = "/placeholder-image.png"
      this.alt = "Image not available"
    })
  })
}

function handleViewportHeight() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty("--vh", `${vh}px`)
}

window.addEventListener("resize", handleViewportHeight)
window.addEventListener("orientationchange", handleViewportHeight)

// Accessibility improvements
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (quoteModal.style.display === "block") {
      closeQuoteModal()
    }
    if (chatbot.style.display === "flex") {
      closeChat()
    }
  }
})

// Error handling for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    this.src = "/placeholder-image.png"
  })
})
