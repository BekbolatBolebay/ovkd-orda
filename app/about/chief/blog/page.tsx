import Link from "next/link"
import { posts } from "./data"
import { BackButton } from "@/components/back-button"

export default function ChiefBlogIndex() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10">
        <BackButton />
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow relative mt-6">
          {/* Profile block with photo in top-right */}
          <h1 className="text-2xl font-bold mb-2">Бас дәрігер блогы</h1>
          <p className="text-gray-700 mb-6">Мұнда бас дәрігердің мақалалары, ескертпелері және ресми хабарландырулары жарияланады.</p>

          {/* Photo placed absolutely in the top-right of the white card. Use a placeholder image from /public; replace with real photo at /chief.jpg if available. */}
          <img
            src="/smiling-doctor.png"
            alt="Бас дәрігер"
            className="hidden sm:block absolute top-6 right-6 w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-gray-100 shadow"
          />

          {/* Text content: add padding on the right so the absolute image doesn't overlap on larger screens */}
          <div className="mb-6 pr-0 sm:pr-40">
            <h2 className="text-xl font-semibold mb-2">ӘМІР НҰРЛАН ӘМІРҰЛЫ</h2>

            <div className="text-gray-800 leading-relaxed space-y-3">
              <p>
                <strong>Туған жылы:</strong> 1968 жыл, 25 қазан
              </p>
              <p>
                <strong>Туған жері:</strong> Қызылорда облысы, Шиелі ауданы, Жиделіарық ауылы
              </p>

              <div>
                <h3 className="font-medium mt-2">Білімі:</h3>
                <p className="ml-2">1998 – 1994 жылдары Ақтөбе мемлекеттік медицина институтының «Емдеу ісі» факультетін тәмамдаған.</p>
              </div>

              <div>
                <h3 className="font-medium mt-2">Еңбек жолы:</h3>
                <ul className="list-disc ml-6">
                  <li>1994–2003 жж.  Шиелі аудандық ауруханасының анестезиолог–реаниматолог дәрігері;</li>
                  <li>2003–2009 жж.  Шиелі аудандық ауруханасының бас дәрігердің емдеу ісі жөніндегі орынбасары;</li>
                  <li>2009–2010 жж.  Шиелі аудандық туберкулезге қарсы диспансерінің бас дәрігері;</li>
                  <li>2010–2013 жж.  Шиелі аудандық емханасының бас дәрігері;</li>
                  <li>2013–2016 жж.  Шиелі аудандық туберкулезге қарсы диспансерінің бас дәрігері;</li>
                  <li>2016–2019 жж.  Шиелі ауданаралық ауруханасының «Аурухана» бөлімінің меңгерушісі;</li>
                  <li>2019–2023 жж.  Шиелі аудандық ауруханасының бас дәрігері;</li>
                  <li>2023 ж.  Қызылорда облыстық фтизиопульмонология орталығы директорының пациенттерді қолдау және ішкі аудит жөніндегі орынбасары;</li>
                  <li>2023–2025 жж.  Қызылорда облыстық фтизиопульмонология орталығының директоры;</li>
                  <li>2025 жылдан бастап  Қызылорда облыстық тері-венерология диспансерінің бас дәрігері.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mt-2">Марапаттары:</h3>
                <ul className="list-disc ml-6">
                  <li>2011 ж. ҚР Денсаулық сақтау министрлігінің «Денсаулық сақтау ісінің үздігі» төсбелгісі;</li>
                  <li>2021 ж.  Аудан әкімінің «Құрмет грамотасы»;</li>
                  <li>2021 ж.  «Nur Otan» партиясы Төрағасы Н.Ә. Назарбаевтың «Алғыс хаты»;</li>
                  <li>2021 ж.  «Қазақстан Тәуелсіздігіне 30 жыл» мерейтойлық медалі;</li>
                  <li>2023 ж. Аудан әкімінің «Алғыс хаты»;</li>
                  <li>«Белсенді қызмет үшін» төсбелгісі.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Keep the existing posts list (functionality preserved) */}
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="border rounded p-4 hover:shadow">
                <Link href={`/about/chief/blog/${post.id}`} className="block">
                  <h2 className="text-lg font-semibold text-gray-900">{post.title}</h2>
                  <p className="text-sm text-gray-600">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-2">{post.date}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
