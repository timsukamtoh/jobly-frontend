import React, { useState, useContext } from "react";

import userContext from "./userContext";
import Alert from "./Alert";
/**
 * Component for rendering Profile Page
 *
 * RoutesList -> ProfilePage
 */
function ProfilePage({ updateUser }) {
  const { user } = useContext(userContext);
  const [formErrors, setFormErrors] = useState([]);
  const [successfulUpdate, setSuccessfulUpdate] = useState(false);
  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });

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
  async function handleSubmit(evt) {
    evt.preventDefault();
    let dataNoUsername = formData;
    delete dataNoUsername.username;
    try {
      await updateUser(user.username, dataNoUsername);
    } catch (errors) {
      setFormErrors(errors);
    }
    setFormErrors([]);
    setSuccessfulUpdate(true);
  }

  return (
    <div>
      {formErrors.length > 0 && formErrors.map(error =>
        <Alert key={error} type="danger" message={error} />)}
      {successfulUpdate &&
        <Alert type="success" message={"Updated successfully."} />}
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