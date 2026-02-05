"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { scrollToSection } from "../utils/scroll-to-section"

export function SiteFooter() {
  return (
    <footer className="border-t bg-white/50 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-base font-medium tracking-wide">Bhagawoti Lama</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI Web Developer & Program Coordinator
              <br />
              Combining technology with compassion
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-base font-medium tracking-wide">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:bhagwotilama@gmail.com" className="hover:underline">
                  bhagwotilama@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+9779843451297" className="hover:underline">
                  +977-9843451297
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Chandragiri, Kathmandu</span>
              </li>
            </ul>
          </div>

          {/* Navigation Section */}
          <div className="space-y-3">
            <h3 className="text-base font-medium tracking-wide">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: "about", label: "About Me" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "education", label: "Education" },
                { id: "activities", label: "Activities" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="space-y-3">
            <h3 className="text-base font-medium tracking-wide">Connect</h3>
            <div className="flex gap-2">
              {[
                { Icon: Github, label: "GitHub", href: "https://github.com/Bhagwoti" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bhagawoti-lama" },
              ].map(({ Icon, label, href }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-rose-50 hover:text-rose-600 transition-all"
                  asChild
                >
                  <a href={href} aria-label={label}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Let's create something amazing together.</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bhagawoti Lama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
