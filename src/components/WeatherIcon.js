import React from 'react';
import { connect } from 'react-redux';

const WeatherIcon = (props) => {
  let timeOfDay = "day";
  if (!props.isDay) {
    timeOfDay = "night";
  }

  const weatherSrc = `/assets/icons/${timeOfDay}/${props.code}.svg`;

  return (
    <div className="icon">
      <object data={process.env.PUBLIC_URL + weatherSrc} className="icon"  type="image/svg+xml" aria-label="icon of weather"/>
    </div>
  )

}

const mapStateToProps = (state) => ({
  code: state.weatherData.code,
  isDay: state.weatherData.isDay
})
export default connect(mapStateToProps)(WeatherIcon);