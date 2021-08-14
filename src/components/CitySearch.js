import React, { useEffect, useState } from 'react';
import AutosizeInput from 'react-input-autosize';
import WeatherCondition from './WeatherCondition';
import './CitySearch.css';

const CitySearch = (props) => {
  return (
    <div className="city-search">
      Right now in
      <AutosizeInput
        minWidth="70"
        inputStyle={{ fontSize: 30 }}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <WeatherCondition condition={props.condition} location={props.location} responseLocation={props.responseLocation} />
    </div>
  )
}

export default CitySearch;