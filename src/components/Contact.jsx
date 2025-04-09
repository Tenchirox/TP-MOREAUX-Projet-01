import { useState, useRef } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // États pour gérer le statut de l'envoi
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  
  const form = useRef();

  // Gère les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Remplacez ces valeurs par vos propres identifiants EmailJS
    emailjs.sendForm(
      'service_7leklwp', // Créez un service sur emailjs.com et utilisez son ID
      'template_3698r4h', // Créez un template sur emailjs.com et utilisez son ID
      form.current,
      'Jr41zID5ZTsxgXn96' // Votre clé publique EmailJS
    )
      .then((result) => {
        console.log('Email envoyé avec succès:', result.text);
        setIsSubmitting(false);
        setShowSuccessMessage(true);
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // Masquer le message de succès après 5 secondes
        setTimeout(() => setShowSuccessMessage(false), 5000);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'email:', error.text);
        setIsSubmitting(false);
        setShowErrorMessage(true);
        // Masquer le message d'erreur après 5 secondes
        setTimeout(() => setShowErrorMessage(false), 5000);
      });
  };

  return (
    <Container className="py-5">
      {/* Centrage du contenu */}
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4">Me contacter</h2>
          
          {/* Messages de succès et d'erreur */}
          {showSuccessMessage && (
            <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
              Votre message a été envoyé avec succès !
            </Alert>
          )}
          
          {showErrorMessage && (
            <Alert variant="danger" onClose={() => setShowErrorMessage(false)} dismissible>
              Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.
            </Alert>
          )}
          
          {/* Formulaire de contact */}
          <Form ref={form} onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Nom:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre nom"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Email:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Entrez votre email"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={2}>Message:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Votre message"
                />
              </Col>
            </Form.Group>

            <div className="d-grid">
              <Button 
                variant="primary" 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
