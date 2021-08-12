import React, { useEffect, useState } from 'react';
import loadData from '../helpers/loadData';
import './Weather.css';

const Weather = (props) => {
  const { location } = props;
  const [temp, setTemp] = useState('');
  const [responseCity, setResponseCity] = useState('');

  const loadWeather = async () => {
    try {
      const data = await loadData(location);
      setTemp(data.current.temp_c);
      setResponseCity(data.location.name);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    loadWeather(location);
  }, [loadWeather, location]);

  if (!temp || location !== responseCity) {
    return (
      <div></div>
    );
  }

  if (temp) {
    return (
      <div className="weather border">
        <h1>How do you like the weather in {location}?</h1>
        <h2>It's {temp} C° outside :)</h2>
      </div>
    );
  }
};

export default Weather;