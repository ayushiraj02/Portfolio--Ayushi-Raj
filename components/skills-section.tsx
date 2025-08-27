"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface Skill {
  id: string
  name: string
  category: string
  level: number
  connections: string[]
  color: string
}

const skills: Skill[] = [
  // Core Languages
  {
    id: "python",
    name: "Python",
    category: "Languages",
    level: 95,
    connections: ["django", "flask", "pandas", "numpy", "scikit-learn", "tensorflow", "pytorch"],
    color: "bg-blue-500",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Languages",
    level: 90,
    connections: ["sqlalchemy", "postgresql", "mysql"],
    color: "bg-orange-500",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Languages",
    level: 80,
    connections: ["react", "nodejs"],
    color: "bg-yellow-500",
  },

  // Backend Frameworks
  {
    id: "django",
    name: "Django",
    category: "Backend",
    level: 90,
    connections: ["python", "rest-api", "jwt"],
    color: "bg-green-600",
  },
  {
    id: "flask",
    name: "Flask",
    category: "Backend",
    level: 85,
    connections: ["python", "rest-api", "ml-deployment"],
    color: "bg-gray-600",
  },
  {
    id: "rest-api",
    name: "REST API",
    category: "Backend",
    level: 90,
    connections: ["django", "flask", "jwt"],
    color: "bg-purple-600",
  },
  {
    id: "jwt",
    name: "JWT Auth",
    category: "Backend",
    level: 85,
    connections: ["django", "rest-api"],
    color: "bg-indigo-600",
  },

  // Data Science & ML
  {
    id: "pandas",
    name: "Pandas",
    category: "Data Science",
    level: 95,
    connections: ["python", "numpy", "data-viz"],
    color: "bg-cyan-600",
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "Data Science",
    level: 90,
    connections: ["python", "pandas", "scikit-learn"],
    color: "bg-blue-600",
  },
  {
    id: "scikit-learn",
    name: "Scikit-Learn",
    category: "Machine Learning",
    level: 90,
    connections: ["python", "numpy", "ml-deployment"],
    color: "bg-orange-600",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "Machine Learning",
    level: 80,
    connections: ["python", "ml-deployment"],
    color: "bg-red-600",
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "Machine Learning",
    level: 75,
    connections: ["python", "ml-deployment"],
    color: "bg-red-500",
  },
  {
    id: "ml-deployment",
    name: "ML Deployment",
    category: "Machine Learning",
    level: 85,
    connections: ["flask", "aws", "scikit-learn", "tensorflow", "pytorch"],
    color: "bg-pink-600",
  },

  // Data Visualization & Analysis
  {
    id: "data-viz",
    name: "Data Visualization",
    category: "Analytics",
    level: 90,
    connections: ["pandas", "matplotlib", "powerbi"],
    color: "bg-teal-600",
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    category: "Analytics",
    level: 85,
    connections: ["python", "data-viz"],
    color: "bg-emerald-600",
  },
  {
    id: "powerbi",
    name: "Power BI",
    category: "Analytics",
    level: 90,
    connections: ["data-viz", "etl"],
    color: "bg-yellow-600",
  },
  {
    id: "etl",
    name: "ETL Pipelines",
    category: "Analytics",
    level: 85,
    connections: ["python", "powerbi", "aws"],
    color: "bg-lime-600",
  },

  // Cloud & Tools
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    level: 80,
    connections: ["ml-deployment", "etl"],
    color: "bg-amber-600",
  },
  {
    id: "sqlalchemy",
    name: "SQLAlchemy",
    category: "Database",
    level: 85,
    connections: ["python", "sql"],
    color: "bg-stone-600",
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "AI",
    level: 80,
    connections: ["python", "rag"],
    color: "bg-violet-600",
  },
  { id: "rag", name: "RAG", category: "AI", level: 85, connections: ["langchain", "python"], color: "bg-fuchsia-600" },
]

const categories = [
  "All",
  "Languages",
  "Backend",
  "Data Science",
  "Machine Learning",
  "Analytics",
  "Cloud",
  "Database",
  "AI",
]

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  const getSkillConnections = (skillId: string) => {
    const skill = skills.find((s) => s.id === skillId)
    return skill ? skill.connections : []
  }

  const isConnected = (skillId: string) => {
    if (!selectedSkill && !hoveredSkill) return false
    const activeSkill = selectedSkill || hoveredSkill
    if (skillId === activeSkill) return true

    const connections = getSkillConnections(activeSkill!)
    return connections.includes(skillId)
  }

  const getSkillOpacity = (skillId: string) => {
    if (!selectedSkill && !hoveredSkill) return "opacity-100"
    return isConnected(skillId) ? "opacity-100" : "opacity-30"
  }

  const getSkillScale = (skillId: string) => {
    if (!selectedSkill && !hoveredSkill) return "scale-100"
    return isConnected(skillId) ? "scale-110" : "scale-95"
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">Interactive Skills Network</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Click on any skill to see related technologies and frameworks. Explore the interconnected nature of my
            technical expertise.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-all duration-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
              onClick={() => {
                setSelectedCategory(category)
                setSelectedSkill(null)
              }}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Skills Network Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {filteredSkills.map((skill) => (
            <Card
              key={skill.id}
              className={`
                relative p-3 sm:p-4 cursor-pointer transition-all duration-300 hover:shadow-lg glass
                ${getSkillOpacity(skill.id)} ${getSkillScale(skill.id)}
                ${selectedSkill === skill.id ? "ring-2 ring-primary shadow-lg shadow-primary/25" : ""}
                ${isConnected(skill.id) ? "ring-1 ring-secondary/50" : ""}
              `}
              onClick={() => setSelectedSkill(selectedSkill === skill.id ? null : skill.id)}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Level Indicator */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary opacity-60" />

              {/* Skill Icon/Color */}
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg ${skill.color} mb-2 sm:mb-3 flex items-center justify-center`}
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm opacity-80" />
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold text-xs sm:text-sm mb-2 leading-tight">{skill.name}</h3>

              {/* Category Badge */}
              <Badge variant="secondary" className="text-xs sm:text-sm">
                {skill.category}
              </Badge>

              {/* Skill Level Bar */}
              <div className="mt-2 sm:mt-3 w-full bg-muted rounded-full h-1">
                <div
                  className="bg-primary h-1 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Connection Info */}
        {selectedSkill && (
          <Card className="glass-strong p-4 sm:p-6 animate-fade-in-up">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {skills.find((s) => s.id === selectedSkill)?.name} Connections
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Related technologies and frameworks I work with
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {getSkillConnections(selectedSkill).map((connectionId) => {
                  const connectedSkill = skills.find((s) => s.id === connectionId)
                  return connectedSkill ? (
                    <Badge
                      key={connectionId}
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-xs sm:text-sm"
                      onClick={() => setSelectedSkill(connectionId)}
                    >
                      {connectedSkill.name}
                    </Badge>
                  ) : null
                })}
              </div>
            </div>
          </Card>
        )}

        {/* Skills Summary */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="glass p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">8+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Programming Languages & Frameworks</div>
          </Card>
          <Card className="glass p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">15+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Data Science & ML Tools</div>
          </Card>
          <Card className="glass p-4 sm:p-6 text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-2">5+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Cloud & Database Technologies</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
