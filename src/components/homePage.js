import React from 'react';
import ButtonBase from './buttonBases.js'
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import "./homePage.css";

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
            <ButtonBase className="buttonBase" />

            <Button className="familiarUser" onClick={login} variant="contained" color="primary">
                כניסה כמשתמש מוכר
            </Button>
        </div>
    )
}

export default HomePage;
