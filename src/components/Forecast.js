import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

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

  // Conversion from kph to m/s
  const windToMPS = (wind * 1000 / 3600).toFixed(1);
  // Conversion from millibars to millimeters of mercury according to the formula
  const pressureToMmOfMercury = ( pressure * 0.750063755419211).toFixed();
  if (!temp || location.toLowerCase() !== responseLocation.toLowerCase()) {
    return (
      <div></div>
    );
  }

  if (temp) {
    return (
      <div className="weather grid">
        <WeatherIcon></WeatherIcon>
        <div className="temp">
          <h1>{temp.toFixed()}</h1>
        </div>
        <div className="flex properties">
          <div className="properties__value">{windToMPS}<span>m/s</span></div>

          <div className="properties__value">{pressureToMmOfMercury}<span>mm Hg</span></div>
          <div className="properties__value">{humidity}<span>%</span></div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const { location } = state;
  const { responseLocation } = state;
  const { country } = state;
  const { temp } = state;
  const { wind } = state;
  const { pressure } = state;
  const { humidity } = state;
  const { code } = state;
  const { isDay } = state;

  return { location, responseLocation, country, temp, wind, pressure, humidity, code, isDay };
}

export default connect(mapStateToProps)(Forecast);