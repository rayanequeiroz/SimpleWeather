import React, { useEffect, useState } from 'react';
import './Forecast.css';

const Forecast = (props) => {
  const { temp } = props;
  const { location } = props;
  const { responseCity } = props;

  if (!temp || location !== responseCity) {
    return (
      <div></div>
    );
  }

  if (temp) {
    return (
      <div className="weather border">
        <h1>How do you like the weather in {location}?</h1>
        <h2>It's {temp} C° outside :)</h2>
      </div>
    );
  }
};

export default Forecast;