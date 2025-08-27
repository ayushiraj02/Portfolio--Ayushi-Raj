import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { DataPlaygroundSection } from "@/components/data-playground-section"
import { EducationSection } from "@/components/education-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="playground">
          <DataPlaygroundSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="certifications">
          <CertificationsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  )
}
