import { BackButton } from "@/components/back-button"

export default function FinancialReportH12024Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BackButton />
          
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
                Қызылорда облысының денсаулық сақтау басқармасының Қызылорда облыстық тері-венерология диспансері 
                шаруашылық жүргізу құқығындағы мемлекеттік коммуналдық кәсіпорнының 2024 жылдың І жартыжылдық қаржылық есебі
              </h1>

              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="mb-4">
                    2024 жылы кәсіпорын «әлеуметтік медициналық сақтандыру қоры» коммерциялық емес акционерлік қоғамының
                    Қызылорда облысы бойынша филиалы арасында ТМККК және МӘМС шеңберінде 677 767,4 мың теңгеге келісім шарт
                    жасалынды.
                  </p>

                  <div className="rounded-lg bg-blue-50 p-4">
                    <h3 className="mb-2 font-semibold text-blue-900">Оның ішінде:</h3>
                    <ul className="list-disc space-y-2 pl-6 text-blue-800">
                      <li>Тәуліктік стационарлық медициналық көмекке – 282 974,6 мың теңге</li>
                      <li>Стационарды алмастыратын медициналық көмекке – 67 223,8 мың теңге</li>
                      <li>Консультациялық – диагностикалық көмекке – 317 656,0 мың теңге</li>
                      <li>Жергілікті бюджет - 9 913,0 мың теңге</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="mb-4">
                    Кәсіпорынға 2024 жылдың І жартыжылдық ӘМСҚ Қызылорда облысы бойынша филиалынан кіріс қаражаты –
                    177800,8 мың теңге, оның ішінде 2024 жылға авансттық қаражат есебінен 159760,0 мың теңге және 
                    2023 жылдың желтоқсан айының орындалуы бойынша қалдық соммасы 18040,8 мың теңге
                  </p>

                  <div className="rounded-lg bg-gray-100 p-4">
                    <h3 className="mb-3 font-semibold text-gray-900">2024 жылдың І жартыжылдық бойынша шығыс есебі:</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Еңбекақы қорына:</span>
                        <span className="font-semibold">88418,1 мың теңге</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Азық түлікке:</span>
                        <span className="font-semibold">2137,7 мың теңге</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Дәрі-дәрмекке:</span>
                        <span className="font-semibold">3241,1 мың теңге</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Коммуналдық шығындарға:</span>
                        <span className="font-semibold">4463,4 мың теңге</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Өзге де тауарларды сатып алуға:</span>
                        <span className="font-semibold">1495,7 мың теңге</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Өзге де қызметтерге:</span>
                        <span className="font-semibold">2311,3 мың теңге</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 p-4">
                  <p className="font-semibold text-green-900">
                    Қазіргі таңда кәсіпорынның қаржылық жағдайы тұрақты, кредиторлық берешектің туындау қаупі жоқ.
                    Алдағы шілде-тамыз айларына кәсіпорынның шығындарына қаражат жеткілікті
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  {/* Embedded PDF preview */}
                  <div className="w-full">
                    <div className="mb-4">
                      <iframe
                        src="/reports/Баланс 2024.pdf"
                        title="І жартыжылдық қаржылық есебі 2024"
                        className="w-full h-[700px] rounded border"
                      />
                    </div>

                    <div className="flex justify-center">
                      <a
                        href="/reports/Баланс 2024.pdf"
                        download
                        className="text-red-600 font-semibold underline hover:text-red-700"
                      >
                        Қызыл: І жартыжылдық қаржылық есебі 2024.pdf — жүктеу
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}