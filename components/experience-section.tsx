"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, TrendingUp, Users, Code, Database, ChevronRight, ExternalLink } from "lucide-react"

interface Experience {
  id: string
  title: string
  company: string
  location: string
  duration: string
  period: string
  type: "current" | "past"
  description: string[]
  achievements: {
    metric: string
    value: string
    description: string
  }[]
  technologies: string[]
  highlights: string[]
  companyLogo?: string
}

const experiences: Experience[] = [
  {
    id: "brucode",
    title: "Software Engineer / Python Backend Engineer",
    company: "Brucode Technologies Pvt Ltd",
    location: "India",
    duration: "Feb 2026 – Present",
    period: "Current",
    type: "current",
    description: [
      "Develop secure and scalable backend APIs for banking systems within a distributed financial platform.",
      "Migrate backend services from Golang to Python/FastAPI while maintaining API compatibility and functionality.",
      "Implement JWT-based authentication, API security, and system-level integrations.",
      "Troubleshoot production issues, identify root causes, and collaborate with cross-functional teams on fixes.",
    ],
    achievements: [
      {
        metric: "Service Migration",
        value: "Go → Python",
        description: "Contributed to migrating banking services to Python",
      },
      {
        metric: "API Compatibility",
        value: "Maintained",
        description: "Minimized disruption to existing integrations",
      },
      {
        metric: "Production Support",
        value: "Resolved",
        description: "Supported troubleshooting and remediation of API issues",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Golang",
      "REST APIs",
      "JWT",
      "PostgreSQL",
      "MongoDB",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Git",
      "Postman",
    ],
    highlights: [
      "Banking and Open Banking backend systems",
      "Golang to Python/FastAPI migration",
      "Production troubleshooting and API security",
    ],
  },
  {
    id: "ameotech",
    title: "Python Backend Developer",
    company: "Ameotech Technologies",
    location: "India",
    duration: "Aug 2024 – Jan 2026",
    period: "Past",
    type: "past",
    description: [
      "Built secure and scalable REST APIs using Django with JWT-based authentication.",
      "Optimized SQL queries and backend operations to improve application performance.",
      "Developed a Cognitive Web Agent using RAG and LangChain for context-aware information retrieval.",
      "Deployed ML applications and automated ETL and LLM-based data pipelines on AWS.",
    ],
    achievements: [
      {
        metric: "API Performance",
        value: "↑25%",
        description: "Improved performance through SQL and query optimization",
      },
      {
        metric: "Cognitive Agent",
        value: "RAG",
        description: "Built context-aware information retrieval with LangChain",
      },
      {
        metric: "Cloud Deployment",
        value: "AWS",
        description: "Deployed ML applications and automated data pipelines",
      },
    ],
    technologies: ["Python", "Django", "REST APIs", "JWT", "SQL", "LangChain", "RAG", "LLMs", "AWS EC2", "ETL", "Machine Learning"],
    highlights: [
      "Backend API development",
      "RAG and LLM-based application development",
      "AWS deployment and ML pipelines",
    ],
  },
  {
    id: "enest",
    title: "Data Analyst",
    company: "eNest Technologies Pvt Ltd",
    location: "India",
    duration: "Jan 2024 – July 2024",
    period: "Past",
    type: "past",
    description: [
      "Analyzed 590M+ records using statistical methods and boosting decision-making speed by 30%.",
      "Improved forecasting accuracy by 20% using Random Forest, XGBoost, and CatBoost.",
      "Automated ETL workflows and reporting processes to reduce manual data-processing effort.",
      "Created Power BI dashboards to provide actionable business insights.",
    ],
    achievements: [
      {
        metric: "Records Analyzed",
        value: "590M+",
        description: "Large-scale data analysis",
      },
      {
        metric: "Decision Speed",
        value: "↑30%",
        description: "Faster business decision making",
      },
      {
        metric: "Forecast Accuracy",
        value: "↑20%",
        description: "ML model improvements",
      },
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest", "XGBoost", "CatBoost", "SQL", "ETL", "Power BI", "Matplotlib"],
    highlights: [
      "Analyzed 590M+ records",
      "Improved forecasting accuracy by 20%",
      "Built automated ETL and reporting pipelines",
    ],
  },
]

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null)
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career progression in backend development and data science, with measurable impact and technical growth.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex items-start gap-8"
                onMouseEnter={() => setHoveredExperience(exp.id)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`
                    w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300
                    ${
                      exp.type === "current"
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-card border-border text-muted-foreground"
                    }
                    ${hoveredExperience === exp.id ? "scale-110 shadow-lg" : ""}
                  `}
                  >
                    {exp.type === "current" ? <Code className="w-6 h-6" /> : <Database className="w-6 h-6" />}
                  </div>

                  {/* Timeline Date */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <Badge variant={exp.type === "current" ? "default" : "secondary"} className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                </div>

                {/* Experience Card */}
                <Card
                  className={`
                  flex-1 p-6 glass transition-all duration-300 cursor-pointer
                  ${hoveredExperience === exp.id ? "shadow-lg scale-[1.02]" : ""}
                  ${selectedExperience === exp.id ? "ring-2 ring-primary shadow-lg shadow-primary/25" : ""}
                `}
                >
                  <div onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <span className="font-medium">{exp.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`
                        w-5 h-5 text-muted-foreground transition-transform duration-200
                        ${selectedExperience === exp.id ? "rotate-90" : ""}
                      `}
                      />
                    </div>

                    {/* Key Achievements Preview */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <div key={i} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold text-primary mb-1">{achievement.value}</div>
                          <div className="text-xs text-muted-foreground">{achievement.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {exp.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{exp.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedExperience === exp.id && (
                    <div className="mt-6 pt-6 border-t border-border animate-fade-in-up">
                      {/* Detailed Description */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Key Responsibilities & Impact
                        </h4>
                        <ul className="space-y-2">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Detailed Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Measurable Achievements
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {exp.achievements.map((achievement, i) => (
                            <Card key={i} className="p-4 bg-muted/30">
                              <div className="text-2xl font-bold text-primary mb-1">{achievement.value}</div>
                              <div className="text-sm font-medium mb-1">{achievement.metric}</div>
                              <div className="text-xs text-muted-foreground">{achievement.description}</div>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* All Technologies */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-4 bg-transparent"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (exp.company === "Ameotech Technologies") {
                              window.open("https://www.ameotech.com/", "_blank");
                            } else if (exp.company === "eNest Technologies Pvt Ltd") {
                              window.open("https://enestit.com/", "_blank");
                            }
                          }}
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Company Profile
                        </Button>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">2.5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </Card>
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">590M+</div>
            <div className="text-sm text-muted-foreground">Records Analyzed</div>
          </Card>
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">87%</div>
            <div className="text-sm text-muted-foreground">ML Model Accuracy</div>
          </Card>
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-muted-foreground">Companies</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
