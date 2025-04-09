import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Competances = () => {
  const frontSkills = [
    'HTML/CSS',
    'JavaScript',
    'React'
  ].sort();

  const backSkills = [
    'Node.js',
    'Python',
    'SQL'
  ].sort();

  const otherSkills = [
    'Docker',
    'Git',
    'Linux',
    'Mariadb',
    'PostgreSQL'
  ].sort();

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="text-center mb-4"><h4>Compétences</h4></Card.Title>
        
        <Row>
          <Col md={6}>
            <h5 className="mb-3">Front :</h5>
            <ul className="list-unstyled">
              {frontSkills.map((skill, index) => (
                <li key={index} className="mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </Col>
          
          <Col md={6}>
            <h5 className="mb-3">Back :</h5>
            <ul className="list-unstyled">
              {backSkills.map((skill, index) => (
                <li key={index} className="mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        
        <h5 className="mt-4 mb-3">Autres :</h5>
        <ul className="list-unstyled">
          {otherSkills.map((skill, index) => (
            <li key={index} className="mb-2">
              {skill}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Competances;
