import React from 'react';
import '../styles/Forecast.css';
import {connect} from 'react-redux';

const WeatherCondition = (props) => {
        return (
            <div className='condition'>{props.condition}</div>
        )
}

const mapStateToProps = (state) => ({
    location: state.weatherData.location,
    responseLocation: state.weatherData.responseLocation,
    condition: state.weatherData.condition,
})

export default connect(mapStateToProps)(WeatherCondition);

