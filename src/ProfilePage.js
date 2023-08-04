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
    <div className="p-3 bg-primary pt-5 text-white bg-opacity-25">
      {formErrors.length > 0 && formErrors.map(error =>
        <Alert key={error} type="danger" message={error} />)}
      {successfulUpdate &&
        <Alert type="success" message={"Updated successfully."} />}
      <h1 className="h1 col-sm-5 mx-auto font-weight-normal bg-primary bg-opacity-50"><strong>Profile</strong></h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-sm-5 mx-auto text-start m-2">
            <label htmlFor="username" >Username</label>
            <input
                id="username"
                name="username"
                type="text"
                className="form-control"
                aria-label="Disabled input example"
                onChange={handleChange}
                value={formData.username}
                disabled
            />
        </div>
        <div className="form-group col-sm-5 mx-auto text-start m-2">
            <label htmlFor="firstName" >First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
            />
        </div>
        <div className="form-group col-sm-5 mx-auto text-start m-2">
            <label htmlFor="lastName" >Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
            />
        </div>
        <div className="form-group col-sm-5 mx-auto text-start">
            <label htmlFor="email" >Email</label>
            <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
            />
        </div>
        <div className="form-group col-sm-5 mx-auto m-4">
            <button className="btn btn-secondary">Save Changes</button>
        </div>

      </form>
    </div>
  );
}

export default ProfilePage;