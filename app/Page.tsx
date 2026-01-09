"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold tracking-tight">
          Robotics & AI Engineer
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Building intelligent systems across engineering, robotics,
          artificial intelligence, and automation.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="px-8 py-3 bg-white text-black font-bold">
            View Projects
          </button>
          <button className="px-8 py-3 border border-white font-bold">
            Resume
          </button>
        </div>
      </motion.div>
    </main>
  )
}

