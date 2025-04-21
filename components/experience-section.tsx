"use client"

import { AnimatedSection } from "./animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Engineer",
    company: "Trigent",
    location: "Bangalore, IN",
    period: "Dec 2021 - June 2023",
    description: [
      "Architected and deployed 15+ scalable ETL pipelines using AWS Glue and Apache Airflow, processing 3TB+ of data daily while reducing processing time by 40% and maintaining 99.9% reliability.",
      "Designed and implemented a Snowflake data warehouse with optimized schema patterns, enabling analytics teams to reduce query execution time by 70% and supporting dashboard solutions for 150% business users.",
      "Engineered real-time data streaming architecture using AWS Kinesis and Lambda, delivering instant insights across 8 critical business applications while processing 80K+ events per minute with sub-second latency.",
      "Automated data quality validation framework with Python and SQL, reducing data defects by 85% and implementing comprehensive data governance strategies that ensured 100% regulatory compliance.",
    ],
  },
  {
    title: "International Student Representative",
    company: "Associated Students Incorporation",
    location: "Carson, CA",
    period: "July 2024 - May 2025",
    description: [
      "Resolved Student Issues: Successfully addressed GRE exam requirements, course leveling, and security concerns for 150+ international students.",
      'Organized Key Events: Led cultural and advocacy events, including Diwali celebrations and "Pizza with a Dean," providing students a platform to voice concerns.',
      "Advocated at CHESS 2025: Represented international students at California Higher Education Student Summit 2025, collaborating with student leaders to drive impactful initiatives.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section bg-black">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">Professional Experience</h2>
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden border-l-4 border-l-purple-600 bg-black/60 backdrop-blur-sm border border-purple-900/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-purple-300 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <BriefcaseIcon className="h-5 w-5 mr-2 text-purple-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{item}</span>
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
