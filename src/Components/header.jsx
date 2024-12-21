import React from 'react';
import { useLocation } from 'react-router';
// import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = ({ name }) => {
    const location = useLocation();

    return (
      <header>
        <Navbar sticky='top' collapseOnSelect expand="lg" className="navigation">
          <Container>
            <Navbar.Brand href="/CS7025-portfolio" id='logo'>Martin Nang'ole</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" activeKey={location.pathname}>
                <Nav.Link href="/CS7025-portfolio">home</Nav.Link>
                <Nav.Link href="/CS7025-portfolio/experience">experience</Nav.Link>
                <NavDropdown title="projects" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/CS7025-portfolio/games">games</NavDropdown.Item>
                  <NavDropdown.Item href="/CS7025-portfolio/music">music</NavDropdown.Item>
                  <NavDropdown.Item href="/CS7025-portfolio/repositories">repositories</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/CS7025-portfolio/projects">all</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav activeKey={location.pathname}>
                <Nav.Link href="/CS7025-portfolio/contact">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div class="bg-rect header-rect">
            </div>
       </Navbar>
      </header>

    );
};

export default Header;