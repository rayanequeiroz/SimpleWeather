import React from "react";
import CitySearch from "../components/CitySearch";
import Forecast from "../components/Forecast";
import FavoriteCityButton from "../components/FavoriteCityButton";
import ListButton from "../components/UI/ListButton";
import { Link } from "react-router-dom";

const WeatherToday = () => {
  return (
    <div>
        <div className="app">
            <FavoriteCityButton />
            <Link to="/SimpleWeather/cities" className="app__list-button">
                <ListButton />
            </Link>
            <CitySearch />
            <Forecast />
        </div>
    </div>
  );
};

export default WeatherToday;
