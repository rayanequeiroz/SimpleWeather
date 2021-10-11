import React from "react";
import "./MyButton.module.css";
import {Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";

const FavoriteButton = ({isFavorite, ...props}) => {
    return (
            <Checkbox {...props} checked={isFavorite} icon={<FavoriteBorder />} checkedIcon={<Favorite />} size="large" className="Favorite" sx={{
                color: 'white',
                '&.Mui-checked': {
                    color: 'white',
                }}}/>
    )
};

export default FavoriteButton;
