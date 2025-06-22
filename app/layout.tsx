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
  colorScheme: 'light dark',
  userScalable: true,
}

export const metadata: Metadata = {
  title: {
    default: "Bhagawoti Lama | AI Web Developer & Program Coordinator",
    template: "%s | Bhagawoti Lama"
  },
  description: "Professional portfolio of Bhagawoti Lama, an AI Web Developer and Program Coordinator specializing in AI integration, web development, and digital innovation.",
  metadataBase: new URL("https://bhagawotilama.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI Web Developer",
    "Program Coordinator",
    "Bhagawoti Lama",
    "Web Development",
    "AI Integration",
    "Nepal",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Web Technologies",
  ],
  authors: [
    { 
      name: "Bhagawoti Lama", 
      url: "https://bhagawotilama.com" 
    }
  ],
  creator: "Bhagawoti Lama",
  publisher: "Bhagawoti Lama",
  openGraph: {
    title: "Bhagawoti Lama | AI Web Developer & Program Coordinator",
    description: "Professional portfolio of Bhagawoti Lama, an AI Web Developer and Program Coordinator specializing in AI integration, web development, and digital innovation.",
    url: "https://bhagawotilama.com",
    siteName: "Bhagawoti Lama Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhagawoti Lama - AI Web Developer & Program Coordinator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhagawoti Lama | AI Web Developer & Program Coordinator",
    description: "Professional portfolio of Bhagawoti Lama, an AI Web Developer and Program Coordinator.",
    creator: "@bhagawotilama",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
    yahoo: 'YOUR_YAHOO_VERIFICATION_CODE',
    other: {
      me: ['mailto:bhagwotilama@gmail.com', 'https://twitter.com/bhagawotilama'],
    },
  },
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  other: {
    'yandex-verification': 'YOUR_YANDEX_VERIFICATION',
    'msvalidate.01': 'YOUR_BING_VERIFICATION',
  },
  category: "portfolio",
  generator: 'Next.js',
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#4F46E5" />
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
