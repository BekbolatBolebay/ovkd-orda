"use client"

import { BackButton } from "@/components/back-button"

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <BackButton />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">ПРЕЙСКУРАНТ ЦЕН</h1>

            <div className="bg-white rounded-lg p-6 shadow">
              <p className="text-gray-700 mb-4">Загрузите прейскурант или просмотрите его прямо в браузере.</p>

              <div className="mb-4">
                <a href="/api/download/prices" className="inline-block bg-red-600 text-white px-4 py-2 rounded">Скачать прейскурант (PDF)</a>
              </div>

              {/* HTML copy of the price list (manual reproduction) */}
              <article id="html-copy" className="prose max-w-full">
                <div className="text-center mb-6">
                  <div className="font-semibold">«УТВЕРЖДАЮ»</div>
                  <div className="mt-1">Главный врач КГП на ПХВ</div>
                  <div className="mt-1">Кызылординского областного кожно-венерологического диспансера</div>
                  <div className="mt-3 text-sm">«__» ____________ 2020 год</div>
                  <div className="mt-2 font-semibold">К.Т.МЫРЗАХМЕТОВ</div>
                  <div className="mt-6 font-bold text-xl">ПРЕЙСКУРАНТ ЦЕН</div>
                  <div className="text-sm mt-2">НА ПЛАТНЫЕ МЕДИЦИНСКИЕ И ДЕРМАТОКОСМЕТОЛОГИЧЕСКИЕ УСЛУГИ КГП НА ПХВ «КЫЗЫЛОРДИНСКОГО ОБЛАСТНОГО КОЖНО-ВЕНЕРОЛОГИЧЕСКОГО ДИСПАНСЕРА» УПРАВЛЕНИЯ ЗДРАВООХРАНЕНИЯ КЫЗЫЛОРДИНСКОЙ ОБЛАСТИ</div>
                </div>

                {/* Section: Стационарные услуги */}
                <h3 className="text-center font-semibold">СТАЦИОНАРНЫЕ УСЛУГИ ПО КОЖНЫМ -ВЕНЕРОЛОГИЧЕСКИМ ЗАБОЛЕВАНИЯМ</h3>
                <table className="min-w-full border border-black mb-6 text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">№</th>
                      <th className="border p-2">Наименование услуг</th>
                      <th className="border p-2">Единица измерения</th>
                      <th className="border p-2">Стоимость (тенге)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 text-center">1</td>
                      <td className="border p-2">Опоясывающий лишай</td>
                      <td className="border p-2 text-center">На курс лечения</td>
                      <td className="border p-2 text-right">109697 тенге</td>
                    </tr>
                    <tr>
                      <td className="border p-2 text-center">2</td>
                      <td className="border p-2">Сифилис</td>
                      <td className="border p-2 text-center">На курс лечения</td>
                      <td className="border p-2 text-right">96032 тенге</td>
                    </tr>
                  </tbody>
                </table>

                {/* Section: Амбулаторно-поликлинические услуги */}
                <h3 className="text-center font-semibold">Амбулаторно-поликлинические услуги</h3>
                <table className="min-w-full border border-black mb-6 text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">№</th>
                      <th className="border p-2">Наименование услуг</th>
                      <th className="border p-2">Единица измерения</th>
                      <th className="border p-2">стоимость</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 text-center">1</td>
                      <td className="border p-2">Прием врача-дермато венеролога</td>
                      <td className="border p-2 text-center">Один прием</td>
                      <td className="border p-2 text-right">2423 тенге</td>
                    </tr>
                    <tr>
                      <td className="border p-2 text-center">2</td>
                      <td className="border p-2">Забор крови для ИФА</td>
                      <td className="border p-2 text-center">Один забор</td>
                      <td className="border p-2 text-right">412 тенге</td>
                    </tr>
                  </tbody>
                </table>

                {/* Section: Физиотерапевтическое лечение (sample rows) */}
                <h3 className="text-center font-semibold">Физиотерапевтическое лечение на медицинском аппарате</h3>
                <table className="min-w-full border border-black mb-6 text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">№</th>
                      <th className="border p-2">Наименование услуг</th>
                      <th className="border p-2">Единица измерения</th>
                      <th className="border p-2">стоимость</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 text-center">1</td>
                      <td className="border p-2">УВЧ</td>
                      <td className="border p-2 text-center">Одна процедура</td>
                      <td className="border p-2 text-right">144 тенге</td>
                    </tr>
                    <tr>
                      <td className="border p-2 text-center">2</td>
                      <td className="border p-2">Ультратон</td>
                      <td className="border p-2 text-center">Одна процедура</td>
                      <td className="border p-2 text-right">120 тенге</td>
                    </tr>
                  </tbody>
                </table>

                {/* Section: Лабораторные исследования (sample) */}
                <h3 className="text-center font-semibold">Лабораторные исследования (клинико-диагностические, бактериологические и серологические)</h3>
                <table className="min-w-full border border-black mb-6 text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2">№</th>
                      <th className="border p-2">Наименование услуг</th>
                      <th className="border p-2">Единица измерения</th>
                      <th className="border p-2">стоимость</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2 text-center">1</td>
                      <td className="border p-2">ИФА на герпес</td>
                      <td className="border p-2 text-center">Одно исследование</td>
                      <td className="border p-2 text-right">1596 тенге</td>
                    </tr>
                    <tr>
                      <td className="border p-2 text-center">2</td>
                      <td className="border p-2">ИФА на хламидиоз</td>
                      <td className="border p-2 text-center">Одно исследование</td>
                      <td className="border p-2 text-right">1570 тенге</td>
                    </tr>
                  </tbody>
                </table>

                {/* Small signature / footer line */}
                <div className="mt-8">
                  <p className="font-semibold">Главный бухгалтер КГП на ПХВ</p>
                  <p className="font-semibold">Кызылординского областного кожно-венерологического диспансера: <span className="float-right">С. УСПАНОВА</span></p>
                </div>
              </article>

              {/* Original PDF viewer retained below for reference */}
              <div className="w-full h-[600px] border mt-6">
                <iframe src="reports/прейскурант 2025.PDF" title="Прейскурант цен" className="w-full h-full" />
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
                <a className="block bg-red-600 text-white px-4 py-3 rounded text-center">ФОТОБАЯН</a>
                <a className="block bg-red-600 text-white px-4 py-3 rounded text-center">БЕЙНЕБАЯН</a>
                <a className="block bg-red-600 text-white px-4 py-3 rounded text-center">МЕМЛЕКЕТТІК ТАҢБАЛАР</a>
                <a className="block bg-red-600 text-white px-4 py-3 rounded text-center">СЫБАЙЛАС ЖЕМҚОРЛЫҚ ТУРАЛЫ</a>
                <a href="/about/chief/blog" className="block bg-red-600 text-white px-4 py-3 rounded text-center">БАС ДӘРІГЕР БЛОГЫ</a>
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
