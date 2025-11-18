import { BackButton } from "@/components/back-button"
import { createClient } from "@/lib/supabase/server"
import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export const revalidate = 0

export default async function NewsPage() {
  const supabase = await createClient()
  const { data: news, error } = await supabase.from("news").select("*").order("published_date", { ascending: false })

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <BackButton />

        <div className="mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Хабарландырулар</h1>
          <p className="text-lg text-gray-600 mb-8">Соңғы жаңалықтар мен хабарландырулар</p>

          {error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Дерекқор орнатылмаған</AlertTitle>
              <AlertDescription>
                Хабарландырулар жүйесін пайдалану үшін дерекқорды орнату керек. Әкімші панеліне кіріп, SQL скриптті
                орындаңыз: <code className="bg-red-100 px-2 py-1 rounded">scripts/001_create_tables.sql</code>
              </AlertDescription>
            </Alert>
          ) : (
            <div className="grid gap-6">
              {news && news.length > 0 ? (
                news.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {item.icon && <span className="text-4xl flex-shrink-0">{item.icon}</span>}
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{item.title}</h2>
                          <p className="text-gray-700 mb-4 whitespace-pre-wrap">{item.content}</p>
                          {item.image_url && (
                            <img
                              src={item.image_url || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full max-w-md h-auto rounded-lg mb-4"
                            />
                          )}
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(item.published_date).toLocaleDateString("kk-KZ")}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500">Әзірше хабарландырулар жоқ</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
