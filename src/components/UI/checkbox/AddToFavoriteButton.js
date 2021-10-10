import React from "react";
import classes from "./MyButton.module.css";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const AddToFavoriteButton = ({ isFavorite, ...props }) => {
  if (isFavorite) {
    return (
      <IconButton {...props} color="inherit" aria-label="add to favorites cities" className={classes.Favorite}>
        <FavoriteIcon></FavoriteIcon>
      </IconButton>
    )
  } else {
      return (
          <IconButton {...props} color="inherit" fontSize="inherit" aria-label="remove from favorites cities" className={classes.Favorite}>
              <FavoriteBorderIcon></FavoriteBorderIcon>
          </IconButton>
      )
  }

  // return (
  //     <input {...props} checked={!!isFavorite} type="checkbox" className={classes.favoriteButton}>
  //
  //     </input>
  // );
};

export default AddToFavoriteButton;
