import React, { useState } from "react";
import JoblyApi from "./api";
import UserForm from "./UserForm";

function LoginPage(){

    async function handleLogin(formData){
        const token = await JoblyApi.login(formData);
    }

    const fields = ["username", "password"];

    return(
        <div>
            <h1>Login</h1>
            <UserForm handleFunction={handleLogin} fields={fields}/>
        </div>
    )
}

export default LoginPage