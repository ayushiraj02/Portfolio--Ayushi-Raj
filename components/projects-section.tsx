"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Github,
  ExternalLink,
  BarChart3,
  TrendingUp,
  Bot,
  Eye,
  Search,
  CheckSquare,
  Download,
  Building2,
} from "lucide-react"

interface Project {
  id: string
  title: string
  category: string
  description: string
  detailedDescription: string
  technologies: string[]
  achievements: {
    metric: string
    value: string
  }[]
  features: string[]
  demoUrl?: string
  githubUrl?: string
  image: string
  color: string
  icon: React.ReactNode
}

const projects: Project[] = [
  {
    id: "stock-forecasting",
    title: "Stock Price Forecasting",
    category: "Machine Learning",
    description: "ML-powered stock price prediction system with real-time forecasting capabilities",
    detailedDescription:
      "Engineered a comprehensive Random Forest model to predict stock prices using OHLC data with 87% accuracy. Built a Flask web application for real-time forecasts that reduced user query time by 35%. The system processes historical market data and provides actionable insights for investment decisions.",
    technologies: ["Python", "Random Forest", "Flask", "Pandas", "HTML", "CSS", "JavaScript", "AWS"],
    achievements: [
      { metric: "Model Accuracy", value: "87%" },
      { metric: "Query Time Reduction", value: "35%" },
      { metric: "Data Points Processed", value: "10K+" },
    ],
    features: [
      "Real-time stock price predictions",
      "Interactive web interface",
      "Historical data analysis",
      "Performance metrics dashboard",
      "AWS cloud deployment",
    ],
    demoUrl: "#",
    githubUrl: "#",
    image: "/stock-market-charts.png",
    color: "from-green-500 to-emerald-600",
    icon: <TrendingUp className="w-6 h-6" />,
  },



  {
    id: "blinkit-dashboard",
    title: "Blinkit Sales Dashboard",
    category: "Data Analytics",
    description: "Comprehensive Power BI dashboard analyzing sales performance and business metrics",
    detailedDescription:
      "Developed a comprehensive Power BI dashboard tracking 4 key KPIs (Total Sales, Average Sales, Items Sold, Average Rating) to analyze fat content impact, item performance, and outlet trends. Reduced monthly reporting time by 50% and identified 15% untapped revenue opportunities through data-driven insights.",
    technologies: ["Power BI", "DAX", "Excel", "SQL", "Data Modeling", "ETL"],
    achievements: [
      { metric: "Reporting Time Saved", value: "50%" },
      { metric: "Revenue Opportunities", value: "15%" },
      { metric: "KPIs Tracked", value: "4" },
    ],
    features: [
      "Interactive sales analytics",
      "KPI performance tracking",
      "Outlet trend analysis",
      "Fat content impact assessment",
      "Automated reporting system",
    ],
    demoUrl: "#",
    githubUrl: "#",
    image: "/business-dashboard-with-charts-and-kpis.png",
    color: "from-blue-500 to-cyan-600",
    icon: <BarChart3 className="w-6 h-6" />,
  },



  {
    id: "cognitive-web-agent",
    title: "Cognitive Web Agent using RAG",
    category: "AI/ML",
    description: "AI-powered chatbot platform with document-based knowledge retrieval",
    detailedDescription:
      "Developed a sophisticated web-based AI agent platform enabling users to create multiple chatbots by submitting document URLs and custom bot names. Integrated RAG (Retrieval-Augmented Generation), LangChain, and OpenAI APIs to allow each bot to perform real-time, context-aware question-answering based on its assigned content.",
    technologies: ["Python", "LangChain", "RAG", "OpenAI", "Flask", "AWS", "HTML", "CSS"],
    achievements: [
      { metric: "Response Accuracy", value: "92%" },
      { metric: "Knowledge Retrieval Speed", value: "↑45%" },
      { metric: "Concurrent Bots", value: "50+" },
    ],
    features: [
      "Multi-bot creation system",
      "Document URL integration",
      "Real-time Q&A capabilities",
      "Context-aware responses",
      "Scalable cloud architecture",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ayushiraj02/Cognitive-Web-Agents_Django",
    image: "/ai-chatbot-interface-with-documents.png",
    color: "from-purple-500 to-pink-600",
    icon: <Bot className="w-6 h-6" />,
  },



  {
    id: "semantic-search-bot",
    title: "Semantic Search Bot with Exa",
    category: "AI/ML",
    description: "Advanced semantic search chatbot using Exa API for context-aware search capabilities",
    detailedDescription:
      "Developed a semantic search chatbot using Exa API for advanced context-aware search. Integrated with Python and LangChain for intelligent retrieval, allowing users to input queries and get semantically relevant results with higher precision than keyword search.",
    technologies: ["Python", "Exa API", "LangChain", "Flask"],
    achievements: [
      { metric: "Search Precision", value: "↑40%" },
      { metric: "Context Relevance", value: "95%" },
      { metric: "Query Processing", value: "<2s" },
    ],
    features: [
      "Semantic query understanding",
      "Context-aware search results",
      "LangChain integration",
      "Real-time response generation",
      "Advanced retrieval algorithms",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ayushiraj02/Semantic-Search-Bot-with-exa",
    image: "/semantic-search-interface-with-ai-bot.png",
    color: "from-indigo-500 to-purple-600",
    icon: <Search className="w-6 h-6" />,
  },



  {
    id: "todo-list-react",
    title: "To-Do List (React.js)",
    category: "Frontend",
    description: "Feature-rich React.js todo application with voice input and responsive design",
    detailedDescription:
      "A beginner-friendly React.js project (first React project) to practice components, props, and state management. Features voice-based task input with speech recognition, optional time fields, and a fully responsive mobile-friendly UI. Open-source and free to use with planned enhancements including calendar view and Pomodoro timer.",
    technologies: ["React.js", "JavaScript (ES6+)", "CSS3", "Vercel"],
    achievements: [
      { metric: "Mobile Responsive", value: "100%" },
      { metric: "Voice Recognition", value: "Enabled" },
      { metric: "Open Source", value: "Free" },
    ],
    features: [
      "Add, complete, and delete tasks",
      "Voice-based task input",
      "Optional time field for tasks",
      "Responsive mobile-friendly UI",
      "Open-source codebase",
    ],
    demoUrl: "https://to-do-list-react-js-three.vercel.app/",
    githubUrl: "https://github.com/ayushiraj02/TO-DO-List-React-JS-",
    image: "/modern-todo-list-app-interface-with-voice-input.png",
    color: "from-orange-500 to-red-600",
    icon: <CheckSquare className="w-6 h-6" />,
  },


  {
    id: "youtube-downloader",
    title: "YouTube Media Downloader",
    category: "Web Development",
    description: "Flask-based YouTube video and audio downloader with cross-platform support",
    detailedDescription:
      "Personal Flask project to download YouTube videos or audio (MP3/MP4). Users paste a video link and choose audio/video format. Works on both desktop & mobile browsers with HTML + TailwindCSS frontend, Flask server backend, and yt-dlp + ffmpeg for downloading & media processing.",
    technologies: ["Flask", "yt-dlp", "ffmpeg", "TailwindCSS", "HTML", "Python"],
    achievements: [
      { metric: "Cross-Platform", value: "100%" },
      { metric: "Format Support", value: "MP3/MP4" },
      { metric: "Processing Speed", value: "Fast" },
    ],
    features: [
      "YouTube video/audio download",
      "Multiple format support",
      "Mobile browser compatibility",
      "Real-time processing",
      "Clean TailwindCSS interface",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ayushiraj02/youtube-media-downloader",
    image: "/youtube-downloader-interface-with-video-thumbnails.png",
    color: "from-red-500 to-pink-600",
    icon: <Download className="w-6 h-6" />,
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    category: "Full-Stack",
    description: "Comprehensive full-stack HMS with Django REST Framework and React frontend",
    detailedDescription:
      "A full-stack HMS project demonstrating backend + frontend integration. Backend features patient management, doctor scheduling, appointments, medical records, and billing. Frontend includes role-based dashboards for Admin, Doctor, and Patient with appointment booking, profile management, and billing sections.",
    technologies: ["Django REST Framework", "React.js", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    achievements: [
      { metric: "User Roles", value: "3 Types" },
      { metric: "Database Tables", value: "15+" },
      { metric: "API Endpoints", value: "25+" },
    ],
    features: [
      "Patient & doctor management",
      "Appointment booking system",
      "Medical records & prescriptions",
      "Role-based dashboards",
      "Billing & payment tracking",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/ayushiraj02/Hospital-Management-System_updated",
    image: "/hospital-management-dashboard-with-patient-records.png",
    color: "from-teal-500 to-blue-600",
    icon: <Building2 className="w-6 h-6" />,
  },
]

const categories = ["All", "Machine Learning", "Data Analytics", "AI/ML", "Frontend", "Web Development", "Full-Stack"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleCardFlip = (projectId: string) => {
    setFlippedCard(flippedCard === projectId ? null : projectId)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">Featured Projects</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Showcasing end-to-end solutions that combine backend engineering with data science and machine learning
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-all duration-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group perspective-1000">
              <div
                className={`
                  relative w-full h-80 sm:h-96 transition-transform duration-700 transform-style-preserve-3d cursor-pointer
                  ${flippedCard === project.id ? "rotate-y-180" : ""}
                `}
                onClick={() => handleCardFlip(project.id)}
              >
                {/* Front of Card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden glass overflow-hidden">
                  {/* Project Image */}
                  <div className={`h-40 sm:h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white">{project.icon}</div>
                    </div>
                    <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/20 text-white border-white/30 text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.achievements.slice(0, 2).map((achievement, i) => (
                        <div key={i} className="text-center p-2 bg-muted/50 rounded">
                          <div className="text-sm font-bold text-primary">{achievement.value}</div>
                          <div className="text-xs text-muted-foreground">{achievement.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Preview */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Flip Indicator */}
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-muted-foreground">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </Card>

                {/* Back of Card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 glass p-4 sm:p-6 overflow-y-auto">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      {project.icon}
                      <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-shrink-0">
                      {project.detailedDescription}
                    </p>

                    {/* All Achievements */}
                    <div className="mb-4 flex-shrink-0">
                      <h4 className="font-medium mb-2 text-sm">Key Achievements</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex justify-between items-center p-2 bg-muted/30 rounded text-xs">
                            <span>{achievement.metric}</span>
                            <span className="font-bold text-primary">{achievement.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4 flex-shrink-0">
                      <h4 className="font-medium mb-2 text-sm">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* All Technologies */}
                    <div className="mb-4 flex-shrink-0">
                      <h4 className="font-medium mb-2 text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4">
                      <Button size="sm" className="flex-1 text-xs"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card flip when clicking button
                            if (project.demoUrl && project.demoUrl !== "#") {
                              window.open(project.demoUrl, "_blank");
                            }
                          }}
                          disabled={!project.demoUrl || project.demoUrl === "#"}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live Demo
                      </Button>




                      <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card flip when clicking button
                            if (project.githubUrl && project.githubUrl !== "#") {
                              window.open(project.githubUrl, "_blank");
                            }
                          }}
                          disabled={!project.githubUrl || project.githubUrl === "#"}>

                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <Card className="glass p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">7</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Featured Projects</div>
          </Card>
          <Card className="glass p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">87%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Best Model Accuracy</div>
          </Card>
          <Card className="glass p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">50%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Time Savings Achieved</div>
          </Card>
          <Card className="glass p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">20+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Technologies Used</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
