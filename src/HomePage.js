import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";

import userContext from "./userContext";
import Alert from './Alert';
/**
 * Component for HomePage
 *
 * RoutesList -> HomePage
 */
function HomePage() {
  const { user } = useContext(userContext);
  const location = useLocation();
  console.log("location=", location);
  const state = location.state

  if (user) {
    return (
      <div>
        {state && <Alert message={state.message} type={state.type} />}
        <h1>Welcome</h1>
        <h3>{user.firstName} {user.lastName}</h3>
      </div>
    );
  }
  return (
    <div>
      {state && <Alert message={state.message} type={state.type} />}
      <h1>HomePage</h1>
    </div>
  );
}

export default HomePage;