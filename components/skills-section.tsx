"use client"

import type React from "react"

import { AnimatedSection } from "./animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CodeIcon, DatabaseIcon, ServerIcon, CloudIcon, TerminalIcon, BadgeIcon as CertificateIcon } from "lucide-react"

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: <CodeIcon className="h-6 w-6 text-primary" />,
    skills: ["C++", "Python", "JavaScript"],
  },
  {
    name: "Web Technologies",
    icon: <TerminalIcon className="h-6 w-6 text-primary" />,
    skills: ["JavaScript", "Node.js", "React.js"],
  },
  {
    name: "Cloud Technologies",
    icon: <CloudIcon className="h-6 w-6 text-primary" />,
    skills: ["AWS (EC2, S3, Glue, Lambda, Kafka)", "Google Cloud (BigQuery)"],
  },
  {
    name: "Databases",
    icon: <DatabaseIcon className="h-6 w-6 text-primary" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "Development Tools",
    icon: <ServerIcon className="h-6 w-6 text-primary" />,
    skills: ["Git & GitHub", "VS Code", "Google Colab", "Docker", "TensorFlow"],
  },
  {
    name: "Certifications",
    icon: <CertificateIcon className="h-6 w-6 text-primary" />,
    skills: ["AWS Associate Solution Architect", "AWS Associate Machine Learning Engineer", "Microsoft Power-BI"],
  },
]

// Update the styling for the dark theme
export function SkillsSection() {
  return (
    <section id="skills" className="section bg-black">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">Skills & Expertise</h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border-t-4 border-t-purple-600 bg-black/60 backdrop-blur-sm border border-purple-900/50">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-purple-500">{category.icon}</div>
                      <h3 className="text-xl font-bold ml-2 text-white">{category.name}</h3>
                    </div>

                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="flex items-center">
                          <motion.div
                            className="h-2 w-2 rounded-full bg-purple-500 mr-2"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                          />
                          <span className="text-gray-300">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
