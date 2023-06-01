import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import UserForm from "./UserForm";
import userContext from "./userContext";

/**
 * Component for rendering SignUp Page
 *
 * RoutesList -> SignUpPage -> UserForm
 */
function SignUpPage({ signUp }) {
    const { user } = useContext(userContext);

    /**redirects to homepage if logged in */
    if (user) return <Navigate to="/" />;

    /** Specifies the fields for the form */
    const fields = ["username", "password", "firstName", "lastName", "email"];

    return (
        <div>
            <h1>SignUp</h1>
            <UserForm handleFunction={signUp} fields={fields} />
        </div>
    );
}

export default SignUpPage;