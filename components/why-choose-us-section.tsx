import { MapPin, Target, Users, FileText, Monitor, Wallet, Award, Lightbulb } from "lucide-react"

const reasons = [
  {
    icon: MapPin,
    title: "Kumaon's First Practical HR Institute",
    description: "Pioneer in providing practical HR training in the region",
  },
  {
    icon: Target,
    title: "100% Practical & Job-Oriented Training",
    description: "Focus on real-world skills, not just theoretical knowledge",
  },
  {
    icon: Users,
    title: "Experienced HR Professionals as Trainers",
    description: "Learn from experts with 10+ years of industry experience",
  },
  {
    icon: FileText,
    title: "Training with Real HR Documents & Tools",
    description: "Work with actual industry documents and formats",
  },
  {
    icon: Monitor,
    title: "HRMS & Payroll Software Hands-On Practice",
    description: "Get practical experience with industry-standard software",
  },
  {
    icon: Wallet,
    title: "Affordable Fee Structure",
    description: "Quality training at competitive prices",
  },
  {
    icon: Award,
    title: "Internship Assistance + Course Certificate",
    description: "Get certified and gain real work experience",
  },
  {
    icon: Lightbulb,
    title: "Live Projects & Case Studies",
    description: "Apply your learning to real business scenarios",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            What Makes Us Different
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just train you – we build your career with industry-relevant skills and hands-on experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 pr-8">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
