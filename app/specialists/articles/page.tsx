"use client"

import { MamsModal } from "@/components/mams-modal"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/back-button"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Статьялар</h1>
          <p className="text-gray-600 mb-8">Мамандарға арналған пайдалы ақпарат және материалдар</p>

          <div className="space-y-6">
            {/* МӘМС статьясы */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Миндетті медициналық сақтандыру (МӘМС)
              </h2>
              <p className="text-gray-600 mb-4">
                Қазақстан Республикасында міндетті медициналық сақтандыру жүйесі 2018 жылғы 1 қаңтардан бастап енгізіліп, 
                барлық сақтандырылған азаматтарының жынысына, жасына, әлеуметтік дәрежесіне, тұрғылықты орны мен табысына 
                қарамастан медициналық және дәрі-дәрмек бойынша тең дәрежеде қолжетімді көмек алуына кепілдік береді.
              </p>
              <div className="flex items-center gap-2">
                <MamsModal trigger="Толығырақ оқу" />
              </div>
            </div>

            {/* Төлеу туралы ақпарат */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                МӘМС жарнасын кім төлейді?
              </h2>
              <p className="text-gray-600 mb-2">
                Жарнасын төлеутіні төмендегі топтар атқарады:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                <li>Мемлекет</li>
                <li>Жұмыс берушілер</li>
                <li>Жұмысшылар</li>
                <li>Өзін-өзі жұмыспен қамтыған азаматтар</li>
              </ul>
              <div className="flex items-center gap-2">
                <MamsModal trigger="Толығырақ оқу" />
              </div>
            </div>

            {/* Медициналық қызметтер */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                МӘМС пакетінің ішіне қандай қызметтер кіреді?
              </h2>
              <p className="text-gray-600 mb-4">
                Медициналық қызметтің екі пакеті бар: базалық пакет және ширек пакет. 
                Пакетқа амбулаторлық-емханалық көмек, стационарлық көмек, дәрі-дәрмекпен қамтамасыз ету және т.б. кіреді.
              </p>
              <div className="flex items-center gap-2">
                <MamsModal trigger="Толығырақ оқу" />
              </div>
            </div>

            {/* Құқықтар және мүдделер */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Емделушінің құқықтары
              </h2>
              <p className="text-gray-600 mb-4">
                МӘМС пакетінің шеңберінде емделушінің құқықтарын білу маңызды. 
                Сіз өз денсаулығыңыз туралы толық ақпарат ала аласыз және сапасыз қызметтің қарсы 
                шалыңыз ең келуінде шағымдану құқығы бар.
              </p>
              <div className="flex items-center gap-2">
                <MamsModal trigger="Толығырақ оқу" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
