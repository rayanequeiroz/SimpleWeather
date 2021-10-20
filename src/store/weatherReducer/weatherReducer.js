import fetchData from "../../helpers/fetchData";
import store from "../store";
import {CHANGE_TEMP_SCALE, SET_CITY, UPDATE_WEATHER} from "./actionTypes";

export const setCity = (city) => ({type: SET_CITY, payload: city})
export const updateWeather = (response) => ({type: UPDATE_WEATHER, payload: response})
export const changeTempScale = (response) => ({type: CHANGE_TEMP_SCALE, payload: response})

export const initialState = {
    location: '',
    responseLocation: '',
    country: '',
    temp_c: '',
    temp_f: '',
    condition: '',
    wind: '',
    pressure: '',
    humidity: '',
    code: '',
    isDay: '',
    tempScale: 'celsius'
};

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CITY:
            return {...state, location: action.payload.toLowerCase()};
        case UPDATE_WEATHER:
            return {
                ...state,
                responseLocation: action.payload.location.name,
                country: action.payload.location.country,
                temp_c: action.payload.current.temp_c,
                temp_f: action.payload.current.temp_f,
                condition: `it's ${action.payload.current.condition.text.toLowerCase()}`,
                wind: action.payload.current.wind_kph,
                pressure: action.payload.current.pressure_mb,
                humidity: action.payload.current.humidity,
                code: action.payload.current.condition.code,
                isDay: action.payload.current.is_day,
            };
        case CHANGE_TEMP_SCALE:
            return {
                ...state,
                tempScale: action.payload
            };
        default:
            return state;
    }
}

export const fetchWeather = (debouncedLocation) => async (dispatch) => {
    try {
        const data = await (fetchData(debouncedLocation));
        store.dispatch(updateWeather(data));
        localStorage.setItem('location', data.location.name);
    } catch (e) {
        console.error(e);
    }
}