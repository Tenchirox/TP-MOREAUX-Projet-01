import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Head from './components/Head'
import Accueil from './components/Accueil'
import APropos from './components/Apropos'
import Projets from './components/Projets'
import Formation from './components/Formation'
import Competances from './components/Competances'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Head />
      <Container fluid className="main-content">
        <section className="section-primary">
          <Accueil />
        </section>

        <section className="section-light">
          <Row>
            <Col md={6}>
              <APropos />
            </Col>
            <Col md={6}>
              <Competances />
            </Col>
          </Row>
        </section>

        <section className="section-primary">
          <Projets />
        </section>

        <section className="section-light">
          <Formation />
        </section>

        <section className="section-primary">
          <Contact />
        </section>
      </Container>
    </div>
  );
}

export default App;
