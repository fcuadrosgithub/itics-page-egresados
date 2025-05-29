import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold">ITSOEH</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Instituto Tecnológico Superior del Occidente del Estado de Hidalgo
            </p>
            <p className="text-sm text-muted-foreground">
              Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula km 2.5, Mixquiahuala de Juárez, Hidalgo, C.P. 42700
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/aspirantes" className="text-muted-foreground hover:text-primary transition-colors">
                  Aspirantes
                </Link>
              </li>
              <li>
                <Link href="/docentes" className="text-muted-foreground hover:text-primary transition-colors">
                  Docentes
                </Link>
              </li>
              <li>
                <Link href="/alumnos" className="text-muted-foreground hover:text-primary transition-colors">
                  Alumnos
                </Link>
              </li>
              <li>
                <Link href="/egresados" className="text-muted-foreground hover:text-primary transition-colors">
                  Egresados
                </Link>
              </li>
              <li>
                <Link href="/publico" className="text-muted-foreground hover:text-primary transition-colors">
                  Público
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Egresados</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/egresados/bolsa-empleo"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bolsa de Empleo
                </Link>
              </li>
              <li>
                <Link
                  href="/egresados/educacion-continua"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Educación Continua
                </Link>
              </li>
              <li>
                <Link href="/egresados/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/egresados/eventos" className="text-muted-foreground hover:text-primary transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/egresados/red-egresados"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Red de Egresados
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Teléfono: 01 (738) 73 54000</li>
              <li className="text-muted-foreground">Email: itsoeh@itsoeh.edu.mx</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Instituto Tecnológico Superior del Occidente del Estado de Hidalgo. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
