"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BriefcaseIcon, GraduationCapIcon, PhoneIcon } from "lucide-react"

// Simulamos componentes de framer-motion
const MotionDiv = ({ children, ...props }) => <div {...props}>{children}</div>

export default function EgresadosPage() {
  const features = [
    {
      icon: <BriefcaseIcon className="h-12 w-12 mb-2 text-primary" />,
      title: "Bolsa de Empleo",
      description: "Accede a ofertas laborales exclusivas para egresados del ITSOEH",
      content:
        "Conectamos a nuestros egresados con empresas que buscan profesionales con tu perfil y formación académica.",
      href: "/egresados/bolsa-empleo",
      buttonText: "Ver Ofertas",
      delay: 0.1,
    },
    {
      icon: <GraduationCapIcon className="h-12 w-12 mb-2 text-primary" />,
      title: "Educación Continua",
      description: "Cursos, diplomados, posgrados y certificaciones",
      content: "Mantente actualizado con nuestra oferta educativa diseñada para el desarrollo profesional continuo.",
      href: "/egresados/educacion-continua",
      buttonText: "Explorar Cursos",
      delay: 0.2,
    },
    {
      icon: <PhoneIcon className="h-12 w-12 mb-2 text-primary" />,
      title: "Contacto",
      description: "Mantente en contacto con tu alma mater",
      content: "¿Tienes dudas o sugerencias? Comunícate con nosotros y forma parte de nuestra red de egresados.",
      href: "/egresados/contacto",
      buttonText: "Contáctanos",
      delay: 0.3,
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section con fondo decorativo */}
      <div className="relative bg-gradient-to-b from-primary/10 via-background to-background pt-12 pb-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=900&width=1600')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>

        <div className="container px-4 relative">
          <MotionDiv
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Portal de <span className="text-primary">Egresados</span>
            </h1>
            <p className="text-xl text-muted-foreground mx-auto">
              Bienvenido al espacio dedicado a nuestros egresados. Aquí encontrarás recursos exclusivos para continuar
              tu desarrollo profesional y mantener el vínculo con tu alma mater.
            </p>
          </MotionDiv>
        </div>
      </div>

      {/* Features Section */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardHeader className="text-center pb-3">
                  <div className="rounded-full p-4 bg-primary/10 inline-block mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-center">{feature.content}</p>
                </CardContent>
                <CardFooter className="pt-6">
                  <Link href={feature.href} className="w-full">
                    <Button className="w-full group-hover:bg-primary/90 transition-all duration-300" size="lg">
                      {feature.buttonText}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-muted/50 py-16">
        <div className="container px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2">Lo que dicen nuestros egresados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce las experiencias de quienes han formado parte de nuestra comunidad
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Gracias a la bolsa de trabajo del ITSOEH conseguí mi primer empleo. El apoyo que recibí como egresado fue fundamental para iniciar mi carrera profesional.",
                author: "Ana Martínez",
                role: "Ingeniera en Sistemas, Generación 2020",
                delay: 0.1,
              },
              {
                quote:
                  "Los cursos de educación continua me han permitido mantenerme actualizado en mi campo. Las certificaciones obtenidas han sido clave para mi crecimiento laboral.",
                author: "Carlos Rodríguez",
                role: "Ingeniero Industrial, Generación 2019",
                delay: 0.2,
              },
              {
                quote:
                  "La red de contactos que he formado a través de los eventos para egresados ha sido invaluable. El ITSOEH sigue siendo parte importante de mi vida profesional.",
                author: "Laura Sánchez",
                role: "Ingeniera en Gestión Empresarial, Generación 2021",
                delay: 0.3,
              },
            ].map((testimonial, i) => (
              <MotionDiv
                key={i}
                className="bg-card p-6 rounded-xl shadow-sm border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.delay }}
              >
                <div className="text-lg italic text-muted-foreground mb-4">"{testimonial.quote}"</div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
