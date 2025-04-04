import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
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
      <div>
        <Accueil />
        <APropos />
        <Projets />
        <Formation />
        <Competances />
        <Contact />
      </div>
    </>  
  );
}

export default App;
