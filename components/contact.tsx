"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Facility Image and Info */}
        <div className="mb-12">
          <div className="mx-auto max-w-3xl rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-green-50 p-8">
            {/* Image: place the provided contact photo in `public/contact-photo.jpg` */}
            <div className="text-center mb-8 rounded-lg overflow-hidden">
              <img
                src="/contact-photo.jpg"
                alt="Қызылорда облыстық тері-венерология диспансері"
                className="mx-auto w-full max-w-3xl object-contain"
              />
            </div>
            
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-red-600">
                  ҚЫЗЫЛОРДА ОБЛЫСЫНЫҢ ДЕНСАУЛЫҚ САҚТАУ БАСҚАРМАСЫНЫҢ
                </h2>
                <h3 className="text-lg md:text-xl font-bold text-red-600">
                  "ҚЫЗЫЛОРДА ОБЛЫСТЫҚ ТЕРІ-ВЕНЕРОЛОГИЯ ДИСПАНСЕРІ"
                </h3>
                <p className="text-base font-semibold text-gray-700">
                  ШАРУАШЫЛЫҚ ЖҮРГІЗУ ҚҰҚЫҒЫНДАҒЫ КОММУНАЛДЫҚ МЕМЛЕКЕТТІК КӘСІПОРНЫ
                </p>
              </div>
              
              <div className="border-t-2 border-gray-300 pt-6 mt-6">
                <p className="text-sm font-semibold text-gray-900 mb-2 uppercase">Мекен-жайымыз:</p>
                <p className="text-base text-gray-700 font-medium">
                  ҚЫЗЫЛОРДА қаласы, Зейнолла Шүкіров көшесі №7А
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-gray-900 md:text-4xl">Байланыс</h2>
          <p className="mt-4 text-pretty text-lg text-gray-600">Медициналық жәрдемге немесе сұрақ қоюға байланысыңыз</p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Біздің клиникаға келіңіз</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Мекен-жайы</p>
                    <p className="text-sm text-gray-600">
                      ҚЫЗЫЛОРДА қаласы
                      <br />
                      Зейнолла Шүкіров көшесі №7А
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Телефон</p>
                    <p className="text-sm text-gray-600">Call-центр: +7 (724) 240-00-01</p>
                    <p className="text-sm text-gray-600">Регистратура: +7 (724) 223-54-72</p>
                    <p className="text-sm text-gray-600">Приемная: +7 (724) 223-55-17</p>
                    <p className="text-sm text-gray-600">Телефон доверия: +7 (724) 223-55-48</p>
                    <p className="text-sm text-gray-600">Кожное отделение: +7 (724) 223-52-68</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">info@kzl-kvd.kz</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Жұмыс кестесі</p>
                    <p className="text-sm text-gray-600">Дүйсенбі: 8:00-17:00</p>
                    <p className="text-sm text-gray-600">Сейсенбі: 8:00-17:00</p>
                    <p className="text-sm text-gray-600">Сәрсенбі: 8:00-17:00</p>
                    <p className="text-sm text-gray-600">Бейсенбі: 8:00-17:00</p>
                    <p className="text-sm text-gray-600">Жұма: 8:00-17:00</p>
                    <p className="text-sm text-gray-600">Түскі үзіліс: 13:00-14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-blue-900">Дәрігерге қаралу үшін керек құжаттар:</h3>
              <ul className="list-disc space-y-2 pl-6 text-blue-800">
                <li>Жеке күәлік, Туу туралы күәлік</li>
                <li>Жолдама</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
