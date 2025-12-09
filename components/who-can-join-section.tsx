import { GraduationCap, BookOpen, Sparkles, Briefcase, UserPlus } from "lucide-react"

const eligibility = [
  {
    icon: GraduationCap,
    title: "Graduates / Post-Graduates",
    description: "Any degree holder looking to specialize in HR",
  },
  {
    icon: BookOpen,
    title: "BBA / MBA (HR) Students",
    description: "Enhance your degree with practical skills",
  },
  {
    icon: Sparkles,
    title: "Freshers",
    description: "Kick-start your career in Human Resources",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description: "Upgrade your HR skills and advance your career",
  },
  {
    icon: UserPlus,
    title: "Career Changers",
    description: "Anyone aiming to build a career in HR",
  },
]

export function WhoCanJoinSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Eligibility</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">Who Can Join?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our programs are designed for anyone passionate about building a career in Human Resources
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eligibility.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
