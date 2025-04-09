import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Head from './components/Head'
import Accueil from './components/Accueil'
import APropos from './components/Apropos'
import Projets from './components/Projets'
import Formation from './components/Formation'
import Competances from './components/Competances'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
      <Head />
      <Container>
        <Accueil />
        <APropos />
        
        <Row className="g-4 py-5">
          <Col md={6}>
            <Formation />
          </Col>
          <Col md={6}>
            <Competances />
          </Col>
        </Row>
        <Projets />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
