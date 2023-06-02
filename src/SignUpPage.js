import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserForm from "./UserForm";
import userContext from "./userContext";

/**
 * Component for rendering SignUp Page
 *
 * RoutesList -> SignUpPage
 */
function SignUpPage({ signUp }) {
    const { user } = useContext(userContext);
    const [formData, setFormData] = useState(null);
    const navigate = useNavigate();

    /**redirects to homepage if logged in */
    // if (user) {
    //     return navigate("/", {
    //         state: {
    //             message: "Signed Up Successfully",
    //             type: "success"
    //         }
    //     });
    // }

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
    function handleSubmit(evt) {
        evt.preventDefault();
        signUp(formData);
    }

    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" >Username
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={handleChange}
                        readOnly
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