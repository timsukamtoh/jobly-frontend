import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import UserForm from "./UserForm";
import userContext from "./userContext";

/**
 * Component for rendering Login Page
 *
 * RoutesList -> LoginPage -> UserForm
 */
function LoginPage({ login }) {
    const { user } = useContext(userContext);

    /**redirects to homepage if logged in */
    if (user) return <Navigate to="/" />;

    /** Specifies the fields for the form */
    const fields = ["username", "password"];

    return (
        <div>
            <h1>Login</h1>
            <UserForm handleFunction={login} fields={fields} />
        </div>
    );
}

export default LoginPage;