import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import userContext from "./userContext";

/**
 * Component for NavBar
 */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  if (user) {
    return (
      <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
        <div className="container-fluid">
          <NavLink className="col-4 navbar-brand nav-link" to="/" end>
            Home
          </NavLink>
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/profile" end>
              Profile
            </NavLink>
            <NavLink className="nav-link" to="/companies" end>
              Companies
            </NavLink>
            <NavLink className="nav-link" to="/jobs" end>
              Jobs
            </NavLink>
            <NavLink className="nav-link" to="/" onClick={logout} end>
              Logout {user.username}
            </NavLink>
          </ul>
        </div>
      </nav>
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
