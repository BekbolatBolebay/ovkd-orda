"use client"

import { BackButton } from "@/components/back-button"

export default function WorkSchedulePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <BackButton />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">Жұмыс кестесі</h1>

            <div className="bg-white rounded-lg p-6 shadow prose max-w-full space-y-4">
              <div>
                <h2 className="text-2xl font-bold">Жұмыс кестесі:</h2>
              </div>

              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Дүйсенбі &nbsp;&nbsp; 8.00-17.00</li>
                <li>Сейсенбі &nbsp;&nbsp; 8.00-17.00</li>
                <li>Сәрсенбі &nbsp;&nbsp; 8.00-17.00</li>
                <li>Бейсенбі &nbsp;&nbsp; 8.00-17.00</li>
                <li>Жұма &nbsp;&nbsp; 8.00-17.00</li>
              </ul>

              <p className="text-sm text-gray-600">Түскі үзіліс 13.00-14.00</p>

              <div>
                <h3 className="font-bold">Дәрігерге қаралу үшін керек құжаттар:</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
                  <li>Жеке куәлік, Туу туралы куәлік</li>
                  <li>Жолдама</li>
                </ul>
              </div>

              <div className="mt-6">
                <a href="/patients" className="inline-block bg-red-600 text-white px-6 py-3 rounded font-semibold">
                  ← Емделушілерге қайта оралу
                </a>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4 shadow text-center">
                <img src="/medical-director-portrait.jpg" alt="Бас дәрігер" className="mx-auto w-48 h-56 object-cover rounded" />
                <h3 className="mt-3 font-semibold">Үсейінов САКЕН АЛЕУДИНОВИЧ</h3>
              </div>

              <div className="space-y-3">
                <a className="block bg-red-600 text-white px-4 py-3 rounded text-center font-semibold">ФОТОБАЯН</a>
                <a className="block bg-red-600 text-white px-4 py-3 rounded text-center font-semibold">БЕЙНЕБАЯН</a>
                <a className="block bg-red-600 text-white px-4 py-3 rounded text-center font-semibold">МЕМЛЕКЕТТІК ТАҢБАЛАР</a>
                <a className="block bg-red-600 text-white px-4 py-3 rounded text-center font-semibold">СЫБАЙЛАС ЖЕМҚОРЛЫҚ ТУРАЛЫ</a>
              </div>

              <div className="mt-4 bg-cyan-100 p-4 rounded">
                <h4 className="font-semibold text-cyan-800 mb-3">МЕМЛЕКЕТТІК САТЫП АЛУ</h4>
                <ul className="space-y-2 text-cyan-800 text-sm">
                  <li>Хаттама № 1 17-01-2025</li>
                  <li>Хабарландыру № 1 10-01-25</li>
                  <li>Хаттама № 13 18-10-2024</li>
                  <li>Хабарландыру № 13 11-10-24</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
