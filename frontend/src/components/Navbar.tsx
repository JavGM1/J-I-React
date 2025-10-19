import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./SearchBar";

export default function AppNavbar() {
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
            <Nav.Link href="#¡Contáctanos!">¡Contáctanos!</Nav.Link>
          </Nav>
          {/* Buscador móvil dentro del collapse */}
          <div className="d-lg-none my-2">
            <SearchBar onSearch={(q) => console.log("Buscar (móvil):", q)} className="w-100" />
          </div>
          {/* Buscador en escritorio fuera del collapse */}
        </Navbar.Collapse>
        <div className="search-wrapper d-none d-lg-flex align-items-center">
          <SearchBar onSearch={(q) => console.log("Buscar:", q)} />
        </div>
      </Container>
    </Navbar>
  );
}
