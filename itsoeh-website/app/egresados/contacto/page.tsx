import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PhoneIcon, MailIcon, MapPinIcon, MessageCircleIcon, CheckCircleIcon, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactoPage() {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-background min-h-screen">
      <div className="container px-4 py-12">
        {/* Hero section */}
        <section className="mb-12 text-center relative rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <MessageCircleIcon className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Contacto para Egresados
              </h1>
              <p className="text-xl mb-4 max-w-2xl mx-auto text-muted-foreground">
                Mantente en contacto con tu alma mater. Estamos aquí para apoyarte en tu desarrollo profesional.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-primary/10 overflow-hidden shadow-sm">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircleIcon className="h-5 w-5 text-primary" />
                  Envíanos un mensaje
                </CardTitle>
                <CardDescription className="text-base">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="mensaje" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="mensaje">Mensaje</TabsTrigger>
                    <TabsTrigger value="agenda">Agendar cita</TabsTrigger>
                    <TabsTrigger value="documentos">Solicitar documentos</TabsTrigger>
                  </TabsList>

                  <TabsContent value="mensaje" className="mt-0">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="nombre" className="text-sm font-medium">
                            Nombre completo
                          </Label>
                          <Input id="nombre" placeholder="Tu nombre completo" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">
                            Correo electrónico
                          </Label>
                          <Input id="email" type="email" placeholder="tu@email.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="telefono" className="text-sm font-medium">
                            Teléfono
                          </Label>
                          <Input id="telefono" placeholder="Tu número telefónico" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="generacion" className="text-sm font-medium">
                            Generación
                          </Label>
                          <Select>
                            <SelectTrigger id="generacion">
                              <SelectValue placeholder="Selecciona tu generación" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2020-2024">2020-2024</SelectItem>
                              <SelectItem value="2019-2023">2019-2023</SelectItem>
                              <SelectItem value="2018-2022">2018-2022</SelectItem>
                              <SelectItem value="2017-2021">2017-2021</SelectItem>
                              <SelectItem value="anterior">Anterior</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="carrera" className="text-sm font-medium">
                          Carrera
                        </Label>
                        <Select>
                          <SelectTrigger id="carrera">
                            <SelectValue placeholder="Selecciona tu carrera" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ing-sistemas">Ingeniería en Sistemas Computacionales</SelectItem>
                            <SelectItem value="ing-industrial">Ingeniería Industrial</SelectItem>
                            <SelectItem value="ing-electromecanica">Ingeniería Electromecánica</SelectItem>
                            <SelectItem value="ing-gestion">Ingeniería en Gestión Empresarial</SelectItem>
                            <SelectItem value="ing-logistica">Ingeniería en Logística</SelectItem>
                            <SelectItem value="ing-mecatronica">Ingeniería Mecatrónica</SelectItem>
                            <SelectItem value="otra">Otra</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asunto" className="text-sm font-medium">
                          Asunto
                        </Label>
                        <Select>
                          <SelectTrigger id="asunto">
                            <SelectValue placeholder="Selecciona un asunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bolsa-trabajo">Bolsa de trabajo</SelectItem>
                            <SelectItem value="educacion-continua">Educación continua</SelectItem>
                            <SelectItem value="tramites">Trámites y documentos</SelectItem>
                            <SelectItem value="eventos">Eventos para egresados</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensaje" className="text-sm font-medium">
                          Mensaje
                        </Label>
                        <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={5} />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Enviar mensaje
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="agenda" className="mt-0">
                    <div className="space-y-4">
                      <p className="text-muted-foreground mb-4">
                        Agenda una cita con nuestro departamento de seguimiento a egresados para atender tus necesidades
                        específicas.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fecha" className="text-sm font-medium">
                            Fecha preferida
                          </Label>
                          <Input id="fecha" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hora" className="text-sm font-medium">
                            Hora preferida
                          </Label>
                          <Input id="hora" type="time" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tipo-cita" className="text-sm font-medium">
                          Tipo de cita
                        </Label>
                        <Select>
                          <SelectTrigger id="tipo-cita">
                            <SelectValue placeholder="Selecciona el tipo de cita" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="presencial">Presencial</SelectItem>
                            <SelectItem value="virtual">Virtual (Videollamada)</SelectItem>
                            <SelectItem value="telefonica">Telefónica</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="motivo" className="text-sm font-medium">
                          Motivo de la cita
                        </Label>
                        <Textarea id="motivo" placeholder="Describe brevemente el motivo de tu cita" rows={3} />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Solicitar cita
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="documentos" className="mt-0">
                    <div className="space-y-4">
                      <p className="text-muted-foreground mb-4">
                        Solicita documentos oficiales como constancias, credenciales de egresado, o verificación de
                        estudios.
                      </p>

                      <div className="space-y-2">
                        <Label htmlFor="tipo-documento" className="text-sm font-medium">
                          Tipo de documento
                        </Label>
                        <Select>
                          <SelectTrigger id="tipo-documento">
                            <SelectValue placeholder="Selecciona el tipo de documento" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="constancia">Constancia de estudios</SelectItem>
                            <SelectItem value="credencial">Credencial de egresado</SelectItem>
                            <SelectItem value="verificacion">Verificación de estudios</SelectItem>
                            <SelectItem value="carta">Carta de recomendación</SelectItem>
                            <SelectItem value="otro-doc">Otro documento</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="detalles" className="text-sm font-medium">
                          Detalles adicionales
                        </Label>
                        <Textarea
                          id="detalles"
                          placeholder="Proporciona cualquier detalle adicional sobre tu solicitud"
                          rows={3}
                        />
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg mb-4">
                        <div className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">Información importante</p>
                            <p className="text-sm text-muted-foreground">
                              El tiempo de respuesta para documentos oficiales es de 3 a 5 días hábiles. Algunos
                              documentos pueden requerir el pago de una cuota administrativa.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Solicitar documento
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/10 overflow-hidden shadow-sm">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                  Información de contacto
                </CardTitle>
                <CardDescription>Otras formas de comunicarte con nosotros</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Departamento de Seguimiento a Egresados</h3>

                  <div className="flex items-start space-x-3 p-3 bg-muted/40 rounded-lg">
                    <PhoneIcon className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-muted-foreground">(738) 123-4567 Ext. 123</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-muted/40 rounded-lg">
                    <MailIcon className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Correo electrónico</p>
                      <p className="text-muted-foreground">egresados@itsoeh.edu.mx</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-muted/40 rounded-lg">
                    <MapPinIcon className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-muted-foreground">
                        Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula km 2.5, Mixquiahuala de Juárez, Hidalgo, C.P.
                        42700
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-muted/40 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <h3 className="font-medium">Horario de atención</h3>
                      <p className="text-muted-foreground">Lunes a Viernes</p>
                      <p className="text-muted-foreground">9:00 a.m. - 5:00 p.m.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Síguenos</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
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
                      <span className="sr-only">YouTube</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mapa de ubicación */}
            <Card className="border-primary/10 overflow-hidden shadow-sm">
              <CardHeader className="bg-primary/5 border-b border-primary/10 pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-primary" />
                  Nuestra ubicación
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[250px] w-full bg-muted relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=500&width=800"
                    alt="Mapa de ubicación del ITSOEH"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-3">
                    <p className="text-xs md:text-sm font-medium">
                      Paseo del Agrarismo 2000, Carr. Mixquiahuala-Tula km 2.5, Mixquiahuala de Juárez, Hidalgo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-primary/10 overflow-hidden shadow-sm">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="flex items-center gap-2 text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  Preguntas frecuentes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <div className="p-4">
                    <h4 className="font-medium mb-1 text-sm">¿Cuánto tiempo toma obtener una constancia?</h4>
                    <p className="text-sm text-muted-foreground">El tiempo de entrega es de 3 a 5 días hábiles.</p>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium mb-1 text-sm">¿Debo agendar una cita para trámites?</h4>
                    <p className="text-sm text-muted-foreground">
                      Recomendamos agendar cita para una atención personalizada.
                    </p>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium mb-1 text-sm">¿Cómo puedo actualizar mis datos de contacto?</h4>
                    <p className="text-sm text-muted-foreground">
                      Puedes actualizarlos en la sección "Mi Perfil" una vez que inicies sesión.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonios */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Lo que dicen otros egresados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conoce las experiencias de quienes han utilizado nuestros servicios de atención y seguimiento a egresados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "El departamento de seguimiento a egresados siempre ha sido muy eficiente en resolver mis dudas y trámites. Su atención es excelente.",
                author: "Jorge Pérez",
                role: "Ingeniero en Sistemas, Generación 2018",
              },
              {
                quote:
                  "Gracias al formulario de contacto pude resolver un trámite urgente sin necesidad de acudir presencialmente al instituto. Muy eficiente.",
                author: "María González",
                role: "Ingeniera Industrial, Generación 2020",
              },
              {
                quote:
                  "La respuesta siempre es rápida y profesional. Se nota el interés genuino por mantenerse en contacto con los egresados.",
                author: "Roberto Sánchez",
                role: "Ingeniero Mecatrónico, Generación 2019",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-primary/10 shadow-sm relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary opacity-20"
                  >
                    <path
                      d="M0 20C0 8.954 8.954 0 20 0V0C31.046 0 40 8.954 40 20V20C40 31.046 31.046 40 20 40V40C8.954 40 0 31.046 0 20V20Z"
                      fill="currentColor"
                    />
                    <path
                      d="M25.5176 15.5V22H23.0176L24.0176 18.5H22.5176V15.5H25.5176ZM19.0176 15.5V22H16.5176L17.5176 18.5H16.0176V15.5H19.0176Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-lg italic text-muted-foreground mb-4">"{testimonial.quote}"</div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
