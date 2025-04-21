"use client"

import { useEffect, useRef } from "react"

interface SnowflakeCursorOptions {
  element?: HTMLElement
  color?: string
}

export function SnowflakeCursor({ color = "#8e1616" }: { color?: string }) {
  const cursorRef = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    // Initialize the cursor
    cursorRef.current = snowflakeCursor({ color })

    // Cleanup on unmount
    return () => {
      if (cursorRef.current) {
        cursorRef.current.destroy()
      }
    }
  }, [color])

  return null
}

function snowflakeCursor(options?: SnowflakeCursorOptions) {
  const hasWrapperEl = options && options.element
  const element = hasWrapperEl || document.body
  const color = options?.color || "#8e1616"

  let width = window.innerWidth
  let height = window.innerHeight
  const cursor = { x: width / 2, y: width / 2 }
  const particles: Particle[] = []
  let canvas: HTMLCanvasElement
  let context: CanvasRenderingContext2D
  let animationFrame: number

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

  // Re-initialise or destroy the cursor when the prefers-reduced-motion setting changes
  prefersReducedMotion.onchange = () => {
    if (prefersReducedMotion.matches) {
      destroy()
    } else {
      init()
    }
  }

  function init() {
    // Don't show the cursor trail if the user has prefers-reduced-motion enabled
    if (prefersReducedMotion.matches) {
      console.log("This browser has prefers reduced motion turned on, so the cursor did not init")
      return false
    }

    canvas = document.createElement("canvas")
    context = canvas.getContext("2d")!

    canvas.style.top = "0px"
    canvas.style.left = "0px"
    canvas.style.pointerEvents = "none"

    if (hasWrapperEl) {
      canvas.style.position = "absolute"
      element.appendChild(canvas)
      canvas.width = element.clientWidth
      canvas.height = element.clientHeight
    } else {
      canvas.style.position = "fixed"
      document.body.appendChild(canvas)
      canvas.width = width
      canvas.height = height
    }

    bindEvents()
    loop()
  }

  // Bind events that are needed
  function bindEvents() {
    element.addEventListener("mousemove", onMouseMove)
    element.addEventListener("touchmove", onTouchMove, { passive: true })
    element.addEventListener("touchstart", onTouchMove, { passive: true })
    window.addEventListener("resize", onWindowResize)
  }

  function onWindowResize() {
    width = window.innerWidth
    height = window.innerHeight

    if (hasWrapperEl) {
      canvas.width = element.clientWidth
      canvas.height = element.clientHeight
    } else {
      canvas.width = width
      canvas.height = height
    }
  }

  function onTouchMove(e: TouchEvent) {
    if (e.touches.length > 0) {
      for (let i = 0; i < e.touches.length; i++) {
        addParticle(e.touches[i].clientX, e.touches[i].clientY)
      }
    }
  }

  function onMouseMove(e: MouseEvent) {
    if (hasWrapperEl) {
      const boundingRect = element.getBoundingClientRect()
      cursor.x = e.clientX - boundingRect.left
      cursor.y = e.clientY - boundingRect.top
    } else {
      cursor.x = e.clientX
      cursor.y = e.clientY
    }

    addParticle(cursor.x, cursor.y)
  }

  function addParticle(x: number, y: number) {
    particles.push(new Particle(x, y, color))
  }

  function updateParticles() {
    if (particles.length === 0) {
      return
    }

    context.clearRect(0, 0, width, height)

    // Update
    for (let i = 0; i < particles.length; i++) {
      particles[i].update(context)
    }

    // Remove dead particles
    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].lifeSpan < 0) {
        particles.splice(i, 1)
      }
    }

    if (particles.length === 0) {
      context.clearRect(0, 0, width, height)
    }
  }

  function loop() {
    updateParticles()
    animationFrame = requestAnimationFrame(loop)
  }

  function destroy() {
    canvas.remove()
    cancelAnimationFrame(animationFrame)
    element.removeEventListener("mousemove", onMouseMove)
    element.removeEventListener("touchmove", onTouchMove)
    element.removeEventListener("touchstart", onTouchMove)
    window.removeEventListener("resize", onWindowResize)
  }

  /**
   * Particles
   */
  class Particle {
    initialLifeSpan: number
    lifeSpan: number
    velocity: { x: number; y: number }
    position: { x: number; y: number }
    color: string
    size: number
    rotation: number
    rotationSpeed: number

    constructor(x: number, y: number, color: string) {
      const lifeSpan = Math.floor(Math.random() * 60 + 80)
      this.initialLifeSpan = lifeSpan
      this.lifeSpan = lifeSpan
      this.velocity = {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
        y: 1 + Math.random(),
      }
      this.position = { x, y }
      this.color = color
      this.size = 10 + Math.random() * 10
      this.rotation = Math.random() * 360
      this.rotationSpeed = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2)
    }

    update(context: CanvasRenderingContext2D) {
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      this.lifeSpan--
      this.rotation += this.rotationSpeed

      this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75
      this.velocity.y -= Math.random() / 300

      const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0)
      const alpha = scale

      context.save()
      context.translate(this.position.x, this.position.y)
      context.rotate((this.rotation * Math.PI) / 180)
      context.scale(scale, scale)

      // Draw snowflake
      context.strokeStyle = this.color
      context.globalAlpha = alpha
      context.lineWidth = 2

      // Main axes
      context.beginPath()
      context.moveTo(0, -this.size)
      context.lineTo(0, this.size)
      context.stroke()

      context.beginPath()
      context.moveTo(-this.size, 0)
      context.lineTo(this.size, 0)
      context.stroke()

      // Diagonal axes
      context.beginPath()
      context.moveTo(-this.size * 0.7, -this.size * 0.7)
      context.lineTo(this.size * 0.7, this.size * 0.7)
      context.stroke()

      context.beginPath()
      context.moveTo(this.size * 0.7, -this.size * 0.7)
      context.lineTo(-this.size * 0.7, this.size * 0.7)
      context.stroke()

      // Small decorative lines on main axes
      const smallLineSize = this.size * 0.3

      // Top
      context.beginPath()
      context.moveTo(-smallLineSize, -this.size * 0.6)
      context.lineTo(smallLineSize, -this.size * 0.6)
      context.stroke()

      // Bottom
      context.beginPath()
      context.moveTo(-smallLineSize, this.size * 0.6)
      context.lineTo(smallLineSize, this.size * 0.6)
      context.stroke()

      // Left
      context.beginPath()
      context.moveTo(-this.size * 0.6, -smallLineSize)
      context.lineTo(-this.size * 0.6, smallLineSize)
      context.stroke()

      // Right
      context.beginPath()
      context.moveTo(this.size * 0.6, -smallLineSize)
      context.lineTo(this.size * 0.6, smallLineSize)
      context.stroke()

      context.restore()
    }
  }

  init()

  return {
    destroy: destroy,
  }
}
