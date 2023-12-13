// import { useState } from 'react'

import Nav from './Components/Nav/Nav';
import About from './Pages/About/About';
import Project from './Pages/Project/Project'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Footer/Footer';




export default function App() {
  

  return (
    <div>
      <Nav />
      <About />
      <Footer />
      <Project />
      
    </div>
  )
}


