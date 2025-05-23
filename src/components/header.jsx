/**
 * A header, containing a Bootstrap navbar, displayed on all pages
 */

import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("scrolling to top");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <header>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="navigation">
        <Container>
          <Navbar.Brand href="/#" id="logo">
            Martin Nang'ole
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" activeKey="1">
              <Nav.Item eventKey="1">
                <Nav.Link href="/#" onClick={window.scrollTo(0, 0)}>
                  home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#/experience">experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="projects" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/#/projects/games">
                    games
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/#/projects/music">
                    music
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/#/projects/repositories">
                    repositories
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/#/projects">all</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#/contact">contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div class="bg-rect header-rect"></div>
      </Navbar>
    </header>
  );
};

export default Header;
