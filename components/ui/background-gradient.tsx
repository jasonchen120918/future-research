"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white">
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }}></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute right-[20%] top-[20%] -z-10 h-[400px] w-[400px] rounded-full bg-primary/30 blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute left-[20%] top-[60%] -z-10 h-[300px] w-[300px] rounded-full bg-secondary/30 blur-[100px]"
      />
    </div>
  )
} 