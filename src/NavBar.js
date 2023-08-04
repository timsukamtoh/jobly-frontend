import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import "./NavBar.css";
import userContext from "./userContext";
{/* // <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
      //   <div className="container-fluid">
      //     <NavLink className="col-4 navbar-brand nav-link" to="/" end>
      //       Home
      //     </NavLink>
      //     <ul className="navbar-nav">
      //       <NavLink className="nav-link" to="/profile" end>
      //         Profile
      //       </NavLink>
      //       <NavLink className="nav-link" to="/companies" end>
      //         Companies
      //       </NavLink>
      //       <NavLink className="nav-link" to="/jobs" end>
      //         Jobs
      //       </NavLink>
      //       <Link className="nav-link" to="/" onClick={logout} end>
      //         Logout {user.username}
      //       </Link>
      //     </ul>
      //   </div>
      // </nav> */}
/**
 * <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Jobly</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav align-items-center">
            <NavLink className="nav-item nav-link" to="/profile">Profile <span className="sr-only">(current)</span></NavLink>
            <NavLink className="nav-item nav-link" to="/companies">Companies</NavLink>
            <NavLink className="nav-item nav-link" to="/jobs">Jobs</NavLink>
            <Link className="nav-item nav-link" to="/" onClick={logout}>Logout {user.username}</Link>
          </div>
        </div>
      </nav >
 */
/**
 * Component for NavBar
 */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  if (user) {
    return (
      <Navbar bg="primary" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><strong>Jobly</strong></Navbar.Brand>
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
          <Navbar.Brand href="/"><strong>Jobly</strong></Navbar.Brand>
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
