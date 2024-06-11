// Dashboard.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Perfil del Tutor</Card.Title>
              <Card.Text>
                Información del tutor.
              </Card.Text>
              <Button variant="primary">Ver Perfil</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Clases Programadas</Card.Title>
              <Card.Text>
                Lista de clases próximas.
              </Card.Text>
              <Button variant="primary">Ver Clases</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Mensajes</Card.Title>
              <Card.Text>
                Bandeja de entrada de mensajes.
              </Card.Text>
              <Button variant="primary">Ver Mensajes</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
