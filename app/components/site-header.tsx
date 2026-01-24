"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Menu, Mail, Phone, MapPin } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { scrollToSection } from "../utils/scroll-to-section"

export function SiteHeader() {
  const navItems = [
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "experience", label: "Experience" },
    { href: "education", label: "Education" },
    { href: "activities", label: "Activities" },
  ]

  const contactItems = [
    { icon: Mail, href: "mailto:bhagwotilama@gmail.com", label: "Email", tooltip: "bhagwotilama@gmail.com" },
    { icon: Phone, href: "tel:977-9843451297", label: "Phone", tooltip: "977-9843451297" },
    { icon: MapPin, href: "#", label: "Location", tooltip: "Chandragiri, Kathmandu" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-medium tracking-tight bg-gradient-to-r from-gray-900 via-rose-600 to-gray-900 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Bhagawoti Lama
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rose-600 after:transition-all hover:after:w-full"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {contactItems.map((item) => (
                  <TooltipProvider key={item.label}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={item.href}
                          className="p-2 text-muted-foreground hover:text-rose-600 transition-all rounded-full hover:bg-rose-50"
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="sr-only">{item.label}</span>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="text-sm">{item.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>

              <div className="h-4 w-px bg-border" />

              <a href="/myresume resize.pdf" download>
                <Button className="bg-rose-600 hover:bg-rose-700 shadow-sm hover:shadow-md transition-all">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-50">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-8 mt-8">
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        scrollToSection(item.href)
                        // Close the sheet after clicking
                        document.body.click()
                      }}
                      className="block text-base text-muted-foreground hover:text-rose-600 transition-colors w-full text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-foreground">Contact</h4>
                  <div className="space-y-3">
                    {contactItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 text-sm text-muted-foreground hover:text-rose-600 transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.tooltip}
                      </a>
                    ))}
                  </div>
                </div>

                <a href="/myresume resize.pdf" download className="w-full">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700 shadow-sm hover:shadow-md transition-all">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
