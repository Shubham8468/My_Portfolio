import React from "react"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import MyWork from "./Components/MyWork/MyWork"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import MyResume from "./Components/MyResume/MyResume"
function App() {
  return (
    <div>
      <Navber/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <MyResume/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
