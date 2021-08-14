import React, { useEffect, useState } from 'react';
import './Forecast.css';

const Forecast = (props) => {
  const { location } = props;
  const { responseLocation } = props;
  const { country } = props;
  const { temp } = props;
  const { wind } = props;
  const { precip } = props;
  const { humidity } = props;
  const { icon } = props;

  if (!temp || location !== responseLocation) {
    return (
      <div></div>
    );
  }

  if (temp) {
    return (
      <div className="weather flex">
        <div className="weather__icon-temp flex">
          <img src={icon} alt="Weather icon"></img>
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