import Contact from "./components/Contact";
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
        <Nav onDarkMode={handleDarkMode} dark={darkMode} />
        <Hero />
        <Contact />
      </div>
    </>
  )
}

export default App
