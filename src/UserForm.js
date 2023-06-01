import React, { useState, useContext } from "react";
import { startCase } from "lodash";

import userContext from "./userContext";

/**
 * Component for rendering forms for Login, Signup, Profile
 *
 * Props:
 * - handleFunction : function for saving auth
 * - fields : array of form field strings ["username", "password",..]
 *
 * {LoginPage, SignUpPage, ProfilePage} -> UserForm
 */
function UserForm({ handleFunction, fields }) {
    const { user } = useContext(userContext);
    const [formData, setFormData] = useState(user);
    /**
     * Saves form data on user input changes
     */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(oldData => ({ ...oldData, [name]: value }));
    }

    /**
     * Submits form information and calls handleFunction from parent component
     */
    function handleSubmit(evt) {
        evt.preventDefault();
        handleFunction(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field =>
                <label htmlFor={field} key={field}>{startCase(field)}
                    <input
                        id={field}
                        name={field}
                        type={field === "password" || field === "email"
                            ? field
                            : "text"}
                        { ...((user && field === "username") && {readOnly: true})}
                        { ...(user && {value: formData[field]})}
                        onChange={handleChange}
                    />
                </label>
            )}
            <button>{user ? "Save Changes" : "Submit"}</button>
        </form>
    );
}

export default UserForm;