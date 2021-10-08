import React from 'react';
import classes from './MyButton.module.css'

const MyCheckbox = ({isFavorite, ...props}) => {
    return (
        <input {...props} checked={!!isFavorite} type="checkbox" className={classes.favoriteButton}>

        </input>
    );
};

export default MyCheckbox;