import { useState } from "react";
import type React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import SearchBar from "./SearchBar";
import { Facebook, Instagram } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Person, Cart } from "react-bootstrap-icons";
import type { CartItem } from "../hooks/useCart";

type NavbarProps = {
  setCategory?: (cat: string) => void;
  // Carrito
  itemCount?: number;
  cart?: CartItem[];
  increaseQuantity?: (id: number) => void;
  decreaseQuantity?: (id: number) => void;
  removeFromCart?: (id: number) => void;
  clearCart?: () => void;
  cartTotal?: number;
};

export default function AppNavbar({ setCategory, itemCount = 0, cart = [], increaseQuantity, decreaseQuantity, removeFromCart, clearCart, cartTotal = 0 }: NavbarProps) {
  const [showContact, setShowContact] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Estados para login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Estados para registro
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerOver18, setRegisterOver18] = useState(false);
  const [registerError, setRegisterError] = useState("");

  function validateEmail(email: string) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  function handleLoginSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateEmail(loginEmail)) {
      setLoginError("Email inválido");
      return;
    }
    if (loginPassword.length < 6) {
      setLoginError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    setLoginError("");
    setShowLogin(false);
  }

  function handleRegisterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateEmail(registerEmail)) {
      setRegisterError("Email inválido");
      return;
    }
    if (registerPassword.length < 6) {
      setRegisterError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (!registerOver18) {
      setRegisterError("Debes confirmar que eres mayor de 18 años");
      return;
    }
    setRegisterError("");
    setShowRegister(false);
  }

  const clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });

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
              <NavDropdown.Item href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); setCategory && setCategory('living'); }}>
                Living
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); setCategory && setCategory('oficina'); }}>
                Oficina
              </NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); setCategory && setCategory('baño'); }}>
                Baño
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); setCategory && setCategory('todos'); }}>
                Catálogo completo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto" onClick={(e) => { e.preventDefault(); setShowContact(true); }}>
              ¡Contáctanos!
            </Nav.Link>
          </Nav>
          {/* Buscador móvil dentro del collapse */}
          <div className="d-lg-none my-2">
            <SearchBar onSearch={(q: string) => window.dispatchEvent(new CustomEvent('app:search', { detail: q }))} className="w-100" />
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
            <Button variant="outline-secondary" className="btn-cart position-relative" onClick={() => setShowCart(true)}>
              <Cart size={22} className="icon-cart" />
              {itemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {itemCount}
                  <span className="visually-hidden">items en carrito</span>
                </span>
              )}
            </Button>
          </div>
          {/* Buscador en escritorio fuera del collapse */}
        </Navbar.Collapse>
        <div className="d-none d-lg-flex align-items-center ms-auto">
          <div className="search-wrapper me-2">
            <SearchBar onSearch={(q: string) => window.dispatchEvent(new CustomEvent('app:search', { detail: q }))} />
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
          <Button variant="outline-secondary" className="ms-2 btn-cart position-relative" onClick={() => setShowCart(true)}>
            <Cart size={22} className="icon-cart" />
            {itemCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {itemCount}
                <span className="visually-hidden">items en carrito</span>
              </span>
            )}
          </Button>
        </div>
      </Container>
      

      {/* Login modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
                isInvalid={!!loginError && loginError.includes("Email")}
              />
              <Form.Control.Feedback type="invalid">
                {loginError && loginError.includes("Email") ? loginError : null}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                isInvalid={!!loginError && loginError.includes("contraseña")}
              />
              <Form.Control.Feedback type="invalid">
                {loginError && loginError.includes("contraseña") ? loginError : null}
              </Form.Control.Feedback>
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
          <Form onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="registerEmail">
              <Form.Label>Dirección de correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={registerEmail}
                onChange={e => setRegisterEmail(e.target.value)}
                isInvalid={!!registerError && registerError.includes("Email")}
              />
              <Form.Text id="registerEmailHelp" muted>
                Nunca compartiremos tu email con nadie más.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {registerError && registerError.includes("Email") ? registerError : null}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={registerPassword}
                onChange={e => setRegisterPassword(e.target.value)}
                isInvalid={!!registerError && registerError.includes("contraseña")}
              />
              <Form.Control.Feedback type="invalid">
                {registerError && registerError.includes("contraseña") ? registerError : null}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerOver18">
              <Form.Check
                type="checkbox"
                label="Confirmo que soy mayor de 18 años"
                checked={registerOver18}
                onChange={e => setRegisterOver18(e.target.checked)}
                isInvalid={!!registerError && registerError.includes("mayor de 18")}
              />
              {registerError && registerError.includes("mayor de 18") && (
                <div className="text-danger mt-1">{registerError}</div>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
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

      {/* Cart modal */}
      <Modal show={showCart} onHide={() => setShowCart(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Mi carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p className="text-center mb-0">Tu carrito está vacío.</p>
          ) : (
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th className="text-center">Cantidad</th>
                    <th className="text-end">Precio</th>
                    <th className="text-end">Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((it) => (
                    <tr key={it.id}>
                      <td>{it.name}</td>
                      <td className="text-center">
                        <div className="btn-group" role="group">
                          <Button variant="outline-secondary" size="sm" onClick={() => decreaseQuantity && decreaseQuantity(it.id)}>-</Button>
                          <span className="px-3">{it.quantity}</span>
                          <Button variant="outline-secondary" size="sm" onClick={() => increaseQuantity && increaseQuantity(it.id)}>+</Button>
                        </div>
                      </td>
                      <td className="text-end">{clp.format(it.price)}</td>
                      <td className="text-end">{clp.format(it.price * it.quantity)}</td>
                      <td className="text-end">
                        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart && removeFromCart(it.id)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="text-end fw-bold">Total</td>
                    <td className="text-end fw-bold">{clp.format(cartTotal)}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {cart.length > 0 && (
            <Button variant="outline-danger" onClick={() => clearCart && clearCart()}>Vaciar carrito</Button>
          )}
          <Button variant="secondary" onClick={() => setShowCart(false)}>Cerrar</Button>
          <Button variant="primary" disabled={cart.length === 0}>Ir a pagar</Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}
