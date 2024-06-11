import React from 'react';
import { Navbar, Nav, Button , Row,Image, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/logo_tutor_100x100.png"

function Header() {
  return (
      <Navbar  expand="lg">
        <Link to={""} className='flex-grow-1 mx-3'><Image   src={logo} roundedCircle fluid /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='flex-grow-0 mx-3'>
          <Nav className="mr-auto">
            <Nav.Item><Link to={""}className='mx-2 link-dark link-opacity-50-hover link-underline-opacity-0'>Inicio</Link></Nav.Item>
            <Nav.Item><Link to={""}className='mx-2 link-dark link-opacity-50-hover link-underline-opacity-0'>Buscar Tutores</Link></Nav.Item>
            <Nav.Item><Link to={""}className='mx-2 link-dark link-opacity-50-hover link-underline-opacity-0'>Cómo Funciona</Link></Nav.Item>
            <Nav.Item><Link to={"LogIn"}className='mx-2 link-dark link-opacity-50-hover link-underline-opacity-0'>Iniciar Sesión</Link></Nav.Item>
            <Nav.Item><Link to={"SignUp"}className='mx-2 link-dark link-opacity-50-hover link-underline-opacity-0'>Registrarse</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );
}

export default Header;