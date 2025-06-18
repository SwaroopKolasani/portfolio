"use client"

import { AnimatedSection } from "./animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BookOpenIcon, CalendarIcon, UsersIcon, TrendingUpIcon } from "lucide-react"

interface ResearchItem {
  title: string
  status: "ongoing" | "published" | "under-review"
  description: string
  keyFindings: string[]
  technologies: string[]
  timeline: string
  collaborators?: string[]
}

const researchPublications: ResearchItem[] = [
  {
    title: "COGNEX | COGNitive EXperience Modeling through Real-Time Strategic Pattern Inference",
    status: "ongoing",
    description:
      "Developing an advanced framework for real-time cognitive pattern learning that infers and models strategic thought processes during agent-to-agent and human-agent interactions.",
    keyFindings: [
      "Achieved 73% accuracy in predicting opponent strategies within 50 interaction cycles using LSTM networks",
      "Implemented inverse reinforcement learning algorithms to model strategic decision-making patterns",
      "Developed real-time pattern inference system capable of processing 1000+ interactions per second",
      "Created novel cognitive modeling framework that adapts to different strategic contexts and environments",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "LSTM Networks",
      "Inverse Reinforcement Learning",
      "Real-time Processing",
      "Strategic AI",
      "Pattern Recognition",
      "Cognitive Modeling",
    ],
    timeline: "2025 - Present",
  },
]

export function ResearchPublicationsSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
      case "published":
        return "bg-green-500/20 text-green-300 border-green-500/50"
      case "under-review":
        return "bg-blue-500/20 text-blue-300 border-blue-500/50"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/50"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ongoing":
        return <TrendingUpIcon className="h-4 w-4" />
      case "published":
        return <BookOpenIcon className="h-4 w-4" />
      case "under-review":
        return <CalendarIcon className="h-4 w-4" />
      default:
        return <BookOpenIcon className="h-4 w-4" />
    }
  }

  return (
    <section id="research" className="section bg-black">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">Research Publications</h2>
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {researchPublications.map((research, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="overflow-hidden border-l-4 border-l-[#8e1616] bg-black/60 backdrop-blur-sm border border-[#8e1616]/50">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className={`${getStatusColor(research.status)} border`}>
                            {getStatusIcon(research.status)}
                            <span className="ml-1 capitalize">{research.status.replace("-", " ")}</span>
                          </Badge>
                          <div className="flex items-center text-gray-400">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            <span className="text-sm">{research.timeline}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl text-white mb-2">{research.title}</CardTitle>
                        <CardDescription className="text-gray-300">{research.description}</CardDescription>
                      </div>
                    </div>

                    {research.collaborators && (
                      <div className="flex items-center mt-4">
                        <UsersIcon className="h-4 w-4 text-[#8e1616] mr-2" />
                        <span className="text-sm text-gray-400">
                          Collaborators: {research.collaborators.join(", ")}
                        </span>
                      </div>
                    )}
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#8e1616] flex items-center">
                          <TrendingUpIcon className="h-5 w-5 mr-2" />
                          Key Findings & Achievements
                        </h4>
                        <ul className="space-y-2">
                          {research.keyFindings.map((finding, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-2 w-2 rounded-full bg-[#8e1616] mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-300">{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-[#8e1616]">Technologies & Methods</h4>
                        <div className="flex flex-wrap gap-2">
                          {research.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-[#8e1616]/20 text-[#c13030] hover:bg-[#8e1616]/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
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
