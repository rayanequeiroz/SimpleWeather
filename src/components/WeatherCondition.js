import React from 'react';
import '../styles/Forecast.css';
import { connect } from 'react-redux';

const WeatherCondition = (props) => {
  if(props.location.toLowerCase() === props.responseLocation.toLowerCase()) {
    return (
        <div className="condition">{props.condition}</div>
    )
  } else {
    return (
        <span/>
    )
  }
}

const mapStateToProps = (state) => ({
  location: state.weatherData.location,
  responseLocation: state.weatherData.responseLocation,
  condition: state.weatherData.condition,
})

export default connect(mapStateToProps)(WeatherCondition);

