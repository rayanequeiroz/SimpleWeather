import React, { useEffect, useState } from 'react';
import AutosizeInput from 'react-input-autosize';
import Condition from './Condition';
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
      <Condition condition={props.condition} location={props.location} responseCity={props.responseCity} />
    </div>
  )
}

export default CitySearch;