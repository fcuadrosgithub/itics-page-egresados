"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { MenuIcon, GraduationCap } from "lucide-react"

const mainNavItems = [
  {
    title: "Aspirantes",
    href: "/aspirantes",
    theme: "default",
  },
  {
    title: "Docentes",
    href: "/docentes",
    theme: "default",
  },
  {
    title: "Alumnos",
    href: "/alumnos",
    theme: "default",
  },
  {
    title: "Egresados",
    href: "/egresados",
    theme: "primary",
    items: [
      {
        title: "Bolsa de Empleo",
        href: "/egresados/bolsa-empleo",
        description: "Accede a ofertas laborales exclusivas para egresados",
        icon: "💼",
      },
      {
        title: "Educación Continua",
        href: "/egresados/educacion-continua",
        description: "Cursos, diplomados y certificaciones para tu desarrollo profesional",
        icon: "📚",
      },
      {
        title: "Contacto",
        href: "/egresados/contacto",
        description: "Mantente en contacto con tu alma mater",
        icon: "✉️",
      },
    ],
  },
  {
    title: "Público",
    href: "/publico",
    theme: "default",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur transition-all",
        scrolled ? "bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center gap-2 mb-8 mt-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">ITSOEH</span>
              </div>

              <nav className="flex flex-col gap-4">
                {mainNavItems.map((item) => (
                  <div key={item.href} className="space-y-3">
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium inline-flex gap-2 rounded-md px-3 py-2 w-full",
                        item.theme === "primary"
                          ? "text-primary hover:bg-primary/10"
                          : "text-foreground hover:bg-muted",
                      )}
                    >
                      {item.title}
                    </Link>

                    {item.items && (
                      <div className="ml-4 flex flex-col gap-2 pl-2 border-l border-primary/20">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:text-foreground flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
                          >
                            <span className="w-5 h-5 flex items-center justify-center text-sm">{subItem.icon}</span>
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">ITSOEH</span>
          </Link>
        </div>

        <nav className="hidden lg:flex gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "transition-colors",
                          item.theme === "primary" ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                          {item.items.map((subItem) => (
                            <li key={subItem.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                    <span className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                                      {subItem.icon}
                                    </span>
                                    {subItem.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground pt-1">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-foreground px-3 py-2 text-sm rounded-md",
                        item.href.startsWith("/egresados")
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild className="shadow-sm">
            <Link href="/login">Acceso</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
