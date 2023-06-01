import React, { useState } from "react";
import JoblyApi from "./api";
import UserForm from "./UserForm";

/**
 * Component for rendering SignUp Page
 *
 * RoutesList -> SignUpPage -> UserForm
 */
function ProfilePage() {
  /**
     * Makes API post request to sign up
     * @param {Object} formData data from form
     */
  async function handleSignUp(formData) {
    const token = await JoblyApi.signUp(formData);
    console.log("token......", token);
  }

  /** Specifies the fields for the form */
  const fields = ["firstName", "lastName", "email"];

  return (
    <div>
      <h1>Profile</h1>
      <UserForm handleFunction={handleSignUp} fields={fields} />
    </div>
  );
}

export default ProfilePage;