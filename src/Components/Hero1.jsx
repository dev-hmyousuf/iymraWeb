'use client'

import logo from '../assets/logo/square_connect.png'
import { motion } from 'framer-motion'
import { Laptop, Smartphone, Search, BarChart } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNjZmQ4ZGMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute text-white opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Laptop size={48} />
        </motion.div>
        <motion.div
          className="absolute right-1/4 top-1/4 text-white opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Smartphone size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-white opacity-20"
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            rotate: [0, 270, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <Search size={48} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/3 text-white opacity-20"
          animate={{
            x: [0, -120, 0],
            y: [0, -80, 0],
            rotate: [0, -270, -360],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <BarChart size={48} />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Empowering Brands with Exceptional Digital Solutions
            </h1>
            <p className="max-w-2xl text-xl text-gray-200">
              At Connect Agency, we specialize in web and app development, SEO, and digital marketing. Let us help you take your business to new heights.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-100"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgb(255,255,255)" }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
              >
                View Our Services
              </motion.button>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative h-64 w-64"
            >
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-xl"></div>
              <img
                src={logo}
                alt="Tech Illustration"
                className="relative z-10 h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
