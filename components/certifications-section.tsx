"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar, CheckCircle, Clock } from "lucide-react"

const certifications = [
  {
    id: 0,
    title: "Become an OCI Data Science Professional",
    code: "1Z0-1110-23",
    provider: "Oracle",
    logo: <Award className="w-6 h-6 text-red-600" />,
    date: "2025",
    status: "Ongoing",
    verifyLink:
      "https://mylearn.oracle.com/ou/learning-path/become-an-oci-data-science-professional-2025/148474",
    skills: ["Oracle Cloud Infrastructure", "Data Science", "Machine Learning", "MLOps"],
    description: "Advanced certification focusing on OCI data science services and ML lifecycle management",
  },
  {
    id: 1,
    title: "Microsoft Certified: Azure AI Fundamentals",
    code: "AI-900",
    provider: "Microsoft",
    logo: <Award className="w-6 h-6 text-blue-600" />,
    date: "2024",
    status: "Active",
    verifyLink: "https://learn.microsoft.com/en-us/users/ayushiraj-2003/credentials/3a4c0853f3ae3eb0",
    skills: ["Core AI/ML concepts", "Cloud-based AI solutions", "Azure AI services"],
    description: "Comprehensive understanding of AI and ML fundamentals on Azure platform",
  },
  {
    id: 2,
    title: "Google Cloud GenAI Exchange Program",
    provider: "Google Cloud + Hack2Skill",
    logo: <Award className="w-6 h-6 text-yellow-600" />,
    date: "2024",
    status: "Completed",
    verifyLink: "https://www.linkedin.com/posts/ayushiraj02_generationaiexchange-hack2skill-hack2skill-activity-7345716393708814337-gw6Q?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADV0CacBvHHVnz4yvuJoXNnmOknIUqfplNA",
    skills: ["Prompt Engineering", "Vertex AI", "Multimodal AI", "Gemini API"],
    description: "Advanced generative AI development with Google Cloud technologies",
    achievements: [
      "Built Recipe Generator AI with Gemini + Streamlit",
      "Integrated multimodal AI into real applications",
      "92% accuracy on document extraction with RAG",
      "Hands-on labs with Gemini Pro & Flash models",
    ],
  },
  {
    id: 3,
    title: "PwC Switzerland Power BI Virtual Internship",
    provider: "PwC + Forage",
    logo: <Award className="w-6 h-6 text-purple-600" />,
    date: "2024",
    status: "Completed",
    verifyLink:
      "https://www.linkedin.com/posts/ayushiraj02_forage-certificate-activity-7129097152655470593-aPTm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADV0CacBvHHVnz4yvuJoXNnmOknIUqfplNA",
    skills: ["Power BI", "Data Visualization", "Business Intelligence", "Dashboard Design"],
    description: "Hands-on experience building dashboards for business insights",
  },
  {
    id: 4,
    title: "TCS iON Career Edge - Young Professional",
    provider: "TCS",
    logo: <Award className="w-6 h-6 text-green-600" />,
    date: "2024",
    status: "Completed",
    verifyLink: "https://www.linkedin.com/posts/ayushiraj02_certificationtcs-activity-7126965199856672768-zD1V?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADV0CacBvHHVnz4yvuJoXNnmOknIUqfplNA",
    skills: ["Business Communication", "Professional Etiquette", "Career Development"],
    description: "Professional development training for career excellence",
  },
  {
    id: 5,
    title: "Kaggle Competitions - Top 520 Rank",
    provider: "Kaggle",
    logo: <Award className="w-6 h-6 text-orange-600" />,
    date: "2024",
    status: "Active",
    verifyLink: "https://www.kaggle.com/",
    skills: ["EDA", "Feature Engineering", "ML Model Tuning", "Competition Strategy"],
    description: "Binary Prediction with Rainfall Dataset (520 rank among 4381 participants)",
  },
]

export function CertificationsSection() {
  const [expandedCert, setExpandedCert] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Continuous learning through industry certifications and competitive programming
          </p>
        </div>

        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              {/* Main certification row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-start sm:items-center gap-3 md:gap-4 flex-1">
                  <div className="flex-shrink-0">{cert.logo}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
                      <h3 className="font-semibold text-base md:text-lg leading-tight">{cert.title}</h3>
                      {cert.code && (
                        <Badge variant="outline" className="text-xs font-mono w-fit">
                          {cert.code}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">{cert.provider}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {cert.status === "Ongoing" ? (
                          <>
                            <Clock className="w-3 h-3 text-blue-500" />
                            <span className="text-blue-600">{cert.status}</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            <span className="text-green-600">{cert.status}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(cert.verifyLink, "_blank")}
                    className="flex items-center gap-1 text-xs md:text-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Verify
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                    className="text-xs md:text-sm"
                  >
                    {expandedCert === cert.id ? "Less" : "More"}
                  </Button>
                </div>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Achievement badge if exists */}
              {cert.achievement && (
                <div className="mb-4">
                  <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-300">
                    <Award className="w-3 h-3 mr-1" />
                    {cert.achievement}
                  </Badge>
                </div>
              )}

              {/* Expandable details */}
              {expandedCert === cert.id && (
                <div className="mt-4 pt-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">{cert.description}</p>

                  {cert.achievements && (
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {cert.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12">
          <div className="text-center glass rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl font-bold text-primary">6+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center glass rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl font-bold text-primary">4</div>
            <div className="text-xs md:text-sm text-muted-foreground">Cloud Platforms</div>
          </div>
          <div className="text-center glass rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl font-bold text-primary">520</div>
            <div className="text-xs md:text-sm text-muted-foreground">Kaggle Rank</div>
          </div>
          <div className="text-center glass rounded-xl p-3 md:p-4">
            <div className="text-xl md:text-2xl font-bold text-primary">92%</div>
            <div className="text-xs md:text-sm text-muted-foreground">RAG Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  )
}
