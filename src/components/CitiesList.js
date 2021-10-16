import React from 'react';
import {connect} from "react-redux";
import "../styles/CitiesList.css";

const CitiesList = (props) => {
    if(props.cities.length > 0) {
        return (
            <div className="flex cities-list">
                <div className="blue-line"></div>
                <div className="cities">
                    {props.cities.map(city =>
                        <div className="cities__item">{city}</div>
                    )}
                </div>
            </div>
        )
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
        )
    }

};

const mapStateToProps = (state) => ({
    cities: state.cities.arrOfCities
});


export default connect(mapStateToProps)(CitiesList);