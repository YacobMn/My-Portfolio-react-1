import "./Nav.css"



export default function Nav({setPage}) {


  return (
    <nav className="nav-bar">
      <a herf="/" className="name-site"> Yacob Menghistu </a>
      <ul>
        <li onClick={()=> setPage('about')}>
          <a href="#">About</a>
        </li>
        <li onClick={()=> setPage('project')}>
          <a href="#">Portfolio</a>
        </li>
        <li onClick={()=> setPage('contact')}>
          <a href="#">Contact</a>
        </li>
          
        <li onClick={()=> setPage('resume')}>
          <a href="#">Resume</a>
        </li>

      </ul>


    </nav>
  );
}


