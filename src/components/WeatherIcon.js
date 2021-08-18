import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = (props) => {
  const { code, isDay } = props;
  let timeOfDay = "day";

  if (!isDay) {
    timeOfDay = "night";
  }

  const weatherSrc = `/assets/icons/${timeOfDay}/${code}.svg`;

  return (
    <div>
      <object data={process.env.PUBLIC_URL + weatherSrc} type="image/svg+xml" className="icon" />
    </div>
  )

}

export default WeatherIcon;