"use client"

import { useState, useRef, useEffect } from "react"
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { FloatingCardProps } from "@/types/jsx"

export function FloatingCard({ children, className }: FloatingCardProps) {
  return (
    <div className={cn("relative group", className)}>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
      <div className="relative">
        {children}
      </div>
    </div>
  )
} 