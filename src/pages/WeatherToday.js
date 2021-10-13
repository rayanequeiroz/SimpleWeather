import React from "react";
import CitySearch from "../components/CitySearch";
import Forecast from "../components/Forecast";
import FavoriteCityButton from "../components/FavoriteCityButton";
import ListButton from "../components/UI/ListButton";
import { Link } from "react-router-dom";

const WeatherToday = () => {
  return (
    <div className="App">
      <FavoriteCityButton />
      <Link to="/cities">
        <ListButton />
      </Link>
      <CitySearch />
      <Forecast />
    </div>
  );
};

export default WeatherToday;
