import React, { useEffect, useState } from 'react';
import loadData from '../helpers/loadData';
import './Weather.css';

const Weather = (props) => {
  const { location } = props;
  const [temp, setTemp] = useState('NOT FOUND');

  const loadWeather = async () => {
    const data = await loadData(location);
    setTemp(data.temperature);
  };

  useEffect(() => {
    loadWeather(location);
  }, [loadWeather, location]);

  return (
    <div className="weather-app border">
      <h1>How do you like the weather in {location}?</h1>
      <h2>It's {temp} outside :)</h2>
      <button onClick={loadWeather} className="btn-update">Update</button>
    </div>
  );
};

export default Weather;