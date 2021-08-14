import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import Forecast from './components/Forecast';
import CitySearch from './components/CitySearch';

import useDebounce from './functions/useDebounce';
import loadData from './functions/loadData';

const App = () => {
  const [location, setLocation] = useState('');
  const [responseLocation, setResponseLocation] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [condition, setCondition] = useState('');
  const [wind, setWind] = useState('');
  const [precip, setPrecip] = useState('');
  const [humidity, setHumidity] = useState('');
  const [icon, setIcon] = useState('');

  const debouncedLocation = useDebounce(location, 700);

  const loadWeather = async () => {
    try {
      const data = await (loadData(debouncedLocation));
      setResponseLocation(data.location.name);
      setCountry(data.location.country);
      setTemp(data.current.temp_c);
      setCondition(`it's ${(data.current.condition.text).toLowerCase()}`);
      setWind(data.current.wind_mph);
      setPrecip(data.current.precip_mm);
      setHumidity(data.current.humidity);
      setIcon(data.current.condition.icon);
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
    setLocation(event.target.value)
  }

  return (
    <div className="app">
      <CitySearch value={location} onChange={handleEvent} condition={condition} location={debouncedLocation} responseLocation={responseLocation} />
      <Forecast location={debouncedLocation} responseLocation={responseLocation} country={country} temp={temp} wind={wind} precip={precip} humidity={humidity} icon={icon} />
    </div>
  );
}

export default App;