import { Link, NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './PetNavbar.css';

function PetNavbar() {
  return (


    <Navbar bg="dark" data-bs-theme="dark" expand="lg">


      <Container fluid>

        <a href="/">
          <img
            alt=""
            src="/img/petsoft sem fundo.png"
            width="250"
            height="180"
            className="d-inline-block align-top"
          />{' '}
        </a>

        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="Home" />
        <Navbar.Collapse id="Home">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">Servicos</Nav.Link>
            <Nav.Link href="#action2">Clientes</Nav.Link>
            <Nav.Link href="#action2">Agendamento</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PetNavbar;