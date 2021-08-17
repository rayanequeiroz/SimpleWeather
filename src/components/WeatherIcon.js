import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = (props) => {
  const { code, isDay } = props;
  let timeOfDay = "day";

  if (!isDay) {
    timeOfDay = "night";
  }

  const weatherSrc = `../../public/icons/${timeOfDay}/${code}.svg`;

  return (
    <div>
      <img src={weatherSrc} alt="Weather icon"></img>
    </div>
  )

}

export default WeatherIcon;