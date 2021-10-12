import React from "react";
import "../styles/CitiesList.css";
import {connect} from "react-redux";

const CitiesList = (props) => {
  if(props.cities.length > 0) {
      return (
          <div className="cities-list">
              {props.cities.map(city =>
                  <div className="cities-list__item">{city}</div>
              )}
          </div>
      )
  } else {
      return (
          <h1 className="cities-list-empty">
              Oops! You haven't added any city to your favorites yet!
          </h1>
          )
  }

};
const mapStateToProps = (state) => ({
    cities: state.cities.arrOfCities
});

export default connect(mapStateToProps)(CitiesList);
