import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Universidad - Portal Educativo",
  description: "Portal educativo para aspirantes, alumnos, egresados y docentes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <footer className="bg-primary py-8 text-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-4 text-lg font-bold">Universidad</h3>
                  <p className="text-sm">Formando profesionales de excelencia desde 1980</p>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-bold">Contacto</h3>
                  <p className="text-sm">
                    Av. Universidad 123, Ciudad Universitaria
                    <br />
                    Tel: (123) 456-7890
                    <br />
                    Email: contacto@universidad.edu
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-bold">Enlaces Rápidos</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="hover:underline">
                        Calendario Académico
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Biblioteca
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Campus Virtual
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm">
                © {new Date().getFullYear()} Universidad. Todos los derechos reservados.
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
