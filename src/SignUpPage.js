import React, { useState } from "react";

import Alert from "./Alert";
/**
 * Component for rendering SignUp Page
 *
 * RoutesList -> SignUpPage
 */
function SignUpPage({ signUp }) {
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
     * Submits form information and calls signUp from parent component
     */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await signUp(formData);
        } catch (errors) {
            setFormErrors(errors);
        }
    }

    return (
        <div>
            {formErrors.length > 0 && formErrors.map(error =>
                <Alert key={error} type="danger" message={error} />)}
            <h1>SignUp</h1>
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
                <label htmlFor="firstName" >First Name
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={handleChange}
                    />
                </label><br />
                <label htmlFor="lastName" >Last Name
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={handleChange}
                    />
                </label><br />
                <label htmlFor="email" >Email
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                    />
                </label><br />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SignUpPage;