import React, { useState } from "react";
import JoblyApi from "./api";
import UserForm from "./UserForm";

function SignUpPage(){

    async function handleSignUp(formData){
        const token = await JoblyApi.signUp(formData);
        console.log("token......", token);
    }

    const fields = ["username", "password", "firstName", "lastName", "email"];

    return(
        <div>
            <h1>SignUp</h1>
            <UserForm handleFunction={handleSignUp} fields={fields}/>
        </div>
    )
}

export default SignUpPage;