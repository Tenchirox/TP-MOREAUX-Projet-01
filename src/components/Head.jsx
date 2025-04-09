import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Head = () => {
  return (
    <Navbar className="bg-primary navbar-dark py-2">
      <Container>
        <Row className="w-100">
          <Col className="d-flex">
            <Navbar.Brand href="#home" className="d-flex align-items-center w-100">
              <div className="d-flex align-items-center" style={{ width: '130px' }}>
                <img
                  alt="Profile"
                  src="/imgs/1726670578708.jpg"
                  className="logo rounded-circle"
                  style={{
                    width: '100%',
                    height: '130px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="flex-grow-1 text-center">
                <h1 className="mb-0" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Kevin MOREAUX</h1>
              </div>
            </Navbar.Brand>  
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Head;