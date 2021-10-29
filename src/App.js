import React from 'react';
import {history} from './historyVar';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import CitiesPage from "./pages/CitiesPage";
import CityPage from "./pages/CityPage";
import ForecastPage from "./pages/ForecastPage";
import SearchPage from "./pages/SearchPage";


const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/SimpleWeather'>
                    <SearchPage/>
                </Route>
                <Route exact path='/SimpleWeather/cities'>
                    <CitiesPage/>
                </Route>
                <Route exact path='/SimpleWeather/cities/:city'>
                    <CityPage/>
                </Route>
                <Route exact path='/SimpleWeather/forecast'>
                    <ForecastPage/>
                </Route>
                <Redirect to='/SimpleWeather'/>
            </Switch>
        </Router>
    );
};
export default App;
