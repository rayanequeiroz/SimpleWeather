import React, { useEffect, useState } from 'react';
import './WeatherCondition.css';
import { connect } from 'react-redux';

const WeatherCondition = (props) => {
  const { location } = props;
  const { responseLocation } = props;
  const { condition } = props;

  if (!condition || location.toLowerCase() !== responseLocation.toLowerCase()) {
    return (
      <span/>
    );
  }

  if (condition) {
    return (
      <div className="condition">{condition}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  location: state.location,
  responseLocation: state.responseLocation,
  condition: state.condition,
})

export default connect(mapStateToProps)(WeatherCondition);

