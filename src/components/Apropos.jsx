import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Apropos = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">À propos</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Mon Parcours</Card.Title>
              <Card.Text>
                Passionné d'informatique depuis mon plus jeune âge, j'ai développé des compétences variées dans le domaine du développement et les nouvelles technologies.
              </Card.Text>
              <Card.Title className="mt-4">Mes Valeurs et qualités</Card.Title>
              <ul className="list-unstyled">
                <li>• Innovation</li>
                <li>• Adaptation aux changements</li>
                <li>• Partage de connaissances</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Me contacter</Card.Title>
              <Card.Text>
                <p>Email: <a href="mailto:depaninfo54@gmail.com">depaninfo54@gmail.com</a></p>
                <p>Téléphone: +33 6 82 23 85 13</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Apropos;
