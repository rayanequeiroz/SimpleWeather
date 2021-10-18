import fetchData from "../API/fetchData";
import store from "./store";

export const SET_CITY = "SET_CITY";
export const UPDATE_WEATHER = "UPDATE_WEATHER";
export const CHANGE_TEMP_SCALE = "CHANGE_TEMP_SCALE";

export function setCity(city) {
    return { type: SET_CITY, payload: city };
}

export function updateWeather(response) {
    return { type: UPDATE_WEATHER, payload: response };
}

export function changeTempScale(response) {
 return { type: CHANGE_TEMP_SCALE, payload: response };
}

export const initialState = {
    location: "",
    responseLocation: "",
    country: "",
    temp_c: "",
    temp_f: "",
    condition: "",
    wind: "",
    pressure: "",
    humidity: "",
    code: "",
    isDay: "",
    tempScale: "celsius"
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
            }
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