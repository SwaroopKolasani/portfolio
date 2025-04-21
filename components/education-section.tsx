"use client"

import { AnimatedSection } from "./animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCapIcon, CalendarIcon, MapPinIcon, BookOpenIcon } from "lucide-react"
import { motion } from "framer-motion"

export function EducationSection() {
  return (
    <section id="education" className="section bg-black/50 backdrop-blur-sm">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">Education</h2>
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          <AnimatedSection delay={0.2}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden border-l-4 border-l-[#8E1616] bg-black/60 backdrop-blur-sm border border-[#8E1616]/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center">
                      <GraduationCapIcon className="h-6 w-6 text-[#8E1616] mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-white">Master's in Computer Science</h3>
                        <p className="text-[#c13030] font-medium">California State University-Dominguez Hills</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">May 2025</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">Carson, CA</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-300 mb-2">GPA: 3.5/4.00</p>

                    <h4 className="text-lg font-semibold mb-2 text-[#c13030]">Relevant Courses:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Design and Analysis of Algorithms",
                        "Fundamentals and Concepts of Programming Languages",
                        "Object-Oriented Analysis and Design",
                        "Cloud Computing",
                        "Software Project Planning",
                      ].map((course, index) => (
                        <li key={index} className="flex items-start">
                          <BookOpenIcon className="h-5 w-5 text-[#8E1616] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden border-l-4 border-l-[#8E1616] bg-black/60 backdrop-blur-sm border border-[#8E1616]/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center">
                      <GraduationCapIcon className="h-6 w-6 text-[#8E1616] mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-white">Bachelor of Technology in Computer Science</h3>
                        <p className="text-[#c13030] font-medium">Bapatla Engineering College</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">2019 - 2023</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">Bapatla, India</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2 text-[#c13030]">Relevant Courses:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Data Structures and Algorithms",
                        "Database Management Systems",
                        "Operating Systems",
                        "Computer Networks",
                        "Software Engineering",
                        "Web Technologies",
                      ].map((course, index) => (
                        <li key={index} className="flex items-start">
                          <BookOpenIcon className="h-5 w-5 text-[#8E1616] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
