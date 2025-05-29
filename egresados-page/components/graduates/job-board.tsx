"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { AlertCircle, Briefcase, Building, CheckCircle2, Clock, MapPin, Send } from "lucide-react"

// Esquema de validación para el correo
const subscribeSchema = z.object({
  email: z
    .string()
    .email({
      message: "Por favor, introduce un correo electrónico válido.",
    })
    .refine(
      (email) => {
        // Validación adicional: verificar si el correo termina con un dominio específico
        // Esto es solo un ejemplo, puedes personalizarlo según tus necesidades
        return email.endsWith("@gmail.com") || email.endsWith("@hotmail.com") || email.endsWith("@outlook.com")
      },
      {
        message: "Solo se permiten correos con dominios conocidos (gmail.com, hotmail.com, outlook.com).",
      },
    ),
})

// Datos de ejemplo para las ofertas de trabajo
const jobListings = [
  {
    id: 1,
    title: "Desarrollador Full Stack",
    company: "TechSolutions Inc.",
    location: "Ciudad de México",
    type: "Tiempo completo",
    salary: "$30,000 - $45,000 MXN",
    posted: "Hace 2 días",
    description:
      "Buscamos un desarrollador Full Stack con experiencia en React, Node.js y bases de datos SQL para unirse a nuestro equipo de desarrollo.",
    requirements: ["3+ años de experiencia", "React", "Node.js", "SQL", "Git"],
  },
  {
    id: 2,
    title: "Arquitecto de Software",
    company: "Innovatech",
    location: "Guadalajara",
    type: "Tiempo completo",
    salary: "$50,000 - $70,000 MXN",
    posted: "Hace 5 días",
    description:
      "Estamos buscando un Arquitecto de Software experimentado para liderar el diseño y desarrollo de nuestras soluciones empresariales.",
    requirements: ["5+ años de experiencia", "Arquitectura de sistemas", "Cloud", "Microservicios"],
  },
  {
    id: 3,
    title: "Diseñador UX/UI",
    company: "CreativeDesign",
    location: "Remoto",
    type: "Medio tiempo",
    salary: "$25,000 - $35,000 MXN",
    posted: "Hace 1 semana",
    description:
      "Buscamos un diseñador UX/UI creativo para colaborar en el diseño de interfaces de usuario intuitivas y atractivas.",
    requirements: ["Figma", "Adobe XD", "Diseño responsivo", "Prototipado"],
  },
]

export function JobBoard() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isValidating, setIsValidating] = useState(false)

  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof subscribeSchema>) {
    setIsValidating(true)

    // Simulación de validación del correo
    setTimeout(() => {
      console.log("Email suscrito:", values.email)
      setIsValidating(false)
      setIsSubscribed(true)

      toast({
        title: "¡Suscripción exitosa!",
        description: "Recibirás notificaciones de nuevas ofertas de trabajo en tu correo.",
      })

      // Resetear después de 3 segundos
      setTimeout(() => {
        form.reset()
        setIsSubscribed(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Bolsa de Trabajo</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explora oportunidades laborales exclusivas para egresados de nuestra institución. Empresas de primer nivel
          buscan tu talento y experiencia.
        </p>
      </div>

      {/* Suscripción a alertas de trabajo */}
      <div className="max-w-md mx-auto bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-100">
        <h3 className="text-xl font-semibold mb-4 text-teal-800">Recibe alertas de nuevas ofertas</h3>
        <p className="text-teal-700 mb-4">
          Suscríbete para recibir notificaciones cuando se publiquen nuevas oportunidades laborales que coincidan con tu
          perfil.
        </p>

        {isSubscribed ? (
          <div className="flex items-center gap-2 text-teal-700 bg-teal-100 p-3 rounded-md">
            <CheckCircle2 className="h-5 w-5 text-teal-600" />
            <span>¡Te has suscrito correctamente!</span>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-teal-800">Correo electrónico</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          placeholder="tu@email.com"
                          {...field}
                          className="border-teal-200 focus-visible:ring-teal-500"
                        />
                        <Button
                          type="submit"
                          className="bg-teal-600 hover:bg-teal-700 text-white"
                          disabled={isValidating}
                        >
                          {isValidating ? (
                            <span className="flex items-center gap-1">
                              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                              Validando
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <Send className="h-4 w-4" />
                              Suscribirse
                            </span>
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        )}
      </div>

      {/* Listado de ofertas de trabajo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {jobListings.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Building className="h-4 w-4 mr-1" />
                    {job.company}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-teal-50 text-teal-700 hover:bg-teal-100">
                  {job.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req, index) => (
                  <Badge key={index} variant="secondary">
                    {req}
                  </Badge>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {job.posted}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="font-medium">{job.salary}</div>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Briefcase className="h-4 w-4 mr-2" />
                Aplicar ahora
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Nota informativa */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-md flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-medium text-amber-800">Información importante</h4>
          <p className="text-amber-700 text-sm">
            Las ofertas mostradas son exclusivas para egresados de nuestra institución. Para aplicar, deberás verificar
            tu estatus como egresado. Contacta a la oficina de egresados si tienes problemas para acceder.
          </p>
        </div>
      </div>
    </div>
  )
}
