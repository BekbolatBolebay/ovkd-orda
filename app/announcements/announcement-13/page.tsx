import Link from "next/link"
import { BackButton } from "@/components/back-button"

export default function Announcement13Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-10">
        <BackButton />

        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Хабарландыру № 13 11-10-24
          </h1>

          {/* File Download Link */}
          <div className="mb-8">
            <p className="text-gray-700 mb-2">Файлды жүктеу:</p>
            <a
              href="/pdf/announcement-13-11-10-24.pdf"
              download="Хабарландыру № 13 11-10-24.pdf"
              className="text-red-600 hover:underline font-medium"
            >
              Хабарландыру № 13 11-10-24.pdf [1.16 Mb]
            </a>
          </div>

          {/* Red Button - Government Procurement */}
          <Link href="/board">
            <button className="w-full bg-red-600 text-white px-6 py-4 rounded font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <span>📁</span> Мемлекеттік сатып алу
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
