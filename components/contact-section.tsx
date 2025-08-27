"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  QrCode,
  Download,
  Calendar,
} from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

interface MeetingData {
  name: string
  email: string
  date: string
  time: string
  topic: string
}

interface MeetingErrors {
  name?: string
  email?: string
  date?: string
  time?: string
  topic?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const [showMeetingForm, setShowMeetingForm] = useState(false)
  const [meetingData, setMeetingData] = useState<MeetingData>({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
  })
  const [meetingErrors, setMeetingErrors] = useState<MeetingErrors>({})
  const [isMeetingSubmitting, setIsMeetingSubmitting] = useState(false)
  const [isMeetingSubmitted, setIsMeetingSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateMeetingForm = (): boolean => {
    const newErrors: MeetingErrors = {}

    if (!meetingData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!meetingData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(meetingData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!meetingData.date) {
      newErrors.date = "Date is required"
    }

    if (!meetingData.time) {
      newErrors.time = "Time is required"
    }

    if (!meetingData.topic.trim()) {
      newErrors.topic = "Meeting topic is required"
    }

    setMeetingErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleMeetingInputChange = (field: keyof MeetingData, value: string) => {
    setMeetingData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (meetingErrors[field]) {
      setMeetingErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const emailBody = `
New message from portfolio contact form:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Ayushi Raj Portfolio Website
      `.trim()

      const mailtoLink = `mailto:ayushimk14@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`

      // Open email client
      window.open(mailtoLink, "_blank")

      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      }, 1000)
    } catch (error) {
      setIsSubmitting(false)
      console.error("Error sending message:", error)
    }
  }

  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateMeetingForm()) return

    setIsMeetingSubmitting(true)

    try {
      // Generate Google Meet link (simplified - in real app would use Google Calendar API)
      const meetingLink = `https://meet.google.com/new`

      const emailBody = `
Meeting Request from Portfolio:

Name: ${meetingData.name}
Email: ${meetingData.email}
Requested Date: ${meetingData.date}
Requested Time: ${meetingData.time}
Topic: ${meetingData.topic}

Google Meet Link: ${meetingLink}

Please confirm this meeting by replying to this email.

---
Sent from Ayushi Raj Portfolio Website
      `.trim()

      const mailtoLink = `mailto:ayushimk14@gmail.com?subject=Meeting Request: ${encodeURIComponent(meetingData.topic)}&body=${encodeURIComponent(emailBody)}`

      // Open email client
      window.open(mailtoLink, "_blank")

      setTimeout(() => {
        setIsMeetingSubmitting(false)
        setIsMeetingSubmitted(true)
        setMeetingData({ name: "", email: "", date: "", time: "", topic: "" })
        setShowMeetingForm(false)

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsMeetingSubmitted(false)
        }, 5000)
      }, 1000)
    } catch (error) {
      setIsMeetingSubmitting(false)
      console.error("Error scheduling meeting:", error)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ayushimk14@gmail.com",
      href: "mailto:ayushimk14@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8235856364",
      href: "tel:+918235856364",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chandigarh, India",
      href: "https://maps.google.com/?q=Chandigarh,India",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/ayushiraj02",
      color: "hover:text-gray-900",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayushiraj02/",
      color: "hover:text-blue-600",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a chat about data science and backend
            development? I'd love to hear from you!
          </p>
        </div>

        {isMeetingSubmitted && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 max-w-2xl mx-auto">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <div className="font-medium text-green-800">Meeting request sent successfully!</div>
              <div className="text-sm text-green-600">I'll confirm the meeting details via email within 24 hours.</div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="glass p-6">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    onClick={(e) => {
                      if (info.href === "#") {
                        e.preventDefault(); 
                      } else {
                        e.preventDefault();
                        window.open(info.href, "_blank");
                      }
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
  >
                    <div className="text-primary group-hover:scale-110 transition-transform">{info.icon}</div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass p-6">
              <h3 className="text-xl font-semibold mb-6">Social Profiles</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(social.href, "_blank");
                    }}
                    className={`flex items-center justify-center w-12 h-12 rounded-lg bg-muted/50 hover:bg-muted transition-all hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Card>

            {/* QR Code */}
            <Card className="glass p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Quick Connect</h3>
                <Button variant="outline" size="sm" onClick={() => setShowQR(!showQR)} className="bg-transparent">
                  <QrCode className="w-4 h-4 mr-2" />
                  {showQR ? "Hide" : "Show"} QR
                </Button>
              </div>

              {showQR && (
                <div className="text-center">
                  <div 
                    className="w-32 h-32 mx-auto mb-4 bg-white p-2 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => window.open("https://www.linkedin.com/in/ayushiraj02/", "_blank")}
                  >
                    {/* Replace with your actual QR code image */}
                    <img 
                      src="/QR.png" 
                      alt="LinkedIn QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Scan or click to view LinkedIn profile</p>
                </div>
              )}




              <div className="space-y-2 mt-4">
                 <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-transparent"
                  onClick={() => window.open("https://drive.google.com/file/d/1upFNIbqAtWM3wkM7hHDp4QsMUoo5DSUg/view?usp=sharing", "_blank")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                {/* Highlighted Schedule Meeting Button */}
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => setShowMeetingForm(true)}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form or Meeting Form */}
          <Card className="glass p-8 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">{showMeetingForm ? "Schedule a Meeting" : "Send a Message"}</h3>

              <Button 
                variant={showMeetingForm ? "outline" : "default"} 
                size="sm" 
                onClick={() => setShowMeetingForm(!showMeetingForm)}
                className={`
                  relative
                  ${showMeetingForm ? "bg-transparent" : "bg-primary hover:bg-primary/90"}
                  ${!showMeetingForm ? "ring-2 ring-primary ring-offset-2 ring-offset-background animate-pulse" : ""}
                `}
              >
                {showMeetingForm ? "Send Message Instead" : "Schedule Meeting"}
              </Button>

            
            </div>

            {isSubmitted && !showMeetingForm && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-green-800">Message sent successfully!</div>
                  <div className="text-sm text-green-600">I'll get back to you within 24 hours.</div>
                </div>
              </div>
            )}

            {showMeetingForm ? (
              <form onSubmit={handleMeetingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="meeting-name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="meeting-name"
                      value={meetingData.name}
                      onChange={(e) => handleMeetingInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className={meetingErrors.name ? "border-red-500" : ""}
                    />
                    {meetingErrors.name && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        {meetingErrors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="meeting-email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="meeting-email"
                      type="email"
                      value={meetingData.email}
                      onChange={(e) => handleMeetingInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className={meetingErrors.email ? "border-red-500" : ""}
                      suppressHydrationWarning={true}
                    />
                    {meetingErrors.email && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        {meetingErrors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="meeting-date" className="block text-sm font-medium mb-2">
                      Preferred Date *
                    </label>
                    <Input
                      id="meeting-date"
                      type="date"
                      value={meetingData.date}
                      onChange={(e) => handleMeetingInputChange("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className={meetingErrors.date ? "border-red-500" : ""}
                    />
                    {meetingErrors.date && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        {meetingErrors.date}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="meeting-time" className="block text-sm font-medium mb-2">
                      Preferred Time *
                    </label>
                    <Input
                      id="meeting-time"
                      type="time"
                      value={meetingData.time}
                      onChange={(e) => handleMeetingInputChange("time", e.target.value)}
                      className={meetingErrors.time ? "border-red-500" : ""}
                    />
                    {meetingErrors.time && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        {meetingErrors.time}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="meeting-topic" className="block text-sm font-medium mb-2">
                    Meeting Topic *
                  </label>
                  <Input
                    id="meeting-topic"
                    value={meetingData.topic}
                    onChange={(e) => handleMeetingInputChange("topic", e.target.value)}
                    placeholder="What would you like to discuss?"
                    className={meetingErrors.topic ? "border-red-500" : ""}
                  />
                  {meetingErrors.topic && (
                    <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                      <AlertCircle className="w-3 h-3" />
                      {meetingErrors.topic}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Quick Topics (Optional)</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Job Interview",
                      "Project Discussion",
                      "Technical Consultation",
                      "Career Guidance",
                      "Collaboration",
                    ].map((topic) => (
                      <Badge
                        key={topic}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => handleMeetingInputChange("topic", topic)}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isMeetingSubmitting}>
                  {isMeetingSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Scheduling Meeting...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Meeting
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>

                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className={errors.email ? "border-red-500" : ""}
                      suppressHydrationWarning={true}
                    />
                    {errors.email && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="What would you like to discuss?"
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={6}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Quick Topics */}
                <div>
                  <label className="block text-sm font-medium mb-2">Quick Topics (Optional)</label>
                  <div className="flex flex-wrap gap-2">
                    {["Job Opportunity", "Freelance Project", "Collaboration", "Mentorship", "General Inquiry"].map(
                      (topic) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => handleInputChange("subject", topic)}
                        >
                          {topic}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground mb-4">
            Available for full-time opportunities, freelance projects, and exciting collaborations
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary">Open to Work</Badge>
            <Badge variant="secondary">Remote Friendly</Badge>
            <Badge variant="secondary">Quick Response</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
