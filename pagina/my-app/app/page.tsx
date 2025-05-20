import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Formando el futuro con excelencia académica
              </h1>
              <p className="text-lg md:text-xl">
                Descubre nuestros programas académicos y forma parte de nuestra comunidad universitaria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link href="/aspirantes">Conoce nuestras carreras</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/publico/visitas">Agenda una visita</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Estudiantes universitarios"
                width={600}
                height={500}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Explora nuestras áreas</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Aspirantes</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Descubre nuestros programas académicos y proceso de admisión.
                </p>
                <Link href="/aspirantes" className="inline-flex items-center text-primary hover:underline">
                  Más información <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Alumnos</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Accede a recursos académicos y servicios estudiantiles.
                </p>
                <Link href="/alumnos" className="inline-flex items-center text-primary hover:underline">
                  Más información <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Egresados</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Mantente conectado con tu alma mater y accede a oportunidades laborales.
                </p>
                <Link href="/egresados" className="inline-flex items-center text-primary hover:underline">
                  Más información <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">¿Eres egresado de nuestra universidad?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Mantente conectado con tu alma mater, accede a nuestra bolsa de trabajo y participa en eventos exclusivos
            para egresados.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/egresados/contacto">Regístrate en nuestra red de egresados</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
