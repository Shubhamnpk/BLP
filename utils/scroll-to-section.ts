export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    // Add offset for the sticky header
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
