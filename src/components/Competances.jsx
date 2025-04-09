import React from 'react';
import { Card } from 'react-bootstrap';

const Competances = () => {
  const skills = [
    <h5>Front :</h5>,
    'HTML/CSS',
    'JavaScript',
    'React',
    'PHP',
    <br/>,
    <h5>Back :</h5>,
    'SQL',
    'Python',
    'Node.js',
    <br/>,
    <h5>Autres :</h5>,
    'Git',
    'Linux',
    'Docker'
  ];

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="text-center mb-4"><h4>Compétences</h4></Card.Title>
        <ul className="list-unstyled">
          {skills.map((skill, index) => (
            <li key={index} className="mb-3">
              {skill}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Competances;
