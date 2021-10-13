import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import "../styles/TempScaleToggle.css"

const TempScaleToggle = () => {
  return (
    <div className="TempScaleToggle">
      <ToggleButtonGroup color="secondary" value="celsius" exclusive fullWidth="true" sx={{height: "20px"}}>
        <ToggleButton
          value="celsius"
          sx={{
            "&.MuiToggleButton-root": {
              borderRadius: "20px",
              backgroundColor: "transparent",
              borderColor: "#F9FBFF",
              color: "#2d81ff",
            },
            "&.Mui-selected": {
              backgroundColor: "#6BA6FF",
                borderColor: "#6BA6FF",
              color: "#ffffff",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "#5096ff",
              color: "#ffffff",
            },
          }}
        >
          C°
        </ToggleButton>
        <ToggleButton
          value="fahrenheit"
          sx={{
            "&.MuiToggleButton-root": {
              borderRadius: "20px",
              backgroundColor: "transparent",
              borderColor: "#F9FBFF",
              color: "#2d81ff"
            },
            "&.Mui-selected": {
              backgroundColor: "#6BA6FF",
                borderColor: "#6BA6FF",
              color: "#ffffff",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "#5096ff",
              color: "#ffffff",
            },
          }}
        >
          F°
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default TempScaleToggle;
