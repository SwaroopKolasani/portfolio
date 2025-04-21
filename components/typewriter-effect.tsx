"use client"

import { useState, useEffect, useRef } from "react"

interface TypewriterEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterType?: number
  delayAfterDelete?: number
}

export function TypewriterEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterType = 1500,
  delayAfterDelete = 500,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)

  const currentText = texts[textIndex]
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleTyping = () => {
      // If waiting, do nothing
      if (isWaiting) return

      // Set the new display text based on whether we're typing or deleting
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentText.length) {
          // Still typing the current text
          setDisplayText(currentText.substring(0, displayText.length + 1))
        } else {
          // Finished typing, wait before deleting
          setIsWaiting(true)
          timeoutRef.current = setTimeout(() => {
            setIsWaiting(false)
            setIsDeleting(true)
          }, delayAfterType)
          return
        }
      } else {
        // Deleting backward
        if (displayText.length > 0) {
          // Still deleting
          setDisplayText(displayText.substring(0, displayText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length)

          // Wait a bit before starting to type the next text
          setIsWaiting(true)
          timeoutRef.current = setTimeout(() => {
            setIsWaiting(false)
          }, delayAfterDelete)
          return
        }
      }

      // Schedule the next update
      timeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed)
    }

    // Start the typing effect
    timeoutRef.current = setTimeout(handleTyping, 100)

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [
    currentText,
    displayText,
    isDeleting,
    isWaiting,
    texts,
    textIndex,
    typingSpeed,
    deletingSpeed,
    delayAfterType,
    delayAfterDelete,
  ])

  return (
    <div className="h-[60px] md:h-[80px] flex items-center justify-center">
      <p className="text-lg text-gray-400 max-w-2xl">
        {displayText}
        <span className="inline-block w-[2px] h-[1em] bg-[#8e1616] ml-1 animate-blink"></span>
      </p>
    </div>
  )
}
