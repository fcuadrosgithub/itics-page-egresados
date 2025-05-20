"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Building, Search, Calendar } from "lucide-react"

// Datos de ejemplo para las ofertas de trabajo
const jobListings = [
  {
    id: 1,
    title: "Gerente de Proyectos",
    company: "Tecnología Innovadora S.A.",
    location: "Ciudad Universitaria",
    type: "Tiempo completo",
    category: "Tecnología",
    salary: "$30,000 - $40,000 MXN",
    date: "2025-05-01",
    description:
      "Buscamos un Gerente de Proyectos con experiencia en desarrollo de software y metodologías ágiles para liderar equipos multidisciplinarios.",
    requirements: [
      "Licenciatura en Ingeniería, Sistemas o afín",
      "3+ años de experiencia en gestión de proyectos",
      "Certificación PMP (deseable)",
      "Conocimiento de metodologías ágiles",
    ],
  },
  {
    id: 2,
    title: "Analista Financiero",
    company: "Banco Nacional",
    location: "Centro Financiero",
    type: "Tiempo completo",
    category: "Finanzas",
    salary: "$25,000 - $35,000 MXN",
    date: "2025-05-05",
    description:
      "Importante institución financiera busca analista para evaluación de riesgos y análisis de inversiones.",
    requirements: [
      "Licenciatura en Finanzas, Economía o afín",
      "2+ años de experiencia en análisis financiero",
      "Conocimiento de modelos de riesgo",
      "Manejo avanzado de Excel",
    ],
  },
  {
    id: 3,
    title: "Coordinador de Marketing Digital",
    company: "Agencia Creativa",
    location: "Zona Metropolitana",
    type: "Tiempo completo",
    category: "Marketing",
    salary: "$20,000 - $28,000 MXN",
    date: "2025-05-10",
    description:
      "Buscamos coordinador para implementar estrategias de marketing digital, gestionar redes sociales y campañas publicitarias.",
    requirements: [
      "Licenciatura en Marketing, Comunicación o afín",
      "2+ años de experiencia en marketing digital",
      "Conocimiento de herramientas de análisis web",
      "Experiencia en gestión de campañas en redes sociales",
    ],
  },
  {
    id: 4,
    title: "Abogado Corporativo",
    company: "Firma Legal Internacional",
    location: "Distrito Financiero",
    type: "Tiempo completo",
    category: "Legal",
    salary: "$35,000 - $45,000 MXN",
    date: "2025-05-12",
    description:
      "Prestigiosa firma legal busca abogado especializado en derecho corporativo para asesoría a clientes nacionales e internacionales.",
    requirements: [
      "Licenciatura en Derecho",
      "4+ años de experiencia en derecho corporativo",
      "Inglés avanzado",
      "Conocimiento de legislación mercantil",
    ],
  },
  {
    id: 5,
    title: "Docente de Matemáticas",
    company: "Colegio Preparatorio",
    location: "Campus Norte",
    type: "Medio tiempo",
    category: "Educación",
    salary: "$15,000 - $20,000 MXN",
    date: "2025-05-15",
    description: "Institución educativa busca docente para impartir clases de matemáticas a nivel preparatoria.",
    requirements: [
      "Licenciatura en Matemáticas, Física o afín",
      "2+ años de experiencia docente",
      "Habilidades pedagógicas",
      "Disponibilidad de horario matutino",
    ],
  },
]

export default function BolsaTrabajoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [selectedJob, setSelectedJob] = useState<(typeof jobListings)[0] | null>(null)

  // Filtrar ofertas de trabajo
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "" || job.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  // Obtener categorías únicas para el filtro
  const categories = [...new Set(jobListings.map((job) => job.category))]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-center text-3xl font-bold">Bolsa de Trabajo para Egresados</h1>
      <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-300">
        Explora oportunidades laborales exclusivas para egresados de nuestra universidad.
      </p>

      {/* Filtros */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar por título, empresa o descripción"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            setSearchTerm("")
            setCategoryFilter("")
          }}
        >
          Limpiar filtros
        </Button>
      </div>

      {/* Listado de ofertas */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card key={job.id} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Building className="mr-2 h-4 w-4" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Publicado: {new Date(job.date).toLocaleDateString()}</span>
                </div>
                <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => setSelectedJob(job)}>
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-lg text-gray-500">No se encontraron ofertas de trabajo que coincidan con tu búsqueda.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearchTerm("")
                setCategoryFilter("")
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>

      {/* Modal de detalles */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <Card className="max-h-[90vh] w-full max-w-3xl overflow-auto">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{selectedJob.title}</CardTitle>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">{selectedJob.company}</p>
                </div>
                <Badge variant="outline">{selectedJob.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{selectedJob.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>{selectedJob.salary}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Publicado: {new Date(selectedJob.date).toLocaleDateString()}</span>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Descripción</h3>
                <p className="text-gray-600 dark:text-gray-300">{selectedJob.description}</p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Requisitos</h3>
                <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-300">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-semibold">¿Interesado en esta posición?</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Completa el siguiente formulario para enviar tu CV y aplicar a esta oferta.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input id="nombre" placeholder="Tu nombre completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Label htmlFor="cv">Adjuntar CV (PDF)</Label>
                  <Input id="cv" type="file" accept=".pdf" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setSelectedJob(null)}>
                Cerrar
              </Button>
              <Button>Enviar aplicación</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
