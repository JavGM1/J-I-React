import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import SearchBar from "./SearchBar";
import { Facebook, Instagram } from "react-bootstrap-icons";
import Form from "react-bootstrap/esm/Form";
import { Button } from "react-bootstrap";
import { Person, Cart } from "react-bootstrap-icons";

export default function AppNavbar() {
  const [showContact, setShowContact] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

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
          {/* Botones móvil: login y carrito */}
          <div className="d-lg-none d-flex justify-content-end gap-2 my-2">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="loginDropdownMobile" className="btn-person">
                <Person size={22} className="icon-person" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#" onClick={(e) => { e.preventDefault(); setShowLogin(true); }}>
                  Iniciar sesión
                </Dropdown.Item>
                <Dropdown.Item href="#" onClick={(e) => { e.preventDefault(); setShowRegister(true); }}>
                  Registrar
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Mi cuenta
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-secondary" className="btn-cart">
              <Cart size={22} className="icon-cart" />
            </Button>
          </div>
          {/* Buscador en escritorio fuera del collapse */}
        </Navbar.Collapse>
        <div className="d-none d-lg-flex align-items-center ms-auto">
          <div className="search-wrapper me-2">
            <SearchBar onSearch={(q) => window.dispatchEvent(new CustomEvent('app:search', { detail: q }))} />
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="loginDropdown" className="btn-person">
              <Person size={22} className="icon-person" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#" onClick={(e) => { e.preventDefault(); setShowLogin(true); }}>
                Iniciar sesión
              </Dropdown.Item>
              <Dropdown.Item href="#" onClick={(e) => { e.preventDefault(); setShowRegister(true); }}>
                Registrar
              </Dropdown.Item>
              <Dropdown.Item href="#">
                Mi cuenta
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="outline-secondary" className="ms-2 btn-cart">
            <Cart size={22} className="icon-cart" />
          </Button>
        </div>
      </Container>
      

      {/* Login modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Label>Dirección de correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginRemember">
              <Form.Check type="checkbox" label="Recuérdame" />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Register modal */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registrar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="form-registro">
            <Form.Group className="mb-3" controlId="registerEmail">
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
              <Form.Text id="registerEmailHelp" muted>
                Nunca compartiremos tu email con nadie más.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerOver18">
              <Form.Check type="checkbox" label="Confirmo que soy mayor de 18 años" required />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
            <div id="registro-error" className="text-danger mt-2"></div>
          </Form>
        </Modal.Body>
      </Modal>

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
