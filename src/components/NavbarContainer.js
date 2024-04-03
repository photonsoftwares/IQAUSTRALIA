import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContent from './HomeContent';
import OurServices from './OurServices'; 
import Specialisations from './Specialisations';
import WhyIQ from './WhyIQ';
import WhatUs from './WhatUs';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { Link } from 'react-scroll';
const NavbarContainer = () => {

  return (
    <>
       <Navbar style={{width:"100%"}} bg="dimgray" variant="dark" expand="lg" sticky="top">
      <Container className='container' fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            className="img-fluid mr-2"
            loading="lazy"
            alt=""
            src="/innnovation-quotient-logo-1@2x.png"
            width="50"
            height="50"
          />
          <b className="text-white">Innovationquotient</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto mx-5">
            <Link to="services" spy={true} smooth={true} className="fw-bold nav-link text-white">Services</Link>
            <Link to="specialisations" spy={true} smooth={true} className=" fw-bold  nav-link text-white">Specialisations</Link>
            <Link to="whyIQ" spy={true} smooth={true} className=" fw-bold  nav-link text-white">WhyIQ</Link>
            <Link to="whatUs" spy={true} smooth={true} className=" fw-bold  nav-link text-white">What ?</Link>
            <Link to="aboutUs" spy={true} smooth={true} className=" fw-bold  nav-link text-white">About</Link>
            <Link to="contactUs" spy={true} smooth={true} className=" fw-bold  nav-link text-white">Contact Us</Link>
          </Nav>
          <Nav className="ml-auto">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 <HomeContent/>
 <OurServices  />
 <Specialisations/>
 <WhyIQ  />
 <WhatUs/>
 <About/>
 <section className=" flex flex-col items-center justify-start py-0 px-5 box-border gap-[86px_0px] max-w-full mq450:gap-[86px_0px] mq750:gap-[86px_0px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-0 box-border max-w-full">
          <ContactUs />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default NavbarContainer;
