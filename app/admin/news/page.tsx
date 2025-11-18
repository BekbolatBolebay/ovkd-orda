import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import NewsAdminClient from "@/components/news-admin-client"
import { BackButton } from "@/components/back-button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default async function AdminNewsPage() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/admin/login")
  }

  const { data: news, error: dbError } = await supabase
    .from("news")
    .select("*")
    .order("published_date", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <BackButton />
          <h1 className="text-2xl font-bold mt-4">Хабарландыруларды басқару</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {dbError ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Дерекқор орнатылмаған</AlertTitle>
            <AlertDescription className="space-y-2">
              <p>
                Хабарландырулар жүйесін пайдалану үшін дерекқорды орнату керек. Төмендегі SQL скриптті Supabase-те
                орындаңыз:
              </p>
              <code className="block bg-red-100 px-4 py-2 rounded text-sm">scripts/001_create_tables.sql</code>
              <p className="text-sm">
                Supabase Dashboard → SQL Editor → жаңа сұрау → скрипт мазмұнын көшіріп, орындаңыз
              </p>
            </AlertDescription>
          </Alert>
        ) : (
          <NewsAdminClient initialNews={news || []} />
        )}
      </main>
    </div>
  )
}
