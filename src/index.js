import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/store'

import App from './App';
import './index.css';
import './styles/adaptiveApp.css'
import {getCitiesFromLocaleStorage} from "./store/favoriteCitiesReducer";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";

if(!localStorage.getItem('cities')) {
    localStorage.setItem('cities', '[]');
} else {
    const citiesStr = localStorage.getItem('cities')
    const cities = JSON.parse(citiesStr);
    store.dispatch(getCitiesFromLocaleStorage(cities));
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            darker: '#ffffff'
        },
        secondary: {
            main: '#ffffff',
            darker: '#ffffff'
        }
    }
});

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
      <ThemeProvider theme={theme}>
    <App />
      </ThemeProvider>
  </Provider>,
  rootElement
)
