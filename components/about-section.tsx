"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import { FileTextIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="section bg-black/50 backdrop-blur-sm">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">About Me</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection direction="left">
            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25"
                animate={{ opacity: [0.25, 0.5, 0.25] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <div className="relative bg-black border border-purple-900/50 rounded-lg overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Gyanan Swaroop Kolasani"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-300">Software Engineer & Data Engineer</h3>

              <p className="text-gray-300">
                I'm a passionate software and data engineer with expertise in building scalable applications and turning
                complex data into actionable insights. Currently pursuing my Master's in Computer Science at California
                State University-Dominguez Hills.
              </p>

              <p className="text-gray-300">
                With experience as a Data Engineer at Trigent, I've architected and deployed scalable ETL pipelines,
                designed data warehouses, and engineered real-time data streaming architectures. I'm proficient in
                various programming languages and technologies including Python, C++, JavaScript, React, Node.js, and
                cloud platforms like AWS and Google Cloud.
              </p>

              <p className="text-gray-300">
                I'm dedicated to creating efficient, innovative solutions that solve real-world problems and drive
                business value. I'm constantly learning and exploring new technologies to stay at the forefront of the
                rapidly evolving tech landscape.
              </p>

              <div className="pt-4">
                <Button asChild className="bg-brandred hover:bg-brandred">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <FileTextIcon className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
