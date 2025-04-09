import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Apropos = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">À propos</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="mb-3">Mon Parcours</Card.Title>
              <Card.Text className="flex-grow-1">
                Passionné d'informatique depuis mon plus jeune âge, j'ai développé des compétences variées dans le domaine du développement et les nouvelles technologies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="mb-3">Mes Valeurs et qualités</Card.Title>
              <ol className="list-unstyled flex-grow-1">
                <li>• Innovation</li>
                <li>• Adaptation aux changements</li>
                <li>• Partage de connaissances</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Apropos;
