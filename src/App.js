import React, { useCallback, useEffect } from 'react';
import useDebounce from './functions/useDebounce';

import Forecast from './components/Forecast';
import CitySearch from './components/CitySearch';

import { setCity } from './redux/actions';
import store from './redux/store';
import { fetchWeather } from './redux/store';
import { connect } from 'react-redux';

const App = (props) => {
  useEffect(() => {
    if (localStorage.location && props.location === "") {
      store.dispatch(setCity(localStorage.getItem('location')));
      // return () => {
      //   location.onChange(localStorage.setItem('location', location));
      // };
    }
  }, [])

  useEffect(() => {
    return () => {
      localStorage.setItem('location', props.location);
    };
  }, [])

  const debouncedLocation = useDebounce(props.location.trim(), 700);

  const memoLoadWeather = useCallback(fetchWeather(debouncedLocation), [debouncedLocation]);

  useEffect(() => {
    if (debouncedLocation) {
      memoLoadWeather();
    }
  }, [debouncedLocation, memoLoadWeather]);

  return ( 
      <div className="app flex-container">
        <CitySearch/>
        <Forecast/>
      </div>
  );
}


const mapStateToProps = (state) => {
  const { location } = state;
  return { location };
}
export default connect(mapStateToProps)(App);