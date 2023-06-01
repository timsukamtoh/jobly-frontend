import React, { useState } from "react";
import JoblyApi from "./api";
import UserForm from "./UserForm";

/**
 * Component for rendering SignUp Page
 *
 * RoutesList -> SignUpPage -> UserForm
 */
function SignUpPage({ signUp }) {

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