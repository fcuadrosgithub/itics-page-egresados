"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = [
  {
    title: "Aspirantes",
    href: "/aspirantes",
    submenu: [
      { title: "Oferta Académica", href: "/aspirantes/oferta-academica" },
      { title: "Proceso de Admisión", href: "/aspirantes/admision" },
      { title: "Becas", href: "/aspirantes/becas" },
    ],
  },
  {
    title: "Alumnos",
    href: "/alumnos",
    submenu: [
      { title: "Calendario Académico", href: "/alumnos/calendario" },
      { title: "Servicios Estudiantiles", href: "/alumnos/servicios" },
      { title: "Biblioteca", href: "/alumnos/biblioteca" },
    ],
  },
  {
    title: "Egresados",
    href: "/egresados",
    submenu: [
      { title: "Contacto", href: "/egresados/contacto" },
      { title: "Bolsa de Trabajo", href: "/egresados/bolsa-trabajo" },
      { title: "Asociación de Egresados", href: "/egresados/asociacion" },
    ],
  },
  {
    title: "Público",
    href: "/publico",
    submenu: [
      { title: "Eventos", href: "/publico/eventos" },
      { title: "Noticias", href: "/publico/noticias" },
      { title: "Visitas Guiadas", href: "/publico/visitas" },
    ],
  },
  {
    title: "Docentes",
    href: "/docentes",
    submenu: [
      { title: "Portal Docente", href: "/docentes/portal" },
      { title: "Investigación", href: "/docentes/investigacion" },
      { title: "Recursos", href: "/docentes/recursos" },
    ],
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-primary"></div>
            <span className="text-xl font-bold text-primary">Universidad</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex items-center space-x-1 text-base font-medium",
                          item.title === "Egresados" && "text-primary font-semibold",
                        )}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.title} asChild>
                          <Link href={subItem.href}>{subItem.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-base font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="container mx-auto px-4 pb-4 lg:hidden">
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.title} className="py-2">
                <Link
                  href={item.href}
                  className={cn(
                    "block text-base font-medium",
                    item.title === "Egresados" && "text-primary font-semibold",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
