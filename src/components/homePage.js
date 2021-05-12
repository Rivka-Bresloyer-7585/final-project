import React from 'react';
import ButtonBase from './buttonBases.js'
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const HomePage = () => {

    let history = useHistory();

    const login = () => {
        history.push("/familiarUser");
    }

    return (
        <div>
            <div>
                <label>!!כאן תוכלו להרכיב את הארוחה המתאימה לכם ביותר</label>
            </div>

            <Button onClick={login} variant="contained" color="primary">
                כניסה כמשתמש מוכר
            </Button>
            <ButtonBase />
        </div>
    )
}

export default HomePage;
