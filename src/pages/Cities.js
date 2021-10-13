import React from "react";
import "../styles/Cities.css";
import CitiesList from "../components/CitiesList";
import TempScaleToggle from "../components/TempScaleToggle";

const Cities = () => {
  return (
    <div className="Cities">
      <div className="Cities__container">
        <h1 className="Cities-header">Favorites cities</h1>
        <CitiesList />
      </div>
        <div className="Cities__settings">
            <h1 className="Cities-header">Settings</h1>
            <TempScaleToggle/>
        </div>
    </div>
  );
};

export default Cities;
