import React from 'react';
import { Container, Row, Col ,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-dark py-4 text-light" >
      <Container >
        <Row>
          <Col md={6}>
            <h5>Información de la Empresa</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to={""} className='link-light link-opacity-50-hover link-underline-opacity-0'>Políticas de Privacidad</Nav.Link>
              <Nav.Link as={Link} to={""} className='link-light link-opacity-50-hover link-underline-opacity-0'>Términos y Condiciones</Nav.Link>
              <Nav.Link as={Link} to={""} className='link-light link-opacity-50-hover link-underline-opacity-0'>Contacto</Nav.Link>
            </Nav>
              
          </Col>
          <Col md={6} className="text-right ">
            <h5>Síguenos</h5>
            <i className="bi bi-facebook pe-2"></i>
            <i class="bi bi-twitter-x px-2"></i>
            <i class="bi bi-linkedin px-2"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
