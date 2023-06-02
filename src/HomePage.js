import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import userContext from "./userContext";
import Alert from './Alert';

/**
 * Component for HomePage
 *
 * RoutesList -> HomePage
 */
function HomePage() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  /**Navigates to location on user click */
  function navigateTo(location) {
    return navigate(`/${location}`)
  }

  if (user) {
    return (
      <div>
        <h1>Welcome</h1>
        <h3>{user.firstName} {user.lastName}</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      <div>
        <button onClick={()=>navigateTo("login")}>Login</button>
        <button onClick={()=>navigateTo("signup")}>Sign Up</button>
      </div>
    </div>
  );
}

export default HomePage;