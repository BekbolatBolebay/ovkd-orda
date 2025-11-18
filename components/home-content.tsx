"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, FileText } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function HomeContent() {
  const { language } = useLanguage()

  const latestNews = [
    {
      id: 1,
      titleKz: "Медициналық қызметтерді алу үшін Сіз мемлекеттік қызметтер порталы арқылы онлайн жазыла аласыз",
      titleRu: "Вы можете записаться онлайн через портал государственных услуг для получения медицинских услуг",
      date: "28 қаңтар 2025 ж. / 28 января 2025 г.",
      image: "/medical-online-registration.jpg",
    },
    {
      id: 2,
      titleKz: "Қолданысқа арналған жадынама. Мемлекеттік құжаттарды электронды түрде қабылдау",
      titleRu: "Справка по использованию. Прием государственных документов в электронном виде",
      date: "08 мамыр 2023 ж. / 08 мая 2023 г.",
      image: "/image.png",
    },
  ]

  const quickActionsKz = [
    { title: "ФОТОБАЯН", icon: FileText, color: "bg-red-500" },
    { title: "БЕЙНЕБАЯН", icon: FileText, color: "bg-red-500" },
    { title: "МЕМЛЕКЕТТІК ТАҢБАЛАР", icon: FileText, color: "bg-red-500" },
    { title: "СЫБАЙЛАС ЖЕМҚОРЛЫҚ ТУРАЛЫ", icon: FileText, color: "bg-red-500" },
  ]

  const quickActionsRu = [
    { title: "ФОТОГАЛЕРЕЯ", icon: FileText, color: "bg-red-500" },
    { title: "ВИДЕОГАЛЕРЕЯ", icon: FileText, color: "bg-red-500" },
    { title: "ГОСУДАРСТВЕННЫЕ СИМВОЛЫ", icon: FileText, color: "bg-red-500" },
    { title: "О ПРОТИВОДЕЙСТВИИ КОРРУПЦИИ", icon: FileText, color: "bg-red-500" },
  ]

  const quickActions = language === 'ru' ? quickActionsRu : quickActionsKz

  const documents = [
    { title: "Хаттама № 1 17-01-2025", titleRu: "Протокол № 1 17-01-2025", href: "/board/protocol-1-2025" },
    { title: "Хабарландыру № 1 10-01-25", titleRu: "Объявление № 1 10-01-25", href: "/announcements" },
    { title: "Хаттама № 1 13 18-10-2024", titleRu: "Протокол № 1 13 18-10-2024", href: "/board/protocol-1-2024" },
    { title: "Хабарландыру № 13 11-10-24", titleRu: "Объявление № 13 11-10-24", href: "/announcements/announcement-13" },
  ]

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Sidebar - Latest News */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-bold mb-4 text-gray-700">
                  {language === 'ru' ? 'ПОСЛЕДНИЕ НОВОСТИ' : 'СОҢҒЫ ЖАҢАЛЫҚТАР'}
                </h2>
                <div className="space-y-4">
                  {latestNews.map((news) => (
                    <Link key={news.id} href={`/news/${news.id}`} className="block group">
                      <div className="space-y-2">
                        <img
                          src={news.image || "/placeholder.svg"}
                          alt={language === 'ru' ? news.titleRu : news.titleKz}
                          className="w-full h-32 object-cover rounded"
                        />
                        <p className="text-sm font-medium group-hover:text-cyan-600 transition-colors line-clamp-2">
                          {language === 'ru' ? news.titleRu : news.titleKz}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {news.date}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/news">
                  <Button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600">
                    {language === 'ru' ? 'Все новости' : 'Барлық жаңалықтар'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Center Content - Featured News */}
          <div className="lg:col-span-6">
            <Card className="mb-6">
              <CardContent className="p-0">
                <img
                  src="/image.png"
                  alt="Featured"
                  className="w-full h-64 md:h-96 object-cover rounded-t"
                />
                <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-600 mb-2">
                    {language === 'ru' ? 'Справка по использованию' : 'Қолданысқа арналған жадынама'}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {language === 'ru' 
                      ? 'Онлайн запись через систему электронного приема государственных документов'
                      : 'Мемлекеттік құжаттарды электронды түрде қабылдау жүйесі арқылы онлайн жазылу'
                    }
                  </p>
                  <Link href="/patients">
                    <Button className="bg-red-500 hover:bg-red-600">
                      {language === 'ru' ? 'Подробнее' : 'Толығырақ'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          {/* Right Sidebar - Director & Quick Actions */}
          <div className="lg:col-span-3 space-y-6">
            {/* Director Card */}
            <Link href="/about/chief/blog">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h2 className="text-lg font-bold mb-4 text-gray-700">
                    {language === 'ru' ? 'БЛОГ ГЛАВНОГО ВРАЧА' : 'БАС ДӘРІГЕРДІҢ БЛОГЫ'}
                  </h2>
                  <img
                    src="/WhatsApp Image 2025-11-17 at 11.29.46.jpeg"
                    alt="Director"
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                  <h3 className="font-bold text-center">{language === 'ru' ? 'Нурлан' : 'Нұрлан'}</h3>
                  <p className="text-sm text-center text-gray-600">{language === 'ru' ? 'Амирович' : 'Әмірұлы'}</p>
                </CardContent>
              </Card>
            </Link>
            {/* Quick Actions */}
            <div className="space-y-3">
              {quickActions.map((action, index) => {
                let href = "#";
                const titleKz = [
                  "ФОТОБАЯН",
                  "БЕЙНЕБАЯН",
                  "МЕМЛЕКЕТТІК ТАҢБАЛАР",
                  "СЫБАЙЛАС ЖЕМҚОРЛЫҚ ТУРАЛЫ",
                ][index]
                if (titleKz === "ФОТОБАЯН") href = "/photobayan";
                if (titleKz === "БЕЙНЕБАЯН") href = "/beynebayan";
                if (titleKz === "МЕМЛЕКЕТТІК ТАҢБАЛАР") href = "/state-symbols";
                return (
                  <Link key={index} href={href}>
                    <Card className={`${action.color} text-white hover:opacity-90 transition-opacity cursor-pointer`}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <action.icon className="h-5 w-5" />
                        <span className="font-medium text-sm">{action.title}</span>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>

            {/* Documents */}
            <Card className="bg-cyan-50">
              <CardContent className="p-4">
                <h3 className="font-bold mb-3 text-cyan-700">
                  {language === 'ru' ? 'ГОСУДАРСТВЕННЫЕ ЗАКУПКИ' : 'МЕМЛЕКЕТТІК САТЫП АЛУ'}
                </h3>
                <div className="space-y-2">
                  {documents.map((doc, index) => (
                    <Link
                      key={index}
                      href={doc.href}
                      className="block p-2 bg-cyan-100 hover:bg-cyan-200 rounded text-sm transition-colors"
                    >
                      {language === 'ru' ? doc.titleRu : doc.title}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

