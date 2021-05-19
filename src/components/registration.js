import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import SignUp from './signUp.js';
const Registration = () => {
    
    let history = useHistory();

    // const registration = () => {
    //     history.push("/registration");
    // }
    return (
        <div>
            <SignUp/>
        </div>
    )
}


export default Registration;