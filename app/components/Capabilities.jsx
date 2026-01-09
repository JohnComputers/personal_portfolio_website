const items = [
  {
    title: "Engineering Systems",
    desc: "Designing robust, scalable technical systems."
  },
  {
    title: "Robotics & Hardware",
    desc: "Mechanical design, embedded systems, motion control."
  },
  {
    title: "AI & Automation",
    desc: "Applied machine learning and workflow automation."
  },
  {
    title: "Business & Product",
    desc: "Engineering with real-world constraints and outcomes."
  }
]

export default function Capabilities() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-700 p-6">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="mt-3 text-gray-400">{item.desc}</p>
        </div>
      ))}
    </section>
  )
}

