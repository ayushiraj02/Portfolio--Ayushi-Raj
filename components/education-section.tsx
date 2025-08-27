"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    specialization: "Minor in Data Science",
    institution: "IK Gujral Punjab Technical University",
    duration: "Aug 2020 - July 2024",
    grade: "8.42 CGPA",
    location: "Punjab, India",
    icon: GraduationCap,
    highlights: [
      "Specialized in Data Science and Machine Learning",
      "Strong foundation in Computer Science fundamentals",
      "Completed projects in AI, Web Development, and Data Analytics",
    ],
  },
  {
    degree: "Class XII (CBSE)",
    institution: "Sri Chaitanya Techno School",
    duration: "2020",
    grade: "75%",
    location: "Vishakhapatnam",
    icon: Award,
    highlights: ["Science stream with Mathematics", "Strong foundation in Physics, Chemistry, and Mathematics"],
  },
  {
    degree: "Class X (ICSE)",
    institution: "St. Joseph's Convent High School",
    duration: "2018",
    grade: "89%",
    location: "Patna",
    icon: Award,
    highlights: ["Excellent academic performance", "Well-rounded education with focus on analytical thinking"],
  },
]

export function EducationSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey that built the foundation for my technical expertise in computer science and data
            science.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <Card key={index} className="glass p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon and Grade */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{edu.grade}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      {edu.specialization && <p className="text-primary font-medium mb-2">{edu.specialization}</p>}
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Education Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">4 Years</div>
            <div className="text-sm text-muted-foreground">Computer Science Education</div>
          </Card>
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">Data Science</div>
            <div className="text-sm text-muted-foreground">Specialized Minor Degree</div>
          </Card>
          <Card className="glass p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">8.42 CGPA</div>
            <div className="text-sm text-muted-foreground">Academic Excellence</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
