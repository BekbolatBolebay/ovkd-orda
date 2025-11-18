import { BackButton } from "@/components/back-button"

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BackButton />
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">Қаржылық есептер</h1>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-blue-600">2024 жылдың І тоқсанының қаржылық есебі</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  2024 жылы кәсіпорын «Әлеуметтік медициналық сақтандыру қоры» коммерциялық емес акционерлік қоғамының
                  Қызылорда облысы бойынша филиалы арасында ТМККК және МӘМС шеңберінде 647 206,1 мың тенгеге келісім
                  шарт жасалынды.
                </p>

                <div className="rounded-lg bg-blue-50 p-4">
                  <h3 className="mb-2 font-semibold text-blue-900">Оның ішінде:</h3>
                  <ul className="list-disc space-y-1 pl-6 text-blue-800">
                    <li>Тәуліктік стационарлық медициналық көмекке – 262 326,3 мың тенге</li>
                    <li>Стационарды алмастыратын медициналық көмекке – 67 223,8 мың тенге</li>
                    <li>Консультациялық – диагностикалық көмекке – 317 656,0 мың тенге</li>
                  </ul>
                </div>

                <p>
                  Кәсіпорынға 2024 жылдың І тоқсанындағы ӘМСҚ Қызылорда облысы бойынша филиалынан кіріс қаражаты – 177
                  800,8 мың тенге, оның ішінде 2024 жылға аванстық қаражат есебінен 159 760,0 мың тенге және 2023 жылдың
                  желтоқсан айының орындалуы бойынша қалдық соммасы 18 040,8 мың тенге.
                </p>

                <div className="rounded-lg bg-gray-100 p-4">
                  <h3 className="mb-3 font-semibold text-gray-900">2024 жылдың І тоқсаны бойынша шығыс есебі:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Еңбекақы қорына:</span>
                      <span className="font-semibold">88 418,1 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Азық түлікке:</span>
                      <span className="font-semibold">2 137,7 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Дәрі-дәрмекке:</span>
                      <span className="font-semibold">5 241,1 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Коммуналдық шығындарға:</span>
                      <span className="font-semibold">4 465,4 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Өзге де тауарларды сатып алуға:</span>
                      <span className="font-semibold">1 495,7 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Өзге де қызметтерге:</span>
                      <span className="font-semibold">2 311,3 мың тенге</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 p-4">
                  <p className="font-semibold text-green-900">
                    Қазіргі таңда кәсіпорынның қаржылық жағдайы тұрақты, кредиторлық берешектің туындау қаупі жоқ.
                    Алдағы сәуір мамыр айларына кәсәпорынның шығындарына қаражат жеткілікті.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-blue-600">2024 жылдың І жартыжылдық қаржылық есебі</h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  2024 жылы кәсіпорын «Әлеуметтік медициналық сақтандыру қоры» коммерциялық емес акционерлік қоғамының
                  Қызылорда облысы бойынша филиалы арасында ТМККК және МӘМС шеңберінде 677 767,4 мың тенгеге келісім
                  шарт жасалынды.
                </p>

                <div className="rounded-lg bg-blue-50 p-4">
                  <h3 className="mb-2 font-semibold text-blue-900">Оның ішінде:</h3>
                  <ul className="list-disc space-y-1 pl-6 text-blue-800">
                    <li>Тәуліктік стационарлық медициналық көмекке – 282 974,6 мың тенге</li>
                    <li>Стационарды алмастыратын медициналық көмекке – 67 223,8 мың тенге</li>
                    <li>Консультациялық – диагностикалық көмекке – 317 656,0 мың тенге</li>
                    <li>Жергілікті бюджет - 9 913,0 мың тенге</li>
                  </ul>
                </div>

                <p>
                  Кәсіпорынға 2024 жылдың І жартыжылдық ӘМСҚ Қызылорда облысы бойынша филиалынан кіріс қаражаты – 177
                  800,8 мың тенге, оның ішінде 2024 жылға аванстық қаражат есебінен 159 760,0 мың тенге және 2023 жылдың
                  желтоқсан айының орындалуы бойынша қалдық соммасы 18 040,8 мың тенге.
                </p>

                <div className="rounded-lg bg-gray-100 p-4">
                  <h3 className="mb-3 font-semibold text-gray-900">2024 жылдың І жартыжылдық бойынша шығыс есебі:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Еңбекақы қорына:</span>
                      <span className="font-semibold">88 418,1 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Азық түлікке:</span>
                      <span className="font-semibold">2 137,7 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Дәрі-дәрмекке:</span>
                      <span className="font-semibold">5 241,1 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Коммуналдық шығындарға:</span>
                      <span className="font-semibold">4 465,4 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Өзге де тауарларды сатып алуға:</span>
                      <span className="font-semibold">1 495,7 мың тенге</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Өзге де қызметтерге:</span>
                      <span className="font-semibold">2 311,3 мың тенге</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 p-4">
                  <p className="font-semibold text-green-900">
                    Қазіргі таңда кәсіпорынның қаржылық жағдайы тұрақты, кредиторлық берешектің туындау қаупі жоқ.
                    Алдағы шілде-тамыз айларына кәсәпорынның шығындарына қаражат жеткілікті.
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <a 
                    href="/reports/Баланс 2024.pdf" 
                    download
                    className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
                  >
                    Файлды жүктеу: І жартыжылдық қаржылық есебі 2024.pdf [3.5 Mb]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
