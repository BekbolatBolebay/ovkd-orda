import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-gray-400">
          <p className="mb-2">
            Copyright © 2020 Қызылорда облысының денсаулық сақтау басқармасының «Қызылорда облыстық тері-венерология
            диспансері» шаруашылық жүргізу құқығындағы коммуналдық мемлекеттік кәсіпорны.
          </p>
          <p>
            Сайт жобасын дайындаған «ToWeb.kz» компаниясы.{" "}
            <Link href="#" className="text-cyan-400 hover:underline">
              Сайтқа тапсырыс беру.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
