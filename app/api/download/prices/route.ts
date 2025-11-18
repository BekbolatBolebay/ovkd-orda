import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    // Отдаём файл из директории public/reports внутри проекта
    const relativePath = path.join(process.cwd(), 'public', 'reports', 'prejskurant-2025.pdf')

    // Проверяем, существует ли файл
    if (!fs.existsSync(relativePath)) {
      console.error(`File not found at: ${relativePath}`)
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }

    // Читаем файл
    const fileBuffer = fs.readFileSync(relativePath)

    // Возвращаем файл с правильными заголовками для скачивания
    return new NextResponse(fileBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename*=UTF-8\'\'%D0%91%D0%B0%D2%93%D0%B0%D0%BB%D0%B0%D1%80%20%D1%82%D1%96%D0%B7%D1%96%D0%BC%D1%96%202025.pdf',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'Failed to download file' },
      { status: 500 }
    )
  }
}
