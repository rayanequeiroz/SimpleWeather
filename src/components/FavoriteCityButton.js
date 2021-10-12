import React, { useEffect, useState } from "react";
import FavoriteButton from "./UI/FavoriteButton";
import {connect} from "react-redux";
import {addToFavorites, removeFromFavorites} from "../store/favoriteCitiesReducer";

const FavoriteCityButton = (props) => {
  const [isFavorite, setFavorite] = useState(
    props.favoriteCities.includes(props.location)
  );
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    setFavorite(props.favoriteCities.includes(props.location));
  }, [props.location]);

  useEffect(() => {
    if (
      props.location &&
      props.location === props.responseLocation.toLowerCase()
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [props.location, props.responseLocation]);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(props.favoriteCities));
  }, [props.favoriteCities]);

  return (
    <FavoriteButton
      onClick={() => {
        if (!isFavorite) {
          props.addToFavorites(props.location);
          setFavorite(!isFavorite);
        } else {
          props.removeFromFavorites(props.location);
          setFavorite(!isFavorite);
        }
      }}
      disabled={isDisabled}
      checked={isFavorite}
    />
  );
};

const mapStateToProps = (state) => ({
  location: state.weatherData.location,
  favoriteCities: state.cities.arrOfCities,
  responseLocation: state.weatherData.responseLocation,
});

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (city) => {
    dispatch(addToFavorites(city));
  },
  removeFromFavorites: (city) => {
    dispatch(removeFromFavorites(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCityButton);
