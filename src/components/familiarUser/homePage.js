import React from 'react';
import ButtonBase from '../buttonBases.js'
import { Button } from '@material-ui/core';

const HomePage = () => {
   
    return (
        <div>
            <div>
                <label>!!כאן תוכלו להרכיב את הארוחה המתאימה לכם ביותר</label>
            </div>

            <Button  variant="contained" color="primary">
                כניסה כמשתמש מוכר
            </Button>
            <ButtonBase />
        </div>
    )
}

export default HomePage;
