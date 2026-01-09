import Hero from "./components/Hero"
import Capabilities from "./components/Capabilities"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import About from "./components/About"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Hero />
      <Capabilities />
      <Projects />
      <TechStack />
      <About />
      <Contact />
    </div>
  )
}

