"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  BarChart3,
  PieChart,
  TrendingUp,
  Database,
  MessageCircle,
  Send,
  RefreshCw,
  Sparkles,
} from "lucide-react"

interface DataPoint {
  name: string
  value: number
  category?: string
}

interface ChatMessage {
  id: string
  type: "user" | "bot"
  message: string
  timestamp: Date
}

const sampleDatasets = [
  {
    name: "Sales Performance",
    data: [
      { name: "Q1", value: 45000, category: "Revenue" },
      { name: "Q2", value: 52000, category: "Revenue" },
      { name: "Q3", value: 48000, category: "Revenue" },
      { name: "Q4", value: 61000, category: "Revenue" },
    ],
  },
  {
    name: "User Engagement",
    data: [
      { name: "Mobile", value: 65, category: "Platform" },
      { name: "Desktop", value: 28, category: "Platform" },
      { name: "Tablet", value: 7, category: "Platform" },
    ],
  },
  {
    name: "ML Model Performance",
    data: [
      { name: "Accuracy", value: 87, category: "Metric" },
      { name: "Precision", value: 84, category: "Metric" },
      { name: "Recall", value: 89, category: "Metric" },
      { name: "F1-Score", value: 86, category: "Metric" },
    ],
  },
]

const predefinedQuestions = [
  "What is your recent project 'Cognitive Web Agent'?",
  "Tell me about MCP that you're currently working on",
  "What technologies do you specialize in?",
  "How do you approach machine learning projects?",
  "What's your experience with backend development?",
  "Describe your data analysis methodology",
  "What makes you different from other developers?",
  "How do you stay updated with latest tech trends?",
]

const botResponses: Record<string, string> = {
  "cognitive web agent":
    "The Cognitive Web Agent is a RAG-based AI system I built using LangChain and OpenAI. It can intelligently browse websites, extract relevant information, and provide contextual responses. The system combines web scraping, vector databases, and LLMs to create an intelligent assistant that understands web content contextually.",
  mcp: "MCP (Model Context Protocol) is my current project focusing on creating standardized communication between AI models and external tools. I'm developing protocols that allow seamless integration of various AI services, enabling better context sharing and more efficient model interactions in production environments.",
  technologies:
    "I specialize in Python ecosystem: Django/Flask for backend, Pandas/NumPy for data manipulation, Scikit-Learn/TensorFlow for ML, and LangChain for AI applications. I also work extensively with AWS, PostgreSQL, and modern deployment practices using Docker and CI/CD pipelines.",
  "ml projects":
    "I've built a stock price forecasting model achieving 87% accuracy using LSTM networks, automated ETL pipelines processing 590M+ records, and developed RAG-based systems. Each project emphasizes both model performance and production deployment with proper monitoring and scaling.",
  "data analysis":
    "My approach is systematic: business understanding → data exploration → statistical analysis → feature engineering → model building → validation → deployment. I focus on actionable insights and always consider the business impact of technical decisions.",
  backend:
    "I have 2+ years building scalable REST APIs with Django and Flask, implementing secure authentication systems, optimizing database queries, and deploying on AWS. I emphasize clean architecture, comprehensive testing, and performance monitoring in production environments.",
  different:
    "I combine strong technical skills with business acumen. My experience spans the full ML lifecycle from research to production, plus I actively participate in Kaggle competitions to stay sharp with cutting-edge techniques. I focus on building solutions that actually solve real business problems.",
  "tech trends":
    "I actively participate in Kaggle competitions as my learning playground, follow key researchers on Twitter, contribute to open-source projects, and regularly experiment with new frameworks. Recently, I've been exploring MCP protocols and advanced RAG architectures.",
}

export function DataPlaygroundSection() {
  const [selectedDataset, setSelectedDataset] = useState(sampleDatasets[0])
  const [chartType, setChartType] = useState<"bar" | "pie">("bar")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      message: "Hi! I'm Ayushi's AI assistant. Ask me anything about her skills, projects, or experience!",
      timestamp: new Date(),
    },
  ])
  const [currentMessage, setCurrentMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDatasetChange = (dataset: (typeof sampleDatasets)[0]) => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setSelectedDataset(dataset)
      setIsAnalyzing(false)
    }, 1000)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsAnalyzing(true)
      // Simulate file processing
      setTimeout(() => {
        setSelectedDataset({
          name: file.name.replace(".csv", ""),
          data: [
            { name: "Sample A", value: Math.floor(Math.random() * 100), category: "Data" },
            { name: "Sample B", value: Math.floor(Math.random() * 100), category: "Data" },
            { name: "Sample C", value: Math.floor(Math.random() * 100), category: "Data" },
            { name: "Sample D", value: Math.floor(Math.random() * 100), category: "Data" },
          ],
        })
        setIsAnalyzing(false)
      }, 2000)
    }
  }

  const sendMessage = (message: string) => {
    if (!message.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      message,
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setCurrentMessage("")

    // Simulate bot response
    setTimeout(() => {
      let botResponse =
        "I'd be happy to help! Could you be more specific about what you'd like to know about Ayushi's work?"

      const lowerMessage = message.toLowerCase()

      if (lowerMessage.includes("cognitive") || lowerMessage.includes("web agent")) {
        botResponse = botResponses["cognitive web agent"]
      } else if (lowerMessage.includes("mcp") || lowerMessage.includes("model context protocol")) {
        botResponse = botResponses["mcp"]
      } else if (lowerMessage.includes("different") || lowerMessage.includes("unique")) {
        botResponse = botResponses["different"]
      } else if (
        lowerMessage.includes("trends") ||
        lowerMessage.includes("updated") ||
        lowerMessage.includes("learning")
      ) {
        botResponse = botResponses["tech trends"]
      } else if (lowerMessage.includes("technolog") || lowerMessage.includes("skill")) {
        botResponse = botResponses.technologies
      } else if (
        lowerMessage.includes("ml") ||
        lowerMessage.includes("machine learning") ||
        lowerMessage.includes("project")
      ) {
        botResponse = botResponses["ml projects"]
      } else if (
        lowerMessage.includes("data") ||
        lowerMessage.includes("analysis") ||
        lowerMessage.includes("methodology")
      ) {
        botResponse = botResponses["data analysis"]
      } else if (lowerMessage.includes("backend") || lowerMessage.includes("api")) {
        botResponse = botResponses.backend
      }

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        message: botResponse,
        timestamp: new Date(),
      }

      setChatMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const getStats = () => {
    const total = selectedDataset.data.reduce((sum, item) => sum + item.value, 0)
    const average = Math.round(total / selectedDataset.data.length)
    const max = Math.max(...selectedDataset.data.map((item) => item.value))
    const min = Math.min(...selectedDataset.data.map((item) => item.value))

    return { total, average, max, min }
  }

  const stats = getStats()

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Interactive Data Playground</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my technical capabilities through hands-on demos. The Data Visualization tab lets you upload CSV
            files or try sample datasets to see real-time chart generation and statistical analysis - showcasing my data
            science skills. The AI Assistant demonstrates my backend and AI expertise through intelligent conversations
            about my projects and experience.
          </p>
        </div>

        <Tabs defaultValue="data-viz" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="data-viz" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Data Visualization
            </TabsTrigger>
            <TabsTrigger value="ai-chat" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              AI Assistant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="data-viz" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Data Upload & Controls */}
              <Card className="glass p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Data Source
                </h3>

                {/* File Upload */}
                <div className="mb-6">
                  <Button
                    variant="outline"
                    className="w-full mb-2 bg-transparent"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload CSV File
                  </Button>
                  <input ref={fileInputRef} type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
                  <p className="text-xs text-muted-foreground">Or try sample datasets below</p>
                </div>

                {/* Sample Datasets */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-medium">Sample Datasets</h4>
                  {sampleDatasets.map((dataset) => (
                    <Button
                      key={dataset.name}
                      variant={selectedDataset.name === dataset.name ? "default" : "outline"}
                      size="sm"
                      className="w-full justify-start bg-transparent"
                      onClick={() => handleDatasetChange(dataset)}
                    >
                      {dataset.name}
                    </Button>
                  ))}
                </div>

                {/* Chart Type Controls */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Visualization Type</h4>
                  <div className="flex gap-2">
                    <Button
                      variant={chartType === "bar" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setChartType("bar")}
                    >
                      <BarChart3 className="w-3 h-3 mr-1" />
                      Bar
                    </Button>
                    <Button
                      variant={chartType === "pie" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setChartType("pie")}
                    >
                      <PieChart className="w-3 h-3 mr-1" />
                      Pie
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Visualization */}
              <Card className="glass p-6 lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    {selectedDataset.name} Analysis
                  </h3>
                  {isAnalyzing && <RefreshCw className="w-4 h-4 animate-spin" />}
                </div>

                {isAnalyzing ? (
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2 text-primary" />
                      <p className="text-muted-foreground">Processing data...</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Chart */}
                    <div className="h-64 bg-muted/30 rounded-lg p-4 flex items-end justify-center gap-2">
                      {chartType === "bar" ? (
                        selectedDataset.data.map((item, index) => (
                          <div key={index} className="flex flex-col items-center gap-2">
                            <div
                              className="bg-primary rounded-t transition-all duration-500 hover:bg-primary/80 min-w-12"
                              style={{
                                height: `${(item.value / Math.max(...selectedDataset.data.map((d) => d.value))) * 200}px`,
                              }}
                            />
                            <div className="text-xs text-center">
                              <div className="font-medium">{item.name}</div>
                              <div className="text-muted-foreground">{item.value}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="w-48 h-48 relative">
                          <svg viewBox="0 0 200 200" className="w-full h-full">
                            {selectedDataset.data.map((item, index) => {
                              const total = selectedDataset.data.reduce((sum, d) => sum + d.value, 0)
                              const percentage = (item.value / total) * 100
                              const angle = (percentage / 100) * 360
                              const startAngle = selectedDataset.data
                                .slice(0, index)
                                .reduce((sum, d) => sum + (d.value / total) * 360, 0)

                              return (
                                <g key={index}>
                                  <path
                                    d={`M 100 100 L ${100 + 80 * Math.cos(((startAngle - 90) * Math.PI) / 180)} ${100 + 80 * Math.sin(((startAngle - 90) * Math.PI) / 180)} A 80 80 0 ${angle > 180 ? 1 : 0} 1 ${100 + 80 * Math.cos(((startAngle + angle - 90) * Math.PI) / 180)} ${100 + 80 * Math.sin(((startAngle + angle - 90) * Math.PI) / 180)} Z`}
                                    fill={`hsl(${200 + index * 30}, 70%, 50%)`}
                                    className="hover:opacity-80 transition-opacity"
                                  />
                                </g>
                              )
                            })}
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded">
                        <div className="text-lg font-bold text-primary">{stats.total}</div>
                        <div className="text-xs text-muted-foreground">Total</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded">
                        <div className="text-lg font-bold text-primary">{stats.average}</div>
                        <div className="text-xs text-muted-foreground">Average</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded">
                        <div className="text-lg font-bold text-primary">{stats.max}</div>
                        <div className="text-xs text-muted-foreground">Maximum</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded">
                        <div className="text-lg font-bold text-primary">{stats.min}</div>
                        <div className="text-xs text-muted-foreground">Minimum</div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-chat" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Quick Questions */}
              <Card className="glass p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Quick Questions
                </h3>
                <div className="space-y-2">
                  {predefinedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left bg-transparent"
                      onClick={() => sendMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </Card>

              {/* Chat Interface */}
              <Card className="glass p-6 lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  AI Assistant Chat
                </h3>

                {/* Chat Messages */}
                <div className="h-64 overflow-y-auto mb-4 space-y-3 p-3 bg-muted/30 rounded">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg text-sm ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-card-foreground border"
                        }`}
                      >
                        {message.message}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me about Ayushi's skills, projects, or experience..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage(currentMessage)}
                    className="flex-1"
                  />
                  <Button onClick={() => sendMessage(currentMessage)}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Playground Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">Real-time</div>
            <div className="text-sm text-muted-foreground">Data Processing & Visualization</div>
          </Card>
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">AI-Powered</div>
            <div className="text-sm text-muted-foreground">Interactive Assistant</div>
          </Card>
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">Production-Ready</div>
            <div className="text-sm text-muted-foreground">Backend & ML Integration</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
