"use client"

import { AnimatedSection } from "./animated-section"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { XIcon } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Conference presentation",
    category: "Events",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Hackathon team",
    category: "Events",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Award ceremony",
    category: "Awards",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Project demo",
    category: "Projects",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Workshop",
    category: "Events",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Coding session",
    category: "Projects",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Team building",
    category: "Events",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Certificate",
    category: "Awards",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <section id="gallery" className="section bg-black/50 backdrop-blur-sm">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">Gallery</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex justify-center flex-wrap gap-2 mt-8 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-[#8E1616] text-white"
                    : "bg-black/60 text-gray-300 hover:bg-[#8E1616]/20 hover:text-[#c13030]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="object-cover w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                    <span className="text-sm text-gray-300">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 bg-[#8E1616] rounded-full p-2 text-white z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <XIcon className="h-6 w-6" />
                </button>
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  className="max-h-[90vh] max-w-full object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 rounded-b-lg">
                  <p className="text-white font-medium">{selectedImage.alt}</p>
                  <span className="text-sm text-gray-300">{selectedImage.category}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
