"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ResearchPublicationsSection } from "@/components/research-publications-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AnimatedBackground } from "@/components/animated-background"
import { QuoteSection } from "@/components/quote-section"
import { LoadingAnimation } from "@/components/loading-animation"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 7500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingAnimation />
      {isLoaded && (
        <main className="min-h-screen">
          <AnimatedBackground />
          <Navbar />
          <HeroSection />
          <QuoteSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <CertificationsSection />
          <ResearchPublicationsSection />
          <GallerySection />
          <ContactSection />
          <Footer />
          <ScrollToTop />
        </main>
      )}
    </>
  )
}
