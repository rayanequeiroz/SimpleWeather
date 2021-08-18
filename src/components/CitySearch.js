import React, { useEffect, useState } from 'react';
import AutosizeInput from 'react-input-autosize';
import WeatherCondition from './WeatherCondition';
import './CitySearch.css';
import { upperCase } from 'lodash';

const CitySearch = (props) => {
  return (
    <div className="city-search">
      <h1>Right now in</h1>
      <AutosizeInput
        type="text"
        minWidth="70"
        inputStyle={{ fontSize: 35, fontWeight: 600, display: 'block' }}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <WeatherCondition condition={props.condition} location={props.location} responseLocation={props.responseLocation} />
    </div>
  )
}

export default CitySearch;