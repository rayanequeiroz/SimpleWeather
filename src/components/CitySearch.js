import React from "react";
import AutosizeInput from "react-input-autosize";
import { connect } from "react-redux";
import "./CitySearch.css";
import WeatherCondition from "./WeatherCondition";
import {addToFavorites} from "../store/favoriteCitiesReducer";
import {setCity} from "../store/weatherReducer";

const CitySearch = (props) => {
  if (!localStorage.getItem("cities")) localStorage.setItem("cities", "[]");

  return (
    <div className="city-search">
      <input
        // defaultChecked={isFavorite}
        className="favorite-button"
        type="checkbox"
        // onChange={() => {
        //   if (!isFavorite && !props.favoriteCities.includes(props.location.toLowerCase())) {
        //       addToFavorites(cities.push(props.location.toLowerCase));
        //       console.log(cities);
        //   }
        //   if (!isFavorite && props.favoriteCities.includes(props.location.toLowerCase())) {
        //     const index = props.favoriteCities.indexOf(props.location.toLowerCase());
        //     if (index > -1) {
        //         cities.splice(index, 1);
        //         addToFavorites(cities);
        //     }
        //   }
        // }}
      />
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
  location: state.weatherData.location,
  // favoriteCities: state.favoriteCities
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => {
    dispatch(setCity(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
