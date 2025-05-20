import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Briefcase, Users, Mail } from "lucide-react"

export default function EgresadosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">Red de Egresados</h1>
              <p className="text-lg md:text-xl">
                Mantente conectado con tu alma mater y aprovecha los beneficios exclusivos para nuestra comunidad de
                egresados.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link href="/egresados/contacto">Actualiza tus datos</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/egresados/bolsa-trabajo">Ver ofertas laborales</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Egresados universitarios"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Servicios para Egresados</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Contacto de Egresados</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Mantén tus datos actualizados para recibir información sobre eventos, oportunidades laborales y
                  beneficios exclusivos.
                </p>
                <Link href="/egresados/contacto" className="inline-flex items-center text-primary hover:underline">
                  Actualizar datos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Bolsa de Trabajo</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Accede a ofertas laborales exclusivas para egresados de nuestra universidad y mejora tu desarrollo
                  profesional.
                </p>
                <Link href="/egresados/bolsa-trabajo" className="inline-flex items-center text-primary hover:underline">
                  Ver ofertas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Asociación de Egresados</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Forma parte de nuestra asociación de egresados y participa en eventos de networking y desarrollo
                  profesional.
                </p>
                <Link href="/egresados/asociacion" className="inline-flex items-center text-primary hover:underline">
                  Más información <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Testimonios de Egresados</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src={`/placeholder.svg?height=48&width=48&text=E${i}`}
                        alt={`Egresado ${i}`}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">Egresado {i}</h4>
                      <p className="text-sm text-gray-500">Generación 201{i}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    "Gracias a la formación recibida en la universidad y a la red de contactos que mantuve a través del
                    programa de egresados, pude desarrollar mi carrera profesional con éxito."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
