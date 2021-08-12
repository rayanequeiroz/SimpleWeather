import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import CityForm from './components/CityForm';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '...' };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="city-form">
        <CityForm value={this.state.value} onChange={this.handleEvent} />
        <Weather location={this.state.value} />
      </div>
    );
  }
}

export default WeatherApp;