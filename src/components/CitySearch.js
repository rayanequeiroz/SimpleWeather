import React, { useEffect, useState } from 'react';
import AutosizeInput from 'react-input-autosize';
import WeatherCondition from './WeatherCondition';
import './CitySearch.css';
import { upperCase } from 'lodash';

const CitySearch = (props) => {
  return (
    <div className="city-search">
      Right now in
      <br></br>
      <AutosizeInput
        type="text"
        minWidth="70"
        inputStyle={{ fontSize: 30, fontWeight: 600, textTransform: 'uppercase' }}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <WeatherCondition condition={props.condition} location={props.location} responseLocation={props.responseLocation} />
    </div>
  )
}

export default CitySearch;