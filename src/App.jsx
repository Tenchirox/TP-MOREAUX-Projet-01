import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Head from './components/Head'
import Accueil from './components/Accueil'
import APropos from './components/Apropos'
import Projets from './components/Projets'
import Formation from './components/Formation'
import Competances from './components/Competances'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Head />
      <Container>
        <Accueil />
        <APropos />
        <Projets />
        <Formation />
        <Competances />
        <Contact />
      </Container>
    </>  
  );
}

export default App;
