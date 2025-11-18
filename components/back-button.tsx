"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function BackButton() {
  const router = useRouter()

  return (
    <Button variant="ghost" onClick={() => router.back()} className="mb-6 gap-2">
      <ArrowLeft className="h-4 w-4" />
      Артқа
    </Button>
  )
}
