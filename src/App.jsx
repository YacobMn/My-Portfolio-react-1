// import { useState } from 'react'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Project from './Components/Project/Project';
import Resume from './Components/Resume/Resume';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



export default function App() {
  

  return (
    <div>
      <Header />
      <Nav />
      <main>
        <About />
        <Contact />
        <Project />
        <Resume />
      </main>

      <Footer />
    </div>
  )
}


