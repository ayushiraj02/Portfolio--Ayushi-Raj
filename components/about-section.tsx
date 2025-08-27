export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">About Me</h2>
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hi, I'm Ayushi Raj. I love building scalable backend systems, deploying ML models, and turning data into
              meaningful insights. I combine backend engineering with data science to deliver end-to-end intelligent
              solutions that drive business value and solve complex problems. I also actively participate in Kaggle
              competitions as a playground to keep learning and sharpening my data science skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
