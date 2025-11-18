import Link from "next/link"
import { BackButton } from "@/components/back-button"

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BackButton />

          <div className="mx-auto max-w-4xl">
            {/* Header Section */}
            <div className="rounded-lg bg-white p-8 shadow-md mb-8">
              <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
                Хабарландыру № 12 11-09-24
              </h1>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Файлды жүктеу:
                </p>

                <a
                  href="/pdf/announcement-12-11-09-24.pdf"
                  download="Хабарландыру № 12 11-09-24.pdf"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
                >
                  Хабарландыру № 12 11-09-24.pdf [1.01 Mb]
                </a>
              </div>
            </div>

            {/* Government Procurement Button */}
            <div className="text-center">
              <Link href="/board">
                <button className="w-full bg-red-600 text-white px-6 py-4 rounded font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <span>📁</span> Мемлекеттік сатып алу
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
