"use client"

import { BackButton } from "@/components/back-button"

export default function BeynebayantPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="mb-6 sm:mb-8">
          <BackButton />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12">
            БЕЙНЕБАЯН
          </h1>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/OwahlN__dr0"
                    title="Beinebayan Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    style={{ border: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Аңдатпа</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Осы бөлім біздің мекеменің видеоларын және бейнебаяндарын ұсынады. 
              Барлық материалдар біздің ұйымның қызметтері, оқиғалары және маңызды мәліметтер туралы өндіріген.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
