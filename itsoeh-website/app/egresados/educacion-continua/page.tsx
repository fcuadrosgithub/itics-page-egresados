import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon, TagIcon, BookOpenIcon, FilterIcon, SearchIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

// Datos de ejemplo para cursos y programas educativos
const educationPrograms = {
  courses: [
    {
      id: 1,
      title: "Desarrollo Web Full Stack",
      type: "Curso",
      duration: "80 horas",
      startDate: "1 de junio, 2025",
      price: "$3,500",
      discount: "15% para egresados",
      description:
        "Aprende a desarrollar aplicaciones web completas utilizando las tecnologías más demandadas en el mercado laboral.",
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
      description:
        "Conoce y aplica las metodologías ágiles más utilizadas en la industria para la gestión eficiente de proyectos.",
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
      description:
        "Introducción a los fundamentos de la inteligencia artificial y el aprendizaje automático con aplicaciones prácticas.",
      topics: [
        "Fundamentos de IA",
        "Python para IA",
        "Redes neuronales",
        "Visión por computadora",
        "Procesamiento de lenguaje natural",
      ],
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
      description:
        "Adquiere los conocimientos necesarios para implementar tecnologías de la Industria 4.0 en procesos productivos.",
      topics: [
        "Internet de las Cosas",
        "Big Data",
        "Inteligencia Artificial",
        "Robótica Colaborativa",
        "Manufactura Aditiva",
      ],
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
      description:
        "Desarrolla habilidades para la dirección estratégica de empresas en entornos competitivos y cambiantes.",
      topics: [
        "Análisis estratégico",
        "Gestión financiera",
        "Marketing estratégico",
        "Innovación empresarial",
        "Liderazgo organizacional",
      ],
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
      topics: [
        "Seguridad en redes",
        "Ethical Hacking",
        "Protección de datos",
        "Análisis de vulnerabilidades",
        "Normativas",
      ],
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
      description:
        "Programa de posgrado enfocado en el desarrollo de competencias avanzadas en sistemas computacionales e inteligencia artificial.",
      topics: [
        "Inteligencia Artificial",
        "Computación en la Nube",
        "Seguridad Informática",
        "Desarrollo de Software Avanzado",
      ],
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
      description:
        "Programa de posgrado orientado a la formación de profesionales capaces de administrar eficientemente organizaciones industriales.",
      topics: [
        "Administración estratégica",
        "Optimización de procesos industriales",
        "Gestión de la cadena de suministro",
        "Sistemas de calidad",
      ],
      modality: "Presencial",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      instructor: "Varios docentes",
      availability: "Proceso de selección",
    },
  ],
}

function ProgramCard({ program }) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-md border-primary/10 hover:border-primary/30">
      <div className="relative h-48 overflow-hidden">
        <img
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <Badge
              className={`${program.featured ? "bg-amber-500 hover:bg-amber-600" : "bg-primary hover:bg-primary/90"}`}
            >
              {program.type}
            </Badge>
            <h3 className="text-xl font-semibold mt-2">{program.title}</h3>
          </div>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{program.title}</CardTitle>
        </div>
        <CardDescription className="text-base">{program.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <ClockIcon className="h-4 w-4 mr-1 text-primary" /> {program.duration}
          </div>
          <div className="flex items-center text-muted-foreground">
            <CalendarIcon className="h-4 w-4 mr-1 text-primary" /> Inicio: {program.startDate}
          </div>
          <div className="flex items-center">
            <Badge variant="outline" className="font-normal">
              {program.modality}
            </Badge>
          </div>
          <div className="flex items-center text-muted-foreground text-xs">
            <span className="bg-primary/10 px-2 py-1 rounded-full text-primary">{program.availability}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Impartido por: {program.instructor}</h4>
          <div className="flex flex-wrap gap-1">
            {program.topics.map((topic, index) => (
              <Badge key={index} variant="secondary" className="font-normal text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 bg-muted/50 p-3 rounded-lg">
          <TagIcon className="h-5 w-5 text-primary" />
          <div className="flex-1">
            <span className="font-semibold text-lg">{program.price}</span>
            {program.discount && (
              <div className="text-sm">
                <Badge variant="default" className="font-normal bg-green-600 hover:bg-green-700">
                  {program.discount}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 pt-0">
        <Button variant="outline" className="flex-1">
          Más información
        </Button>
        <Button className="flex-1">Inscribirme</Button>
      </CardFooter>
    </Card>
  )
}

export default function EducacionContinuaPage() {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-background min-h-screen">
      <div className="container px-4 py-12">
        {/* Hero section */}
        <section className="mb-12 text-center relative rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <BookOpenIcon className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Educación Continua
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
                Amplía tus conocimientos y mejora tus oportunidades profesionales con nuestra oferta educativa exclusiva
                para egresados.
              </p>
            </div>
          </div>
        </section>

        {/* Search and filters */}
        <div className="bg-card rounded-xl mb-10 p-6 shadow-sm border">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar programas educativos" className="pl-10" />
            </div>
            <Button variant="outline" className="gap-2 min-w-[140px]">
              <FilterIcon className="h-4 w-4" /> Filtros
            </Button>
          </div>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8 w-full max-w-4xl mx-auto">
            <TabsTrigger value="courses" className="text-sm">
              Cursos
            </TabsTrigger>
            <TabsTrigger value="diplomas" className="text-sm">
              Diplomados
            </TabsTrigger>
            <TabsTrigger value="certifications" className="text-sm">
              Certificaciones
            </TabsTrigger>
            <TabsTrigger value="postgraduate" className="text-sm">
              Posgrados
            </TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationPrograms.courses.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diplomas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationPrograms.diplomas.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationPrograms.certifications.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="postgraduate">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationPrograms.postgraduate.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to action */}
        <div className="mt-16 bg-primary/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿No encuentras lo que buscas?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Si estás interesado en un tema específico que no aparece en nuestra oferta educativa, háznoslo saber.
            Podemos desarrollar programas a medida según las necesidades de nuestros egresados.
          </p>
          <Button size="lg" className="px-8">
            Solicitar un programa
          </Button>
        </div>
      </div>
    </div>
  )
}
