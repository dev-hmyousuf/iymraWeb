"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Database, DollarSign, Globe, Lock, MessageCircle, Network, Shield, Smartphone, TrendingUp, Users } from "lucide-react"

export default function Component() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  // Updated technology tags for Iymra Labs
  const technologies = [
    { name: "Blockchain", x: "12%", y: "18%", size: "text-xs" },
    { name: "Web3", x: "32%", y: "12%", size: "text-sm" },
    { name: "End-to-End Encryption", x: "58%", y: "22%", size: "text-xs" },
    { name: "DeFi", x: "78%", y: "15%", size: "text-xs" },
    { name: "dApps", x: "85%", y: "38%", size: "text-sm" },
    { name: "Smart Contracts", x: "78%", y: "68%", size: "text-sm" },
    { name: "IPFS", x: "55%", y: "78%", size: "text-sm" },
    { name: "Cryptography", x: "28%", y: "82%", size: "text-sm" },
    { name: "Zero-Knowledge Proofs", x: "12%", y: "72%", size: "text-xs" },
    { name: "P2P Networks", x: "22%", y: "48%", size: "text-sm" },
  ]

  return (
    <div className="w-full min-h-screen bg-[#e8e6e3] p-2 sm:p-3 md:p-4 lg:p-6">
      <motion.div className="w-full" variants={containerVariants} initial="hidden" animate="visible">
        {/* Header - Responsive */}
        <motion.div
          className="mb-3 md:mb-4 flex flex-row justify-between items-start sm:items-center gap-2 sm:gap-0"
          variants={itemVariants}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-tight">Iymra Labs</h1>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 rounded-full">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-medium">Seeking Pre-Seed</span>
          </div>
        </motion.div>

        {/* Main Content - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 mb-3 md:mb-4">
          {/* Main Hero Card - Responsive */}
          <motion.div
            className="lg:col-span-7 relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#d4d0e8] via-[#c8c4e0] to-[#beb8d8] min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]"
            variants={itemVariants}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.4 }}
          >
            {/* Abstract Art Background - Responsive Circle */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 right-[5%] sm:right-[8%] md:right-[10%] transform -translate-y-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
                <div className="w-full h-full rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 opacity-90" />

                  {/* Iymra Labs Tech Icons - Responsive */}
                  <div className="absolute inset-0">
                    {/* Privacy Shield - Top Left */}
                    <motion.div
                      className="absolute top-[25%] left-[30%] w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-lg opacity-90 flex items-center justify-center"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </motion.div>

                    {/* Network Node - Top Right */}
                    <motion.div
                      className="absolute top-[20%] right-[25%] w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-green-300 to-emerald-500 rounded-full opacity-85 flex items-center justify-center"
                      animate={{
                        y: [-2, 2, -2],
                        opacity: [0.85, 1, 0.85],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Network className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </motion.div>

                    {/* Lock/Security - Center Left */}
                    <motion.div
                      className="absolute top-[45%] left-[20%] w-7 h-7 sm:w-9 sm:h-9 bg-gradient-to-b from-purple-400 to-indigo-600 rounded-lg opacity-80 flex items-center justify-center"
                      animate={{
                        rotate: [0, -3, 3, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.div>

                    {/* Wallet/Speed - Bottom Center */}
                    <motion.div
                      className="absolute bottom-[30%] left-[45%] w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-b from-yellow-300 to-orange-500 rounded-full opacity-90 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </motion.div>

                    {/* Globe/Decentralized - Right Center */}
                    <motion.div
                      className="absolute top-[40%] right-[20%] w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-b from-blue-400 to-cyan-600 rounded-full opacity-85 flex items-center justify-center"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.div>

                    {/* Database/Blockchain - Bottom Right */}
                    <motion.div
                      className="absolute bottom-[25%] right-[30%] w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-indigo-400 to-purple-600 rounded-lg opacity-80 flex items-center justify-center"
                      animate={{
                        y: [0, -3, 0],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                    >
                      <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </motion.div>

                    {/* Chat - Top Center */}
                    <motion.div
                      className="absolute top-[15%] left-[50%] w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-b from-pink-400 to-rose-500 rounded-full opacity-75 flex items-center justify-center transform -translate-x-1/2"
                      animate={{
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                    >
                      <MessageCircle className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                    </motion.div>

                    {/* Connecting Lines Between Icons */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                      <motion.path
                        d="M30,25 Q50,15 70,20"
                        stroke="white"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 2 }}
                      />
                      <motion.path
                        d="M20,45 Q35,35 50,40"
                        stroke="white"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 2.5 }}
                      />
                      <motion.path
                        d="M45,70 Q65,60 80,40"
                        stroke="white"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 3 }}
                      />
                    </svg>
                  </div>

                  {/* Vertical bars - representing data streams - Responsive */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-[1.5px] sm:w-[2px] bg-gradient-to-b from-white/50 via-white/30 to-transparent mx-[1px]"
                        style={{ height: `${Math.random() * 60 + 20}%` }}
                        animate={{
                          height: [
                            `${Math.random() * 60 + 20}%`,
                            `${Math.random() * 80 + 10}%`,
                            `${Math.random() * 60 + 20}%`,
                          ],
                        }}
                        transition={{
                          duration: 3 + Math.random(),
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Responsive */}
            <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-7">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-xs sm:max-w-sm md:max-w-md"
              >
                <div className="mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium">
                    Privacy-First Web3 Ecosystem
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[0.9] mb-2">
                  Iymra Labs —<br />
                  Pre-Seed Pitch Deck
                </h1>
                <p className="text-white/90 text-sm sm:text-base">
                  Seeking $50k - $100k to build privacy-first Web3 apps for emerging markets
                </p>
              </motion.div>

              <div className="flex justify-between items-end">
                <motion.div
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:rotate-45 transition-transform" />
                </motion.div>

                <motion.div
                  className="max-w-[140px] sm:max-w-xs text-right"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-tight">
                    $471B Web3 Social Market by 2034
                    <br />
                    52% CAGR Growth
                    <br />
                    <span className="text-white/80 text-xs">Focus on Asia & Africa</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Cards - Responsive */}
          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-4">
            {/* Market Opportunity Card - Responsive */}
            <motion.div
              className="bg-gradient-to-br from-[#f5e6d3] to-[#e8d5c4] rounded-2xl md:rounded-3xl p-4 md:p-5 relative overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[230px] lg:min-h-[260px]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient bars - Responsive */}
              <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 md:h-16 flex rounded-t-2xl md:rounded-t-3xl overflow-hidden">
                {Array.from({ length: 14 }).map((_, i) => {
                  const colors = [
                    "from-green-300 to-emerald-400",
                    "from-emerald-400 to-teal-400",
                    "from-teal-400 to-cyan-400",
                    "from-cyan-400 to-blue-400",
                    "from-blue-400 to-indigo-400",
                    "from-indigo-400 to-purple-400",
                  ]
                  return (
                    <motion.div
                      key={i}
                      className={`flex-1 bg-gradient-to-b ${colors[i % colors.length]} mx-[1px]`}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.02 + 0.3 }}
                      style={{ originY: 0 }}
                    />
                  )
                })}
              </div>

              <div className="relative z-10 pt-14 sm:pt-16 md:pt-20">
  <div className="flex items-center gap-2 mb-3">
    <TrendingUp className="w-5 h-5 text-gray-700" />
    <h2 className="text-xl font-semibold text-gray-900 leading-tight">
      Market Opportunity
    </h2>
  </div>

  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
    $471B Web3 Social Market by 2034 <br />
    52% CAGR Growth Rate
  </p>

  <div className="bg-white bg-opacity-20 rounded-2xl shadow-md p-4 flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <Smartphone className="w-5 h-5 text-indigo-600" />
      <span className="text-gray-800 text-base font-medium">
        35M+ crypto users in India
      </span>
    </div>
    <div className="flex items-center gap-3">
      <Users className="w-5 h-5 text-indigo-600" />
      <span className="text-gray-800 text-base font-medium">
        66% crypto awareness in Africa
      </span>
    </div>
    {/* Add more stacked insights below if needed */}
  </div>
</div>

            </motion.div>

            {/* Funding & Use of Funds Card - Responsive */}
            <motion.div
              className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl md:rounded-3xl p-4 md:p-5 relative overflow-hidden min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[220px]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Main content - Responsive */}
              <div className="relative z-10 h-full">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      <h3 className="text-white text-base sm:text-lg md:text-xl font-bold">$50K-$100K Pre-Seed</h3>
                    </div>
                    <p className="text-white/80 text-xs sm:text-sm">12-month runway • Mainnet launch</p>
                  </div>
                  <motion.div
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </motion.div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full"></div>
                      <span className="text-white/90 text-xs sm:text-sm">Development & Engineering</span>
                    </div>
                    <span className="text-white/80 text-xs sm:text-sm">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full"></div>
                      <span className="text-white/90 text-xs sm:text-sm">Security & Audits</span>
                    </div>
                    <span className="text-white/80 text-xs sm:text-sm">20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full"></div>
                      <span className="text-white/90 text-xs sm:text-sm">Marketing & Community</span>
                    </div>
                    <span className="text-white/80 text-xs sm:text-sm">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full"></div>
                      <span className="text-white/90 text-xs sm:text-sm">Operations & Reserve</span>
                    </div>
                    <span className="text-white/80 text-xs sm:text-sm">10%</span>
                  </div>
                </div>
              </div>

              {/* Vertical text - Responsive */}
              <div className="absolute right-2 md:right-3 top-4 bottom-4 flex items-center">
                <motion.p
                  className="text-white/60 text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wider transform rotate-90 whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Building the future of privacy
                </motion.p>
              </div>

              {/* Background effects */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full blur-xl" />
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-cyan-300 rounded-full blur-lg" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
          {/* Traction Card - Responsive */}
          <motion.div
            className="lg:col-span-3 bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-sm min-h-[140px] sm:min-h-[160px] md:min-h-[180px]"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-green-100 rounded-full text-xs sm:text-sm font-medium text-green-700">
                Traction
              </span>
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </div>
            <motion.span
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 block mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Pre-Revenue
            </motion.span>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Core products in development
              <br />Targeting 2025 launch
            </p>
          </motion.div>

          {/* Valuation Card - Responsive */}
          <motion.div
            className="lg:col-span-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl md:rounded-3xl p-4 md:p-5 text-white relative overflow-hidden min-h-[140px] sm:min-h-[160px] md:min-h-[180px]"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/20 rounded-full text-xs sm:text-sm font-medium">
                Target Markets
              </span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <p className="text-white/90 text-xs sm:text-sm">India & South Asia</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <p className="text-white/90 text-xs sm:text-sm">Southeast Asia</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <p className="text-white/90 text-xs sm:text-sm">Africa</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <p className="text-white/90 text-xs sm:text-sm">Latin America</p>
              </div>
            </div>
          </motion.div>

          {/* Technology Stack - Responsive */}
          <motion.div
            className="lg:col-span-5 relative min-h-[140px] sm:min-h-[160px] md:min-h-[180px] bg-white rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-sm border border-gray-100"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-3 left-3 z-20">
              <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-100 rounded-full text-xs sm:text-sm font-medium text-blue-700">
                Tech Stack
              </span>
            </div>

            <div className="relative w-full h-full pt-8 sm:pt-10">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`absolute bg-gray-50 hover:bg-white rounded-full px-2 py-1 sm:px-2.5 sm:py-1.5 ${tech.size} font-medium text-gray-800 shadow-md border border-gray-200 cursor-pointer transition-all whitespace-nowrap hover:shadow-lg z-10`}
                  style={{
                    left: tech.x,
                    top: tech.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: "-50%",
                    y: "-50%",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: "-50%",
                    y: "-50%",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06 + 0.8,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    zIndex: 20,
                  }}
                >
                  {tech.name}
                </motion.div>
              ))}

              {/* Center dot - Responsive */}
              <motion.div
                className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full shadow-md z-5"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 1.5,
                  type: "spring",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}