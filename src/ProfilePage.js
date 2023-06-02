import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import userContext from "./userContext";

/**
 * Component for rendering Profile Page
 *
 * RoutesList -> ProfilePage
 */
function ProfilePage({ updateUser }) {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });

  /**redirects to login if not logged in */
//   if (!user){
//     return navigate("/login", {state :{
//       message: "Must login to see profile",
//       type: "danger"
//     }})
//   }

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
    evt.preventDefault();
    let dataNoUsername = formData;
    delete dataNoUsername.username;
    updateUser(user.username, dataNoUsername);
    showSuccessfulUpdate();
  }

  /**
   * Redirects to profile page and shows success alert
   */
  function showSuccessfulUpdate(){
    return navigate("/", {state :{
      message: "Updated Profile Successfully",
      type: "success"
    }})
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