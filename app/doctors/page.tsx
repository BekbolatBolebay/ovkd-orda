import { Team } from "@/components/team"
import { BackButton } from "@/components/back-button"

export default function DoctorsPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pt-6">
        <BackButton />
      </div>
      <Team />
    </main>
  )
}
