import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';

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
      <div className="weather grid">
        <WeatherIcon code={code} isDay={isDay} className="icon"></WeatherIcon>
        <div className="temp">
          <h1>{temp.toFixed()}</h1>
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

const mapStateToProps = (state) =>{
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