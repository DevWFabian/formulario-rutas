// Home.js
import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <h1>Bienvenido a la Web de Tutoría</h1>
        <p>
          Aquí puedes encontrar tutores para diversas materias y mejorar tus habilidades.
        </p>
        <Row lg={4} >
        <Button variant="primary" className='m-1' as={Link} to="/LogIn">
          Ingresar
        </Button>
        
        <Button variant="primary" className='m-1' as={Link} to="/SignUp">
          Registrarse
        </Button>
        </Row>
      </Row>
    </Container>
  );
}

export default Home;
