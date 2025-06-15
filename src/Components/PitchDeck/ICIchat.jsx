"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import {
  ArrowLeft,
  MoreVertical,
  Send,
  Paperclip,
  Wallet,
  CheckCheck,
  Loader2,
  X,
  Check,
  AlertCircle,
  Shield,
  Zap,
  MessageCircle,
  Lock,
} from "lucide-react"

const USER_WALLET = "0xATHEX1234...5678"
const USER_BALANCE = 1000

export default function IOSICIChat() {
  const [showChat, setShowChat] = useState(false)
  const [input, setInput] = useState("")
  const [chat, setChat] = useState([
    {
      id: 1,
      sender: "Satoshi",
      wallet: "0xSATOSHI000...1111",
      time: "2:30 PM",
      message: "Hey Brother",
      fromUser: false,
    },
    {
      id: 2,
      sender: "AtheX",
      wallet: USER_WALLET,
      time: "2:31 PM",
      message: "Yes Bro",
      fromUser: true,
    },
    {
      id: 3,
      sender: "Satoshi",
      wallet: "0xSATOSHI000...1111",
      time: "2:32 PM",
      message: "I need $400 instant for education fees",
      fromUser: false,
    },
  ])
  const [transactionData, setTransactionData] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [processingStep, setProcessingStep] = useState(null)
  const [pendingTransaction, setPendingTransaction] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  const chatRef = useRef(null)

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [chat])

  const parseCommand = (text) => {
    const regex = /^\/ici wallet send (\d+) to (\w+)$/i
    const match = text.trim().match(regex)
    if (match) {
      return {
        amount: Number(match[1]),
        recipient: match[2],
      }
    }
    return null
  }

  const recipientWallets = {
    Satoshi: "0xSATOSHI000...1111",
    AtheX: USER_WALLET,
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)

      const command = parseCommand(input)
      if (command) {
        const { amount, recipient } = command
        if (!recipientWallets[recipient]) {
          alert(`Recipient wallet for ${recipient} not found!`)
          return
        }

        const transaction = {
          amount,
          recipient,
          senderWallet: USER_WALLET,
          recipientWallet: recipientWallets[recipient],
        }

        setPendingTransaction(transaction)

        const now = new Date()
        const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

        setChat((prev) => [
          ...prev,
          {
            id: Date.now(),
            sender: "System",
            wallet: "",
            time: formattedTime,
            message: `Do you want to send $${amount} to ${recipient}?`,
            fromUser: false,
            isConfirmation: true,
            transactionData: transaction,
          },
        ])

        setInput("")
        return
      }

      const now = new Date()
      const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

      const newMsg = {
        id: Date.now(),
        sender: "AtheX",
        wallet: USER_WALLET,
        time: formattedTime,
        message: input,
        fromUser: true,
      }

      setChat((prev) => [...prev, newMsg])
      setInput("")
    }, 300)
  }

  const handleConfirmPrompt = (confirm) => {
    if (confirm && pendingTransaction) {
      setTransactionData(pendingTransaction)
      setModalOpen(true)
    }
    setPendingTransaction(null)
  }

  const handleConfirm = () => {
    if (!transactionData) return
    if (transactionData.amount > USER_BALANCE) {
      setProcessingStep("failed")
      return
    }
    setProcessingStep("requesting")

    setTimeout(() => {
      setProcessingStep("approved")
      setTimeout(() => {
        setProcessingStep("sending")
        setTimeout(() => {
          setProcessingStep("success")

          const now = new Date()
          const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          setChat((prev) => [
            ...prev,
            {
              id: Date.now(),
              sender: "System",
              wallet: "",
              time: formattedTime,
              message: `You have sent $${transactionData.amount} to ${transactionData.recipient}`,
              fromUser: false,
              special: true,
            },
          ])
          setTimeout(() => {
            setModalOpen(false)
            setProcessingStep(null)
            setTransactionData(null)
          }, 1500)
        }, 2000)
      }, 1500)
    }, 2000)
  }

  const handleCancel = () => {
    setModalOpen(false)
    setProcessingStep(null)
    setTransactionData(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            ICI Wallet Chat
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Experience the future of crypto transactions with our iOS-native chat interface
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* iPhone Frame - Left Side - Fixed */}
          <div className="lg:sticky lg:top-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* iPhone 14+ Frame - 90% height */}
                <div
                  className="relative bg-black rounded-[60px] p-2 shadow-2xl"
                  style={{
                    width: "380px",
                    height: "90vh",
                    maxHeight: "820px",
                    minHeight: "600px",
                  }}
                >
                  {/* Screen */}
                  <div className="w-full h-full bg-black rounded-[52px] overflow-hidden relative">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-50"></div>

                    {/* Screen Content */}
                    <div className="w-full h-full bg-white rounded-[52px] overflow-hidden relative">
                      {!showChat ? (
                        // Home Screen
                        <motion.div
                          key="home"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-purple-50 p-8"
                        >
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
                              <Wallet className="w-12 h-12 text-white" />
                            </div>
                          </motion.div>

                          <h2 className="text-2xl font-bold text-slate-800 mb-2">ICI Chat</h2>
                          <p className="text-slate-600 text-center mb-8 px-4">
                            Seamless crypto transactions in your conversations
                          </p>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setShowChat(true)}
                            className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg active:bg-blue-600 transition-colors"
                          >
                            Open Chat
                          </motion.button>
                        </motion.div>
                      ) : (
                        // Chat Interface
                        <motion.div
                          key="chat"
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -300, opacity: 0 }}
                          transition={{ type: "spring", damping: 25, stiffness: 200 }}
                          className="flex flex-col h-full relative"
                        >
                          {/* Status Bar */}
                          <div className="h-12 bg-white flex items-center justify-between px-6 pt-2">
                            <span className="text-sm font-semibold">9:41</span>
                            <div className="flex items-center space-x-1">
                              <div className="flex space-x-1">
                                <div className="w-1 h-1 bg-black rounded-full"></div>
                                <div className="w-1 h-1 bg-black rounded-full"></div>
                                <div className="w-1 h-1 bg-black rounded-full"></div>
                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                              </div>
                              <svg className="w-6 h-4" viewBox="0 0 24 16" fill="none">
                                <rect
                                  x="1"
                                  y="3"
                                  width="22"
                                  height="10"
                                  rx="2"
                                  stroke="black"
                                  strokeWidth="1"
                                  fill="none"
                                />
                                <rect x="2" y="4" width="18" height="8" rx="1" fill="black" />
                              </svg>
                            </div>
                          </div>

                          {/* Chat Header */}
                          <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-3">
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setShowChat(false)}
                                className="p-2 -ml-2"
                              >
                                <ArrowLeft className="w-6 h-6 text-blue-500" />
                              </motion.button>

                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                  <Wallet className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-slate-800">ICI Wallet Chat</h3>
                                  <p className="text-xs text-green-500 flex items-center">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                    Online
                                  </p>
                                </div>
                              </div>
                            </div>

                            <motion.button whileTap={{ scale: 0.9 }} className="p-2">
                              <MoreVertical className="w-6 h-6 text-slate-600" />
                            </motion.button>
                          </motion.div>

                          {/* Messages */}
                          <div
                            ref={chatRef}
                            className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50"
                            style={{ scrollBehavior: "smooth" }}
                          >
                            {chat.map((msg, index) => (
                              <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.05,
                                  ease: "easeOut",
                                }}
                                className={`flex ${msg.fromUser ? "justify-end" : "justify-start"}`}
                              >
                                {msg.isConfirmation ? (
                                  <motion.div
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    className="w-full max-w-[280px] mx-auto"
                                  >
                                    <div className="bg-white rounded-3xl shadow-lg border border-blue-100 overflow-hidden">
                                      <div className="p-5 text-center">
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                          <Wallet className="w-7 h-7 text-white" />
                                        </div>
                                        <h4 className="font-semibold text-slate-800 mb-2">Payment Request</h4>
                                        <p className="text-slate-600 text-sm mb-4">{msg.message}</p>
                                        <div className="bg-blue-50 rounded-2xl p-3 mb-4">
                                          <div className="flex items-center justify-center space-x-2">
                                            <Wallet className="w-4 h-4 text-blue-600" />
                                            <span className="text-blue-600 font-medium text-sm">ICI Network</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex border-t border-gray-100">
                                        <motion.button
                                          whileTap={{ scale: 0.95 }}
                                          onClick={() => handleConfirmPrompt(false)}
                                          className="flex-1 py-4 text-red-500 font-semibold active:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                                        >
                                          <X className="w-4 h-4" />
                                          <span>Cancel</span>
                                        </motion.button>
                                        <div className="w-px bg-gray-100"></div>
                                        <motion.button
                                          whileTap={{ scale: 0.95 }}
                                          onClick={() => handleConfirmPrompt(true)}
                                          className="flex-1 py-4 text-blue-500 font-semibold active:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                                        >
                                          <Send className="w-4 h-4" />
                                          <span>Send</span>
                                        </motion.button>
                                      </div>
                                    </div>
                                  </motion.div>
                                ) : (
                                  <div className={`max-w-[250px] ${msg.fromUser ? "ml-auto" : "mr-auto"}`}>
                                    {!msg.fromUser && (
                                      <div className="flex items-center space-x-2 mb-1 px-2">
                                        <span className="text-xs font-medium text-slate-600">{msg.sender}</span>
                                        <span className="text-xs text-slate-400">{msg.time}</span>
                                      </div>
                                    )}

                                    <motion.div
                                      whileHover={{ scale: 1.02 }}
                                      className={`px-4 py-3 rounded-3xl shadow-sm ${
                                        msg.fromUser
                                          ? "bg-blue-500 text-white rounded-br-lg"
                                          : msg.special
                                            ? "bg-green-500 text-white rounded-bl-lg"
                                            : "bg-white text-slate-800 rounded-bl-lg border border-gray-100"
                                      }`}
                                    >
                                      <p className="text-sm leading-relaxed">{msg.message}</p>
                                    </motion.div>

                                    {msg.fromUser && (
                                      <div className="flex justify-end items-center space-x-2 mt-1 px-2">
                                        <span className="text-xs text-slate-400">{msg.time}</span>
                                        <CheckCheck className="w-3 h-3 text-blue-500" />
                                      </div>
                                    )}
                                  </div>
                                )}
                              </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            <AnimatePresence>
                              {isTyping && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="flex justify-start"
                                >
                                  <div className="bg-white rounded-3xl rounded-bl-lg px-4 py-3 shadow-sm border border-gray-100">
                                    <div className="flex space-x-1">
                                      <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                                        className="w-2 h-2 bg-slate-400 rounded-full"
                                      />
                                      <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                                        className="w-2 h-2 bg-slate-400 rounded-full"
                                      />
                                      <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                                        className="w-2 h-2 bg-slate-400 rounded-full"
                                      />
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Input Area */}
                          <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white border-t border-gray-100 p-4"
                          >
                            <form onSubmit={handleSend} className="flex items-end space-x-3">
                              <div className="flex-1 relative">
                                <input
                                  type="text"
                                  value={input}
                                  onChange={(e) => setInput(e.target.value)}
                                  placeholder='Message or "/ici wallet send 400 to Satoshi"'
                                  className="w-full bg-gray-100 rounded-3xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                                />
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  type="button"
                                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
                                >
                                  <Paperclip className="w-5 h-5 text-slate-400" />
                                </motion.button>
                              </div>

                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                type="submit"
                                disabled={!input.trim()}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                                  input.trim() ? "bg-blue-500 text-white shadow-lg" : "bg-gray-200 text-gray-400"
                                }`}
                              >
                                <Send className="w-5 h-5" />
                              </motion.button>
                            </form>
                          </motion.div>

                          {/* Transaction Modal - Inside Frame */}
                          <AnimatePresence>
                            {modalOpen && transactionData && (
                              <motion.div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 rounded-[52px]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                <motion.div
                                  className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-[280px]"
                                  initial={{ scale: 0.8, y: 50, opacity: 0 }}
                                  animate={{ scale: 1, y: 0, opacity: 1 }}
                                  exit={{ scale: 0.8, y: 50, opacity: 0 }}
                                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                >
                                  <AnimatePresence mode="wait">
                                    {processingStep === null && (
                                      <motion.div
                                        key="confirmation"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="p-6"
                                      >
                                        <div className="text-center mb-6">
                                          <motion.div
                                            animate={{ rotate: [0, 5, -5, 0] }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                          >
                                            <Wallet className="w-8 h-8 text-white" />
                                          </motion.div>
                                          <h3 className="text-lg font-bold text-slate-800 mb-2">Confirm Transaction</h3>
                                          <p className="text-slate-600 text-sm">Review and confirm your payment</p>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                          <div className="bg-gray-50 rounded-2xl p-4">
                                            <div className="flex justify-between items-center mb-2">
                                              <span className="text-slate-600 text-sm">Amount</span>
                                              <span className="text-slate-800 font-bold text-lg">
                                                ${transactionData.amount}
                                              </span>
                                            </div>
                                            <div className="flex justify-between items-center mb-2">
                                              <span className="text-slate-600 text-sm">To</span>
                                              <span className="text-slate-800 font-medium">
                                                {transactionData.recipient}
                                              </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                              <span className="text-slate-600 text-sm">Network</span>
                                              <div className="flex items-center space-x-1">
                                                <Zap className="w-3 h-3 text-blue-600" />
                                                <span className="text-blue-600 font-medium text-sm">ICI Network</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="flex space-x-3">
                                          <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleCancel}
                                            className="flex-1 bg-gray-100 text-slate-700 py-3 rounded-2xl font-semibold active:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                                          >
                                            <X className="w-4 h-4" />
                                            <span>Cancel</span>
                                          </motion.button>
                                          <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleConfirm}
                                            className="flex-1 bg-blue-500 text-white py-3 rounded-2xl font-semibold active:bg-blue-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
                                          >
                                            <Shield className="w-4 h-4" />
                                            <span>Confirm</span>
                                          </motion.button>
                                        </div>
                                      </motion.div>
                                    )}

                                    {processingStep && (
                                      <motion.div
                                        key={processingStep}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="p-6 text-center"
                                      >
                                        <div className="mb-6">
                                          <motion.div
                                            animate={{
                                              rotate: processingStep === "success" ? [0, 360] : 0,
                                              scale: processingStep === "success" ? [1, 1.1, 1] : 1,
                                            }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                                              processingStep === "failed"
                                                ? "bg-red-100"
                                                : processingStep === "success"
                                                  ? "bg-green-100"
                                                  : "bg-blue-100"
                                            }`}
                                          >
                                            {processingStep === "failed" ? (
                                              <AlertCircle className="w-8 h-8 text-red-500" />
                                            ) : processingStep === "success" ? (
                                              <Check className="w-8 h-8 text-green-500" />
                                            ) : (
                                              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                                            )}
                                          </motion.div>

                                          <h3 className="text-lg font-bold text-slate-800 mb-2">
                                            {processingStep === "requesting" && "Requesting Approval"}
                                            {processingStep === "approved" && "Approved"}
                                            {processingStep === "sending" && "Sending Transaction"}
                                            {processingStep === "success" && "Transaction Complete"}
                                            {processingStep === "failed" && "Transaction Failed"}
                                          </h3>

                                          <p className="text-slate-600 text-sm">
                                            {processingStep === "failed"
                                              ? `Insufficient balance to send $${transactionData.amount}`
                                              : "Processing via ICI Network..."}
                                          </p>
                                        </div>

                                        {processingStep !== "failed" && processingStep !== "success" && (
                                          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                            <motion.div
                                              className="bg-blue-500 h-2 rounded-full"
                                              initial={{ width: "10%" }}
                                              animate={{
                                                width:
                                                  processingStep === "requesting"
                                                    ? "30%"
                                                    : processingStep === "approved"
                                                      ? "60%"
                                                      : processingStep === "sending"
                                                        ? "90%"
                                                        : "100%",
                                              }}
                                              transition={{ duration: 0.5 }}
                                            />
                                          </div>
                                        )}

                                        {(processingStep === "failed" || processingStep === "success") && (
                                          <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleCancel}
                                            className={`w-full py-3 rounded-2xl font-semibold transition-colors flex items-center justify-center space-x-2 ${
                                              processingStep === "failed"
                                                ? "bg-red-500 text-white active:bg-red-600"
                                                : "bg-green-500 text-white active:bg-green-600"
                                            }`}
                                          >
                                            {processingStep === "failed" ? (
                                              <>
                                                <X className="w-4 h-4" />
                                                <span>Close</span>
                                              </>
                                            ) : (
                                              <>
                                                <Check className="w-4 h-4" />
                                                <span>Done</span>
                                              </>
                                            )}
                                          </motion.button>
                                        )}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Article Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="space-y-8 max-w-2xl"
          >
            
          </motion.div>
        </div>
      </div>
    </div>
  )
}
