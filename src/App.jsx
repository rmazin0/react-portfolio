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
    <div className={`${darkMode&& 'dark'} bg-background-50`}>
      <Nav onDarkMode={handleDarkMode} dark={darkMode}/>
      <div className="h-screen flex justify-center items-center">
        <Hero/>
      </div>
      <div className="text-text-900 font-heading flex items-center justify-around bg-secondary-200 py-20">
        <Contact/>
      </div>
    </div>
    </>
  )
}

export default App
