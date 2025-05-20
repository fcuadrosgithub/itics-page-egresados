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
    url: "https://empresa.com/empleo/ingeniero-software"
  },
  {
    id: 2,
    title: "Diseñador UX/UI",
    company: "Creativa Studio",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Guadalajara, Jalisco",
    type: "Medio tiempo",
    date: "18 de mayo, 2025",
    description: "Diseña experiencias de usuario intuitivas y visualmente atractivas para productos digitales.",
    requirements: ["Figma", "Adobe XD", "Experiencia en diseño web"],
    benefits: ["Horario flexible", "Ambiente creativo"],
    exclusive: false,
    featured: true,
    salary: "$12,000 - $18,000 MXN mensuales",
    url: "https://creativa.com/empleo/disenador-ux-ui"
  },
  {
    id: 3,
    title: "Analista de Datos",
    company: "DataCorp",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Monterrey, Nuevo León",
    type: "Tiempo completo",
    date: "17 de mayo, 2025",
    description: "Analiza datos para apoyar decisiones estratégicas del negocio.",
    requirements: ["SQL", "Excel", "Power BI"],
    benefits: ["Prestaciones superiores", "Trabajo híbrido"],
    exclusive: true,
    featured: false,
    salary: "$22,000 - $28,000 MXN mensuales",
    url: "https://datacorp.mx/empleo/analista-datos"
  },
  {
    id: 4,
    title: "Soporte Técnico",
    company: "Soluciones TI",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Toluca, Estado de México",
    type: "Tiempo completo",
    date: "16 de mayo, 2025",
    description: "Brinda soporte técnico a usuarios internos y externos.",
    requirements: ["Conocimiento en redes", "Atención a clientes", "Diagnóstico de hardware"],
    benefits: ["Capacitación constante", "Bono por desempeño"],
    exclusive: false,
    featured: true,
    salary: "$10,000 - $14,000 MXN mensuales",
    url: "https://solucionesti.mx/empleo/soporte-tecnico"
  },
  {
    id: 5,
    title: "Administrador de Sistemas",
    company: "Infraestructura IT",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Querétaro, Querétaro",
    type: "Tiempo completo",
    date: "19 de mayo, 2025",
    description: "Gestiona y mantiene servidores y redes internas.",
    requirements: ["Linux", "Windows Server", "Virtualización"],
    benefits: ["Seguro de vida", "Plan de carrera"],
    exclusive: true,
    featured: false,
    salary: "$25,000 - $32,000 MXN mensuales",
    url: "https://infraestruc.com/empleo/admin-sistemas"
  },
  {
    id: 6,
    title: "Desarrollador Backend",
    company: "DevSolutions",
    logo: "/placeholder.svg?height=80&width=80",
    location: "CDMX",
    type: "Proyecto",
    date: "19 de mayo, 2025",
    description: "Desarrolla microservicios y APIs escalables usando Node.js.",
    requirements: ["Node.js", "MongoDB", "Docker"],
    benefits: ["Trabajo remoto", "Pago por proyecto"],
    exclusive: false,
    featured: true,
    salary: "$20,000 MXN por proyecto",
    url: "https://devsolutions.dev/empleo/backend-node"
  },
  {
    id: 7,
    title: "Community Manager",
    company: "Agencia Viral",
    logo: "/placeholder.svg?height=80&width=80",
    location: "León, Guanajuato",
    type: "Medio tiempo",
    date: "14 de mayo, 2025",
    description: "Gestión de redes sociales y campañas digitales.",
    requirements: ["Redacción", "Canva", "Estrategia de contenido"],
    benefits: ["Trabajo desde casa", "Bonos de rendimiento"],
    exclusive: false,
    featured: false,
    salary: "$8,000 - $12,000 MXN mensuales",
    url: "https://viral.agency/empleo/community"
  },
  {
    id: 8,
    title: "Tester QA",
    company: "ControlSoft",
    logo: "/placeholder.svg?height=80&width=80",
    location: "San Luis Potosí",
    type: "Tiempo completo",
    date: "15 de mayo, 2025",
    description: "Realiza pruebas funcionales y reporta errores en software en desarrollo.",
    requirements: ["Pruebas manuales", "Metodologías ágiles", "JIRA"],
    benefits: ["Prestaciones de ley", "Home office parcial"],
    exclusive: false,
    featured: true,
    salary: "$18,000 - $24,000 MXN mensuales",
    url: "https://controlsoft.io/empleo/tester-qa"
  },
  {
    id: 9,
    title: "Project Manager Jr.",
    company: "PM Group",
    logo: "/placeholder.svg?height=80&width=80",
    location: "CDMX",
    type: "Prácticas",
    date: "13 de mayo, 2025",
    description: "Apoyo en gestión de proyectos tecnológicos.",
    requirements: ["Organización", "Comunicación", "Office"],
    benefits: ["Constancia de prácticas", "Oportunidad de contratación"],
    exclusive: true,
    featured: false,
    salary: "$5,000 MXN mensuales",
    url: "https://pmgroup.mx/empleo/pm-jr"
  },
  {
    id: 10,
    title: "Ingeniero DevOps",
    company: "CloudOps",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Remoto",
    type: "Tiempo completo",
    date: "18 de mayo, 2025",
    description: "Automatiza despliegues y mejora procesos de CI/CD.",
    requirements: ["GitHub Actions", "Docker", "AWS"],
    benefits: ["Trabajo 100% remoto", "Salario competitivo"],
    exclusive: true,
    featured: true,
    salary: "$30,000 - $38,000 MXN mensuales",
    url: "https://cloudops.dev/empleo/devops"
  },
  {
    id: 11,
    title: "Desarrollador Full Stack",
    company: "FullTech MX",
    logo: "/placeholder.svg?height=80&width=80",
    location: "Aguascalientes",
    type: "Tiempo completo",
    date: "19 de mayo, 2025",
    description: "Participa en el desarrollo de plataformas web de principio a fin.",
    requirements: ["React", "Node.js", "MySQL"],
    benefits: ["Sueldo competitivo", "Prestaciones de ley", "Clases de inglés"],
    exclusive: false,
    featured: true,
    salary: "$25,000 - $35,000 MXN mensuales",
    url: "https://fulltechmx.com/empleo/fullstack"
  }
]

export default function BolsaEmpleoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [onlyExclusive, setOnlyExclusive] = useState(false)
  const [cvDialogOpen, setCvDialogOpen] = useState(false)

  const filteredJobs = jobOffers.filter((job) => {
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

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
            {/* Dialog para registrar CV */}
            <Dialog open={cvDialogOpen} onOpenChange={setCvDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-2">
                  <BookmarkIcon className="h-4 w-4" /> Registrar mi CV
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Registrar mi CV</DialogTitle>
                  <DialogDescription>
                    Sube tu currículum para que las empresas puedan encontrarte.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Label>Nombre completo</Label>
                  <Input placeholder="Ingresa tu nombre" />
                  <Label>Correo electrónico</Label>
                  <Input type="email" placeholder="tucorreo@ejemplo.com" />
                  <Label>Sube tu CV (PDF)</Label>
                  <Input type="file" accept=".pdf" />
                </div>
                <DialogFooter>
                  <Button onClick={() => setCvDialogOpen(false)}>Enviar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
              </CardContent>
              <CardFooter className="justify-end gap-2">
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
              <Button onClick={() => {
                setSearchTerm("")
                setSelectedType("all")
                setOnlyExclusive(false)
              }} className="mt-4">Limpiar filtros</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
