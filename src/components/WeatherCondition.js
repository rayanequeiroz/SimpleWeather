import React, { useEffect, useState } from 'react';

const WeatherCondition = (props) => {
  const { location } = props;
  const { responseLocation } = props;
  const { condition } = props;

  if (!condition || location !== responseLocation) {
    return (
      <span></span>
    );
  }

  if (condition) {
    return (
      <span>{condition}</span>
    );
  }
}

export default WeatherCondition;

