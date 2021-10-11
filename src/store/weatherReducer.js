import fetchData from "../functions/fetchData";
import store from "./store";

export const SET_CITY = "SET_CITY";
export const UPDATE_WEATHER = "UPDATE_WEATHER";

export function setCity(city) {
    return { type: SET_CITY, payload: city };
}

export function updateWeather(response) {
    return { type: UPDATE_WEATHER, payload: response };
}

export const initialState = {
    location: "",
    responseLocation: "",
    country: "",
    temp: "",
    condition: "",
    wind: "",
    pressure: "",
    humidity: "",
    code: "",
    isDay: ""
};

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CITY:
            return { ...state, location: action.payload.toLowerCase() };
        case UPDATE_WEATHER:
            return {
                ...state,
                responseLocation: action.payload.location.name,
                country: action.payload.location.country,
                temp: action.payload.current.temp_c,
                condition: `it's ${action.payload.current.condition.text.toLowerCase()}`,
                wind: action.payload.current.wind_kph,
                pressure: action.payload.current.pressure_mb,
                humidity: action.payload.current.humidity,
                code: action.payload.current.condition.code,
                isDay: action.payload.current.is_day,
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