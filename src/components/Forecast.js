import React from 'react';
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
        <WeatherIcon />
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
