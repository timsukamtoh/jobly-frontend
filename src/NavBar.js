import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import userContext from "./userContext";

/**
 * Component for NavBar
 */
function NavBar({ logout }) {
  const { user } = useContext(userContext);

  if (user) {
    return (
      <nav className="NavBar">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/profile" end>
          Profile
        </NavLink>

        <NavLink to="/companies" end>
          Companies
        </NavLink>

        <NavLink to="/jobs" end>
          Jobs
        </NavLink>

        <NavLink
          to={{
            pathname: '/',
            state: { message: "Logged out successfully", type: "success" }
          }}
          onClick={logout} end>
          Logout {user.username}
        </NavLink>
      </nav>
    );
  }

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

    </nav>
  );
}

export default NavBar;
