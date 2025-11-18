import Link from "next/link"
import { BackButton } from "@/components/back-button"
import { protocols } from "@/app/board/data"

export default function ProtocolsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10">
        <BackButton />

        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-2">Байқаушы кеңес — хаттамалар</h1>
          <p className="text-sm text-gray-700 mb-6">Төменде байқаушы кеңестің отырыстарының хаттамалары берілген. PDF түрінде жүктеу үшін «Жүктеу» батырмасын басыңыз.</p>

          <ul className="space-y-4">
            {protocols.map((p) => (
              <li key={p.id} className="flex items-center justify-between border rounded p-4">
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-gray-500">{p.date}</div>
                </div>

                <div className="flex items-center gap-2">
                  {p.pdf ? (
                    <a href={p.pdf} download className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                      Жүктеу
                    </a>
                  ) : (
                    <button disabled className="px-4 py-2 bg-gray-200 text-gray-500 rounded">PDF жоқ</button>
                  )}

                  <Link href="/board" className="text-sm text-cyan-700 underline">Артқа</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
