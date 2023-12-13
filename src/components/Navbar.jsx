import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img_logo from "../assets/img/LOGOpng_AMERINST-1024x1024.png";
import "./Navbar.css"
function BasicExample() {
  return (
    <Navbar expand="lg" className="custom-navbar-color">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={img_logo}
            width="90"
            height="90"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/sobrenosotros">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/noticias">
              Noticias
            </Nav.Link>
            <Nav.Link as={Link} to="/nuestrapropuesta">
              Nuestra Propuesta
            </Nav.Link>
            <Nav.Link as={Link} to="/galeria">
              Galería
            </Nav.Link>
            <Nav.Link as={Link} to="/admisiones">
              Admisiones
            </Nav.Link>
            <NavDropdown title="Más..." id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/video">
                Video
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/infraestructura">
                Infraestructura
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contacto">
                Contacto
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/feedback">
                Feedback
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
