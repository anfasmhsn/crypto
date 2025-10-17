import React, { useState } from 'react'
import './Chatbot.css'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am your Crypto Assistant. Ask me anything!' }
  ])
  const [input, setInput] = useState('')

  const toggleChat = () => setIsOpen(!isOpen)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMsg = { sender: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    // Send message to backend or fake bot reply
    const botReply = await getBotReply(input)
    setMessages(prev => [...prev, { sender: 'bot', text: botReply }])
  }

  const getBotReply = async (userInput) => {
    // 🔁 Replace this with real backend/API
    if (userInput.toLowerCase().includes('bitcoin')) {
      return 'Bitcoin is currently around $60,000 (demo reply).'
    }
    return "I'm still learning. Try asking about Bitcoin or Ethereum."
  }

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about crypto..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot
