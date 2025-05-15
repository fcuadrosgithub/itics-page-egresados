"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    name: "Alejandro Martínez",
    year: "2020",
    career: "Ingeniería en Sistemas",
    image: "/images/egresados/alejandro_martinez.jpg",
  },
  {
    id: 2,
    name: "Alexis Sosa",
    year: "2021",
    career: "Ingeniería en TIC",
    image: "/images/egresados/alexis_sosa.jpg",
  },
  {
    id: 3,
    name: "Alonso Cabrera",
    year: "2019",
    career: "Ingeniería Industrial",
    image: "/images/egresados/alonso_cabrera.jpg",
  },
  {
    id: 4,
    name: "Ana Martínez",
    year: "2020",
    career: "Ingeniería Informática",
    image: "/images/egresados/ana_martinez.jpg",
  },
  {
    id: 5,
    name: "Angie Cruz",
    year: "2022",
    career: "Arquitectura",
    image: "/images/egresados/angie_cruz.jpg",
  },
  {
    id: 6,
    name: "Carlos Rodríguez",
    year: "2019",
    career: "Administración de Empresas",
    image: "/images/egresados/carlos_rodriguez.jpg",
  },
  {
    id: 7,
    name: "Elena Torres",
    year: "2021",
    career: "Diseño Gráfico",
    image: "/images/egresados/elena_torres.jpg",
  },
  {
    id: 8,
    name: "Guillermo Chávez",
    year: "2020",
    career: "Psicología",
    image: "/images/egresados/guillermo_chavez.jpg",
  },
]

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const selectedItem = galleryItems.find((item) => item.id === selectedImage)

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Galería de Egresados</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Conoce a algunos de nuestros egresados destacados que han pasado por nuestra institución y ahora son profesionales exitosos en sus campos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(item.id)}
          >
            <CardContent className="p-0">
              <div className="relative h-64 w-full">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.career}, {item.year}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedItem && (
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute right-4 top-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative h-[70vh] w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-xl">{selectedItem.name}</h3>
                <p className="text-gray-600">
                  {selectedItem.career}, Promoción {selectedItem.year}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
