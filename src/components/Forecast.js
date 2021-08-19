import React, { useEffect, useState } from 'react';
import WeatherIcon from './WeatherIcon';
import './Forecast.css';

const Forecast = (props) => {
  const { location } = props;
  const { responseLocation } = props;
  const { country } = props;
  const { temp } = props;
  const { wind } = props;
  const { pressure } = props;
  const { humidity } = props;
  const { code } = props;
  const { isDay } = props;

  if (!temp || location.toLowerCase() !== responseLocation.toLowerCase()) {
    return (
      <div></div>
    );
  }

  if (temp) {
    return (
      <div className="weather flex">
        <div className="weather__icon-temp flex">
          <WeatherIcon code={code} isDay={isDay}></WeatherIcon>
          <div className="temp">
            <h1>{temp.toFixed()}</h1>
          </div>
        </div>
        <div className="flex properties">
          <div className="properties__value">{wind}<span>m/s</span></div>

          <div className="properties__value">{pressure}<span>mm Hg</span></div>
          <div className="properties__value">{humidity}<span>%</span></div>
        </div>
      </div>
    );
  }
};

export default Forecast;