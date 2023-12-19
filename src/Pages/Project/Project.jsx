import "./Project.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Photo from "../../assets/linkedin.svg"

export default function Project() {
  return (
    <>
      <h2>Project One</h2>
      <a className="card-1">
        <Card style={{ width: '10rem' }}>
          <Card.Img className="photo-1" src={Photo} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Fitness-tracker</ListGroup.Item>
            <ListGroup.Item>Click on the link </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <button>
              <a href="https://fitness-tracker-server-44fdd70c95d7.herokuapp.com/">Project-1</a>
            </button>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}


