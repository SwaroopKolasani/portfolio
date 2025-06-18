"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const formulas = [
    "f(x) = ∫g(t)dt",
    "E = mc²",
    "∇ × F = 0",
    "P(A|B) = P(B|A)P(A)/P(B)",
    "y = mx + b",
    "∑(x-μ)²/N",
    "F = G(m₁m₂)/r²",
    "∇ · F = 0",
    "∂u/∂t = α∇²u",
    "Ax = λx",
    "MSE = 1/n ∑(y-ŷ)²",
  ]

  useEffect(() => {
    // Simulate loading time - increased to 10 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    // Particle text settings
    const text = "GSK"
    ctx.font = "bold 90px Arial"
    ctx.fillStyle = "#8e1616"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)

    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Create particles
    const particles: Particle[] = []
    const particleSize = 2
    const particleSpacing = 4

    for (let y = 0; y < canvas.height; y += particleSpacing) {
      for (let x = 0; x < canvas.width; x += particleSpacing) {
        const index = (y * canvas.width + x) * 4
        if (data[index + 3] > 128) {
          // If pixel is not transparent
          const particle: Particle = {
            x: x,
            y: y,
            originX: x,
            originY: y,
            color: "#8e1616",
            size: particleSize,
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1,
            ease: 0.05 + Math.random() * 0.05,
          }
          particles.push(particle)
        }
      }
    }

    // Animation
    let animationFrameId: number
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        // Calculate distance from mouse
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100

        if (distance < maxDistance) {
          // Repel particles from mouse
          const force = (maxDistance - distance) / maxDistance
          particle.vx -= dx * force * 0.02
          particle.vy -= dy * force * 0.02
        } else {
          // Return to original position
          const dx = particle.originX - particle.x
          const dy = particle.originY - particle.y
          particle.vx += dx * particle.ease
          particle.vy += dy * particle.ease
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Dampen velocity
        particle.vx *= 0.95
        particle.vy *= 0.95

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size)
      }

      // Animate mouse position in a circular motion
      const time = Date.now() * 0.001
      mouseX = canvas.width / 2 + Math.cos(time) * 80
      mouseY = canvas.height / 2 + Math.sin(time) * 80

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute -inset-10 bg-[#8e1616]/10 blur-xl rounded-full animate-pulse"></div>
        <canvas ref={canvasRef} className="relative z-10"></canvas>
      </div>

      <div className="mt-12 text-center">
        <div className="text-2xl font-bold text-white mb-4">Loading Portfolio</div>
        <div className="flex justify-center space-x-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 rounded-full bg-[#8e1616]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="formula-container">
          <div className="formula-scroll">
            {formulas.map((formula, index) => (
              <span key={index} className="mx-4 text-[#8e1616]">
                {formula}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .formula-container {
          overflow: hidden;
          width: 100%;
          padding: 10px 0;
        }

        .formula-scroll {
          white-space: nowrap;
          animation: scroll 20s linear infinite;
          font-family: monospace;
          font-size: 16px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </motion.div>
  )
}

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  color: string
  size: number
  vx: number
  vy: number
  ease: number
}
