import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import CitiesList from './components/CitiesList';
import WeatherToday from './components/WeatherToday';
import useDebounce from './functions/useDebounce';
import { history } from './historyVar';
import { setCity } from './redux/actions';
import store, { fetchWeather } from './redux/store';


const App = (props) => {
  useEffect(() => {
    if (localStorage.location && props.location === '') {
      store.dispatch(setCity(localStorage.getItem('location')));
      // return () => {
      //   location.onChange(localStorage.setItem('location', location));
      // };
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
        <Route path="/" exact>
          <WeatherToday />
        </Route>
        <Route path="/cities" exact>
          <CitiesList />
        </Route>
      </Switch>
    </Router>
  );
};


const mapStateToProps = (state) => {
  const { location } = state;
  return { location };
};
export default connect(mapStateToProps)(App);
