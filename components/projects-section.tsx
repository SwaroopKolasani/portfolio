"use client"

import { AnimatedSection } from "./animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLinkIcon, ArrowRightIcon, CodeIcon, LayersIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

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
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="section bg-black/50 backdrop-blur-sm">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">Featured Projects</h2>
        </AnimatedSection>

        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveProject(activeProject === index ? null : index)}
                  className="cursor-pointer"
                >
                  <Card className="h-full bg-black/60 backdrop-blur-sm border border-[#8e1616]/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6 relative">
                        <div className="absolute top-0 right-0 w-24 h-24">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            className="text-[#8e1616]/20"
                          >
                            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
                          </svg>
                        </div>

                        <div className="flex items-center mb-4">
                          <div className="bg-[#8e1616]/20 p-3 rounded-full mr-4">
                            <CodeIcon className="h-6 w-6 text-[#8e1616]" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        </div>

                        <p className="text-gray-300 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 5).map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-[#8e1616]/20 text-white hover:bg-[#8e1616]/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 5 && (
                            <Badge variant="secondary" className="bg-[#8e1616]/20 text-white hover:bg-[#8e1616]/30">
                              +{project.technologies.length - 5} more
                            </Badge>
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex gap-3">
                            {project.github && (
                              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-white hover:text-[#8e1616] hover:bg-[#8e1616]/10"
                                >
                                  <GithubIcon className="h-5 w-5" />
                                </Button>
                              </Link>
                            )}
                            {project.demo && (
                              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="text-white hover:text-[#8e1616] hover:bg-[#8e1616]/10"
                                >
                                  <ExternalLinkIcon className="h-5 w-5" />
                                </Button>
                              </Link>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#8e1616] hover:bg-[#8e1616]/10"
                            onClick={(e) => {
                              e.stopPropagation()
                              setActiveProject(activeProject === index ? null : index)
                            }}
                          >
                            {activeProject === index ? "Hide Details" : "View Details"}
                            <ArrowRightIcon
                              className={`ml-2 h-4 w-4 transition-transform ${
                                activeProject === index ? "rotate-90" : ""
                              }`}
                            />
                          </Button>
                        </div>
                      </div>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: activeProject === index ? "auto" : 0,
                          opacity: activeProject === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-[#8e1616]/5 border-t border-[#8e1616]/20"
                      >
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <LayersIcon className="h-5 w-5 text-[#8e1616] mr-2" />
                            <h4 className="text-lg font-semibold text-white">Key Highlights</h4>
                          </div>
                          <ul className="space-y-3">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <div className="h-2 w-2 rounded-full bg-[#8e1616] mt-2 mr-3 flex-shrink-0" />
                                <p className="text-gray-300 text-sm">{highlight}</p>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-white mb-3">All Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="bg-[#8e1616]/20 text-white hover:bg-[#8e1616]/30"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 flex justify-end">
                            {project.demo && (
                              <Button asChild className="bg-[#8e1616] hover:bg-[#7a1313]">
                                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                                  View Live Demo
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
