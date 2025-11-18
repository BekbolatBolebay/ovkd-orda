export function Stats() {
  const stats = [
    {
      value: "15+",
      label: "Жыл тәжірибе",
    },
    {
      value: "5000+",
      label: "Емделген науқастар",
    },
    {
      value: "98%",
      label: "Қанағаттану деңгейі",
    },
  ]

  return (
    <section className="border-y bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-2xl font-bold text-gray-900 md:text-3xl">
            Сіздің сенімді серіктесіңіз денсаулық саласында
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
