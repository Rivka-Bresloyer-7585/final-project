import React from 'react';
import TransferList from './productList.js'
import Button from '@material-ui/core/Button';

const ByProducts = () => {

    return (
        <div>
            <TransferList />
            <Button variant="contained" color="primary" disableElevation>
                חפש
            </Button>
        </div>
    )
}

export default ByProducts;
