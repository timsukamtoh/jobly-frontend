import './App.css';
import React, { useState, useEffect } from "react";
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
 * 9. set current state in context for user
 */

const TOKEN_KEY = "token";

/**Component for App */
function App() {

  const [userState, setUserState] = useState({ isLoading: true, currentUser: null });
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));
  console.log("user......", userState.currentUser);
  console.log("token......", token);

  /**
   * useEffect activated when token changes
   * Sets joblyApi.token
   * gets username by decoding payload
   * call joblyApi.getUser passing in username
   */
  useEffect(function onTokenChange() {
    if (token === null) {
      localStorage.removeItem(TOKEN_KEY);
      setUserState({ isLoading: false, currentUser: null });
    } else {
      JoblyApi.token = token;
      localStorage.setItem(TOKEN_KEY, token);
      async function getUserInfo() {
        try {
          const { username } = jwt_decode(token);
          const user = await JoblyApi.getUser(username);
          setUserState({ isLoading: false, currentUser: user });
        }
        catch (err) {
          console.error(err);
        }
      }
      getUserInfo();
    }
  }, [token]);

  /**
   * Makes API post request to login
   * @param {Object} formData data from form
   */
  async function login(formData) {
    const token = await JoblyApi.login(formData);
    setToken(token);
  }

  /**
   * Makes API post request to sign up
   * @param {Object} formData data from form
   */
  async function signUp(formData) {
    const token = await JoblyApi.signUp(formData);
    setToken(token);
  }

  /**
   * Makes API patch request to update user
   * changes user state with setUserState
   * @param {Object} formData data from form
   */
  async function updateUser(username, formData) {
    const user = await JoblyApi.updateUser(username, formData);
    setUserState({ isLoading: false, currentUser: user });
  }

  /**
   * Makes API post request to logout
   */
  async function logout() {
    setToken(null);
  }

  if (userState.isLoading) return <h1>Loading...</h1>;

  return (
    <div className="App container-fluid position-relative">
      <BrowserRouter>
        <userContext.Provider value={{ user: userState.currentUser }}>
          <NavBar logout={logout} />
          <RouteList login={login} signUp={signUp} updateUser={updateUser} />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
