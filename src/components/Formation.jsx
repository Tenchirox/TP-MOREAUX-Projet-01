import React from 'react';
import { Card } from 'react-bootstrap';

const Formation = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="text-center mb-4"><h4>Formation</h4></Card.Title>
        <br/>
        <div className="mb-4">
          <h5>Baccalauréat</h5>
          <p className="text-muted">Sciences et Technologies de Gestion - 2007</p>
          <ul className="list-unstyled">
            <li>Option Gestion des Systèmes d'Information</li>
            <li>Lycée Ernest BICHAT Lunéville</li>
          </ul>
        </div>
        <br/>
        <div>
          <h5>Formation Professionnelle</h5>
          <p className="text-muted">Développement Web - 2023 à aujourd'hui</p>
          <ul className="list-unstyled">
            <li>Formation continue</li>
            <li>Compétences acquises en développement frontend et backend</li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Formation;
