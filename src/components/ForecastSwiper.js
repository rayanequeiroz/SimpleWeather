import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import SwiperCore, {
    Pagination
} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import 'swiper/swiper-bundle.css';
import 'swiper';
import '../styles/ForecastSwiper.css';
import moment from "moment";
import WeatherIcon from "./WeatherIcon";
import {Redirect} from "react-router-dom";

const ForecastSwiper = (props) => {
    SwiperCore.use([Pagination]);
    if (props.forecastMod === 'threeDay' && props.threeDayForecast.length) {
        return (
            <Swiper slidesPerView={3} pagination={{"clickable": true}}>
                {props.threeDayForecast.map((day) =>
                    <SwiperSlide className='swiper__item'>
                        <h3 className='item__date'>
                            {moment(day.date, 'YYYY-MM-DD').calendar({
                                sameDay: '[Today]',
                                nextDay: '[Tomorrow]',
                                nextWeek: 'dddd',
                            })}
                        </h3>
                        <WeatherIcon className='item__icon' code={day.code} isDay={day.isDay}
                                     color={{fill: '#2D81FF'}}/>
                        <p className='item__temp'>
                            {props.tempScale === 'celsius' ? day.temp_c.toFixed() : day.temp_f.toFixed()}°
                        </p>
                    </SwiperSlide>
                )}
            </Swiper>
        )
    }
    if (props.forecastMod === 'hourly' && props.threeDayForecast.length) {
        const [currentHour, ...restHours] = props.hourlyForecast;
        return (
            <Swiper slidesPerView={4} pagination={{'clickable': true, 'dynamicBullets': true, 'dynamicMainBullets': 3}}>
                <SwiperSlide className='swiper__item'>
                    <h3 className='item__date'>Now</h3>
                    <WeatherIcon className='item__icon' code={currentHour.code} isDay={currentHour.isDay}
                                 color={{fill: '#2D81FF'}}/>
                    <p className='item__temp'>
                        {props.tempScale === 'celsius' ? currentHour.temp_c.toFixed() : currentHour.temp_f.toFixed()}°
                    </p>
                </SwiperSlide>
                {restHours.map((hour) =>
                    <SwiperSlide className={hour.isRain ? 'swiper__item' : 'swiper__item'}>
                        <h3 className='item__date'>
                            {moment(hour.hour, 'YYYY-MM-DD HH').format('HH:mm')}
                        </h3>
                        <WeatherIcon className='item__icon' code={hour.code} isDay={hour.isDay}
                                     color={{fill: '#2D81FF'}}/>
                        <p className='item__temp'>
                            {props.tempScale === 'celsius' ? hour.temp_c.toFixed() : hour.temp_f.toFixed()}°
                        </p>
                    </SwiperSlide>
                )}
            </Swiper>
        )
    } else {
        return (
            <Redirect to='/SimpleWeather'/>
        )
    }
}

const mapStateToProps = (state) => ({
    forecastMod: state.weatherData.forecastMod,
    threeDayForecast: state.weatherData.threeDayForecast,
    hourlyForecast: state.weatherData.hourlyForecast,
    tempScale: state.weatherData.tempScale,
})

export default connect(mapStateToProps)(ForecastSwiper);