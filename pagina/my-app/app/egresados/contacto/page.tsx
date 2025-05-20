"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function ContactoEgresadosPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    generacion: "",
    carrera: "",
    empresa: "",
    puesto: "",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos del formulario
    console.log(formData)
    setFormSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-center text-3xl font-bold">Contacto de Egresados</h1>
        <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-300">
          Mantén tus datos actualizados para recibir información sobre eventos, oportunidades laborales y beneficios
          exclusivos para egresados.
        </p>

        {formSubmitted ? (
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
              <h2 className="mb-2 text-2xl font-bold">¡Gracias por actualizar tus datos!</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Hemos recibido tu información correctamente. Pronto recibirás noticias y oportunidades exclusivas para
                nuestra comunidad de egresados.
              </p>
              <Button onClick={() => setFormSubmitted(false)}>Volver al formulario</Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Formulario de Contacto</CardTitle>
              <CardDescription>
                Completa el siguiente formulario para actualizar tus datos en nuestra base de egresados.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre(s)</Label>
                    <Input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellidos">Apellidos</Label>
                    <Input
                      id="apellidos"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="generacion">Generación</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("generacion", value)}
                      value={formData.generacion}
                    >
                      <SelectTrigger id="generacion">
                        <SelectValue placeholder="Selecciona tu generación" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(20)].map((_, i) => (
                          <SelectItem key={i} value={`${2005 + i}`}>
                            {2005 + i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carrera">Carrera</Label>
                    <Select onValueChange={(value) => handleSelectChange("carrera", value)} value={formData.carrera}>
                      <SelectTrigger id="carrera">
                        <SelectValue placeholder="Selecciona tu carrera" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="administracion">Administración</SelectItem>
                        <SelectItem value="contaduria">Contaduría</SelectItem>
                        <SelectItem value="derecho">Derecho</SelectItem>
                        <SelectItem value="ingenieria">Ingeniería</SelectItem>
                        <SelectItem value="medicina">Medicina</SelectItem>
                        <SelectItem value="psicologia">Psicología</SelectItem>
                        <SelectItem value="otra">Otra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa actual</Label>
                    <Input id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="puesto">Puesto actual</Label>
                    <Input id="puesto" name="puesto" value={formData.puesto} onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje (opcional)</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Comparte tus comentarios o sugerencias"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Enviar información
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
