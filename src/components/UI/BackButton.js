import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IconButton} from "@mui/material";

const BackButton = (props) => {
    return (
        <IconButton size="large" {...props}>
            <ArrowBackIcon fontSize="large"/>
        </IconButton>
    );
};

export default BackButton;