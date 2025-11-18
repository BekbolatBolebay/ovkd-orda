import { notFound } from "next/navigation"
import Link from "next/link"
import { protocols } from "../data"
import { BackButton } from "@/components/back-button"

export default async function ProtocolPage({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  const { id } = await params
  const proto = protocols.find((p) => p.id === id)
  if (!proto) return notFound()

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10">
        <BackButton />

        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-2">{proto.title}</h1>
          <p className="text-sm text-gray-500 mb-4">{proto.date}</p>

          {proto.attendees && (
            <div className="mb-4">
              <h3 className="font-semibold">Қатысқандар</h3>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                {proto.attendees.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {proto.agenda && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Күн тәртібі</h3>
              <div className="space-y-3">
                {proto.agenda.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.decision}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            {proto.pdf ? (
              <a href={proto.pdf} download className="px-4 py-2 bg-red-600 text-white rounded">PDF жүктеу</a>
            ) : (
              <button disabled className="px-4 py-2 bg-gray-200 text-gray-500 rounded">PDF жоқ</button>
            )}

            <Link href="/board" className="text-sm text-cyan-700 underline">
              Байқау бетіне оралу
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
