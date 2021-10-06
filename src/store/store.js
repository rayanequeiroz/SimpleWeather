import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import loadData from '../functions/loadData';
import {updateWeather, weatherReducer} from "./weatherReducer";
import {favoriteCitiesReducer} from "./favoriteCitiesReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers( {
  cities: favoriteCitiesReducer,
  weatherData: weatherReducer
})

let store = createStore(rootReducer, composedEnhancer);

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