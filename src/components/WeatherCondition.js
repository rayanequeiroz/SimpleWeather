import React, { useEffect, useState } from 'react';
import './WeatherCondition.css';

const WeatherCondition = (props) => {
  const { location } = props;
  const { responseLocation } = props;
  const { condition } = props;

  if (!condition || location.toLowerCase() !== responseLocation.toLowerCase()) {
    return (
      <span></span>
    );
  }

  if (condition) {
    return (
      <span className="condition">{condition}</span>
    );
  }
}

export default WeatherCondition;

