import React from 'react';
import {Link} from "react-router-dom";
import ForecastPageBackButton from "../components/ForecastPageBackButton";
import ForecastSwiper from "../components/ForecastSwiper";
import ForecastToggle from "../components/ForecastToggle";
import {connect} from "react-redux";

const ForecastPage = (props) => {

    return (
        <div className='app app-outlined'>
            <Link to='/SimpleWeather/'>
                <ForecastPageBackButton>Back to home page</ForecastPageBackButton>
            </Link>
            <h1 style={{fontWeight: 'normal', fontSize: '30px', marginTop: '10px', paddingTop: '5px', borderTop: '1px solid #F9FBFF'}}>{props.location}</h1>
            <h2 style={{fontWeight: 'normal', fontSize: '20px', marginTop: '5px'}}>{props.country}</h2>
            <ForecastSwiper/>
            <ForecastToggle/>
        </div>
    );
};

const MapStateToProps = (state) => ({
    location: state.weatherData.responseLocation,
    country: state.weatherData.country,
})
export default connect(MapStateToProps)(ForecastPage);