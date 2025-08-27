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
    id: "ameotech",
    title: "Python Backend Developer",
    company: "Ameotech Technologies",
    location: "Chandigarh",
    duration: "Jan 2025 – Present",
    period: "Current",
    type: "current",
    description: [
      "Developed and integrated secure RESTful APIs using Django and JWT authentication, enhancing application security and data protection.",
      "Engineered and deployed a Cognitive Web Agent using RAG and LangChain, improving knowledge retrieval speed.",
    ],
    achievements: [
      {
        metric: "API Security",
        value: "100%",
        description: "Secure JWT authentication implementation",
      },
      {
        metric: "Knowledge Retrieval",
        value: "↑45%",
        description: "Speed improvement with RAG implementation",
      },
    ],
    technologies: ["Django", "JWT", "RAG", "LangChain", "Python", "REST API"],
    highlights: [
      "Built secure authentication systems",
      "Implemented AI-powered knowledge retrieval",
      "Enhanced application security protocols",
    ],
  },
  {
    id: "aiinfox",
    title: "Jr. Data Scientist",
    company: "AiInfox",
    location: "Chandigarh",
    duration: "Aug – Dec 2024",
    period: "5 months",
    type: "past",
    description: [
      "Developed a Random Forest model to predict stock prices (OHLC data) with 87% accuracy.",
      "Deployed real-time forecasting app via Flask APIs on AWS EC2, reducing query response time by 35%.",
      "Automated data pipelines and text extraction workflows using LLMs, improving processing accuracy by 40%.",
    ],
    achievements: [
      {
        metric: "Model Accuracy",
        value: "87%",
        description: "Stock price prediction accuracy",
      },
      {
        metric: "Response Time",
        value: "↓35%",
        description: "Query response time reduction",
      },
      {
        metric: "Processing Accuracy",
        value: "↑40%",
        description: "Automated pipeline improvement",
      },
    ],
    technologies: ["Python", "Random Forest", "Flask", "AWS EC2", "LLMs", "Data Pipelines"],
    highlights: [
      "Built ML model with 87% accuracy",
      "Deployed real-time forecasting system",
      "Automated data processing workflows",
    ],
  },
  {
    id: "enest",
    title: "Data Analyst",
    company: "eNest Technologies Pvt Ltd",
    location: "Chandigarh",
    duration: "Jan – July 2024",
    period: "7 months",
    type: "past",
    description: [
      "Analyzed 590M+ records using statistical methods and boosting decision-making speed by 30%.",
      "Improved forecast accuracy by 20% via ML models (Random Forest, XGBoost, Catboost)",
      "Automated ETL pipelines and created Power BI dashboards for business reporting.",
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
    technologies: ["Python", "Random Forest", "XGBoost", "CatBoost", "Power BI", "ETL"],
    highlights: [
      "Processed 590M+ data records",
      "Built automated ETL pipelines",
      "Created comprehensive BI dashboards",
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
                            } else if (exp.company === "AiInfox") {
                              window.open("https://aiinfox.com/", "_blank");
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
            <div className="text-2xl font-bold text-primary mb-2">1.5+</div>
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
