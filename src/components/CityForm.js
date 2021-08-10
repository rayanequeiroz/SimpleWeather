import React from 'react';

const CityForm = (props) => {

  return (
    <form>
      <label>
        Please, pick your city:
        <select value={props.value} onChange={(e) => props.onChange(e)}>
          <option value="Moscow">Moscow</option>
          <option value="Samara">Samara</option>
          <option value="Murmansk">Murmansk</option>
          <option value="Vladivostok">Vladivostok</option>
        </select>
      </label>
    </form>
  )
}

export default CityForm;