import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import SearchBar from "./SearchBar";
import { Facebook, Instagram } from "react-bootstrap-icons";

export default function AppNavbar() {
  const [showContact, setShowContact] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">J&I Muebles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#catalogo">Catálogo</Nav.Link>
            <NavDropdown title="Muebles" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Living</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Oficina</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Baño</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Catálogo completo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto" onClick={(e) => { e.preventDefault(); setShowContact(true); }}>
              ¡Contáctanos!
            </Nav.Link>
          </Nav>
          {/* Buscador móvil dentro del collapse */}
          <div className="d-lg-none my-2">
            <SearchBar onSearch={(q) => window.dispatchEvent(new CustomEvent('app:search', { detail: q }))} className="w-100" />
          </div>
          {/* Buscador en escritorio fuera del collapse */}
        </Navbar.Collapse>
        <div className="search-wrapper d-none d-lg-flex align-items-center">
          <SearchBar onSearch={(q) => window.dispatchEvent(new CustomEvent('app:search', { detail: q }))} />
        </div>
      </Container>
      {/* Contact modal */}
      <Modal show={showContact} onHide={() => setShowContact(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Dirección:</strong> Cumming 593, Valparaíso, Chile</p>
          <p><strong>Email:</strong> contacto@jimuebles.com</p>
          <p><strong>Teléfono:</strong> +56 9 5464 9483</p>
          <div className="text-center">
            <strong>Horario:</strong><br />
            Lunes a Viernes, 9:00 a 18:00<br />
            Sábado 12:00 a 15:00
            <div className="text-center mt-3">
              <a 
                href="https://youtu.be/dQw4w9WgXcQ?si=pzFuDkJEoqfXC76o" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="btn btn-outline-primary me-2"
              >
                <Facebook className="me-2" /> Facebook
              </a>
              <a 
                href="https://youtu.be/dQw4w9WgXcQ?si=pzFuDkJEoqfXC76o" 
                target="_blank" 
                rel="noreferrer noopener" 
                className="btn btn-outline-danger"
              >
                <Instagram className="me-2" /> Instagram
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}
