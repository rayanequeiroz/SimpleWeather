import React from 'react';
import AutosizeInput from 'react-input-autosize';
import './CityForm.css';

const CityForm = (props) => {

  return (
    <div className="city-search">
      Right now in
      <AutosizeInput
        minWidth="70"
        inputStyle={{ fontSize: 30 }}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  )
}

export default CityForm;