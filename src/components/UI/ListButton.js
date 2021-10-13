import React from "react";
import { IconButton } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';

const ListButton = (props) => {
  return (
    <IconButton size="large" sx={{ color: "white"}}>
      <PublicIcon fontSize="large"/>
    </IconButton>
  );
};

export default ListButton;
