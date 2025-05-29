"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"

// Esquema de validación del formulario
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z
    .string()
    .email({
      message: "Por favor, introduce un email válido.",
    })
    .refine(
      (email) => {
        // Validación adicional: verificar si el correo termina con un dominio específico
        const validDomains = ["@gmail.com", "@hotmail.com", "@outlook.com", "@yahoo.com", "@institucion.edu"]
        return validDomains.some((domain) => email.endsWith(domain))
      },
      {
        message: "El correo no es válido. Utiliza un correo con dominio conocido o institucional.",
      },
    ),
  graduationYear: z.string().min(4, {
    message: "Por favor, selecciona tu año de graduación.",
  }),
  subject: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

// Años de graduación para el selector
const graduationYears = Array.from({ length: 30 }, (_, i) => (new Date().getFullYear() - i).toString())

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      graduationYear: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulación de envío del formulario y validación adicional del correo
    setTimeout(() => {
      console.log(values)

      // Verificación adicional del correo (simulada)
      const isValidEmail = values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

      if (!isValidEmail) {
        setIsSubmitting(false)
        toast({
          title: "Error de validación",
          description: "El formato del correo electrónico no es válido. Por favor, verifica e intenta nuevamente.",
          variant: "destructive",
        })
        return
      }

      setIsSubmitting(false)
      setIsSuccess(true)

      toast({
        title: "Formulario enviado",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      })

      // Resetear el formulario después de 2 segundos
      setTimeout(() => {
        form.reset()
        setIsSuccess(false)
      }, 2000)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contacta con Nosotros</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          ¿Eres egresado y quieres compartir tu experiencia o conectar con otros exalumnos? Completa el siguiente
          formulario y nos pondremos en contacto contigo.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">¡Mensaje Enviado!</h3>
            <p className="text-green-700">
              Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="tu@email.com"
                            {...field}
                            className={form.formState.errors.email ? "border-red-300 pr-10" : ""}
                          />
                          {form.formState.errors.email && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <AlertCircle className="h-5 w-5 text-red-500" />
                            </div>
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                      {!form.formState.errors.email && (
                        <p className="text-xs text-muted-foreground">
                          Utiliza un correo con dominio conocido (gmail.com, hotmail.com, outlook.com) o institucional.
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="graduationYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Año de graduación</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu año de graduación" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {graduationYears.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>Selecciona el año en que te graduaste de nuestra institución.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asunto</FormLabel>
                    <FormControl>
                      <Input placeholder="Asunto de tu mensaje" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Escribe tu mensaje aquí..." className="min-h-32" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  )
}
