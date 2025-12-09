import Link from "next/link"
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Elevare</span>
                <span className="text-xs text-background/70">HR Solution</span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 max-w-md">
              Kumaon&apos;s first and only HR Practical Training Institute. We prepare tomorrow&apos;s HR leaders with
              hands-on training and job-ready skills.
            </p>
            <p className="text-xl font-semibold text-primary">
              &ldquo;We Don&apos;t Just Train You – We Build Your Career.&rdquo;
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Courses", href: "#courses" },
                { name: "Why Choose Us", href: "#why-us" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70">Kashipur, Uttarakhand</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:9927811615" className="text-background/70 hover:text-primary transition-colors">
                  9927811615
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@elevarehr.com" className="text-background/70 hover:text-primary transition-colors">
                  info@elevarehr.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Elevare HR Solution. All rights reserved.
          </p>
          <p className="text-sm text-background/60">HR Practical Training Institute – Kashipur</p>
        </div>
      </div>
    </footer>
  )
}
