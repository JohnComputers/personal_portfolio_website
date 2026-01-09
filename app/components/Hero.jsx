import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Robotics & AI Engineer
        </h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Building intelligent systems at the intersection of hardware,
          software, and automation.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a className="px-8 py-3 bg-white text-black font-bold">
            View Projects
          </a>
          <a className="px-8 py-3 border border-white font-bold">
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}

