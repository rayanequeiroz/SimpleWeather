import React, { useEffect, useState } from 'react';
import WeatherIcon from './WeatherIcon';
import './Forecast.css';

const Forecast = (props) => {
  const { location } = props;
  const { responseLocation } = props;
  const { country } = props;
  const { temp } = props;
  const { wind } = props;
  const { precip } = props;
  const { humidity } = props;
  const { code } = props;
  const { isDay } = props;

  // const { icon } = props;

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
          <div>
            <h1 className="temp">{temp}°</h1>
          </div>
        </div>
        <div className="flex properties">
          <div className="properties__value">{wind}<span>mph</span></div>
          <div className="properties__value">{precip}<span>mm</span></div>
          <div className="properties__value">{humidity}<span>%</span></div>
        </div>
      </div>
    );
  }
};

export default Forecast;