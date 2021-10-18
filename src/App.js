import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import WeatherToday from './pages/WeatherToday';
import { history } from './historyVar';
import CitiesPage from "./pages/CitiesPage";
import CityPage from "./pages/CityPage";


const App = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/SimpleWeather">
          <WeatherToday />
        </Route>
        <Route exact path="/SimpleWeather/cities">
          <CitiesPage />
        </Route>
        <Route exact path="/SimpleWeather/cities/:city">
          <CityPage />
        </Route>
        <Redirect to="/SimpleWeather"/>
      </Switch>
    </Router>
  );
};
export default App;
