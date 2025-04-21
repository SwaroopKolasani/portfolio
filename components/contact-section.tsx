"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedSection } from "./animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after success
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 3000)
  }
  return (
    <section id="contact" className="section bg-black">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading text-center">Get In Touch</h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection direction="left">
            <Card className="h-full bg-black/60 backdrop-blur-sm border border-[#8E1616]/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#8E1616]/30 p-3 rounded-full mr-4">
                      <PhoneIcon className="h-6 w-6 text-[#8E1616]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Phone</h4>
                      <p className="text-gray-300">+1 (562) 846-0808</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#8E1616]/30 p-3 rounded-full mr-4">
                      <MailIcon className="h-6 w-6 text-[#8E1616]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-gray-300">kolasani.swaroop@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#8E1616]/30 p-3 rounded-full mr-4">
                      <MapPinIcon className="h-6 w-6 text-[#8E1616]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Location</h4>
                      <p className="text-gray-300">Carson, California</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-white">Connect with me</h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/in/swaroopkolasani/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8E1616]/30 p-3 rounded-full hover:bg-[#8E1616]/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://github.com/SwaroopKolasani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8E1616]/30 p-3 rounded-full hover:bg-[#8E1616]/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://www.kaggle.com/swaroopkolasani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8E1616]/30 p-3 rounded-full hover:bg-[#8E1616]/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://medium.com/@swaroopkolasani123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8E1616]/30 p-3 rounded-full hover:bg-[#8E1616]/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <Card className="h-full bg-black/60 backdrop-blur-sm border border-[#8E1616]/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-black/70 border-[#8E1616]/50 focus:border-[#8E1616] text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-black/70 border-[#8E1616]/50 focus:border-[#8E1616] text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="bg-black/70 border-[#8E1616]/50 focus:border-[#8E1616] text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="bg-black/70 border-[#8E1616]/50 focus:border-[#8E1616] text-white"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#8E1616] hover:bg-[#7a1313]" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <SendIcon className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>

                  {submitSuccess && (
                    <div className="bg-green-900/30 text-green-300 p-3 rounded-md text-sm">
                      Your message has been sent successfully! I'll get back to you soon.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
