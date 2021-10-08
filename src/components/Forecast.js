import React from 'react';
import { connect } from 'react-redux';

import WeatherIcon from './WeatherIcon';
import '../styles/Forecast.css';

const Forecast = (props) => {
  // Conversion from kph to m/s
  const windToMPS = (props.wind * 1000 / 3600).toFixed(1);
  // Conversion from millibars to millimeters of mercury according to the formula
  const pressureToMmOfMercury = ( props.pressure * 0.750063755419211).toFixed();
  if (!props.temp || props.location.toLowerCase() !== props.responseLocation.toLowerCase()) {
    return (
      <div></div>
    );
  }

  if (props.temp) {
    return (
      <div className="weather grid">
        <WeatherIcon />
        <div className="temp">
          <h1>{props.temp.toFixed()}</h1>
        </div>
        <div className="flex properties">
          <div className="properties__value">{windToMPS}<span>m/s</span></div>

          <div className="properties__value">{pressureToMmOfMercury}<span>mm Hg</span></div>
          <div className="properties__value">{props.humidity}<span>%</span></div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  location: state.weatherData.location,
  responseLocation: state.weatherData.responseLocation,
  country: state.weatherData.country,
  temp: state.weatherData.temp,
  wind: state.weatherData.wind,
  pressure: state.weatherData.pressure,
  humidity: state.weatherData.humidity,
  code: state.weatherData.code,
  isDay: state.weatherData.isDay
});

export default connect(mapStateToProps)(Forecast);
