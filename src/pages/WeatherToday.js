import React from "react";
import CitySearch from "../components/CitySearch";
import Forecast from "../components/Forecast";
import FavoriteCityButton from "../components/FavoriteCityButton";

const WeatherToday = () => {
  return (
    <div className="app flex-container">
      <FavoriteCityButton />
      <CitySearch />
      <Forecast />
    </div>
  );
};

export default WeatherToday;
