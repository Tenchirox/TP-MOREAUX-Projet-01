import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Accueil = () => {
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col className="d-flex justify-content-between align-items-center">
          <h3>Bienvenue</h3>
          <ThemeSwitcher />
        </Col>
      </Row>
      
      <Row className="my-5">
        <Col className="text-center">
          <h2 className="display-4 mb-4">Développeur et passionné de technologies</h2>
          <p className="lead text-muted">Créativité, innovation et solutions sur mesure</p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="text-center p-5">
              <h3 className="mb-3">Expertise</h3>
              <p className="lead">Développement web et solutions informatiques</p>
              <p>Spécialisé dans la création d'applications modernes et performantes</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Accueil;
