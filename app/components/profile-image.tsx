"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export function ProfileImage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative aspect-square w-full max-w-xs mx-auto"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-rose-200/60 to-rose-300/60 rounded-2xl"
        animate={{
          rotate: isHovered ? -6 : -3,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-gray-200/60 to-gray-300/60 rounded-2xl"
        animate={{
          rotate: isHovered ? 3 : 1.5,
          scale: isHovered ? 1.01 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Main Image Container */}
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm"
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_24-12-2024_213821_www.instagram.com-320BWyR3LEu0aGGnwklfa7GbtiTtuP.jpeg"
          alt="Profile"
          width={500}
          height={500}
          className="object-cover w-full h-full transition-all duration-700"
          style={{
            filter: isHovered
              ? "grayscale(0%) contrast(1.05) brightness(1.05) saturate(1.1)"
              : "grayscale(80%) contrast(1.02)",
          }}
          priority
        />

        {/* Interactive Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent opacity-0 transition-opacity duration-500"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 text-right">
            <p className="text-sm font-medium tracking-wide">Musician & Developer</p>
            <p className="text-xs opacity-90 mt-0.5 italic">Creating digital experiences</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Elements - Repositioned */}
      <motion.div
        className="absolute -top-2 -right-2 w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center shadow-md"
        animate={{
          y: isHovered ? -3 : 0,
          rotate: isHovered ? 6 : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-rose-600 text-xs font-medium">AI Dev</span>
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -left-2 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-md"
        animate={{
          y: isHovered ? 3 : 0,
          rotate: isHovered ? -6 : 0,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-gray-600 text-xs font-medium text-center">
          Creative
          <br />
          Soul
        </span>
      </motion.div>

      {/* Accent Elements - Smaller */}
      <motion.div
        className="absolute top-1/2 -right-1 w-3 h-3 bg-rose-400 rounded-full hidden md:flex items-center justify-center shadow-sm"
        animate={{
          x: isHovered ? 2 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute top-1/4 -left-1 w-2 h-2 bg-gray-300 rounded-full hidden md:block"
        animate={{
          x: isHovered ? -2 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
