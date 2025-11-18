import { BackButton } from "@/components/back-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText } from "lucide-react"
import Link from "next/link"
import { protocols } from "./data"

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="mt-4">
          <a href="/board/protocols" className="inline-block bg-cyan-600 text-white px-4 py-2 rounded">Хаттамалар</a>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
              <CardTitle className="text-2xl md:text-3xl">Байқаушы кеңес</CardTitle>
              <CardDescription className="text-white/90">Байқаушы кеңестің отырыстарының хаттамалары</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {protocols.map((protocol) => (
                  <AccordionItem key={protocol.id} value={protocol.id} className="border rounded-lg">
                    <AccordionTrigger className="px-4 hover:no-underline hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-cyan-600" />
                        <div className="text-left">
                          <div className="font-semibold">{protocol.title}</div>
                          <div className="text-sm text-gray-500">{protocol.date}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-4 pt-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2">Қатысқандар:</h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {protocol.attendees?.map((attendee, idx) => (
                              <li key={idx}>{attendee}</li>
                            ))}
                          </ul>
                          {protocol.absent && (
                            <p className="text-sm text-gray-600 mt-2">
                              <span className="font-semibold">Қатыспағандар:</span> {protocol.absent.join(", ")}
                            </p>
                          )}
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm text-gray-700 mb-2">Күн тәртібі:</h4>
                          <div className="space-y-3">
                            {protocol.agenda?.map((item, idx) => (
                              <div key={idx} className="bg-gray-50 p-3 rounded">
                                <p className="text-sm font-medium text-gray-800 mb-2">{item.title}</p>
                                <p className="text-sm text-gray-600">{item.decision}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                          <div className="mt-3">
                            <Link href={`/board/${protocol.id}`} className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded">Ашу / Жүктеу</Link>
                          </div>
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
