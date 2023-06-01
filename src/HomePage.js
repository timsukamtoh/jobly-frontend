import React, { useContext } from 'react';

import userContext from "./userContext";

/**
 * Component for HomePage
 *
 * RoutesList -> HomePage
 */
function HomePage() {
  const { user } = useContext(userContext);

  if(user) {
    return (
      <div>
        <h1>Welcome</h1>
        <h3>{user.firstName} {user.lastName}</h3>
      </div>
    );
  }
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
}

export default HomePage;