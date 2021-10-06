import React from "react";
import "./CitiesList.css";
import { connect } from "react-redux";

const CitiesList = (props) => {
    if(props.cities.length > 0) {
        const wrappedCities = props.favoriteCities.map(city => <div className="city">{city}</div>);
        return (
            <div className="cities-list">{wrappedCities}</div>
        )
    } else {
        return (
            <h1 className="empty-list">
                Oops! You haven't added any city to your favorites yet!
            </h1>
            )
    }
};

const mapStateToProps = (state) => ({
  cities: state.cities.arrOfCities
});

export default connect(mapStateToProps)(CitiesList);
