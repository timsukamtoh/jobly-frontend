import React, { useState } from "react";
import { startCase } from "lodash";
import { useContext } from "react";
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
    const [formData, setFormData] = useState({});

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
        console.log("formData,,,, ", formData);
        evt.preventDefault();
        handleFunction(formData);
    }

    if(!user) {
        return (
            <form onSubmit={handleSubmit}>
                {fields.map(field =>
                    {field!=="username" && <label htmlFor={field} key={field}>{startCase(field)}
                        <input
                            id={field}
                            name={field}
                            type={field === "password" || field === "email"
                                ? field
                                : "text"}
                            value={user[field]}
                            onChange={handleChange}
                        />
                    </label>}
                )}
                <button>Submit</button>
            </form>
        );
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
                        onChange={handleChange}
                    />
                    <br/>
                </label>
            )}
            <button>Submit</button>
        </form>
    );
}

export default UserForm;