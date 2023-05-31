import { NavLink } from "react-router-dom";
import "./NavBar.css"

/**
 * Component for NavBar
 */
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/login" end>
        Login
      </NavLink>

      <NavLink to="/signup" end>
        Sign Up
      </NavLink>

      <NavLink to="/profile" end>
        Profile
      </NavLink>

      <NavLink to="/companies" end>
        Companies
      </NavLink>

      <NavLink to="/jobs" end>
        jobs
      </NavLink>
    </nav>
  );
}

export default NavBar;
