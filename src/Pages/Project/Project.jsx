import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Photo1 from '../../assets/github.svg'
import Photo2 from '../../assets/IMG_0128.PNG'
import mainLogo from'./logoWhite.png'


import './Project.css'

function Project() {
  return (
    <>
      <button>
        <img src={Photo2} alt="basketball" />
        <img src={Photo2} alt="kat" />
        <img src={Photo2} alt="rain" />
      </button>
    </>

  );
}

export default Project;