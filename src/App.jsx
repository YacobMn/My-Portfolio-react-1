import { useState } from 'react'
import Nav from './Components/Nav/Nav';
import About from './Pages/About/About';
import Project from './Pages/Project/Project'
import Contact from './Pages/Contact/Contact';
import Resume from './Pages/Resume/Resume'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Pages/Footer/Footer';




export default function App() {
  const [ page, setPage] = useState("about")
  function displayPage(){
    if (page === 'about') {
      return <About />
    } else if (page === 'project'){
      return <Project />
    } else if (page === 'resume'){
      return <Resume />
    } else if (page === 'contact'){
      return <Contact />
    }
  }

  return (
    <div>
      <Nav setPage={setPage}/>
      {displayPage()}
  
      
    </div>
  )
}


