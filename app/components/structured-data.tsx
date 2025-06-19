"use client"

import Script from "next/script"

export function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bhagawoti Lama",
    jobTitle: "AI Web Developer & Program Coordinator",
    description:
      "Pioneering the future of web development through AI integration. Combining technical innovation with artistic expression to create extraordinary digital experiences.",
    email: "bhagwotilama@gmail.com",
    telephone: "977-9843451297",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Chandragiri",
      addressCountry: "Nepal",
    },
    url: "https://bhagawotilama.com",
    sameAs: [
      "https://github.com/bhagawotilama",
      "https://twitter.com/bhagawotilama",
      "https://linkedin.com/in/bhagawotilama",
    ],
    knowsAbout: [
      "AI Integration",
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Program Coordination",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Tribhuvan University",
        sameAs: "https://tribhuvan-university.edu.np/",
      },
      {
        "@type": "EducationalOrganization",
        name: "Tri-Chandra Multiple Campus",
        sameAs: "https://tribhuvan-university.edu.np/constituent-colleges/tri-chandra-multiple-campus/",
      },
    ],
    workExperience: [
      {
        "@type": "OrganizationRole",
        roleName: "AI Development Lead",
        worksFor: {
          "@type": "Organization",
          name: "Tech Innovation Hub",
        },
        startDate: "2023",
      },
      {
        "@type": "OrganizationRole",
        roleName: "Assistant Manager",
        worksFor: {
          "@type": "Organization",
          name: "Nepal GS. Import & Export",
        },
        startDate: "2022-07",
      },
    ],
  }

  return (
    <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(personData)}
    </Script>
  )
}
