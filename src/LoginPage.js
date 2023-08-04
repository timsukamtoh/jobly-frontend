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
        <div className="p-3 bg-primary pt-5 text-dark bg-opacity-25 bg-gradient">
            {formErrors.length > 0 && formErrors.map(error=>
                <Alert key={error} type="danger" message={error}/>)}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group col-4 mx-auto text-start m-2">
                <label htmlFor="username" >Username</label>
                <input
                id="username"
                name="username"
                type="text"
                className="form-control"
                onChange={handleChange}
                />
            </div>
            <div className="form-group col-4 mx-auto text-start m-2">
                <label htmlFor="password" >Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
                <div className="form-group col-4 mx-auto m-4">
                    <button className="btn btn-secondary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;