import Link from "next/link"
import { GraduationCap, BookOpen, Users, UserCheck, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  const categories = [
    { name: "Aspirantes", icon: <BookOpen className="h-6 w-6" />, href: "/aspirantes", highlight: false },
    { name: "Docentes", icon: <Users className="h-6 w-6" />, href: "/docentes", highlight: false },
    { name: "Alumnos", icon: <GraduationCap className="h-6 w-6" />, href: "/alumnos", highlight: false },
    { name: "Egresados", icon: <UserCheck className="h-6 w-6" />, href: "/egresados", highlight: true },
    { name: "Público", icon: <Globe className="h-6 w-6" />, href: "/publico", highlight: false },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section con fondo de degradado */}
      <div className="relative bg-gradient-to-b from-primary/10 to-background pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
              Formando profesionales con excelencia académica y compromiso social
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {categories.map((category) => (
                <Link key={category.name} href={category.href} className="group">
                  <div
                    className={cn(
                      "flex flex-col items-center p-6 rounded-xl transition-all duration-300 h-full",
                      "border border-border hover:border-primary/50 hover:shadow-lg",
                      "hover:bg-primary/5 hover:scale-105",
                      category.highlight && "bg-primary/10 border-primary/30",
                    )}
                  >
                    <div
                      className={cn(
                        "p-3 rounded-full mb-4 transition-colors",
                        category.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary",
                      )}
                    >
                      {category.icon}
                    </div>
                    <span
                      className={cn(
                        "font-medium text-lg",
                        category.highlight ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
                      )}
                    >
                      {category.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sección de estadísticas */}
      <div className="bg-muted/50 py-12">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">+5000</p>
              <p className="text-muted-foreground">Estudiantes</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">+200</p>
              <p className="text-muted-foreground">Docentes</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">+10000</p>
              <p className="text-muted-foreground">Egresados</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">+15</p>
              <p className="text-muted-foreground">Programas académicos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
