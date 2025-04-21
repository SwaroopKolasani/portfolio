"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TextSliderProps {
  texts: string[]
  interval?: number
}

export function TextSlider({ texts, interval = 3000 }: TextSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")

  useEffect(() => {
    const timer = setInterval(() => {
      if (direction === "forward") {
        if (currentIndex === texts.length - 1) {
          setDirection("backward")
          setCurrentIndex((prev) => prev - 1)
        } else {
          setCurrentIndex((prev) => prev + 1)
        }
      } else {
        if (currentIndex === 0) {
          setDirection("forward")
          setCurrentIndex((prev) => prev + 1)
        } else {
          setCurrentIndex((prev) => prev - 1)
        }
      }
    }, interval)

    return () => clearInterval(timer)
  }, [texts, interval, currentIndex, direction])

  return (
    <div className="h-[60px] md:h-[80px] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{
            x: direction === "forward" ? 100 : -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: direction === "forward" ? -100 : 100,
            opacity: 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto absolute w-full"
        >
          {texts[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
