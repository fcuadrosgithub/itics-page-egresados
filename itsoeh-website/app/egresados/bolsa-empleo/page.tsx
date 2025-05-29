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
  BookmarkIcon,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"


interface JobOffer {
  id: number
  title: string
  company: string
  logo: string
  location: string
  type: string
  date: string
  description: string
  requirements: string[]
  benefits: string[]
  exclusive: boolean
  featured: boolean
  salary: string
  url: string
}

const jobOffers: JobOffer[] = [
  {
  id: 1,
  title: "Ingeniero de Software",
  company: "Tecnología Innovadora S.A.",
  logo: "/placeholder.svg?height=80&width=80",
  location: "Pachuca, Hidalgo",
  type: "Tiempo completo",
  date: "15 de mayo, 2025",
  description:
    "Desarrolla soluciones digitales innovadoras utilizando tecnologías modernas como React y Node.js. Participarás en proyectos web y móviles, trabajando en un entorno ágil con enfoque en la calidad del código, pruebas automatizadas y despliegues continuos.",
  requirements: [
    "Licenciatura en Ingeniería en Sistemas o afín",
    "2+ años de experiencia desarrollando aplicaciones web y móviles",
    "Dominio de React, Node.js y bases de datos relacionales/noSQL",
    "Familiaridad con control de versiones (Git) y metodologías ágiles"
  ],
  benefits: [
    "Salario competitivo",
    "Horario flexible",
    "Oportunidad de crecimiento profesional y liderazgo técnico",
    "Home office parcial",
    "Capacitación en tecnologías emergentes"
  ],
  exclusive: true,
  featured: true,
  salary: "$20,000 - $30,000 MXN mensuales",
  url: "https://empresa.com/empleo/ingeniero-software"
},
{
  id: 2,
  title: "Diseñador UX/UI",
  company: "Creativos Digitales",
  logo: "/placeholder.svg?height=80&width=80",
  location: "CDMX",
  type: "Tiempo completo",
  date: "10 de mayo, 2025",
  description:
    "Responsable del diseño de interfaces centradas en el usuario para productos digitales. Colaborarás estrechamente con equipos de desarrollo y producto, desde la ideación hasta la implementación, aplicando principios de diseño accesible y responsivo.",
  requirements: [
    "Experiencia comprobable en diseño de interfaces web y móviles",
    "Dominio de herramientas como Figma, Sketch o Adobe XD",
    "Conocimiento en principios de UX, diseño accesible y patrones de UI",
    "Capacidad de trabajo colaborativo con desarrolladores y PMs"
  ],
  benefits: [
    "Prestaciones de ley",
    "Trabajo remoto disponible",
    "Clases de inglés subvencionadas",
    "Participación en proyectos creativos de alto impacto"
  ],
  exclusive: false,
  featured: false,
  salary: "$18,000 MXN mensuales",
  url: "https://empresa.com/empleo/disenador-ui"
},
{
  id: 3,
  title: "Desarrollador Backend",
  company: "Soluciones Cloud",
  logo: "/placeholder.svg?height=80&width=80",
  location: "Guadalajara, Jalisco",
  type: "Tiempo completo",
  date: "8 de mayo, 2025",
  description:
    "Encargado de crear APIs eficientes y seguras, integraciones con servicios en la nube y bases de datos. Trabajarás con herramientas modernas como Docker y Git, asegurando escalabilidad y rendimiento del backend.",
  requirements: [
    "3+ años de experiencia como desarrollador backend",
    "Conocimientos sólidos en Node.js, Express, MongoDB y Docker",
    "Familiaridad con servicios cloud como AWS o GCP",
    "Experiencia en Git, pruebas unitarias y metodologías ágiles"
  ],
  benefits: [
    "Sueldo competitivo",
    "Home office parcial o total",
    "Bonos trimestrales por desempeño",
    "Acceso a certificaciones en tecnologías cloud"
  ],
  exclusive: true,
  featured: true,
  salary: "$25,000 MXN mensuales",
  url: "https://empresa.com/empleo/backend"
},
{
  id: 4,
  title: "Analista de Datos",
  company: "Data Insights",
  logo: "/placeholder.svg?height=80&width=80",
  location: "Remoto",
  type: "Medio tiempo",
  date: "6 de mayo, 2025",
  description:
    "Analiza y visualiza grandes volúmenes de datos para generar insights accionables. Apoyarás en la creación de dashboards, limpieza de datos y reportes automatizados para áreas clave del negocio.",
  requirements: [
    "Licenciatura en Estadística, Matemáticas, Ingeniería o afín",
    "Dominio de SQL, Power BI y conocimientos intermedios de Python",
    "Capacidad analítica para interpretar resultados y generar recomendaciones",
    "Nivel de inglés intermedio para lectura técnica"
  ],
  benefits: [
    "Trabajo 100% remoto",
    "Horario flexible adaptado a estudiantes o freelance",
    "Participación en proyectos de alto impacto",
    "Capacitación continua en herramientas de análisis"
  ],
  exclusive: false,
  featured: false,
  salary: "$15,000 MXN mensuales",
  url: "https://empresa.com/empleo/analista-datos"
},
{
  id: 5,
  title: "Soporte Técnico",
  company: "Infraestructura IT",
  logo: "/placeholder.svg?height=80&width=80",
  location: "Querétaro",
  type: "Tiempo completo",
  date: "4 de mayo, 2025",
  description:
    "Brinda atención técnica a usuarios finales, resolución de incidencias, instalación de software y mantenimiento de equipos informáticos. Serás parte clave del equipo de infraestructura local.",
  requirements: [
    "Conocimientos básicos de redes y hardware",
    "Experiencia en soporte a usuarios (presencial o remoto)",
    "Buenas habilidades de comunicación y atención al cliente",
    "Disponibilidad de horario rotativo"
  ],
  benefits: [
    "Capacitación constante en nuevas tecnologías",
    "Prestaciones superiores a la ley (vales, seguro, vacaciones)",
    "Buen ambiente laboral",
    "Oportunidad de crecimiento en el área de TI"
  ],
  exclusive: false,
  featured: false,
  salary: "$12,000 MXN mensuales",
  url: "https://empresa.com/empleo/soporte"
},
{
  id: 6,
  title: "Marketing Digital",
  company: "Agencia Creativa MX",
  logo: "/placeholder.svg?height=80&width=80",
  location: "CDMX",
  type: "Tiempo completo",
  date: "2 de mayo, 2025",
  description:
    "Desarrolla y ejecuta campañas de marketing digital en redes sociales y Google Ads. Analiza métricas, propone mejoras y mantiene actualizadas las estrategias de contenido y posicionamiento SEO/SEM.",
  requirements: [
    "Experiencia mínima de 2 años en marketing digital",
    "Manejo avanzado de herramientas como Facebook Ads y Google Ads",
    "Conocimientos de SEO/SEM, Google Analytics y redacción persuasiva",
    "Alta creatividad y capacidad de análisis de resultados"
  ],
  benefits: [
    "Bonos por desempeño mensual",
    "Clases de marketing digital y certificaciones",
    "Home office parcial con horarios híbridos",
    "Ambiente dinámico y creativo"
  ],
  exclusive: false,
  featured: true,
  salary: "$17,000 MXN mensuales",
  url: "https://empresa.com/empleo/marketing"
}

  
]
  


export default function BolsaEmpleoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [onlyExclusive, setOnlyExclusive] = useState(false)
  const [cvDialogOpen, setCvDialogOpen] = useState(false)
  const [openRequirementsId, setOpenRequirementsId] = useState<number | null>(null)

 const normalizeText = (text: string) =>
  text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

const normalizedSearchTerm = normalizeText(searchTerm)

const filteredJobs = jobOffers.filter((job) => {
  const matchesSearch =
    normalizedSearchTerm === "" ||
    normalizeText(job.title).includes(normalizedSearchTerm) ||
    normalizeText(job.company).includes(normalizedSearchTerm) ||
    normalizeText(job.description).includes(normalizedSearchTerm)

  const matchesType = selectedType === "all" || job.type.includes(selectedType)
  const matchesExclusive = !onlyExclusive || job.exclusive

  return matchesSearch && matchesType && matchesExclusive
})

  return (
    <div className="bg-gradient-to-b from-primary/5 to-background min-h-screen">
      <div className="container px-4 py-12">
        <section className="mb-12 text-center relative rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-10 relative overflow-hidden">
            <div className="relative z-10">
              <BriefcaseIcon className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Bolsa de Empleo para Egresados
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
                Accede a ofertas laborales exclusivas y oportunidades profesionales seleccionadas para la comunidad de egresados del ITSOEH.
              </p>
            </div>
          </div>
        </section>

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
          </div>
        </section>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{job.description}</p>
                <p className="text-sm text-muted-foreground mt-2">{job.location}</p>
               {openRequirementsId === job.id && (
  <div className="mt-4 space-y-4 text-sm text-muted-foreground">
    <div>
      <h4 className="font-semibold mb-1">Requisitos:</h4>
      <ul className="list-disc pl-5">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-1">Beneficios:</h4>
      <ul className="list-disc pl-5">
        {job.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="font-semibold mb-1">Salario:</h4>
      <p>{job.salary}</p>
    </div>
  
  </div>
)}

              </CardContent>
              <CardFooter className="justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setOpenRequirementsId(openRequirementsId === job.id ? null : job.id)
                  }
                >
                  {openRequirementsId === job.id ? "Ocultar requisitos" : "Ver requisitos"}
                </Button>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-1">
                    <BriefcaseIcon className="h-4 w-4" /> Aplicar ahora
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <SearchIcon className="h-8 w-8 mx-auto mb-4" />
              No se encontraron ofertas con esos criterios.
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("all")
                  setOnlyExclusive(false)
                }}
                className="mt-4"
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
