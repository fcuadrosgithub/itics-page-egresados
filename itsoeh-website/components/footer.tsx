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
              <li className="text-muted-foreground">Teléfono: (738) 123-4567</li>
              <li className="text-muted-foreground">Email: contacto@itsoeh.edu.mx</li>
              <li className="flex space-x-2 pt-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Instituto Tecnológico Superior del Occidente del Estado de Hidalgo. Todos los
              derechos reservados.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/aviso-privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                Aviso de Privacidad
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                Términos de Uso
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link href="/accesibilidad" className="text-muted-foreground hover:text-primary transition-colors">
                Accesibilidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
