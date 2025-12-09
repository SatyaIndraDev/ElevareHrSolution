"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Kashipur, Uttarakhand",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9927811615",
    href: "tel:9927811615",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@elevarehr.com",
    href: "mailto:info@elevarehr.com",
  },
  {
    icon: Clock,
    label: "Timings",
    value: "10 AM – 6 PM",
    href: null,
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your HR career? Get in touch with us today for course details and enrollment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-card"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-card"
                    required
                  />
                </div>
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-primary text-primary-foreground">
              <h4 className="font-semibold text-lg mb-2">Ready to Get Started?</h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Join our next batch and transform your HR career with practical, job-ready skills.
              </p>
              <Button variant="secondary" asChild>
                <a href="tel:9927811615">Call Now: 9927811615</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
