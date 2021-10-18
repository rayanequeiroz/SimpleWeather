import React from "react";
import "../styles/Cities.css";
import CitiesPageBackButton from "../components/CitiesPageBackButton";
import CitiesList from "../components/CitiesList";
import TempScaleToggle from "../components/TempScaleToggle";

const CitiesPage = () => {
  return (
    <div className="cities-page">
        <CitiesPageBackButton/>
      <div className="cities-page__list">
        <h1 className="cities-page-header">Favorite cities</h1>
        <CitiesList />
      </div>
        <div className="cities-page__settings">
            <h1 className="cities-page-header">Settings</h1>
            <TempScaleToggle/>
        </div>
    </div>
  );
};

export default CitiesPage;
