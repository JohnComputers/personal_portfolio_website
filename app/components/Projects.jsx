const projects = [
  {
    title: "Autonomous Robotics Arm",
    desc: "Designed a programmable robotic arm with feedback control.",
    tech: "Arduino · C++ · CAD · Control Systems"
  },
  {
    title: "AI Automation Pipeline",
    desc: "Automated decision workflows using AI agents.",
    tech: "Python · APIs · Automation"
  }
]

export default function Projects() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <div key={i} className="border border-gray-700 p-8">
            <h3 className="text-2xl font-bold">{p.title}</h3>
            <p className="mt-4 text-gray-400">{p.desc}</p>
            <p className="mt-6 text-sm text-gray-500">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

