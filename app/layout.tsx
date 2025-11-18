import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Қызылорда облыстық тері-венерология диспансері",
  description: "Қызылорда облысының денсаулық сақтау басқармасының тері-венерология диспансері",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kz">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          {children}
          <Footer />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
