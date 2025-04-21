"use client"

import { motion } from "framer-motion"
import { QuoteIcon } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function QuoteSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <QuoteIcon className="h-16 w-16 text-[#8E1616]/30 absolute -top-8 -left-4" />
              <blockquote className="text-2xl md:text-3xl font-medium text-white italic">
                "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't
                settle."
              </blockquote>
              <footer className="mt-4">
                <cite className="text-[#8E1616] font-medium not-italic">— Steve Jobs</cite>
              </footer>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
