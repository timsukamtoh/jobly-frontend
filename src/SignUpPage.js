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
        <div className="p-3 bg-primary pt-5 text-dark bg-opacity-25 bg-gradient">
            {formErrors.length > 0 && formErrors.map(error =>
                <Alert key={error} type="danger" message={error} />)}
            <h1 className="m-4">SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="username">Username</label>
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
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="firstName" >First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="form-control col-6"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="lastName" >Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-control col-6"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="lastName" >Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-control col-6"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group col-4 mx-auto text-start m-2">
                    <label htmlFor="email" >Email </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control col-6"
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

export default SignUpPage;



