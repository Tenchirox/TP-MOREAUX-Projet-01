import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3 mt-5">
      <Container className="text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Kevin MOREAUX - Tous droits réservés</p>
      </Container>
    </footer>
  );
};

export default Footer;