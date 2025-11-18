"use client"

import { BackButton } from "@/components/back-button"

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Пайдалы ақпарат</h1>
          <p className="text-gray-600 mb-8">Мамандарға арналған пайдалы материал және ресурстар</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Денсаулық сақтау саласындағы ақпарат</h2>
              <p className="text-gray-700 mb-3">
                Денсаулық сақтау саласындағы ең соңғы ақпарат мен өндіктері туралы білім алу үшін 
                аймақтық денсаулық сақтау органдарының ресми веб-сайттарын зерттеңіз.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Кәсіби даму</h2>
              <p className="text-gray-700 mb-3">
                Медициналық мамандарының кәсіби өндігін жалғастыруға қойылатын талаптар мен 
                стандарттарын саттар түрде табуға болады.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Байланысу</h2>
              <p className="text-gray-700">
                Қосымша ақпарат алу үшін біздің мекеменің ішкі аудит және емделушіге қолдау көрсету қызметіне хабарласыңыз.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
