"use client"

import type React from "react"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

type News = {
  id: string
  title: string
  content: string
  icon?: string
  image_url?: string
  published_date: string
}

export default function NewsAdminClient({ initialNews }: { initialNews: News[] }) {
  const [news, setNews] = useState<News[]>(initialNews)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    icon: "",
    image_url: "",
  })
  const router = useRouter()
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      const { error } = await supabase.from("news").update(formData).eq("id", editingId)

      if (error) {
        alert("Қате: " + error.message)
        return
      }
    } else {
      const { error } = await supabase.from("news").insert([formData])

      if (error) {
        alert("Қате: " + error.message)
        return
      }
    }

    setFormData({ title: "", content: "", icon: "", image_url: "" })
    setIsEditing(false)
    setEditingId(null)
    router.refresh()
  }

  const handleEdit = (item: News) => {
    setFormData({
      title: item.title,
      content: item.content,
      icon: item.icon || "",
      image_url: item.image_url || "",
    })
    setEditingId(item.id)
    setIsEditing(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Бұл жаңалықты өшіргіңіз келетініне сенімдісіз бе?")) return

    const { error } = await supabase.from("news").delete().eq("id", id)

    if (error) {
      alert("Қате: " + error.message)
      return
    }

    router.refresh()
  }

  return (
    <div className="space-y-6">
      <Button onClick={() => setIsEditing(!isEditing)}>
        <Plus className="mr-2 h-4 w-4" />
        {isEditing ? "Жабу" : "Жаңа хабарландыру қосу"}
      </Button>

      {isEditing && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Өңдеу" : "Жаңа хабарландыру"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Тақырып</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="content">Мазмұны</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={5}
                />
              </div>
              <div>
                <Label htmlFor="icon">Иконка (emoji)</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="📢"
                />
              </div>
              <div>
                <Label htmlFor="image_url">Сурет URL</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="https://..."
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">Сақтау</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setEditingId(null)
                    setFormData({ title: "", content: "", icon: "", image_url: "" })
                  }}
                >
                  Болдырмау
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {news.map((item) => (
          <Card key={item.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon && <span className="text-2xl">{item.icon}</span>}
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.content}</p>
                  {item.image_url && (
                    <img
                      src={item.image_url || "/placeholder.svg"}
                      alt={item.title}
                      className="w-32 h-32 object-cover rounded mt-2"
                    />
                  )}
                  <p className="text-sm text-muted-foreground mt-2">
                    {new Date(item.published_date).toLocaleDateString("kk-KZ")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(item)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
