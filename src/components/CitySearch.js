import React from 'react';
import AutosizeInput from 'react-input-autosize';
import { connect } from 'react-redux';
import { setCity } from '../redux/actions';
import './CitySearch.css';
import WeatherCondition from './WeatherCondition';

const CitySearch = (props) => {
  if (!localStorage.getItem('cities'))
    localStorage.setItem('cities', '[]');

  const cities = JSON.parse(localStorage.getItem('cities'));
  const isFavourite = cities.map(c => c.toLowerCase()).includes(props.location.toLowerCase());
  console.log(isFavourite);
  return (
    <div className="city-search">
      <input defaultChecked={isFavourite} className="favorite-button" type="checkbox" onChange={() => {
        if (!isFavourite) {
          cities.push(props.location.toLowerCase());
          localStorage.setItem('cities', JSON.stringify(cities));
        }

      }} />
      <h1>Right now in</h1>
      <AutosizeInput
        type="text"
        minWidth="70"
        inputStyle={{ fontSize: 35, fontWeight: 600, display: 'block' }}
        value={props.location}
        onChange={(e) => props.onChange(e)}
      />
      <WeatherCondition />
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    location: state.location,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onChange: (event) => {
      dispatch(setCity(event.target.value));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
