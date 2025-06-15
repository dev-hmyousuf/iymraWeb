"use client"

import { motion } from "framer-motion"

export default function BusinessTimeline() {
  const milestones = [
    {
      id: "q1",
      quarter: "Q4 2025",
      title: "Mainnet-ready Wallet & Chat",
      isActive: true,
      content: [
        "Launch core secure chat app integrated with multi-chain wallet",
        "Establish accounts and encryption infrastructure",
        "Implement Iymra Command Interface (ICI)",
        "Peer-to-peer storage for messages and chat data"
      ],
    },
    {
      id: "q2",
      quarter: "Q1 2026",
      title: "DApp Marketplace & Social Feeds",
      isActive: false,
      content: [
        "Roll out mini-app store for developers",
        "Launch decentralized social feeds with creator pages",
        "Introduce cross-product integrations (e.g. tipping content)",
        "IPFS storage for feed content"
      ],
    },
    {
      id: "q3",
      quarter: "Mid-2026",
      title: "Beta Program & Security Hardening",
      isActive: false,
      content: [
        "Invite select communities to beta-test ecosystem",
        "Gather feedback on UX and permission models",
        "Third-party security audits",
        "Refine features and scalability"
      ],
    },
    {
      id: "q4",
      quarter: "Q4 2026",
      title: "Token Design & Launch",
      isActive: false,
      content: [
        "Finalize Iymra tokenomics",
        "Deploy token smart contracts",
        "Community token distribution (airdrops, grants)",
        "Governance and staking mechanisms"
      ],
    },
    {
      id: "q5",
      quarter: "2027+",
      title: "Global Rollout & Growth",
      isActive: false,
      content: [
        "Expand into new regions (Asia, Africa, LatAm)",
        "Onboard partners (games, creators, merchants)",
        "Scale infrastructure (Layer-2, CDN, identity)",
        "Support millions of users"
      ],
    },
  ]

  return (
    <div id="business-model" className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-12 md:mb-16">
        <h1 className="text-lg md:text-xl font-light">Roadmap</h1>
        <span className="text-lg md:text-xl font-light">Investor Deck - 08</span>
      </div>

      {/* Timeline Container */}
      <div className="max-w-8xl mx-auto">
        {/* Timeline Line - Hidden on mobile, visible on larger screens */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-600 transform -translate-y-1/2"></div>
          <div className="flex justify-between items-center relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                className={`w-4 h-4 rounded-full border-2 bg-black ${
                  milestone.isActive ? "border-orange-500" : "border-gray-400"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              className={`rounded-2xl p-6 md:p-6 border-2 ${
                milestone.isActive
                  ? "border-orange-500 bg-gradient-to-br from-orange-900/20 to-red-900/20"
                  : "border-gray-700 bg-gray-900/50"
              } backdrop-blur-sm`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {/* Quarter Header */}
              <div className="mb-4">
                <h2 className="text-lg border-b-2 md:text-xl font-light mb-2">{milestone.quarter}</h2>
                <h3 className="text-md md:text-lg font-medium leading-tight">{milestone.title}</h3>
              </div>

              {/* Content */}
              <div className="space-y-3">
                {milestone.content.map((item, itemIndex) => (
                  <motion.p
                    key={itemIndex}
                    className="text-xs md:text-sm text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + itemIndex * 0.05,
                      duration: 0.3,
                    }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>

              {/* Mobile Timeline Indicator */}
              <div className="lg:hidden mt-4 flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full ${milestone.isActive ? "bg-orange-500" : "bg-gray-500"}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline Dots */}
        <div className="lg:hidden flex justify-center items-center space-x-4 mt-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              className={`w-2 h-2 rounded-full ${milestone.isActive ? "bg-orange-500" : "bg-gray-500"}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}