"use client"

import * as React from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

function ResponsiveIframe({ src, title }: { src: string; title: string }) {
  return (
    <div className="w-full" style={{ position: 'relative', paddingTop: '56.25%' }}>
      <iframe
        src={src}
        title={title}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default function SybailasPage() {
  const firstVideo = {
    id: 'WdP0FR0l8FM',
    title: 'Сыбайлас жемқорлық туралы — Бейне 1',
    src: 'https://www.youtube.com/embed/WdP0FR0l8FM',
  }

  const secondVideos = [
    {
      id: 'Buq2f6DT3Yg',
      title: 'Сыбайлас жемқорлық — Видео 2',
      src: 'https://www.youtube.com/embed/Buq2f6DT3Yg',
    },
    {
      id: '',
      title: 'Бейне жоқ',
      src: '',
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Сыбайлас жемқорлық туралы</h1>

      <div className="flex flex-col gap-4 max-w-lg">
        {/* First button - single video */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full text-left" size="lg">
              {firstVideo.title}
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-3xl max-h-[85vh]">
            <DialogHeader>
              <DialogTitle>{firstVideo.title}</DialogTitle>
              <DialogDescription className="mb-2">
                Видео открывается прямо на сайте — адаптивный проигрыватель.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-2">
              <ResponsiveIframe src={firstVideo.src} title={firstVideo.title} />
            </div>
          </DialogContent>
        </Dialog>

        {/* Second button - two videos (one may be empty) */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full text-left" size="lg">
              Серия видео: Сыбайлас жемқорлық
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>Серия видео</DialogTitle>
              <DialogDescription className="mb-2">
                Несколько роликов по теме. Нажмите на крестик чтобы закрыть.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-6">
              {secondVideos.map((v, idx) => (
                <div key={idx}>
                  <h3 className="mb-2 font-medium">{v.title}</h3>
                  {v.src ? (
                    <ResponsiveIframe src={v.src} title={v.title} />
                  ) : (
                    <div className="rounded-md border border-dashed p-6 text-center text-sm text-muted-foreground">
                      Бейне жоқ
                    </div>
                  )}
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}
