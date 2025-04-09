import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import impression3d from '../assets/3D (1).png'; // Assurez-vous que ce fichier existe
import gyroroue from '../assets/gyroroue.jpg'; // Assurez-vous que ce fichier existe

const Projets = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Mes Projets</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100">
            <Card.Img variant="top" src={impression3d} alt="Impression 3D" />
            <Card.Body>
              <Card.Title>Impression 3D</Card.Title>
              <Card.Text>
                Passionné par l'impression 3D, je conçois et réalise divers objets et prototypes.
                Cette technologie me permet d'explorer ma créativité et de donner vie à mes idées.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="primary" href="#">Voir les modèles</Button>
                <Button variant="outline-secondary" href="#">Galerie</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="h-100">
            <Card.Img variant="top" src={gyroroue} alt="Gyroroue" />
            <Card.Body>
              <Card.Title>Gyroroue</Card.Title>
              <Card.Text>
                La gyroroue est ma seconde passion. Ce moyen de transport électrique 
                me permet d'explorer mon environnement d'une façon unique et écologique.
                Je partage régulièrement mes expériences et conseils.
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="primary" href="#">Mes parcours</Button>
                <Button variant="outline-secondary" href="#">Équipement</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projets;
