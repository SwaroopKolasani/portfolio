"use client"

import { AnimatedSection } from "./animated-section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectItem {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
  github?: string
  demo?: string
}

const projects: ProjectItem[] = [
  {
    title: "TRAIL-MAN",
    description:
      "Autonomous job application system that streamlines resume creation, job searching, and application processes using AI-driven workflows.",
    technologies: [
      "Python",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "OpenAI API",
      "AWS (S3, Lambda)",
      "Terraform",
      "Docker",
    ],
    highlights: [
      "Engineered an autonomous job application system that streamlines resume creation, job searching, and application processes using AI-driven workflows and advanced data processing, reducing job application time by 85%.",
      "Implemented intelligent resume tailoring algorithms that automatically customize resumes to match job descriptions with 91% keyword optimization, resulting in a 72% higher ATS pass rate.",
      "Developed a scalable architecture using React.js and Node.js, containerized with Docker for seamless deployment, integrated OpenAI API for resume enhancement, and implemented resume management with S3 storage that processes over 500 job applications daily with 99.8% reliability.",
    ],
    github: "https://github.com/SwaroopKolasani",
    demo: "https://demo.com",
  },
  {
    title: "BUG-SYNC",
    description:
      "AI-powered bug triage system that autonomously classifies, prioritizes, and assigns software bugs to appropriate developers.",
    technologies: [
      "Python",
      "FastAPI",
      "React.js",
      "Docker",
      "Kubernetes",
      "MCP",
      "OpenAI API",
      "Elasticsearch",
      "Redis",
      "Prometheus",
      "Grafana",
    ],
    highlights: [
      "Designed and implemented an agentic AI-powered bug triage system that autonomously classifies, prioritizes, and assigns software bugs to appropriate developers, reducing manual triage time by 78%.",
      "Achieved 92% correct classification rate and 87% appropriate developer assignment using a multi-agent architecture with specialized AI agents for different aspects of the triage process, leading to a 35% reduction in bug resolution time.",
      "Developed a scalable system using Model Context Protocol for agent communication, containerized with Docker/Kubernetes for cloud deployment, and integrated with bug tracking systems to process over 2,500 bugs daily with 99.5% system availability.",
    ],
    github: "https://github.com/SwaroopKolasani",
    demo: "https://demo.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section bg-black/50 backdrop-blur-sm">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">Featured Projects</h2>
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="h-full bg-black/60 backdrop-blur-sm border border-[#8E1616]/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-300">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-[#8E1616]/20 text-white hover:bg-[#8E1616]/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <p key={i} className="text-gray-300 text-sm">
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-4">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-[#8E1616]/50 text-white hover:bg-[#8E1616]/30"
                      >
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild className="bg-[#8E1616] hover:bg-[#7a1313]">
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
