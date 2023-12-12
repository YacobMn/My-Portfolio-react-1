import "./Nav.css"


export default function Nav() {


  return (
    <nav className="nav-bar">
      <a herf="/" className="name-site"> Yacob Menghistu </a>
      <ul className="button-sites">
        <h3>
        <a href="/About">
          About
        </a>
        </h3>
        <h3>
        <a href="/Resume">
          Resume
        </a>
        </h3>
        <h3>
        <a href="/Contact">
          Contact
        </a>
        </h3>
      </ul>



    </nav>
  );
}


