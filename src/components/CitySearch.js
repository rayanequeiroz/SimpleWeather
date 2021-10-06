import React, {useEffect, useState} from "react";
import AutosizeInput from "react-input-autosize";
import { connect } from "react-redux";
import "./CitySearch.css";
import WeatherCondition from "./WeatherCondition";
import {addCity, addToFavorites, removeCity, removeFromFavorites} from "../store/favoriteCitiesReducer";
import {setCity} from "../store/weatherReducer";


const CitySearch = (props) => {
  if (!localStorage.getItem("cities")) localStorage.setItem("cities", "[]");
    const [isFavorite, setFavorite] = useState(props.favoriteCities.includes(props.location))
    console.log(isFavorite);
    console.log(props.favoriteCities);

    useEffect(() => {
        return () => {
           setFavorite(props.favoriteCities.includes(props.location));
        };
    }, [props.location]);
  return (
    <div className="city-search">
      <input
        defaultChecked={isFavorite}
        className="favorite-button"
        type="checkbox"
        onChange={() => {
            if(!isFavorite) {
              props.addToFavorites(props.location)
                setFavorite(!isFavorite);
            } else {
                props.removeFromFavorites(props.location)
                setFavorite(!isFavorite);
            }
        }}
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
  favoriteCities: state.cities.arrOfCities
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => {
    dispatch(setCity(event.target.value));
  },
    addToFavorites: (city) => {
        dispatch(addToFavorites(city));
    },
    removeFromFavorites: (city) => {
        dispatch(removeFromFavorites(city));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
