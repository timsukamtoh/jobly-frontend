import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

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
 * Component for NavBar
 */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  if (user) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
    );
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
      <div className="container-fluid">
        <NavLink className="col-4 navbar-brand nav-link" to="/" end>
          Home
        </NavLink>
        <ul className="navbar-nav">
          <NavLink className="nav-link" to="/login" end>
            Login
          </NavLink>

          <NavLink className="nav-link" to="/signup" end>
            Sign Up
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
