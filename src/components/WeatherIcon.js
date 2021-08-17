import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = (props) => {
  const { code, isDay } = props;
  let timeOfDay = "day";

  if (!isDay) {
    timeOfDay = "night";
  }

  const weatherSrc = `/icons/${timeOfDay}/${code}.svg`;

  return (
    <div>
      <img src={process.env.PUBLIC_URL + { weatherSrc }} alt="Weather icon"></img>
    </div>
  )

}

export default WeatherIcon;