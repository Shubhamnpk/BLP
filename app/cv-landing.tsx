"use client"

import { SiteHeader } from "./components/site-header"
import { SiteFooter } from "./components/site-footer"
import { ProfileImage } from "./components/profile-image"
import { StructuredData } from "./components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail,
  MapPin,
  Phone,
  Download,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Bot,
  Code,
  Sparkles,
  Music,
  Heart,
  Globe,
  GraduationCap,
  BookOpen,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { title } from "process"

export default function CVLanding() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" ref={containerRef}>
        <SiteHeader />

        {/* Hero Section - Compact & Functional */}
        <section id="about" className="relative py-10 md:py-14 overflow-hidden">
          {/* Background Elements - Subtle */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "10s" }}
            />
            <div
              className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gray-100/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDuration: "15s" }}
            />
          </div>

          <div className="container px-4 mx-auto">
            <div className="grid gap-6 md:grid-cols-2 items-center max-w-5xl mx-auto relative">
              <motion.div style={{ opacity, scale }} className="md:order-2 flex justify-center">
                <ProfileImage />
              </motion.div>

              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 text-center md:text-left"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mx-auto md:mx-0 shadow-sm">
                    <Bot className="h-3.5 w-3.5" />
                    <span className="relative inline-block">
                      AI Web Developer
                      <span className="absolute -right-1 -top-1 w-1.5 h-1.5 bg-rose-600 rounded-full animate-ping opacity-75"></span>
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-rose-600 to-gray-900 text-transparent bg-clip-text">
                      Bhagawoti Lama
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 italic">Goddess of Love & Compassion</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-md mx-auto md:mx-0 text-center md:text-left"
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Pioneering the future of web development through AI integration. Combining technical innovation with
                    artistic expression to create
                    <span className="text-rose-600 font-medium"> extraordinary digital experiences</span>.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col gap-2 max-w-md mx-auto md:mx-0"
                >
                  <a
                    href="mailto:bhagwotilama@gmail.com"
                    className="flex items-center gap-2 hover:text-rose-600 transition-colors group rounded-lg p-1 hover:bg-rose-50/50"
                    aria-label="Email: bhagwotilama@gmail.com"
                  >
                    <span className="p-1 bg-rose-50 rounded-full group-hover:bg-rose-100 transition-colors">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs">bhagwotilama@gmail.com</span>
                  </a>
                  <a
                    href="tel:977-9843451297"
                    className="flex items-center gap-2 hover:text-rose-600 transition-colors group rounded-lg p-1 hover:bg-rose-50/50"
                    aria-label="Phone: 977-9843451297"
                  >
                    <span className="p-1 bg-rose-50 rounded-full group-hover:bg-rose-100 transition-colors">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs">977-9843451297</span>
                  </a>
                  <div className="flex items-center gap-2 group rounded-lg p-1 hover:bg-rose-50/50">
                    <span className="p-1 bg-rose-50 rounded-full group-hover:bg-rose-100 transition-colors">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs">Chandragiri Municipality, Kathmandu, Nepal</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3 pt-1 justify-center md:justify-start"
                >
                  <Button className="gap-2 bg-rose-600 hover:bg-rose-700 shadow-sm hover:shadow-md transition-all duration-300 px-3 py-1.5 h-auto text-xs">
                    Download CV
                    <Download className="h-3.5 w-3.5" />
                  </Button>
                  <div className="flex gap-2">
                    {[
                      { Icon: Github, label: "GitHub", href: "https://github.com/bhagawotilama" },
                      { Icon: Twitter, label: "Twitter", href: "https://twitter.com/bhagawotilama" },
                      { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/bhagawotilama" },
                    ].map(({ Icon, label, href }, i) => (
                      <Button
                        key={i}
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-rose-100 hover:text-rose-600 hover:scale-105 transition-all duration-300 h-8 w-8"
                        aria-label={label}
                        asChild
                      >
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Web Development Showcase */}
        <section id="skills" className="py-10 md:py-14">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold">AI-Powered Web Development</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                Leveraging artificial intelligence to create next-generation web experiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Bot,
                  title: "AI Integration",
                  skills: [
                    "GPT-4 Implementation",
                    "ChatBot Development",
                    "AI-Driven UX",
                    "Natural Language Processing",
                    "Machine Learning Models",
                    "Automated Content Generation",
                  ],
                },
                {
                  icon: Code,
                  title: "Web Development",
                  skills: [
                    "Next.js 14",
                    "React Server Components",
                    "TypeScript",
                    "Tailwind CSS",
                    "API Integration",
                    "Responsive Design",
                  ],
                },
                {
                  icon: Sparkles,
                  title: "Innovation",
                  skills: [
                    "AI-Powered Analytics",
                    "Automated Testing",
                    "Performance Optimization",
                    "SEO Automation",
                    "Smart Caching",
                    "Intelligent Debugging",
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-4 md:p-6 space-y-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                        <category.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold">{category.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs group-hover:bg-rose-100 group-hover:text-rose-800 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-10 md:py-14 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-gray-50 opacity-50" />
          <div className="container px-4 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center">Education</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-center text-sm">Academic journey and qualifications</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className="group hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/50 h-full">
                  <CardContent className="p-4 md:p-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold">Masters of Arts</h3>
                        <p className="text-gray-600 text-sm mt-1">Rural Development</p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs text-gray-500">Tribhuvan University</span>
                          <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full text-xs">2025</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className="group hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/50 h-full">
                  <CardContent className="p-4 md:p-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold">Bachelors Degree</h3>
                        <p className="text-gray-600 text-sm mt-1">Social Science</p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-xs text-gray-500">Tri-Chandra Multiple Campus</span>
                          <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full text-xs">2019</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Comprehensive Skills Section - Part of Skills */}
        <section className="py-10 md:py-14">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Professional Skills</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                A comprehensive skill set combining technical expertise with academic excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-4 md:p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                      <Code className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">Computer Skills</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "HTML",
                        "Java",
                        "Busy Software",
                        "Digital Marketing",
                        "AI Integration",
                        "Web Development",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs group-hover:bg-rose-100 group-hover:text-rose-800 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-4 md:p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">Academic Skills</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Academic Writing",
                        "Research",
                        "Critical Thinking",
                        "Multitasking",
                        "Proposal Writing",
                        "Communication",
                        "Project Management",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs group-hover:bg-rose-100 group-hover:text-rose-800 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Extra Curricular Activities */}
        <section id="activities" className="py-10 md:py-14 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-gray-50 opacity-50" />
          <div className="container px-4 mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center">Extra Curricular Activities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-center text-sm">
                Exploring passions and making a difference beyond professional life
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Music,
                  title: "Musical Journey",
                  activities: ["Guitar Performance", "Music Composition", "Local Concert Participation"],
                },
                {
                  icon: Heart,
                  title: "Community Service",
                  activities: [
                    "Alikati Ujyalo Abhiyan",
                    "Charity Program for Tarai Flood Victims",
                    "Social Awareness Programs",
                  ],
                },
                {
                  icon: Globe,
                  title: "Environmental Initiatives",
                  activities: [
                    "No Thanks Campaign: No More Plastic",
                    "Environmental Awareness Programs",
                    "Sustainable Living Workshops",
                  ],
                },
                {
                  icon: Sparkles,
                  title: "Educational Outreach",
                  activities: [
                    "Let's Read Digital Library Project",
                    "National Reading Mela 2018",
                    "Youth Mentorship Programs",
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-white/50 h-full">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                          <category.icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold">{category.title}</h3>
                          <ul className="space-y-2">
                            {category.activities.map((activity, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                <ChevronRight className="h-4 w-4 text-rose-400 flex-shrink-0" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="py-10 md:py-14">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-3 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold">Professional Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">Career milestones and professional experiences</p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "AI Development Lead and co-founder",
                  company: "bitnepal (PVT) LTD",
                  period: "2025 - Present",
                  duties: [
                    "Leading AI integration projects",
                    "Developing machine learning solutions",
                    "Managing technical teams",
                  
                  ],
                },
                {
                  title: "Assistant Manager",
                  company: "Nepal GS. Import & Export (PVT) LTD",
                  period: "July 2022 - Present",
                  duties: [
                    "Overseeing warehouse maintenance and organization",
                    "Managing office maintenance and ensuring smooth operations",
                    "Handling documentation and record-keeping",
                    "Maintaining petty cash and ensuring accurate financial tracking",
                  ],
                },
                {
                  title: "Event Manager",
                  company: "Tanneri Chaso (NGO)",
                  period: "April - May 2022",
                  duties: [
                    "Managing budgets to ensure cost-effectiveness",
                    "Overseeing event logistics",
                    "Supervising event staff and volunteers",
                  ],
                },
                {
                  title: "Program coordinator",
                  company: "Shiksha Nepal (NGO)",
                  period: "2015 - Present ",
                  duties: [
                    "Organizing and coordinating programs",
                    "overall management of programs",
                    "board of directors",
                  ],
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-rose-600" />
                    <CardContent className="p-4 md:p-6 pl-6 md:pl-8">
                      <div className="space-y-3">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                          <div>
                            <h3 className="font-bold text-lg md:text-xl">{job.title}</h3>
                            <p className="text-gray-600 text-sm">{job.company}</p>
                          </div>
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full inline-block">
                            {job.period}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {job.duties.map((duty, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                              <ChevronRight className="h-4 w-4 text-rose-400 flex-shrink-0" />
                              <span>{duty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  )
}
