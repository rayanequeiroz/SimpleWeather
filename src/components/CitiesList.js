import React from "react";
import { connect } from "react-redux";
import "../styles/CitiesList.css";
import { useHistory } from "react-router-dom";
import {setCity} from "../store/weatherReducer";

const CitiesList = (props) => {
  const router = useHistory();
  console.log(router)
  if (props.cities.length > 0) {
    return (
      <div className="flex cities-list">
        <div className="blue-line"></div>
        <div className="cities">
          {props.cities.map((city) => (
            <button
              onClick={() => {
                router.push(`/SimpleWeather/cities/${city}`);
                props.updateCityInStore(city);
              }}
              className="cities__btn"
            >
              <div className="cities__item">{city}</div>
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex cities-list">
        <div className="blue-line"></div>
        <div className="cities-empty">
          <p>Oops!</p>
          <p>You haven't added any city yet!</p>
        </div>
        <div className="blue-line"></div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  cities: state.cities.arrOfCities,
});

const mapDispatchToProps = (dispatch) => ({
    updateCityInStore: (city) => {
        dispatch(setCity(city));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
