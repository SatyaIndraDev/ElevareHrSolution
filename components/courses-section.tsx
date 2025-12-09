"use client"

import { useState } from "react"
import { CheckCircle2, FileText, Calculator, Users, ClipboardCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const courses = [
  {
    id: "hr-practical",
    icon: FileText,
    title: "HR Practical Training",
    subtitle: "Basic + Advanced",
    description: "Master complete HR operations from documentation to HRMS software",
    topics: [
      "HR Documentation",
      "Joining & Exit Process",
      "Employee File & Records Management",
      "HR Letters & Formats",
      "HR Policies & Procedures",
      "HRMS Software Training",
    ],
  },
  {
    id: "payroll",
    icon: Calculator,
    title: "Payroll & Statutory Compliance",
    subtitle: "Complete Training",
    description: "Learn payroll processing and all statutory compliance requirements",
    topics: [
      "Payroll Process (Monthly)",
      "Salary Structure & CTC Breakdown",
      "Attendance, Leave & Overtime Calculation",
      "PF Registration, Contribution & Return Filing",
      "ESIC Registration & Return Filing",
      "Bonus Act, Gratuity Act, Minimum Wages",
      "Labour Law Practicals",
    ],
  },
  {
    id: "recruitment",
    icon: Users,
    title: "Recruitment & Interview Management",
    subtitle: "End-to-End Process",
    description: "Complete recruitment cycle from sourcing to onboarding",
    topics: [
      "Job Posting & Sourcing",
      "Resume Screening",
      "Telephonic Interviews",
      "Face-to-Face Interview Handling",
      "Candidate Evaluation",
      "Offer Letter, Joining & Induction",
    ],
  },
  {
    id: "audit",
    icon: ClipboardCheck,
    title: "HR Audit & MIS Reports",
    subtitle: "Compliance & Reporting",
    description: "Learn audit preparation and management information systems",
    topics: ["HR Audit File Preparation", "Audit Checklists", "HR MIS Reports", "Compliance Audit Processes"],
  },
]

export function CoursesSection() {
  const [activeTab, setActiveTab] = useState(courses[0].id)
  const activeCourse = courses.find((c) => c.id === activeTab)!

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">Courses We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HR training programs designed to give you practical, job-ready skills that employers value
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveTab(course.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all",
                activeTab === course.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              )}
            >
              <course.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{course.title}</span>
              <span className="sm:hidden">{course.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <activeCourse.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{activeCourse.title}</h3>
                <p className="text-sm text-primary font-medium">{activeCourse.subtitle}</p>
                <p className="text-muted-foreground mt-2">{activeCourse.description}</p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-semibold text-foreground mb-4">What You&apos;ll Learn:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeCourse.topics.map((topic) => (
                  <div key={topic} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-10">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveTab(course.id)}
              className={cn(
                "p-5 rounded-xl text-left transition-all border",
                activeTab === course.id
                  ? "bg-primary/5 border-primary/30"
                  : "bg-card border-border hover:border-primary/20",
              )}
            >
              <course.icon
                className={cn("w-6 h-6 mb-3", activeTab === course.id ? "text-primary" : "text-muted-foreground")}
              />
              <h4 className="font-semibold text-foreground text-sm mb-1">{course.title}</h4>
              <p className="text-xs text-muted-foreground">{course.topics.length} modules</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
