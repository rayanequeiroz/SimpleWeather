import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import WeatherToday from './pages/WeatherToday';
import useDebounce from './functions/useDebounce';
import { history } from './historyVar';
import store from './store/store';
import {fetchWeather, setCity} from "./store/weatherReducer";
import Cities from "./pages/Cities";


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
        <Route exact path="/SimpleWeather">
          <WeatherToday />
        </Route>
        <Route exact path="/SimpleWeather/cities">
          <Cities />
        </Route>
        <Redirect to="/SimpleWeather"/>
      </Switch>
    </Router>
  );
};


const mapStateToProps = (state) => ({
  location: state.weatherData.location,
  favoriteCities: state.cities.arrOfCities
});
export default connect(mapStateToProps)(App);
