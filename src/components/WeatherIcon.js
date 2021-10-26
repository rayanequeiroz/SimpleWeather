import React from 'react';
import {connect} from 'react-redux';
import "../styles/CurrentForecast.css";
import day from '../day-sprites.svg';
import night from '../night-sprites.svg';

const WeatherIcon = (props) => {
    const hrefToIcon = `${props.isDay ? day : night}#${props.code}`;
    const color = {
        fill: '#fff'
    }
    return (
        <div className='weather__icon'>
            <svg className='weather__icon' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={color}>
                <use href={hrefToIcon}></use>
            </svg>
        </div>
    )

}

const mapStateToProps = (state) => ({
    code: state.weatherData.code,
    isDay: state.weatherData.isDay
})
export default connect(mapStateToProps)(WeatherIcon);