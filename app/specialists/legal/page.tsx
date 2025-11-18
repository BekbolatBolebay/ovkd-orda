"use client"

import { BackButton } from "@/components/back-button"

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          <div className="mb-6">
            <BackButton />
          </div>

          <article>
            <h1 className="text-2xl font-bold mb-6 text-gray-900">Законодательная база</h1>
            
            <div className="bg-gray-50 p-6 rounded border border-gray-200 max-h-[600px] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Стандарт об организации дерматовенерологической помощи в Республике Казахстан</h2>
              
              <div className="space-y-4 text-sm text-gray-800">
                <div>
                  <p className="font-semibold">Республика Казахстан</p>
                  <p className="font-semibold">Министерство здравоохранения и социального развития</p>
                  <p className="font-semibold">Приказ от 23 октября 2015 года № 821</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">1. Общие положения</h3>
                  <p>Настоящий стандарт организации дерматовенерологической помощи в Республике Казахстан разработан в соответствии с законодательством Республики Казахстан о здоровье народа и системе здравоохранения.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">2. Область применения</h3>
                  <p>Настоящий стандарт определяет требования к организации оказания медицинской помощи пациентам с дерматологическими и венерологическими заболеваниями на всех уровнях.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">3. Структура организаций</h3>
                  <p>В состав медицинских организаций входят:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Дерматовенерологические кабинеты в поликлиниках</li>
                    <li>Дерматовенерологические диспансеры</li>
                    <li>Дерматовенерологические отделения в стационарах</li>
                    <li>Кабинеты в учреждениях частной собственности</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">4. Формы оказания помощи</h3>
                  <p>Помощь оказывается в следующих формах:</p>
                  <ol className="list-decimal ml-6 mt-2 space-y-1">
                    <li>Амбулаторно-поликлиническая помощь</li>
                    <li>Стационарозамещающая помощь</li>
                    <li>Стационарная помощь</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">5. Первичная медико-санитарная помощь</h3>
                  <p>Включает определение состояния здоровья, диагностику, установление диагноза и направление на специализированную помощь при необходимости.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">6. Консультативно-диагностическая помощь</h3>
                  <p>Оказывается специалистом-дерматовенерологом и включает диагностику, лабораторные исследования, назначение лечения и профилактические меры.</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">7. Стационарная помощь</h3>
                  <p>Предоставляется пациентам с тяжелыми формами заболеваний, требующими круглосуточного наблюдения и специализированного лечения.</p>
                </div>
                
                <div className="border-t pt-4 mt-6">
                  <p className="text-xs text-gray-600">
                    <strong>Источник:</strong> Приказ Министерства здравоохранения и социального развития Республики Казахстан от 23 октября 2015 года № 821
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
