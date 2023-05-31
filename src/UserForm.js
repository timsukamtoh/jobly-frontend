import React, { useState } from "react";
import { startCase } from "lodash"

function UserForm({handleFunction, fields}){

    const [formData, setFormData] = useState({});

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(oldData => ({...oldData, [name]: value }));
      }

    function handleSubmit(evt) {
        console.log("formData,,,, ", formData);
        evt.preventDefault();
        handleFunction(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field =>
                <label htmlFor={field} key={field}>{startCase(field)}
                    <input
                        id = {field}
                        name= {field}
                        type= {field === "password" || field === "email"
                            ? field
                            : "text"}
                        onChange={handleChange}
                    />
                </label>
            )}


        <button>Submit</button>
        </form>
        );

}

export default UserForm;