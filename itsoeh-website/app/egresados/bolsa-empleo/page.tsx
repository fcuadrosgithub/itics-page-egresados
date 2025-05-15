"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CalendarIcon,
  MapPinIcon,
  BuildingIcon,
  SearchIcon,
  BriefcaseIcon,
  FilterIcon,
  BookmarkIcon,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Datos de ejemplo para las ofertas de empleo
const jobOffers = [
  {
    id: 1,
    title: "Ingeniero de Software",
    company: "Tecnología Innovadora S.A.",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Pachuca, Hidalgo",
    type: "Tiempo completo",
    date: "15 de mayo, 2025",
    description:
      "Buscamos ingenieros de software con experiencia en desarrollo web y aplicaciones móviles. Conocimientos en React, Node.js y bases de datos.",
    requirements: [
      "Licenciatura en Ingeniería en Sistemas o afín",
      "2+ años de experiencia",
      "Conocimientos en React y Node.js",
    ],
    benefits: ["Salario competitivo", "Horario flexible", "Oportunidad de crecimiento", "Home office parcial"],
    exclusive: true,
    featured: true,
    salary: "$20,000 - $30,000 MXN mensuales",
  },
  {
    id: 2,
    title: "Analista de Datos",
    company: "Grupo Financiero Hidalgo",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Ciudad de México (Remoto)",
    type: "Tiempo completo",
    date: "12 de mayo, 2025",
    description:
      "Análisis de grandes volúmenes de datos para identificar tendencias y generar informes para la toma de decisiones.",
    requirements: [
      "Licenciatura en Ingeniería Industrial, Sistemas o afín",
      "Experiencia en análisis de datos",
      "Conocimientos de SQL y Python",
    ],
    benefits: [
      "Bono por desempeño",
      "Seguro de gastos médicos mayores",
      "Trabajo 100% remoto",
      "Oportunidades de capacitación",
    ],
    exclusive: true,
    featured: false,
    salary: "$25,000 - $35,000 MXN mensuales",
  },
  {
    id: 3,
    title: "Ingeniero Industrial",
    company: "Manufacturas del Centro",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Mixquiahuala, Hidalgo",
    type: "Tiempo completo",
    date: "10 de mayo, 2025",
    description:
      "Optimización de procesos de producción, control de calidad y mejora continua en planta de manufactura.",
    requirements: [
      "Licenciatura en Ingeniería Industrial",
      "1+ año de experiencia",
      "Conocimientos en Lean Manufacturing",
    ],
    benefits: ["Transporte empresarial", "Comedor subsidiado", "Prestaciones superiores a la ley"],
    exclusive: false,
    featured: false,
    salary: "$18,000 - $25,000 MXN mensuales",
  },
  {
    id: 4,
    title: "Especialista en Marketing Digital",
    company: "Agencia Creativa Digital",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Pachuca, Hidalgo (Híbrido)",
    type: "Tiempo completo",
    date: "8 de mayo, 2025",
    description: "Desarrollo e implementación de estrategias de marketing digital para empresas de diversos sectores.",
    requirements: [
      "Licenciatura en Marketing, Comunicación o afín",
      "Experiencia en gestión de redes sociales y publicidad digital",
      "Conocimientos de SEO, SEM y analítica web",
    ],
    benefits: ["Horario flexible", "Capacitación constante", "Bonos por rendimiento", "Oficina con áreas recreativas"],
    exclusive: true,
    featured: true,
    salary: "$15,000 - $22,000 MXN mensuales",
  },
  {
    id: 5,
    title: "Ingeniero Mecatrónico",
    company: "Soluciones Automatizadas S.A.",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Tula, Hidalgo",
    type: "Tiempo completo",
    date: "5 de mayo, 2025",
    description: "Diseño y mantenimiento de sistemas automatizados para líneas de producción industrial.",
    requirements: [
      "Licenciatura en Ingeniería Mecatrónica",
      "2+ años de experiencia en automatización industrial",
      "Conocimientos de PLC, HMI y sistemas SCADA",
    ],
    benefits: [
      "Prestaciones superiores a la ley",
      "Oportunidades de viajes técnicos",
      "Plan de carrera",
      "Seguro de vida",
    ],
    exclusive: false,
    featured: false,
    salary: "$22,000 - $32,000 MXN mensuales",
  },
]

export default function BolsaEmpleoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [onlyExclusive, setOnlyExclusive] = useState(false)

  // Filtrar ofertas
  const filteredJobs = jobOffers.filter((job) => {
    // Filtro de búsqueda
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    // Filtro por tipo
    const matchesType = selectedType === "all" || job.type.includes(selectedType)

    // Filtro por exclusividad
    const matchesExclusive = !onlyExclusive || job.exclusive

    return matchesSearch && matchesType && matchesExclusive
  })

  return (
    <div className="bg-gradient-to-b from-primary/5 to-background min-h-screen">
      <div className="container px-4 py-12">
        {/* Hero section */}
        <section className="mb-12 text-center relative rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <BriefcaseIcon className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Bolsa de Empleo para Egresados
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
                Accede a ofertas laborales exclusivas y oportunidades profesionales seleccionadas para la comunidad de
                egresados del ITSOEH.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8 p-6 bg-card rounded-xl shadow-sm border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar por puesto, empresa o palabras clave"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Tipo de empleo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los tipos</SelectItem>
                  <SelectItem value="Tiempo completo">Tiempo completo</SelectItem>
                  <SelectItem value="Medio tiempo">Medio tiempo</SelectItem>
                  <SelectItem value="Proyecto">Proyecto</SelectItem>
                  <SelectItem value="Prácticas">Prácticas</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant={onlyExclusive ? "default" : "outline"}
                onClick={() => setOnlyExclusive(!onlyExclusive)}
                className="min-w-[200px]"
              >
                {onlyExclusive ? "✓ Solo exclusivas" : "Mostrar todas"}
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-muted-foreground">
              Mostrando {filteredJobs.length} de {jobOffers.length} ofertas disponibles
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="hidden md:flex gap-2">
                <FilterIcon className="h-4 w-4" /> Más filtros
              </Button>
              <Button size="sm" className="gap-2">
                <BookmarkIcon className="h-4 w-4" /> Registrar mi CV
              </Button>
            </div>
          </div>
        </section>

        {/* Job listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className={`overflow-hidden transition-all duration-300 hover:shadow-md ${
                job.featured ? "border-primary/30 bg-primary/5" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="hidden md:block">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-muted">
                        <img
                          src={job.logo || "/placeholder.svg"}
                          alt={job.company}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-2xl">{job.title}</CardTitle>
                        {job.featured && <Badge className="bg-amber-500/90 hover:bg-amber-500">Destacada</Badge>}
                        {job.exclusive && (
                          <Badge className="bg-primary hover:bg-primary/90">Exclusiva para egresados</Badge>
                        )}
                      </div>
                      <CardDescription className="text-lg flex items-center mt-1">
                        <BuildingIcon className="h-4 w-4 mr-1" /> {job.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="px-3 py-1 text-sm">
                      {job.type}
                    </Badge>
                    <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {job.salary}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPinIcon className="h-4 w-4 mr-1" /> {job.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" /> Publicada: {job.date}
                  </div>
                </div>

                <p className="mb-4">{job.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-primary">
                        1
                      </span>
                      Requisitos:
                    </h4>
                    <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-primary">
                        2
                      </span>
                      Beneficios:
                    </h4>
                    <ul className="list-disc pl-8 space-y-1 text-muted-foreground">
                      {job.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 flex justify-end gap-2 p-4">
                <Button variant="outline" className="gap-1">
                  <BookmarkIcon className="h-4 w-4" /> Guardar
                </Button>
                <Button className="gap-1">
                  <BriefcaseIcon className="h-4 w-4" /> Aplicar ahora
                </Button>
              </CardFooter>
            </Card>
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-muted/50 inline-block p-4 rounded-full mb-4">
                <SearchIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No se encontraron ofertas</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No hemos encontrado ofertas que coincidan con tus criterios de búsqueda. Intenta con otros términos o
                filtros.
              </p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("all")
                  setOnlyExclusive(false)
                }}
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
