import { readdirSync } from "fs"
import { join } from "path"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const medcolPath = join(process.cwd(), "public/medcol")
    
    // Получаем все файлы из папки
    const files = readdirSync(medcolPath)
    
    // Фильтруем только изображения (jpg, jpeg, png)
    const imageExtensions = [".jpg", ".jpeg", ".png"]
    const images = files.filter((file) => {
      const ext = file.toLowerCase().substring(file.lastIndexOf("."))
      return imageExtensions.includes(ext)
    })

    return NextResponse.json({ images })
  } catch (error) {
    console.error("Error reading medcol:", error)
    return NextResponse.json({ images: [], error: "Failed to read medcol" }, { status: 500 })
  }
}
