import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Alert from "./Alert";
/**
 * Component for rendering Login Page
 *
 * RoutesList -> LoginPage
 */
function LoginPage({ login }) {
    const [formData, setFormData] = useState(null);
    const [formErrors, setFormErrors] = useState([]);

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
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await login(formData);
        } catch (errors) {
            setFormErrors(errors)
        }
    }

    return (
        <div>
            {formErrors.length > 0 && formErrors.map(error=>
                <Alert key={error} type="danger" message={error}/>)}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" >Username
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={handleChange}
                    />
                </label><br />
                <label htmlFor="password" >Password
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                </label><br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default LoginPage;