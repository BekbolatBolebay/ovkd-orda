export type Protocol = {
  id: string
  title: string
  date: string
  attendees?: string[]
  absent?: string[]
  agenda?: { title: string; decision: string }[]
  pdf?: string
}

export const protocols: Protocol[] = [
  {
    id: "protocol-1-2025",
    title: "Хаттама № 1 - 2025",
    date: "17 қаңтар 2025",
    pdf: "/hattama-1-toksan-2025.pdf",
  },
  {
    id: "protocol-3-2024",
    title: "Хаттама №3 - 2024",
    date: "2024",
    pdf: "/3-toksan.pdf",
  },
  {
    id: "protocol-2-2024",
    title: "Хаттама №2 - 2024",
    date: "2024",
    pdf: "/2-tosan.pdf",
  },
  {
    id: "protocol-7-2024",
    title: "Хаттама 7 - 2024",
    date: "2024",
    pdf: "/hattama-7.pdf",
  },
  {
    id: "protocol-6-2024",
    title: "Хаттама 6 - 2024",
    date: "2024",
    pdf: "/hattama-6.pdf",
  },
  {
    id: "protocol-1-2024",
    title: "Хаттама 1 - 2024",
    date: "2024",
    pdf: "/hattama-1.pdf",
  },
  {
    id: "protocol-5-2023",
    title: "Хаттама 5 - 2023",
    date: "2023",
    pdf: "/hattama-5.pdf",
  },
  {
    id: "protocol-4-2023",
    title: "Хаттама 4 - 2023",
    date: "2023",
    pdf: "/pdf/protocol-4-2023.pdf",
  },
  {
    id: "protocol-3-2023",
    title: "Хаттама 3 - 2023",
    date: "2023",
    pdf: "/hattama-3.pdf",
  },
  {
    id: "protocol-2-2023",
    title: "Хаттама 2 - 2023",
    date: "2023",
    pdf: "/hattama-2.pdf",
  },
  {
    id: "protocol-1-2023",
    title: "Хаттама 1 - 2023",
    date: "2023",
    pdf: "/hattama-1-1.pdf",
  },
]
