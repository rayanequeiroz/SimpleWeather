import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import Forecast from './components/Forecast';
import CitySearch from './components/CitySearch';

import useDebounce from './functions/useDebounce';
import loadData from './functions/loadData';

const App = () => {
  const [location, setLocation] = useState('');
  const [temp, setTemp] = useState('');
  const [responseCity, setResponseCity] = useState('');
  const [condition, setCondition] = useState('');
  const debouncedLocation = useDebounce(location, 700);

  const loadWeather = async () => {
    try {
      const data = await (loadData(debouncedLocation));
      setTemp(data.current.temp_c);
      setResponseCity(data.location.name);
      setCondition(`it's ${(data.current.condition.text).toLowerCase()}`);
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
      <CitySearch value={location} onChange={handleEvent} condition={condition} location={debouncedLocation} responseCity={responseCity} />
      <Forecast temp={temp} location={debouncedLocation} responseCity={responseCity} />
    </div>
  );
}

export default App;