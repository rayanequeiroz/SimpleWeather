import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store'

import App from './App';
import './index.css';
import './styles/adaptiveApp.css'
import {getCitiesFromLocaleStorage} from "./store/favoriteCitiesReducer";

if(!localStorage.getItem('cities')) {
    localStorage.setItem('cities', '[]');
} else {
    const citiesStr = localStorage.getItem('cities')
    const cities = JSON.parse(citiesStr);
    store.dispatch(getCitiesFromLocaleStorage(cities));
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
