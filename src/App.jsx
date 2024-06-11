import Hero from "./components/Hero"
import Nav from "./components/Nav"

function App() {


  return (
    <>
      <Nav/>
      <div className="h-screen flex justify-center items-center">
        <Hero/>
      </div>
    </>
  )
}

export default App
