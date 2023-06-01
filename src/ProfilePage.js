import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import userContext from "./userContext";

/**
 * Component for rendering Profile Page
 *
 * RoutesList -> ProfilePage
 */
function ProfilePage({ updateUser }) {
  const { user } = useContext(userContext);
  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });

  /**redirects to login if not logged in */
  if (!user) return <Navigate to="/login" />;

  /**
   * Saves form data on user input changes
   */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(oldData => ({ ...oldData, [name]: value }));
  }

  /**
   * Submits form information and calls updateUser from parent component
   */
  function handleSubmit(evt) {
    delete formData.username;
    evt.preventDefault();
    updateUser(formData);
  }

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username
          <input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            value={formData.username}
            readOnly
          />
        </label><br />
        <label htmlFor="firstName" >First Name
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label><br />
        <label htmlFor="lastName" >Last Name
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label><br />
        <label htmlFor="email" >Email
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label><br />
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default ProfilePage;