import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Bhagawoti Lama | AI Web Developer & Program Coordinator",
  description:
    "Professional portfolio of Bhagawoti Lama, an AI Web Developer and Program Coordinator specializing in AI integration, web development, and digital innovation.",
  keywords: [
    "AI Web Developer",
    "Program Coordinator",
    "Bhagawoti Lama",
    "Web Development",
    "AI Integration",
    "Nepal",
    "Portfolio",
  ],
  authors: [{ name: "Bhagawoti Lama", url: "https://bhagawotilama.com" }],
  creator: "Bhagawoti Lama",
  publisher: "Bhagawoti Lama",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://bhagawotilama.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bhagawoti Lama | AI Web Developer & Program Coordinator",
    description:
      "Professional portfolio of Bhagawoti Lama, an AI Web Developer and Program Coordinator specializing in AI integration, web development, and digital innovation.",
    url: "https://bhagawotilama.com",
    siteName: "Bhagawoti Lama Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhagawoti Lama - AI Web Developer & Program Coordinator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhagawoti Lama | AI Web Developer & Program Coordinator",
    description:
      "Professional portfolio of Bhagawoti Lama, an AI Web Developer and Program Coordinator specializing in AI integration, web development, and digital innovation.",
    images: ["/twitter-image.jpg"],
    creator: "@bhagawotilama",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
