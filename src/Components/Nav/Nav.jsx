import "./Nav.css"


export default function Nav() {


  return (
    <nav className="nav-bar">
      <a herf="/" className="name-site"> Yacob Menghistu </a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
          
        <li>
          <a href="/resume">Resume</a>
        </li>

      </ul>


    </nav>
  );
}


