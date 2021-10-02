import React from 'react';
import CitySearch from './CitySearch';
import Forecast from './Forecast';

const WeatherToday = () => {
  return <div className="app flex-container">
    <CitySearch />
    <Forecast />
  </div>
}

export default WeatherToday;
