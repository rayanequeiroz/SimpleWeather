import React, {useEffect, useState} from "react";
import AutosizeInput from "react-input-autosize";
import { connect } from "react-redux";
import "../styles/CitySearch.css";
import WeatherCondition from "./WeatherCondition";
import {
    addToFavorites,
    removeFromFavorites
} from "../store/favoriteCitiesReducer";
import {setCity} from "../store/weatherReducer";
import FavoriteButton from "./UI/checkbox/FavoriteButton";


const CitySearch = (props) => {
    const [isFavorite, setFavorite] = useState(props.favoriteCities.includes(props.location))

    useEffect(() => {
        setFavorite(props.favoriteCities.includes(props.location));
    }, [props.location]);

    useEffect(() => {
        localStorage.setItem("cities", JSON.stringify(props.favoriteCities))
    }, [props.favoriteCities]);

  return (
    <div className="city-search">
      <FavoriteButton
          isFavorite={isFavorite}
        onClick={() => {
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
