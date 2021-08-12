import React from 'react';
import './CityForm.css';

const CityForm = (props) => {

  return (
    <form>
      <label>
        Right now in
        <input type="text" onChange={(e) => props.onChange(e)}></input>
      </label>
    </form>
  )
}

export default CityForm;