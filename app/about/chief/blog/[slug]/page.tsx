import { posts } from "../data"
import { notFound } from "next/navigation"

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.id === params.slug)
  if (!post) return notFound()

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="text-xs text-gray-400 mb-4">{post.date}</p>
          <div className="prose text-gray-800">
            <p>{post.content}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
