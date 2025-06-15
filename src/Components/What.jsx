"use client"

import { motion } from "framer-motion"
import ArchitectureFlow from "./PitchDeck/ArchFlow"
import BusinessTimeline from "./PitchDeck/BusinessTimelime"
import FundingSection from "./PitchDeck/FundingUsage"
import ICIchat from "./PitchDeck/ICIchat"
import AdvancedMarketChart from "./PitchDeck/MarketChart"
import HeroComponent from "./PitchDeck/Hero"

const IymraLabsPitch = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
        {/* Floating Navigation */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2 flex items-center">
            <div className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full mr-2">Investor Preview</div>
            <a
              href="#fundingUsage"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Invest Now
            </a>
          </div>
        </div>

        {/* Modern Hero Section */}
        <div className="mt-[73px]"></div>
        <HeroComponent/>

        {/* Problem Statement Section */}
        <section id="problem" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerChildren}
              >
                <motion.h2 className="text-3xl font-bold text-gray-800 mb-6" variants={fadeIn}>
                  The Data Privacy Crisis
                </motion.h2>

                <motion.p className="text-gray-600 mb-4" variants={fadeIn}>
                  Mainstream Web2 apps exploit personal data without users' awareness. Google Photos is{" "}
                  <span className="italic">not</span> end-to-end encrypted, and Chrome collects data even when sync is
                  disabled.
                </motion.p>

                <motion.div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-6" variants={fadeIn}>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-lg p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Our Vision</p>
                      <p className="text-gray-600 mt-1">
                        Empower users with true data ownership through decentralized Web3 infrastructure
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.p className="text-gray-600" variants={fadeIn}>
                  Iymra eliminates centralized collection points, ensuring no provider or attacker can mine or monetize
                  user content. We provide a private, secure alternative to legacy chat, social, and payment apps.
                </motion.p>
              </motion.div>

              <motion.div
                className="bg-gray-800 rounded-2xl p-1 shadow-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl w-full h-96 flex flex-col">
                  <div className="flex p-4 border-b border-gray-800">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-center mb-6">
                      <div className="flex">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold mr-4">
                          IL
                        </div>
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                          DP
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-cyan-400 font-medium mb-2">Decentralized Storage</div>
                      <div className="text-gray-400 text-sm">User data stored in personal encrypted pods</div>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-gray-800/50 rounded-lg p-3 text-center border border-gray-700">
                          <div className="text-xs text-gray-400 mb-1">Node {item}</div>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-600/20 mx-auto flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ArchitectureFlow id="infrastructure" />

        <ICIchat />

        {/* Product Suite Section */}
        <section id="products" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Suite</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Modular privacy-first Web3 apps that interoperate under a single ecosystem
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Iymra Chat",
                  desc: "Decentralized messaging with E2E encryption and ICI commands",
                  color: "from-cyan-500 to-blue-600",
                },
                {
                  title: "Iymra Feeds",
                  desc: "Decentralized social feed with distributed storage",
                  color: "from-purple-500 to-indigo-600",
                },
                {
                  title: "Iymra Accounts",
                  desc: "Unified identity with passkeys and Web3 wallet login",
                  color: "from-amber-500 to-orange-500",
                },
                {
                  title: "Iymra Wallet",
                  desc: "Seedless multi-chain crypto wallet built into ecosystem",
                  color: "from-emerald-500 to-green-600",
                },
                {
                  title: "Iymra Games",
                  desc: "Community gaming with play-to-earn mechanics",
                  color: "from-rose-500 to-pink-600",
                },
                {
                  title: "Mini Apps",
                  desc: "Platform for third-party developers",
                  color: "from-violet-500 to-purple-600",
                },
              ].map((product, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.color}`}></div>
                  <div className="flex items-start">
                    <div
                      className={`bg-gradient-to-r ${product.color} text-white rounded-lg w-12 h-12 flex items-center justify-center mr-4 mt-1`}
                    >
                      <div className="bg-white/20 rounded w-6 h-6"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                      <p className="text-gray-600">{product.desc}</p>
                    </div>
                  </div>
                  <div
                    className={`absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-r ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Opportunity Section */}
        <AdvancedMarketChart />

        {/* Roadmap Section */}
        <BusinessTimeline />

        {/* Funding Section */}
        <FundingSection />
      </div>

     
    </div>
  )
}

export default IymraLabsPitch
