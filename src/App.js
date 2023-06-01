import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import JoblyApi from './api';
import NavBar from './NavBar';
import RouteList from './RouteList';
import userContext from "./userContext";
/**TODO:
 * 1. form submitted
 * 2. send to backend
 * 3. receive a token string
 * 4. set state with token string
 * 5. once set of state has finished, useEffect runs if token changed
 * 6. in use effect, decode token to get username
 * 7. use username to make a request to backend
 * 8. gives an object back with that user
 * 9. set current state for user
 */
/**Component for App */
function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");

  /**
   * Makes API post request to login
   * @param {Object} formData data from form
   */
  async function login(formData) {
    const token = await JoblyApi.login(formData);
    setToken(token);
    JoblyApi.token = token;
    getUserInfo(token);
  }

  /**
   * Makes API post request to sign up
   * @param {Object} formData data from form
   */
  async function signUp(formData) {
    const token = await JoblyApi.signUp(formData);
    setToken(token);
    JoblyApi.token = token;
    getUserInfo(token);
  }

  async function getUserInfo(token) {
    const { username, isAdmin } = jwt_decode(token);
    const user = await JoblyApi.getUser(username);
    setCurrentUser(user);
    console.log(user);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={{ user: currentUser }}>
          <NavBar />
          <RouteList login={login} signUp={signUp} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
