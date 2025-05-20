'use client'

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"

type Program = {
  id: number
  title: string
  description: string
  image: string
  type: string
  featured: boolean
  duration: string
  startDate: string
  modality: string
  availability: string
  instructor: string
  topics: string[]
  price: string
  discount?: string
}

const categoriasTitulo: Record<string, string> = {
  courses: "Cursos",
  diplomas: "Diplomados",
  certifications: "Certificaciones",
  postgraduate: "Posgrados",
}

const educacionContinua: Record<string, Program[]> = {
  courses: [
    {
      id: 1,
      title: "Desarrollo Web Full Stack",
      type: "Curso",
      duration: "80 horas",
      startDate: "1 de junio, 2025",
      price: "$3,500",
      discount: "15% para egresados",
      description: "Aprende a desarrollar aplicaciones web completas utilizando las tecnologías más demandadas en el mercado laboral.",
      topics: ["HTML5 y CSS3", "JavaScript moderno", "React", "Node.js", "MongoDB"],
      modality: "Híbrido",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      instructor: "Dr. Miguel Torres",
      availability: "40 lugares disponibles",
    },
    {
      id: 2,
      title: "Gestión de Proyectos con Metodologías Ágiles",
      type: "Curso",
      duration: "40 horas",
      startDate: "15 de junio, 2025",
      price: "$2,800",
      discount: "15% para egresados",
      description: "Conoce y aplica las metodologías ágiles más utilizadas en la industria para la gestión eficiente de proyectos.",
      topics: ["Scrum", "Kanban", "Lean", "Design Thinking", "Herramientas digitales"],
      modality: "En línea",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      instructor: "Mtra. Laura Martínez",
      availability: "25 lugares disponibles",
    },
    {
      id: 3,
      title: "Inteligencia Artificial y Machine Learning",
      type: "Curso",
      duration: "60 horas",
      startDate: "20 de junio, 2025",
      price: "$4,200",
      discount: "15% para egresados",
      description: "Introducción a los fundamentos de la inteligencia artificial y el aprendizaje automático con aplicaciones prácticas.",
      topics: ["Fundamentos de IA", "Python para IA", "Redes neuronales", "Visión por computadora", "Procesamiento de lenguaje natural"],
      modality: "En línea",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      instructor: "Dr. Ricardo Sánchez",
      availability: "30 lugares disponibles",
    },
  ],
  diplomas: [
    {
      id: 4,
      title: "Diplomado en Industria 4.0",
      type: "Diplomado",
      duration: "120 horas",
      startDate: "5 de julio, 2025",
      price: "$8,500",
      discount: "20% para egresados",
      description: "Adquiere los conocimientos necesarios para implementar tecnologías de la Industria 4.0 en procesos productivos.",
      topics: ["Internet de las Cosas", "Big Data", "Inteligencia Artificial", "Robótica Colaborativa", "Manufactura Aditiva"],
      modality: "Presencial",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      instructor: "Dr. Fernando López",
      availability: "20 lugares disponibles",
    },
    {
      id: 5,
      title: "Diplomado en Gestión Empresarial Estratégica",
      type: "Diplomado",
      duration: "100 horas",
      startDate: "12 de julio, 2025",
      price: "$7,800",
      discount: "20% para egresados",
      description: "Desarrolla habilidades para la dirección estratégica de empresas en entornos competitivos y cambiantes.",
      topics: ["Análisis estratégico", "Gestión financiera", "Marketing estratégico", "Innovación empresarial", "Liderazgo organizacional"],
      modality: "Híbrido",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      instructor: "Dra. Elena Ramírez",
      availability: "15 lugares disponibles",
    },
  ],
  certifications: [
    {
      id: 6,
      title: "Certificación en Ciberseguridad",
      type: "Certificación",
      duration: "60 horas",
      startDate: "10 de junio, 2025",
      price: "$5,200",
      discount: "15% para egresados",
      description: "Prepárate para obtener una certificación internacional en ciberseguridad y protección de datos.",
      topics: ["Seguridad en redes", "Ethical Hacking", "Protección de datos", "Análisis de vulnerabilidades", "Normativas"],
      modality: "Híbrido",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      instructor: "Mtro. Carlos Ruiz",
      availability: "18 lugares disponibles",
    },
    {
      id: 7,
      title: "Certificación en Gestión de Calidad ISO 9001",
      type: "Certificación",
      duration: "50 horas",
      startDate: "20 de junio, 2025",
      price: "$4,800",
      discount: "15% para egresados",
      description: "Conoce los requisitos de la norma ISO 9001 y aprende a implementar sistemas de gestión de calidad.",
      topics: ["Fundamentos de ISO 9001", "Documentación", "Auditorías internas", "Mejora continua", "Certificación"],
      modality: "En línea",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      instructor: "Ing. Patricia Hernández",
      availability: "25 lugares disponibles",
    },
  ],
  postgraduate: [
    {
      id: 8,
      title: "Maestría en Sistemas Computacionales",
      type: "Posgrado",
      duration: "2 años",
      startDate: "Agosto 2025",
      price: "Consultar",
      discount: "Becas disponibles para egresados",
      description: "Programa de posgrado enfocado en el desarrollo de competencias avanzadas en sistemas computacionales e inteligencia artificial.",
      topics: ["Inteligencia Artificial", "Computación en la Nube", "Seguridad Informática", "Desarrollo de Software Avanzado"],
      modality: "Híbrido",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      instructor: "Varios docentes",
      availability: "Proceso de selección",
    },
    {
      id: 9,
      title: "Maestría en Administración Industrial",
      type: "Posgrado",
      duration: "2 años",
      startDate: "Agosto 2025",
      price: "Consultar",
      discount: "Becas disponibles para egresados",
      description: "Programa de posgrado orientado a la formación de profesionales capaces de administrar eficientemente organizaciones industriales.",
      topics: ["Administración estratégica", "Optimización de procesos industriales", "Gestión de la cadena de suministro", "Sistemas de calidad"],
      modality: "Presencial",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      instructor: "Varios docentes",
      availability: "Proceso de selección",
    },
  ],
}

export default function EducacionContinuaPage() {
  const [programaSeleccionado, setProgramaSeleccionado] = useState<Program | null>(null)
  const [accion, setAccion] = useState<"info" | "inscripcion" | null>(null)
  const [tab, setTab] = useState<keyof typeof educacionContinua>("courses")

  const handleInfo = (program: Program) => {
    setProgramaSeleccionado(program)
    setAccion("info")
  }

  const handleInscripcion = (program: Program) => {
    setProgramaSeleccionado(program)
    setAccion("inscripcion")
  }

  const renderPrograms = (programs: Program[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {programs.map((program) => (
        <Card key={program.id}>
          <CardHeader>
            <CardTitle>{program.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p><strong>Duración:</strong> {program.duration}</p>
            <p><strong>Modalidad:</strong> {program.modality}</p>
            <p><strong>Instructor:</strong> {program.instructor}</p>
            <p><strong>Precio:</strong> {program.price}</p>
            {program.discount && <p><strong>Descuento:</strong> {program.discount}</p>}
          </CardContent>
          <CardFooter className="flex justify-between gap-2 pt-0">
            <Button variant="outline" className="flex-1" onClick={() => handleInfo(program)}>
              Más información
            </Button>
            <Button className="flex-1" onClick={() => handleInscripcion(program)}>
              Inscribirme
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="p-4 space-y-8">
      {/* Tabs de categorías */}
      <Tabs value={tab} onValueChange={(value) => setTab(value as keyof typeof educacionContinua)} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8 w-full max-w-4xl mx-auto">
          <TabsTrigger value="courses">Cursos</TabsTrigger>
          <TabsTrigger value="diplomas">Diplomados</TabsTrigger>
          <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
          <TabsTrigger value="postgraduate">Posgrados</TabsTrigger>
        </TabsList>

        {Object.entries(educacionContinua).map(([categoria, programas]) => (
          <TabsContent key={categoria} value={categoria}>
            {renderPrograms(programas)}
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!programaSeleccionado} onOpenChange={(open) => {
        if (!open) {
          setProgramaSeleccionado(null)
          setAccion(null)
        }
      }}>
        <DialogContent className="max-w-lg">
          {programaSeleccionado && (
            <>
              <DialogHeader>
                <DialogTitle>{programaSeleccionado.title}</DialogTitle>
                <DialogDescription>
                  {accion === "info"
                    ? "Detalles del programa seleccionado."
                    : "Formulario de inscripción (simulado)."}
                </DialogDescription>
              </DialogHeader>

              {accion === "info" && (
                <div className="space-y-2 text-sm">
                  <p><strong>Descripción:</strong> {programaSeleccionado.description}</p>
                  <p><strong>Duración:</strong> {programaSeleccionado.duration}</p>
                  <p><strong>Modalidad:</strong> {programaSeleccionado.modality}</p>
                  <p><strong>Instructor:</strong> {programaSeleccionado.instructor}</p>
                  <p><strong>Precio:</strong> {programaSeleccionado.price}</p>
                  {programaSeleccionado.discount && (
                    <p><strong>Descuento:</strong> {programaSeleccionado.discount}</p>
                  )}
                </div>
              )}

              {accion === "inscripcion" && (
                <div className="space-y-4 text-sm">
                  <p>Estás interesado en inscribirte al programa:</p>
                  <p className="font-semibold">{programaSeleccionado.title}</p>
                  <p>Por favor, contáctanos vía correo o llena el formulario que se habilitará próximamente.</p>
                </div>
              )}

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cerrar</Button>
                </DialogClose>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}