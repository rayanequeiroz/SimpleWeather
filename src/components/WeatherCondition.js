import React from 'react';
import '../styles/WeatherCondition.css';
import { connect } from 'react-redux';

const WeatherCondition = (props) => {
  if (!props.condition || props.location.toLowerCase() !== props.responseLocation.toLowerCase()) {
    return (
      <span/>
    );
  }

  if (props.condition) {
    return (
      <div className="condition">{props.condition}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  location: state.weatherData.location,
  responseLocation: state.weatherData.responseLocation,
  condition: state.weatherData.condition,
})

export default connect(mapStateToProps)(WeatherCondition);

