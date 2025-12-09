import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CoursesSection } from "@/components/courses-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { WhoCanJoinSection } from "@/components/who-can-join-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <WhoCanJoinSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
