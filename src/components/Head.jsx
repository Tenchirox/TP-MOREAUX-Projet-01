import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Supprimez l'import de l'image car elle est dans public

const Head = () => {
  return (
    <Navbar className="bg-primary navbar-dark">
      <Container>
        <Row className="w-100 align-items-center">
          <Col className="d-flex justify-content-center">
          <Navbar.Brand href="#home">
              <img
                alt="Profile"
                src="/1726670578708.jpg"
                width="70"
                height="70"
                className="logo"
              />{' '}
              Kevin MOREAUX
            </Navbar.Brand>  
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Head;