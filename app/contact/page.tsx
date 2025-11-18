"use client"

import React, { useState } from "react"
import { BackButton } from "@/components/back-button"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Барлық өрістерді толтырыңыз")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.message || "Жіберу кезінде қате орын алды")
      }

      setSuccess("Хат сәтті жіберілді. Сізге жақын арада жауап беріледі.")
      setForm({ name: "", email: "", subject: "", message: "" })
    } catch (err: any) {
      setError(err?.message || "Жіберу мүмкін болмады")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Кнопка "Назад" */}
      <div className="container mx-auto px-4 pt-6">
        <BackButton />
      </div>

      {/* Основной контактный блок */}
      <section className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex md:items-start">

            {/* Сурет */}
            <div className="md:w-1/2">
              <img 
                src="/contact-image.jpg"
                className="w-full h-full object-cover" 
                alt="Қызылорда облыстық тері-венерология диспансері"
              />
            </div>

            {/* Текстовая информация + форма */}
            <div className="md:w-1/2 p-6">
              <h1 className="text-lg md:text-xl font-bold text-red-600 mb-2">
                ҚЫЗЫЛОРДА ОБЛЫСЫНЫҢ ДЕНСАУЛЫҚ САҚТАУ БАСҚАРМАСЫНЫҢ
              </h1>
              <h2 className="text-base md:text-lg font-semibold text-red-600 mb-4">
                "ҚЫЗЫЛОРДА ОБЛЫСТЫҚ ТЕРІ-ВЕНЕРОЛОГИЯ ДИСПАНСЕРІ"
              </h2>

              <p className="text-sm text-gray-700 mb-4">
                Мекен-жайымыз: Қызылорда қаласы, Зейнолла Шүкіров көшесі №7А
              </p>

              <div className="mb-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Аты-жөні*</label>
                      <input
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">E-Mail*</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Тақырып*</label>
                    <input
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Хабарлама*</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={6}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}
                  {success && <p className="text-sm text-green-600">{success}</p>}

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-60"
                    >
                      {loading ? "Жіберілуде..." : "Хат жіберу"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm({ name: "", email: "", subject: "", message: "" })}
                      className="px-3 py-2 border rounded"
                    >
                      Тазарту
                    </button>
                  </div>
                </form>
              </div>

              <div className="text-sm text-gray-800 space-y-1">
                <p><span className="font-semibold">Call-центр:</span> +7(724)240-00-01</p>
                <p><span className="font-semibold">Регистратура:</span> +7(724)223-54-72</p>
                <p><span className="font-semibold">Приемная:</span> +7(724)223-55-17</p>
                <p><span className="font-semibold">Телефон доверия:</span> +7(724)223-55-48</p>
                <p><span className="font-semibold">Кожное отделение:</span> +7(724)223-52-68</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}