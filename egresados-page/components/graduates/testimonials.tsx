"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Datos de ejemplo para los testimonios
const testimonials = [
  {
    id: 1,
    name: "María González",
    position: "CEO de Innovatech",
    year: "2015",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Mi paso por esta institución fue fundamental para mi desarrollo profesional. Los conocimientos y valores adquiridos me han permitido liderar con éxito mi propia empresa tecnológica.",
  },
  {
    id: 2,
    name: "Alejandro Pérez",
    position: "Investigador en Harvard",
    year: "2012",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Gracias a la formación recibida, pude acceder a programas internacionales de investigación. La excelencia académica de esta institución es reconocida globalmente.",
  },
  {
    id: 3,
    name: "Carolina Ruiz",
    position: "Directora de Marketing en Google",
    year: "2016",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Las oportunidades de networking y la visión internacional que me brindó la institución fueron clave para mi carrera en el ámbito tecnológico global.",
  },
  {
    id: 4,
    name: "Roberto Méndez",
    position: "Arquitecto premiado internacionalmente",
    year: "2010",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "La creatividad y el rigor técnico que aprendí durante mi formación han sido la base de mis proyectos arquitectónicos, que ahora son reconocidos en todo el mundo.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonios de Egresados</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Descubre lo que nuestros egresados tienen que decir sobre su experiencia en nuestra institución y cómo ha
          impactado en sus carreras profesionales.
        </p>
      </div>

      <div
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-4">
                      <Quote className="h-8 w-8 text-purple-500 opacity-50" />
                      <p className="text-lg italic">{testimonial.quote}</p>
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">
                          {testimonial.position} | Promoción {testimonial.year}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Anterior</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Siguiente</span>
        </Button>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-purple-600" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Testimonio {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
