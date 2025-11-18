'use client'

import { BackButton } from "@/components/back-button"
import { Download } from "lucide-react"

export default function PricesPage() {
  // Прямая ссылка на файл в public/pdf — надёжный способ избежать 404

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BackButton />
          
          <div className="mx-auto max-w-4xl">
            {/* Header Section */}
            <div className="rounded-lg bg-white p-8 shadow-md mb-8">
              <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
                Бағалар тізімі
              </h1>
              
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Файлды жүктеу:
                </p>
                
                <a
                  href="/reports/prejskurant-2025.pdf"
                  download="Бағалар тізімі 2025.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>Бағалар тізімі 2025.pdf</span>
                  <span className="text-sm ml-2">[1.51 Mb]</span>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  PDF құжатын жүктеу үшін жоғарыдағы сілтемеге басыңыз.
                  <br />
                  Файл сіздің құрылғысына сохранялады.
                </p>
              </div>
            </div>

            {/* Info Section */}
            <div className="rounded-lg bg-blue-50 p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-blue-900">
                Ақпарат
              </h2>
              <p className="text-blue-800 mb-4">
                Осы құжатта Қызылорда облыстық тері-венерология диспансерінде көрсетілетін барлық медициналық қызметтердің 
                толық бағалары берілген.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>Амбулаторлық-емханалық қызметтер</li>
                <li>Дәрігер консультациялары</li>
                <li>Физиотерапиялық емдеу</li>
                <li>Зертханалық зерттеулер</li>
                <li>Дерматокосметологиялық қызметтер</li>
                <li>Стационарлық қызметтер</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
