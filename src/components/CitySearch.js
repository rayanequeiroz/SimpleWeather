import React, { useEffect, useState } from 'react';
import AutosizeInput from 'react-input-autosize';
import WeatherCondition from './WeatherCondition';
import './CitySearch.css';
import { connect } from 'react-redux';
import { searchCity } from '../redux/actions';

const CitySearch = (props) => {
  return (
    <div className="city-search">
      <h1>Right now in</h1>
      <AutosizeInput
        type="text"
        minWidth="70"
        inputStyle={{ fontSize: 35, fontWeight: 600, display: 'block' }}
        value={props.location}
        onChange={(e) => props.onChange(e)}
      />
      <WeatherCondition/>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { location } = state;
  return { location };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => {
      dispatch(searchCity(event.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);