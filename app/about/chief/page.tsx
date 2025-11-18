"use client"

import { BackButton } from "@/components/back-button"
import { useState } from "react"

export default function ChiefDoctorBlogPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", captcha: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("Хабарлама жіберілді (демо)")
    setForm({ name: "", email: "", subject: "", message: "", captcha: "" })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Менің блогыма қош келдіңіздер!</h1>

            <div className="bg-white rounded-lg p-6 shadow">
              <p className="text-gray-700 mb-4">Бұл бөлімде бас дәрігердің ой-пікірлері мен маңызды хабарландырулары жарияланады. Қазіргі уақытта соңғы жазбалар жоқ — төмендегі форма арқылы пікіріңізді немесе сұрағыңызды жіберіңіз.</p>

              {/* Optionally more static content can be added here */}
            </div>

            <div className="mt-6">
              <a href="/about/chief/blog" className="inline-block bg-red-600 text-white px-4 py-2 rounded">БАС ДӘРІГЕР БЛОГЫ</a>
            </div>

            {/* Contact / feedback form */}
            <div className="mt-8 bg-white rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-4">Хат жіберу</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Аты-жөні*"
                    className="border border-red-300 rounded px-3 py-2 w-full"
                    required
                  />
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="E-Mail*"
                    type="email"
                    className="border border-red-300 rounded px-3 py-2 w-full"
                    required
                  />
                </div>

                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Тақырып*"
                  className="border border-red-300 rounded px-3 py-2 w-full"
                  required
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Хабарлама*"
                  className="border border-red-300 rounded px-3 py-2 w-full h-40"
                  required
                />

                <div>
                  <label className="block text-sm mb-2">Код енгізу*:</label>
                  <div className="flex items-center gap-4">
                    <img src="/placeholder.jpg" alt="captcha" className="h-16 w-32 object-cover border" />
                    <input
                      name="captcha"
                      value={form.captcha}
                      onChange={handleChange}
                      placeholder="Кодты енгізіңіз"
                      className="border border-red-300 rounded px-3 py-2 flex-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">ЖІБЕРУ</button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow text-center">
                <img src="/WhatsApp Image 2025-11-17 at 11.29.46.jpeg" alt="Бас дәрігер" className="mx-auto w-48 h-56 object-cover rounded" />
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
                <ul className="space-y-3 text-cyan-800">
                  <li>Хаттама № 1 17-01-2025</li>
                  <li>Хабарландыру № 1 10-01-25</li>
                  <li>Хаттама № 13 18-10-2024</li>
                  <li>Хабарландыру № 13 11-10-24</li>
                  <li>Хабарландыру № 12 11-09-24</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}


