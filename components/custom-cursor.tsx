"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleMouseEnterLink = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setLinkHovered(true)
      }
    }

    const handleMouseLeaveLink = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setLinkHovered(false)
      }
    }

    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseEnterLink)
    document.addEventListener("mouseout", handleMouseLeaveLink)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    // Add hover detection to all links and buttons
    const addHoverListeners = () => {
      const elements = document.querySelectorAll("a, button, [role='button']")
      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    // Initial setup
    addHoverListeners()

    // Setup mutation observer to detect new links/buttons added to the DOM
    const observer = new MutationObserver((mutations) => {
      addHoverListeners()
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // Rotate the snowflake
    const rotateInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseEnterLink)
      document.removeEventListener("mouseout", handleMouseLeaveLink)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      observer.disconnect()
      clearInterval(rotateInterval)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
      <motion.div
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
          x: position.x - 15,
          y: position.y - 15,
          rotate: rotation,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
        style={{
          position: "fixed",
          width: 30,
          height: 30,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main axes */}
          <line x1="60" y1="10" x2="60" y2="110" stroke="#8e1616" strokeWidth="4" />
          <line x1="10" y1="60" x2="110" y2="60" stroke="#8e1616" strokeWidth="4" />

          {/* Diagonal axes */}
          <line x1="25" y1="25" x2="95" y2="95" stroke="#8e1616" strokeWidth="4" />
          <line x1="95" y1="25" x2="25" y2="95" stroke="#8e1616" strokeWidth="4" />

          {/* Small decorative lines on main axes */}
          <line x1="50" y1="20" x2="70" y2="20" stroke="#8e1616" strokeWidth="3" />
          <line x1="50" y1="100" x2="70" y2="100" stroke="#8e1616" strokeWidth="3" />
          <line x1="20" y1="50" x2="20" y2="70" stroke="#8e1616" strokeWidth="3" />
          <line x1="100" y1="50" x2="100" y2="70" stroke="#8e1616" strokeWidth="3" />

          {/* Small decorative lines on diagonal axes */}
          <line x1="35" y1="35" x2="45" y2="45" stroke="#8e1616" strokeWidth="3" />
          <line x1="75" y1="75" x2="85" y2="85" stroke="#8e1616" strokeWidth="3" />
          <line x1="35" y1="85" x2="45" y2="75" stroke="#8e1616" strokeWidth="3" />
          <line x1="75" y1="45" x2="85" y2="35" stroke="#8e1616" strokeWidth="3" />

          {/* Center circle */}
          <circle cx="60" cy="60" r="8" fill="#8e1616" />
        </svg>
      </motion.div>

      {/* Snowflake trail effect */}
      <motion.div
        className="snowflake-trail"
        animate={{
          opacity: hidden ? 0 : 0.3,
          x: position.x - 15,
          y: position.y - 15,
          scale: 0.7,
          rotate: rotation - 30,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
          mass: 0.8,
          delay: 0.1,
        }}
        style={{
          position: "fixed",
          width: 30,
          height: 30,
          pointerEvents: "none",
          zIndex: 9998,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main axes */}
          <line x1="60" y1="10" x2="60" y2="110" stroke="#8e1616" strokeWidth="4" />
          <line x1="10" y1="60" x2="110" y2="60" stroke="#8e1616" strokeWidth="4" />

          {/* Diagonal axes */}
          <line x1="25" y1="25" x2="95" y2="95" stroke="#8e1616" strokeWidth="4" />
          <line x1="95" y1="25" x2="25" y2="95" stroke="#8e1616" strokeWidth="4" />

          {/* Center circle */}
          <circle cx="60" cy="60" r="8" fill="#8e1616" />
        </svg>
      </motion.div>
    </>
  )
}
