import Hero from "./Components/Hero/Hero"
import Navber from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import React from "react"
import Services from "./Components/Services/Services"
import MyWork from "./Components/MyWork/MyWork"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <div>
      <Navber/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
