"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, ChevronDown } from "lucide-react"

function createSeededRandom(seed: number) {
  return () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
}

const roles = ["Python Backend Developer", "Data Analyst", "Aspiring Data Scientist"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [randomValues, setRandomValues] = useState<any>(null)

  useEffect(() => {
    setIsClient(true)
    
    // Generate all random values on client side only
    const lineRandom = createSeededRandom(12345)
    const dotRandom = createSeededRandom(67890)
    const symbolRandom = createSeededRandom(13579)
    
    const lines = [...Array(8)].map((_, i) => ({
      width: 200 + lineRandom() * 300,
      left: lineRandom() * 100,
      top: lineRandom() * 100,
      animationDelay: `${i * 0.8}s`,
      animationDuration: `${4 + lineRandom() * 2}s`,
    }))
    
    const dots = [...Array(12)].map((_, i) => ({
      left: dotRandom() * 100,
      top: dotRandom() * 100,
      animationDelay: `${i * 0.5}s`,
      animationDuration: `${3 + dotRandom() * 2}s`,
    }))
    
    const symbols = ["{", "}", "<", ">", "[", "]"].map((symbol, i) => ({
      symbol,
      left: symbolRandom() * 100,
      top: symbolRandom() * 100,
      animationDelay: `${i * 1.2}s`,
      animationDuration: `${6 + symbolRandom() * 3}s`,
    }))
    
    setRandomValues({ lines, dots, symbols })
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const role = roles[currentRole]
    let index = 0

    const typeInterval = setInterval(() => {
      if (index <= role.length) {
        setDisplayText(role.slice(0, index))
        index++
      } else {
        setIsTyping(false)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
          setDisplayText("")
          setIsTyping(true)
        }, 2000)
        clearInterval(typeInterval)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentRole, isClient])

  if (!isClient || !randomValues) {
    // Simplified version for SSR and initial load
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          {/* Static background elements */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up pt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-4 sm:mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
              Ayushi Raj
            </h1>
          </div>
          <div className="h-12 sm:h-14 md:h-16 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-2">
              Loading...
            </p>
          </div>
        </div>
      </section>
    )
  }

  const { lines, dots, symbols } = randomValues

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Data Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {lines.map((line: any, i: number) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse"
              style={{
                width: `${line.width}px`,
                left: `${line.left}%`,
                top: `${line.top}%`,
                animationDelay: line.animationDelay,
                animationDuration: line.animationDuration,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Data Points */}
        {dots.map((dot: any, i: number) => (
          <div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animationDelay: dot.animationDelay,
              animationDuration: dot.animationDuration,
            }}
          />
        ))}

        {/* Floating Code Brackets */}
        {symbols.map((symbolData: any, i: number) => (
          <div
            key={`symbol-${i}`}
            className="absolute text-2xl text-primary/10 font-mono animate-float"
            style={{
              left: `${symbolData.left}%`,
              top: `${symbolData.top}%`,
              animationDelay: symbolData.animationDelay,
              animationDuration: symbolData.animationDuration,
            }}
          >
            {symbolData.symbol}
          </div>
        ))}

        {/* Animated Chart Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-5">
          <svg viewBox="0 0 64 64" className="w-full h-full animate-spin-slow">
            <circle
              cx="32"
              cy="32"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-secondary"
            />
            <path
              d="M32 2 A30 30 0 0 1 62 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
            />
          </svg>
        </div>

        <div className="absolute bottom-32 right-16 w-20 h-12 opacity-5">
          <svg viewBox="0 0 80 48" className="w-full h-full">
            <polyline
              points="0,40 20,30 40,35 60,20 80,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent animate-pulse"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up pt-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-4 sm:mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x leading-tight">
            Ayushi Raj
          </h1>
        </div>

        <div className="h-12 sm:h-14 md:h-16 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-2">
            {displayText}
            <span className={`inline-block w-0.5 h-5 sm:h-6 bg-primary ml-1 ${isTyping ? "animate-pulse" : ""}`} />
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
            Building scalable backend systems, deploying ML models, and turning data into meaningful insights
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 animate-fade-in-up px-4"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto glass-strong hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/ayushiraj02", "_blank");
            }}
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            GitHub
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto glass hover:scale-105 hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300 bg-transparent group"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.linkedin.com/in/ayushiraj02/", "_blank");
            }}
          >
            <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            LinkedIn
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto glass hover:scale-105 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 group"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://drive.google.com/file/d/1upFNIbqAtWM3wkM7hHDp4QsMUoo5DSUg/view?usp=drive_link", "_blank");
            }}
          >
            <FileText className="w-5 h-5 mr-2 group-hover:rotate-6 transition-transform duration-300" />
            Resume
          </Button>
        </div>

        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  )
}