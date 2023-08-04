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
      <div className="p-3 bg-primary pt-5 text-white bg-opacity-25">
        <h1 className="h1 font-weight-bold text-secondary"><strong>Welcome</strong></h1>
        <h3 className='h3 font-weight-bold text-secondary'>{user.firstName} {user.lastName}</h3>
      </div>
    );
  }
  return (
    <div className="p-3 bg-primary pt-5 text-dark bg-opacity-25 bg-gradient">
      <h1 className="display-1 font-weight-bold text-secondary"><strong>Jobly</strong></h1>
      <h4 className="display-3 font-weight-normal text-white">All the jobs in one, convenient place.</h4>
      <div className="form-group col-4 mx-auto m-4">
        <button onClick={()=>navigateTo("login")} className="btn btn-secondary m-2">Login</button>
        <button onClick={()=>navigateTo("signup")} className="btn btn-secondary m-2">Sign Up</button>
      </div>
    </div>
  );
}

export default HomePage;

