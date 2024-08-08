import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-scroll';

function NavbarContainer() {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      className="bg-gray-800"
      style={{ width: "100%" }}
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
    >
      <Container className="container" fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            className="img-fluid mr-2"
            loading="lazy"
            alt=""
            src="/logo.png"
            width="50"
            height="50"
          />
          {/* <b className="text-white">Innovationquotient</b> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto mx-5">
            <Link
              to="services"
              spy={true}
              smooth={true}
              className="fw-bold nav-link text-white"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link
              to="specialisations"
              spy={true}
              smooth={true}
              className="fw-bold nav-link text-white"
              onClick={handleLinkClick}
            >
              Specialisations
            </Link>
            <Link
              to="whyIQ"
              spy={true}
              smooth={true}
              className="fw-bold nav-link text-white"
              onClick={handleLinkClick}
            >
              WhyIQ
            </Link>
            <Link
              to="contactUs"
              spy={true}
              smooth={true}
              className="fw-bold nav-link text-white"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </Nav>
          {/* <Nav className="ml-auto">
            <img
              className="img-fluid mt-3 mr-3"
              loading="lazy"
              alt=""
              src="/group.svg"
              width="15"
              height="15"
            />
            <NavDropdown title="India" id="basic-nav-dropdown" className="mt-2 text-white">
              <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Option 3</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
