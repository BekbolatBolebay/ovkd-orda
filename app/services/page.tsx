import { Services } from "@/components/services"
import { BackButton } from "@/components/back-button"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pt-6">
        <BackButton />
      </div>
      <Services />
    </main>
  )
}
