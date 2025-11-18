"use client"

import Link from "next/link"
import { BackButton } from "@/components/back-button"
import { Button } from "@/components/ui/button"

export default function PhotobayanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="mb-6 sm:mb-8">
          <BackButton />
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 lg:mb-12">
            ФОТОБАЯН
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Link href="/photobayan/thanks">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 sm:p-8 flex flex-col justify-center items-center min-h-48 sm:min-h-56 lg:min-h-64">
                <div className="text-center mb-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                    Жаны жомарт жандарға мың алғыс!
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">Біздің дәрігерлер және медициналық құрамы</p>
                </div>
                <Button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-red-500 hover:bg-red-600 transition-colors text-sm sm:text-base">
                  Толығырақ
                </Button>
              </div>
            </Link>

            <Link href="/photobayan/galery">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 sm:p-8 flex flex-col justify-center items-center min-h-48 sm:min-h-56 lg:min-h-64">
                <div className="text-center mb-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                    Фотогалерея
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">Барлық фотосуреттерді қарау</p>
                </div>
                <Button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-red-500 hover:bg-red-600 transition-colors text-sm sm:text-base">
                  Ашу
                </Button>
              </div>
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Аңдатпа</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Осы бөлім біздің диспансердің дәрігерлері, медициналық персоналы және емделушілердің фотоларын сақтайтын ынамды орын болып табылады. 
              Әрбір сурет ынамның, дәрігерлік құзыреттіліктің және емделушіге қызмет көрсетудің көрінісі болып табылады.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
