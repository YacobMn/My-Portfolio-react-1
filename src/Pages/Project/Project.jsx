import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Photo1 from '../../assets/github.svg'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './Project.css'

function Project() {
  return (
    <>
    <div className="pic">
      <div class="gallery">
        <a target="_blank" href="linkedin.svg"/> 
        <img src={Photo1} alt="Cinque Terre" width="1000" height="800"/>
      </div>
     </div> 
      {/* <div class="gallery">
        <a target="_blank" href="linkedin.svg"/> 
        <img src={Photo1} alt="Cinque Terre" width="1000" height="800"/>
      </div>
      <div class="gallery">
        <a target="_blank" href="linkedin.svg"/> 
        <img src={Photo1} alt="Cinque Terre" width="1000" height="800"/>
      </div>
      <div class="gallery">
        <a target="_blank" href="linkedin.svg"/> 
        <img src={Photo1} alt="Cinque Terre" width="1000" height="800"/>
      </div> */}
  </>
     
  );
}

export default Project;