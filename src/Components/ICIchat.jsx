import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const USER_WALLET = "0xATHEX1234...5678";
const USER_BALANCE = 1000; // Simulated user wallet balance

const ICIchat = () => {
  const [showChat, setShowChat] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([
    {
      id: 1,
      sender: "Satoshi",
      wallet: "0xSATOSHI000...1111",
      time: "2:30 PM",
      message: "Hey Brother 🌐",
      fromUser: false,
    },
    {
      id: 2,
      sender: "AtheX",
      wallet: USER_WALLET,
      time: "2:31 PM",
      message: "Yes Bro 🚀",
      fromUser: true,
    },
    {
      id: 3,
      sender: "Satoshi",
      wallet: "0xSATOSHI000...1111",
      time: "2:32 PM",
      message: "I need $400 instant for education fee's 💬",
      fromUser: false,
    },
  ]);
  const [transactionData, setTransactionData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [processingStep, setProcessingStep] = useState(null);
  const [pendingTransaction, setPendingTransaction] = useState(null);
  const chatRef = useRef(null);

  // Scroll to bottom on new chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  // Parse input for /ici wallet send command
  const parseCommand = (text) => {
    const regex = /^\/ici wallet send (\d+) to (\w+)$/i;
    const match = text.trim().match(regex);
    if (match) {
      return {
        amount: Number(match[1]),
        recipient: match[2],
      };
    }
    return null;
  };

  // Map recipient names to wallet addresses (mock)
  const recipientWallets = {
    Satoshi: "0xSATOSHI000...1111",
    AtheX: USER_WALLET,
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Check for command
    const command = parseCommand(input);
    if (command) {
      const { amount, recipient } = command;
      if (!recipientWallets[recipient]) {
        alert(`Recipient wallet for ${recipient} not found!`);
        return;
      }

      const transaction = {
        amount,
        recipient,
        senderWallet: USER_WALLET,
        recipientWallet: recipientWallets[recipient],
      };

      setPendingTransaction(transaction);
      
      // Add system confirmation message
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      
      setChat(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: "System",
          wallet: "",
          time: formattedTime,
          message: `Do you want to send $${amount} to ${recipient}?`,
          fromUser: false,
          isConfirmation: true,
          transactionData: transaction
        }
      ]);
      
      setInput("");
      return;
    }

    // Normal chat message
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const newMsg = {
      id: Date.now(),
      sender: "AtheX",
      wallet: USER_WALLET,
      time: formattedTime,
      message: input,
      fromUser: true,
    };

    setChat((prev) => [...prev, newMsg]);
    setInput("");
  };

  const handleConfirmPrompt = (confirm) => {
    if (confirm && pendingTransaction) {
      setTransactionData(pendingTransaction);
      setModalOpen(true);
    }
    setPendingTransaction(null);
  };

  // Modal confirm handler
  const handleConfirm = () => {
    if (!transactionData) return;
    if (transactionData.amount > USER_BALANCE) {
      setProcessingStep("failed");
      return;
    }
    setProcessingStep("requesting");

    setTimeout(() => {
      setProcessingStep("approved");
      setTimeout(() => {
        setProcessingStep("sending");
        setTimeout(() => {
          setProcessingStep("success");

          // Add success message to chat
          const now = new Date();
          const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          setChat((prev) => [
            ...prev,
            {
              id: Date.now(),
              sender: "System",
              wallet: "",
              time: formattedTime,
              message: `You have sent $${transactionData.amount} to ${transactionData.recipient} ✅`,
              fromUser: false,
              special: true,
            },
          ]);
          setTimeout(() => {
            setModalOpen(false);
            setProcessingStep(null);
            setTransactionData(null);
          }, 1500);
        }, 2000);
      }, 1500);
    }, 2000);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setProcessingStep(null);
    setTransactionData(null);
  };

  return (
    <section className="py-16 bg-white dark:bg-zinc-900 min-h-[300px]">
      <div className="container max-w-3xl mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ICI <span className="text-indigo-600">Wallet</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Integrated with Iymra Chat for seamless transactions
          </p>
        </motion.div>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowChat(!showChat)}
          className="mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
        >
          {showChat ? "Hide ICI Chat" : "Test ICI in Iymra Chat"}
        </motion.button>

        {/* Chat Container - Now using layout to prevent space when hidden */}
        <motion.div
          layout
          className="w-full"
          animate={{
            height: showChat ? "auto" : 0,
            opacity: showChat ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl shadow-lg flex flex-col h-[600px] overflow-hidden border border-gray-200 dark:border-zinc-700">
            {/* Chat Header */}
            <div className="bg-indigo-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold">
                  ICI
                </div>
                <div>
                  <h3 className="font-semibold">Iymra Chat</h3>
                  <p className="text-xs text-indigo-100">Integrated with ICI Wallet</p>
                </div>
              </div>
              <button 
                onClick={() => setShowChat(false)}
                className="text-white hover:text-indigo-200 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat messages */}
            <div
              ref={chatRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth"
            >
              {chat.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex flex-col ${
                    msg.fromUser ? "items-end ml-auto" : "items-start mr-auto"
                  } ${msg.isConfirmation ? "max-w-full" : "max-w-[75%]"}`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {msg.wallet && (
                      <div className="text-xs font-mono bg-indigo-100 dark:bg-indigo-900 px-2 py-0.5 rounded">
                        {msg.wallet}
                      </div>
                    )}
                    <span
                      className={`text-sm font-semibold ${
                        msg.fromUser ? "text-indigo-600" : "text-indigo-800"
                      }`}
                    >
                      {msg.sender}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {msg.time}
                    </span>
                  </div>
                  {msg.isConfirmation ? (
                    <div className="w-full max-w-[85%] mx-auto">
                      <div className="bg-white dark:bg-zinc-700 rounded-xl overflow-hidden shadow-md">
                        <div className="p-4 text-center text-gray-800 dark:text-white">
                          {msg.message}
                        </div>
                        <div className="flex border-t border-gray-200 dark:border-zinc-600">
                          <button
                            onClick={() => handleConfirmPrompt(false)}
                            className="flex-1 py-3 text-red-500 font-medium hover:bg-gray-100 dark:hover:bg-zinc-600 transition"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleConfirmPrompt(true)}
                            className="flex-1 py-3 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-gray-100 dark:hover:bg-zinc-600 transition"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                        Via ICI Wallet
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`px-5 py-3 rounded-xl text-sm shadow-sm break-words ${
                        msg.fromUser
                          ? "bg-indigo-600 text-white rounded-br-none"
                          : msg.special
                          ? "bg-green-600 text-white rounded-bl-none font-semibold"
                          : "bg-white dark:bg-zinc-700 text-gray-900 dark:text-white rounded-tl-none"
                      }`}
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {msg.message}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Transaction Preview Bar */}
            {transactionData && !modalOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t dark:border-zinc-700 p-4 bg-white dark:bg-zinc-900 flex justify-between items-center"
              >
                <div className="text-sm text-gray-800 dark:text-white font-medium">
                  Send <span className="text-indigo-600">${transactionData.amount}</span> to{" "}
                  <span className="text-indigo-600">{transactionData.recipient}</span>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-full hover:bg-indigo-700 transition"
                >
                  Sign & Confirm
                </button>
              </motion.div>
            )}

            {/* Input bar */}
            <form
              onSubmit={handleSend}
              className="border-t dark:border-zinc-700 p-4 flex items-center gap-2 bg-white dark:bg-zinc-900"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Type message or "/ici wallet send 400 to Satoshi"'
                className="flex-1 bg-white dark:bg-zinc-700 text-gray-900 dark:text-white rounded-full px-4 py-2 border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && transactionData && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden w-full max-w-md"
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl w-full flex flex-col">
                  {/* Window controls */}
                  <div className="flex p-4 border-b border-gray-800">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {processingStep === null && (
                      <motion.div
                        key="confirmation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-6"
                      >
                        <div className="flex justify-center mb-6">
                          <div className="flex flex-col items-center">
                            <motion.div 
                              className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold mb-4"
                              animate={{ 
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.05, 1]
                              }}
                              transition={{ 
                                duration: 0.5,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.4, 0.6]
                              }}
                            >
                              ICI
                            </motion.div>
                            <h3 className="text-lg font-semibold text-white mb-1">
                              Transaction Confirmation
                            </h3>
                            <div className="text-sm text-gray-400 mb-6">
                              Via ICI Wallet
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4 mb-8">
                          <motion.div 
                            className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            <span className="text-gray-400">Amount</span>
                            <span className="text-white font-medium">${transactionData.amount}</span>
                          </motion.div>
                          <motion.div 
                            className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="text-gray-400">From</span>
                            <span className="text-white font-mono text-sm">{transactionData.senderWallet}</span>
                          </motion.div>
                          <motion.div 
                            className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <span className="text-gray-400">To</span>
                            <span className="text-white font-mono text-sm">{transactionData.recipientWallet}</span>
                          </motion.div>
                        </div>

                        <div className="flex justify-between gap-4">
                          <motion.button
                            onClick={handleCancel}
                            className="flex-1 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Cancel
                          </motion.button>
                          <motion.button
                            onClick={handleConfirm}
                            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Confirm
                          </motion.button>
                        </div>
                      </motion.div>
                    )}

                    {/* Processing Steps */}
                    {processingStep && (
                      <motion.div
                        key={processingStep}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 text-center text-white"
                      >
                        {processingStep === "failed" ? (
                          <>
                            <motion.div 
                              className="flex justify-center mb-4"
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                            >
                              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                            </motion.div>
                            <motion.p 
                              className="mb-4 text-red-400 font-semibold"
                              initial={{ y: 10 }}
                              animate={{ y: 0 }}
                            >
                              Insufficient balance to send ${transactionData.amount}
                            </motion.p>
                            <motion.button
                              onClick={handleCancel}
                              className="bg-red-600 px-5 py-3 rounded-lg hover:bg-red-700 transition w-full"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Close
                            </motion.button>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-center mb-6">
                              <div className="flex flex-col items-center">
                                <motion.div 
                                  className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold mb-4"
                                  animate={{ 
                                    rotate: processingStep === "success" ? [0, 360] : 0,
                                    scale: processingStep === "success" ? [1, 1.1, 1] : 1
                                  }}
                                  transition={{ 
                                    duration: processingStep === "success" ? 0.8 : 0,
                                    ease: "easeInOut"
                                  }}
                                >
                                  {processingStep === "success" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  ) : (
                                    "ICI"
                                  )}
                                </motion.div>
                                <motion.h3 
                                  className="text-lg font-semibold text-white mb-1"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                >
                                  {processingStep === "requesting" && "Requesting Approval"}
                                  {processingStep === "approved" && "Approved"}
                                  {processingStep === "sending" && "Sending Transaction"}
                                  {processingStep === "success" && "Transaction Complete"}
                                </motion.h3>
                                <div className="text-sm text-gray-400 mb-6">
                                  Via ICI Wallet
                                </div>
                              </div>
                            </div>

                            <motion.div
                              className="mb-8"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              {processingStep === "requesting" && (
                                <div className="space-y-4">
                                  <div className="text-gray-400">Waiting for wallet confirmation...</div>
                                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                    <motion.div 
                                      className="bg-indigo-500 h-2 rounded-full"
                                      initial={{ width: '10%' }}
                                      animate={{ width: ['10%', '40%', '60%', '40%'] }}
                                      transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                      }}
                                    />
                                  </div>
                                </div>
                              )}
                              {processingStep === "approved" && (
                                <div className="space-y-4">
                                  <motion.div 
                                    className="text-green-400"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                  >
                                    ✓ Wallet approved the transaction
                                  </motion.div>
                                  <div className="w-full bg-gray-700 rounded-full h-2">
                                    <motion.div 
                                      className="bg-indigo-500 h-2 rounded-full"
                                      initial={{ width: '40%' }}
                                      animate={{ width: '70%' }}
                                      transition={{ duration: 0.5 }}
                                    />
                                  </div>
                                </div>
                              )}
                              {processingStep === "sending" && (
                                <div className="space-y-4">
                                  <div className="text-gray-400">Broadcasting transaction to network...</div>
                                  <div className="w-full bg-gray-700 rounded-full h-2">
                                    <motion.div 
                                      className="bg-indigo-500 h-2 rounded-full"
                                      initial={{ width: '70%' }}
                                      animate={{ width: '90%' }}
                                      transition={{ duration: 0.5 }}
                                    />
                                  </div>
                                </div>
                              )}
                              {processingStep === "success" && (
                                <div className="space-y-4">
                                  <motion.div 
                                    className="text-green-400"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                  >
                                    ✓ Transaction confirmed on chain
                                  </motion.div>
                                  <div className="w-full bg-gray-700 rounded-full h-2">
                                    <motion.div 
                                      className="bg-green-500 h-2 rounded-full"
                                      initial={{ width: '90%' }}
                                      animate={{ width: '100%' }}
                                      transition={{ duration: 0.5 }}
                                    />
                                  </div>
                                  <motion.div 
                                    className="pt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                  >
                                    <div className="text-sm text-gray-400">Sent ${transactionData.amount} to {transactionData.recipient}</div>
                                  </motion.div>
                                </div>
                              )}
                            </motion.div>

                            {processingStep !== "success" && (
                              <motion.div 
                                className="text-xs text-gray-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                              >
                                Processing via ICI Network...
                              </motion.div>
                            )}
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ICIchat;