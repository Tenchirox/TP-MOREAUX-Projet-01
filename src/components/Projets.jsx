import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Gallery from './Gallerie';

const Projets = () => {
  const [showGallery, setShowGallery] = useState(false);

  const handleGalleryOpen = () => setShowGallery(true);
  const handleGalleryClose = () => setShowGallery(false);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Mes passions</h2>
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100">
            <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
              <Card.Img 
                variant="top" 
                src="/imgs/3D/3D (1).png" 
                alt="Impression 3D"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', padding: '15px' }}
              />
            </div>
            <Card.Body>
              <Card.Title>Impression 3D</Card.Title>
              <Card.Text>
                Passionné par l'impression 3D, je conçois et réalise divers objets et prototypes.
                Cette technologie me permet d'explorer ma créativité et de donner vie à mes idées.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button 
                  variant="primary" 
                  onClick={handleGalleryOpen}
                >
                  Voir certains modèles
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="h-100">
            <div className="image-hover-container" style={{ height: '400px', backgroundColor: '#f8f9fa' }}>
              <img 
                src="/imgs/gyroroue.jpg" 
                alt="Gyroroue"
                className="primary-image"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '15px'
                }}
              />
              <img 
                src="/imgs/MoiSurGyroroue.png" 
                alt="Moi sur Gyroroue"
                className="hover-image"
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '15px'
                }}
              />
            </div>
            <Card.Body>
              <Card.Title>Gyroroue</Card.Title>
              <Card.Text>
                La gyroroue est ma seconde passion. Ce moyen de transport électrique 
                me permet d'explorer mon environnement d'une façon unique et écologique.
                Je partage régulièrement mes expériences et conseils.
              </Card.Text>
              <div className="d-flex justify-content-between">
               {//<Button variant="primary" href="#">Mes parcours</Button>
                //<Button variant="outline-secondary" href="#">Équipement</Button>
                } 
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Gallery show={showGallery} handleClose={handleGalleryClose} />
    </Container>
  );
};

export default Projets;
