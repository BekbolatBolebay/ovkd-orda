import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Лена Томпсон",
      role: "Кардиологиялық науқас",
      content:
        "Жүрек тамырларының кейбір дәрілік мен емделуімнің арқасында мен өзімді өте жақсы сезінемін. Алғыс білдіремін!",
      image: "/patient-testimonial-woman.jpg",
      rating: 5,
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-gray-900 md:text-4xl">Пациенттер пікірлері</h2>
          <p className="mt-4 text-pretty text-lg text-gray-600">
            Біздің клиника туралы емделушілердің не айтқанын дәйектеңіз
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-pretty text-lg text-gray-700">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="mt-8 flex justify-center gap-2">
            <button className="h-2 w-2 rounded-full bg-blue-600" />
            <button className="h-2 w-2 rounded-full bg-gray-300" />
            <button className="h-2 w-2 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
