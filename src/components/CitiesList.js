import React from 'react';
import './CitiesList.css';

const CitiesList = (state) => {
  const cities = JSON.parse(localStorage.getItem('cities'));
  const wrappedCities = cities.map(city => <div className="city">{city}</div>);
  return (
      <div className="cities-list">{wrappedCities}</div>
  );
}

export default CitiesList;
