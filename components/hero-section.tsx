"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.span
              className="inline-block text-[#8E1616] font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Gyanan Swaroop <span className="gradient-text">Kolasani</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Software Engineer & Data Engineer
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Passionate about building scalable applications and turning complex data into actionable insights.
            </motion.p>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button asChild size="lg" className="bg-[#8E1616] hover:bg-[#7a1313]">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link href="https://github.com/SwaroopKolasani" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="GitHub"
                  className="text-white hover:text-[#8E1616] hover:bg-[#8E1616]/10"
                >
                  <GithubIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/swaroopkolasani/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="LinkedIn"
                  className="text-white hover:text-[#8E1616] hover:bg-[#8E1616]/10"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Twitter"
                  className="text-white hover:text-[#8E1616] hover:bg-[#8E1616]/10"
                >
                  <TwitterIcon className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.kaggle.com/swaroopkolasani" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Kaggle"
                  className="text-white hover:text-[#8E1616] hover:bg-[#8E1616]/10"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                  </svg>
                </Button>
              </Link>
              <Link href="https://medium.com/@swaroopkolasani123" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Medium"
                  className="text-white hover:text-[#8E1616] hover:bg-[#8E1616]/10"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </Button>
              </Link>
              <Link href="mailto:kolasani.swaroop@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Email"
                  className="text-white hover:text-[#8E1616] hover:bg-[#8E1616]/10"
                >
                  <MailIcon className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="#about">
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce text-[#8E1616] hover:text-[#c13030] hover:bg-[#8E1616]/10"
            >
              <ArrowDownIcon className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
