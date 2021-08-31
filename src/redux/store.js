import { createStore, applyMiddleware } from 'redux';
import { weatherApp, updateWeather } from './actions';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import loadData from '../functions/loadData';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

let store = createStore(weatherApp, composedEnhancer);

export const fetchWeather = (debouncedLocation) => async (dispatch) => {
  try {
    const data = await (loadData(debouncedLocation));
    store.dispatch(updateWeather(data));
    localStorage.setItem('location', data.location.name);
  } catch (e) {
    console.error(e);
  }
}

export default store;