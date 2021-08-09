import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Moscow' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ value: event.target.value });
    event.preventDefault();
  }

  render() {
    return (
      <div className="city-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your city:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Moscow">Moscow</option>
              <option value="Samara">Samara</option>
              <option value="Murmansk">Murmansk</option>
              <option value="Vladivostok">Vladivostok</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Weather location={this.state.value} />
      </div>
    );
  }
}


export default WeatherApp;