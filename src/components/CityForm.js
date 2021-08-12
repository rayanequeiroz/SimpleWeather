import React from 'react';
import AutosizeInput from 'react-input-autosize';
import './CityForm.css';

const CityForm = (props) => {

  return (
    <form className="city-search">
      <label>
        Right now in
        <AutosizeInput
          minWidth="70"
          inputStyle={{ fontSize: 30 }}
          value={props.value}
          onChange={(e) => props.onChange(e)}
        />
      </label>
    </form>
  )
}

export default CityForm;