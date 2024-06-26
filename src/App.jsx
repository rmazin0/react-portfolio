import Contact from "./components/Contact";
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import { useState } from "react"
import { useRef } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const contentRef= useRef(null);

  const handleDarkMode = () => {
    setDarkMode(current => !current)
  }


  return (
    <>
      <svg className="hidden">
        <filter id="texture">
          <feTurbulence
            type='turbulence'
            baseFrequency='0.5'
          />
        </filter>
      </svg>
      <div className={`${darkMode && 'dark'} bg-background-50`}>
        <section className="text-text-900">
          <Nav onDarkMode={handleDarkMode} dark={darkMode} contentRef={contentRef}/>
        </section>
        <section className="text-text-900">
          <Hero />
        </section>
        <section className="text-text-900">
          <Contact contentRef={contentRef}/>
        </section>
      </div>
    </>
  )
}

export default App
