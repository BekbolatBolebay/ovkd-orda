"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { BackButton } from "@/components/back-button"

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Получаем список всех изображений из API
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/gallery")
        const data = await response.json()
        setImages(data.images || [])
      } catch (error) {
        console.error("Error fetching images:", error)
        setImages([])
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="mb-6 sm:mb-8">
          <BackButton />
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12">
            ФОТОГАЛЕРЕЯ
          </h1>

          {loading ? (
            <div className="flex justify-center items-center min-h-96">
              <p className="text-gray-600">Фотографиялар жүклеу...</p>
            </div>
          ) : images.length === 0 ? (
            <div className="flex justify-center items-center min-h-96">
              <p className="text-gray-600">Фотографиялар табылған жоқ</p>
            </div>
          ) : (
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-auto bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={`/galery/${image}`}
                    alt={`Фотография ${index + 1}`}
                    className="w-full h-auto object-cover"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
