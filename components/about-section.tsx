import { Target, Award, Users, Briefcase } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Industry-Focused",
    description: "Training aligned with current industry requirements and practices",
  },
  {
    icon: Award,
    title: "Expert Trainers",
    description: "Learn from professionals with 10+ years of HR industry experience",
  },
  {
    icon: Users,
    title: "Small Batches",
    description: "Personalized attention with limited students per batch",
  },
  {
    icon: Briefcase,
    title: "Job-Ready",
    description: "Graduate with skills that employers are actively looking for",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
              Preparing Tomorrow&apos;s HR Leaders with Hands-On Training
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Elevare HR Solution presents a professional HR Practical Training Institute designed to make students
                job-ready with real HR skills. Our training covers the complete HR workflow used in modern companies.
              </p>
              <p>
                Our mission is to prepare today&apos;s youth with hands-on HR knowledge that matches industry
                expectations. Companies now look for candidates who understand practical HR work, not just textbooks.
              </p>
              <p>
                With 10+ years of industry experience, our trainers guide students through live HR tasks so they can
                confidently handle HR responsibilities in any organization. We focus on a job-oriented approach that
                ensures every learner becomes capable of managing HR operations independently.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
