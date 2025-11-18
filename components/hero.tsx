"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-balance text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl xl:text-6xl">
              Сіздің денсаулығыңыз <span className="text-blue-600">Біздің қамқорлығымыз</span>
            </h1>
            <p className="text-pretty text-base md:text-lg text-gray-600">
              Қызылорда облысының тері-венерология диспансері - заманауи медициналық жабдықтармен және жоғары білікті
              дерматовенеролог мамандармен қамтамасыз етілген медициналық мекеме. Тері аурулары мен венерологиялық
              ауруларды диагностикалау және емдеу бойынша толық спектрлі қызметтер көрсетеміз.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                Қабылдауға жазылу
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Біз туралы
              </Button>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50">
              <Image src="/smiling-doctor.png" alt="Дәрігер" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
