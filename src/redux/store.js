import { createStore } from 'redux';
import { weatherApp } from './actions';

let store = createStore(weatherApp);

export default store;