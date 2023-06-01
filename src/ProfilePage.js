import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import UserForm from "./UserForm";
import userContext from "./userContext";

/**
 * Component for rendering Profile Page
 *
 * RoutesList -> ProfilePage -> UserForm
 */
function ProfilePage({ updateUser }) {
  const { user } = useContext(userContext);

  /**redirects to login if not logged in */
  if (!user) return <Navigate to="/login" />;

  /** Specifies the fields for the form */
  const fields = ["username", "firstName", "lastName", "email"];

  return (
    <div>
      <h1>Profile</h1>
      <UserForm handleFunction={updateUser} fields={fields} />
    </div>
  );
}

export default ProfilePage;