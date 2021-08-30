import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import useDebounce from './functions/useDebounce';
import loadData from './functions/loadData';

import Forecast from './components/Forecast';
import CitySearch from './components/CitySearch';

import {
  searchCity,
  updateWeather
} from './redux/actions';
import store from './redux/store';

const App = () => {
  // const [location, setLocation] = useState('');
  // const [responseLocation, setResponseLocation] = useState('');
  // const [country, setCountry] = useState('');
  // const [temp, setTemp] = useState('');
  // const [condition, setCondition] = useState('');
  // const [wind, setWind] = useState('');
  // const [pressure, setPressure] = useState('');
  // const [humidity, setHumidity] = useState('');
  // const [code, setCode] = useState('');
  // const [isDay, setIsDay] = useState('');

  useEffect(() => {
    if (localStorage.location && store.getState().location === "") {
      dispatch(searchCity(localStorage.getItem('location')));
      // return () => {
      //   location.onChange(localStorage.setItem('location', location));
      // };
    }
  }, [])

  useEffect(() => {
    return () => {
      localStorage.setItem('location', store.getState().location);
    };
  }, [])

  const debouncedLocation = useDebounce(store.getState().location.trim(), 700);

  const loadWeather = async () => {
    try {
      const data = await (loadData(debouncedLocation));
      await dispatch(updateWeather(data));

      // setResponseLocation(data.location.name);
      // setCountry(data.location.country);
      // setTemp(data.current.temp_c);
      // setCondition(`it's ${(data.current.condition.text).toLowerCase()}`);
      // // Conversion from kph to meters per second
      // setWind((data.current.wind_kph * 1000 / 3600).toFixed(1));
      // // Conversion from millibars to millimeters of mercury according to the formula
      // setPressure((data.current.pressure_mb * 0.750063755419211).toFixed());
      // setHumidity(data.current.humidity);
      // setCode(data.current.condition.code);
      // setIsDay(data.current.is_day);

      localStorage.setItem('location', store.getState().location);
    } catch (e) {
      console.error(e);
    }
  };

  const memoLoadWeather = useCallback(loadWeather, [debouncedLocation]);

  useEffect(() => {
    if (debouncedLocation) {
      memoLoadWeather();
    }
  }, [debouncedLocation, memoLoadWeather]);

  const handleEvent = (event) => {
    dispatch(searchCity(event.target.value))
  }

  return ( 
      <div className="app flex-container">
        <CitySearch value={location} onChange={handleEvent} condition={condition} location={debouncedLocation} responseLocation={responseLocation} />
        <Forecast location={debouncedLocation} responseLocation={responseLocation} country={country} temp={temp} wind={wind} pressure={pressure} humidity={humidity} code={code} isDay={isDay} />
      </div>
  );
}

export default App;