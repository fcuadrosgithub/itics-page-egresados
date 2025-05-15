import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Briefcase, GraduationCap, Globe, Trophy } from "lucide-react"

// Datos de ejemplo para los logros
const achievements = [
  {
    id: 1,
    title: "Premios Internacionales",
    description: "Nuestros egresados han recibido más de 50 premios internacionales en los últimos 5 años.",
    icon: <Trophy className="h-10 w-10 text-yellow-500" />,
    stats: "50+ premios",
  },
  {
    id: 2,
    title: "Publicaciones Académicas",
    description: "Investigaciones y artículos publicados en revistas científicas de prestigio mundial.",
    icon: <BookOpen className="h-10 w-10 text-blue-500" />,
    stats: "200+ publicaciones",
  },
  {
    id: 3,
    title: "Empresas Fundadas",
    description: "Startups y empresas creadas por nuestros egresados con impacto nacional e internacional.",
    icon: <Briefcase className="h-10 w-10 text-green-500" />,
    stats: "120+ empresas",
  },
  {
    id: 4,
    title: "Becas de Posgrado",
    description: "Egresados que han obtenido becas para estudios de posgrado en universidades de élite.",
    icon: <GraduationCap className="h-10 w-10 text-purple-500" />,
    stats: "300+ becarios",
  },
  {
    id: 5,
    title: "Presencia Internacional",
    description: "Países donde nuestros egresados están desarrollando sus carreras profesionales.",
    icon: <Globe className="h-10 w-10 text-indigo-500" />,
    stats: "45+ países",
  },
  {
    id: 6,
    title: "Reconocimientos",
    description: "Distinciones y menciones honoríficas recibidas por la excelencia de nuestros egresados.",
    icon: <Award className="h-10 w-10 text-red-500" />,
    stats: "150+ reconocimientos",
  },
]

// Datos de ejemplo para egresados destacados
const featuredGraduates = [
  {
    id: 1,
    name: "Dr. Fernando Vega",
    achievement: "Premio Nobel de Medicina 2022",
    image: "/placeholder.svg?height=300&width=300",
    description: "Por sus investigaciones sobre terapias celulares para enfermedades neurodegenerativas.",
  },
  {
    id: 2,
    name: "Ing. Lucía Morales",
    achievement: "CEO de RenovaTech",
    image: "/placeholder.svg?height=300&width=300",
    description: "Fundadora de una de las empresas líderes en energías renovables valorada en $2 billones.",
  },
  {
    id: 3,
    name: "Arq. Daniel Herrera",
    achievement: "Premio Pritzker 2023",
    image: "/placeholder.svg?height=300&width=300",
    description: "Reconocido con el 'Nobel de Arquitectura' por sus diseños sostenibles e innovadores.",
  },
]

export function Achievements() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Logros Destacados</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Nuestra institución se enorgullece de los logros y contribuciones de nuestros egresados en diversos campos
          profesionales y académicos.
        </p>
      </div>

      {/* Estadísticas de logros */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              {achievement.icon}
              <div>
                <CardTitle>{achievement.title}</CardTitle>
                <CardDescription>{achievement.stats}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Egresados destacados */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Egresados Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGraduates.map((graduate) => (
            <Card key={graduate.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <Image src={graduate.image || "/placeholder.svg"} alt={graduate.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-1">{graduate.name}</h4>
                <p className="text-purple-600 font-medium mb-3">{graduate.achievement}</p>
                <p className="text-gray-600">{graduate.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
