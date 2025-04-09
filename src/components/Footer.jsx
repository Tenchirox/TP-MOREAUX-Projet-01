import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} Kevin MOREAUX - Tous droits réservés</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="mailto:depaninfo54@gmail.com" className="text-white text-decoration-none">depaninfo54@gmail.com</a>
            <span className="mx-2">|</span>
            <span><a href="tel:+33682238513" className="text-white text-decoration-none">0682238513</a></span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;