import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import CitiesList from './pages/CitiesList';
import WeatherToday from './pages/WeatherToday';
import useDebounce from './functions/useDebounce';
import { history } from './historyVar';
import store from './store/store';
import {fetchWeather, setCity} from "./store/weatherReducer";


const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem('location') && props.location === '') {
      store.dispatch(setCity(localStorage.getItem('location')));
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('location', props.location);
    };
  }, []);

  const debouncedLocation = useDebounce(props.location.trim(), 700);

  const memoLoadWeather = useCallback(fetchWeather(debouncedLocation), [debouncedLocation]);

  useEffect(() => {
    if (debouncedLocation) {
      memoLoadWeather();
    }
  }, [debouncedLocation, memoLoadWeather]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/weather-by-evergreen">
          <WeatherToday />
        </Route>
        <Route exact path="/city/:name">
          <WeatherToday />
        </Route>
        <Route exact path="/cities">
          <CitiesList />
        </Route>
      </Switch>
    </Router>
  );
};


const mapStateToProps = (state) => ({
  location: state.weatherData.location,
  favoriteCities: state.cities.arrOfCities
});
export default connect(mapStateToProps)(App);