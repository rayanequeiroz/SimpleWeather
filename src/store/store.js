import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {weatherReducer} from "./weatherReducer";
import {favoriteCitiesReducer} from "./favoriteCitiesReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const rootReducer = combineReducers( {
  cities: favoriteCitiesReducer,
  weatherData: weatherReducer
})

let store = createStore(rootReducer, composedEnhancer);
export default store;