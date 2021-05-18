import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Login from './login';
const FamiliarUser = () => {
    
    let history = useHistory();

    const registration = () => { 
        history.push("/registration");
    }
    return (
        <div>
            <Login/>
            <Button onClick={registration} variant="contained" color="primary">
                לרישום לאתר
            </Button>
        </div>
    )
}


export default FamiliarUser;
