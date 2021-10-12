import React, { useEffect, useState } from "react";
import AutosizeInput from "react-input-autosize";
import { connect } from "react-redux";
import "../styles/CitySearch.css";
import WeatherCondition from "./WeatherCondition";
import { setCity } from "../store/weatherReducer";

const CitySearch = (props) => {
  return (
    <div className="city-search">
      <h1>Right now in</h1>
      <AutosizeInput
        type="text"
        minWidth="70"
        inputStyle={{ fontSize: 35, fontWeight: 600, display: "block" }}
        value={props.location}
        onChange={(e) => props.onChange(e)}
      />
      <WeatherCondition />
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: state.weatherData.location
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => {
    dispatch(setCity(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
