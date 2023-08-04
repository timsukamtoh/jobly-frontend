import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import "./NavBar.css";
import userContext from "./userContext";

/**
 * Component for NavBar
 */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  if (user) {
    return (
      <Navbar bg="primary" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className="text-secondary"><strong>Jobly</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/companies">Companies</Nav.Link>
              <Nav.Link href="/jobs">Jobs</Nav.Link>
              <Link href="/" className="nav-item nav-link" onClick={logout}>Logout {user.username}</Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  return (
    <Navbar bg="primary" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary p-2">
        <Container>
          <Navbar.Brand href="/" className="text-secondary"><strong>Jobly</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;
