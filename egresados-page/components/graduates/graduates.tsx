"use client"

import { useState } from "react"
import { PhotoGallery } from "./photo-gallery"
import { Testimonials } from "./testimonials"
import { Achievements } from "./achievements"
import { ContactForm } from "./contact-form"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Graduates() {
  const [activeSection, setActiveSection] = useState<string>("gallery")

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Egresados</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Descubre las historias de éxito de quienes formaron parte de nuestra institución
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 group"
              onClick={() => {
                const element = document.getElementById("content")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Explorar
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Navigation */}
      <div id="content" className="sticky top-0 z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
            <Button
              variant={activeSection === "gallery" ? "default" : "ghost"}
              onClick={() => setActiveSection("gallery")}
              className="flex-shrink-0"
            >
              Galería de Fotos
            </Button>
            <Button
              variant={activeSection === "testimonials" ? "default" : "ghost"}
              onClick={() => setActiveSection("testimonials")}
              className="flex-shrink-0"
            >
              Testimonios
            </Button>
            <Button
              variant={activeSection === "achievements" ? "default" : "ghost"}
              onClick={() => setActiveSection("achievements")}
              className="flex-shrink-0"
            >
              Logros Destacados
            </Button>
            <Button
              variant={activeSection === "contact" ? "default" : "ghost"}
              onClick={() => setActiveSection("contact")}
              className="flex-shrink-0"
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeSection === "gallery" && <PhotoGallery />}
        {activeSection === "testimonials" && <Testimonials />}
        {activeSection === "achievements" && <Achievements />}
        {activeSection === "contact" && <ContactForm />}
      </div>
    </div>
  )
}
