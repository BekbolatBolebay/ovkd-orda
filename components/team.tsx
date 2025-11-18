import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function Team() {
  const doctors = [
    {
      name: "Әмір Нұрлан Әмірұлы",
      specialty: "Бас дәрігер",
      description: "Қызылорда облыстық тері-венерология диспансерінің бас дәрігері",
      image: "/medical-director-portrait.jpg",
      href: "/about/chief",
    },
    {
      name: "Д-р Сара Джексон",
      specialty: "Кардиолог",
      description: "15 жылдан астам жүрек ауруларын емдеу тәжірибесі бар маман",
      image: "/female-doctor-professional.jpg",
    },
    {
      name: "Д-р Майкл Чен",
      specialty: "Хирург",
      description: "Күрделі операцияларды орындауда танымал хирург",
      image: "/male-surgeon-professional.jpg",
    },
    {
      name: "Д-р Эмили Родригес",
      specialty: "Невролог",
      description: "Ми мен жүйке жүйесі ауруларын емдеу бойынша маман",
      image: "/female-neurologist-professional.jpg",
    },
    {
      name: "Д-р Дэвид Томпсон",
      specialty: "Реабилитолог",
      description: "Дене қалпына келтіру және физиотерапия бойынша маман",
      image: "/male-physiotherapist-professional.jpg",
    },
  ]

  return (
    <section id="team" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-gray-900 md:text-4xl">Біздің Мамандармен Танысыңыз</h2>
          <p className="mt-4 text-pretty text-lg text-gray-600">
            Біздің дәрігерлер тобы сіздерге кәсіби көмек көрсетуге дайын
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-sm transition-shadow hover:shadow-md">
              <div className="relative aspect-square">
                <Link href={doctor.href || "#"}>
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover cursor-pointer" />
                </Link>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {doctor.href ? (
                    <Link href={doctor.href} className="hover:text-blue-600 transition-colors">
                      {doctor.name}
                    </Link>
                  ) : (
                    doctor.name
                  )}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-600">{doctor.specialty}</p>
                <p className="mt-2 text-pretty text-sm text-gray-600">{doctor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
