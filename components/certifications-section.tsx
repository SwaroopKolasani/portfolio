"use client"

import { AnimatedSection } from "./animated-section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AwardIcon, CalendarIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

interface CertificationItem {
  title: string
  issuer: string
  date: string
  description: string
  skills: string[]
  credentialLink?: string
}

const certifications: CertificationItem[] = [
  {
    title: "AWS Associate Solution Architect",
    issuer: "Amazon Web Services",
    date: "June 2023",
    description:
      "Validated expertise in designing distributed systems on AWS, demonstrating knowledge of AWS services, security best practices, and cost optimization strategies.",
    skills: ["AWS", "Cloud Architecture", "Security", "Networking", "Cost Optimization"],
    credentialLink: "https://aws.amazon.com/certification/",
  },
  {
    title: "AWS Associate Machine Learning Engineer",
    issuer: "Amazon Web Services",
    date: "August 2023",
    description:
      "Certified in designing, implementing, and maintaining machine learning solutions on AWS, showcasing proficiency in data engineering, exploratory data analysis, and ML modeling.",
    skills: ["Machine Learning", "AWS SageMaker", "Data Engineering", "Model Deployment", "MLOps"],
    credentialLink: "https://aws.amazon.com/certification/",
  },
  {
    title: "Microsoft Power-BI",
    issuer: "Microsoft",
    date: "January 2023",
    description:
      "Demonstrated proficiency in creating and sharing interactive data visualizations, dashboards, and business intelligence solutions using Microsoft Power BI.",
    skills: ["Data Visualization", "Business Intelligence", "DAX", "Data Modeling", "Report Design"],
    credentialLink: "https://learn.microsoft.com/en-us/certifications/",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "March 2023",
    description:
      "Validated skills in building and training neural networks using TensorFlow, including computer vision, NLP, and time series forecasting applications.",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    credentialLink: "https://www.tensorflow.org/certificate",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="section bg-black">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">Certifications</h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full bg-black/60 backdrop-blur-sm border border-[#8E1616]/50">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <AwardIcon className="h-6 w-6 text-[#8E1616] mr-2" />
                      <CardTitle className="text-xl text-white">{cert.title}</CardTitle>
                    </div>
                    <div className="flex items-center text-gray-400 mb-2">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    <CardDescription className="text-gray-300">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-[#8E1616]/20 text-[#c13030] hover:bg-[#8E1616]/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  {cert.credentialLink && (
                    <CardFooter>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-[#8E1616]/50 text-[#c13030] hover:bg-[#8E1616]/10"
                      >
                        <Link href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="mr-2 h-4 w-4" />
                          View Credential
                        </Link>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
