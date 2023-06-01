import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import userContext from "./userContext";

/**
 * Component for rendering Login Page
 *
 * RoutesList -> LoginPage
 */
function LoginPage({ login }) {
    const { user } = useContext(userContext);
    const [formData, setFormData] = useState(null);

    /**redirects to homepage if logged in */
    if (user) return <Navigate to="/" />;

    /**
     * Saves form data on user input changes
     */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(oldData => ({ ...oldData, [name]: value }));
    }

    /**
     * Submits form information and calls login from parent component
     */
    function handleSubmit(evt) {
        evt.preventDefault();
        login(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" >Username
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={handleChange}
                    />
                </label><br/>
                <label htmlFor="password" >Password
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                </label><br/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default LoginPage;