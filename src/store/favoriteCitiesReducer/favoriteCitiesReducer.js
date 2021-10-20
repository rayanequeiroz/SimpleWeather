import store from "../store";
import {ADD_TO_FAVORITES, GET_CITIES, REMOVE_FROM_FAVORITES} from "./actionTypes";

export const addCity = (city) => ({type: ADD_TO_FAVORITES, payload: city})
export const removeCity = (city) => ({type: REMOVE_FROM_FAVORITES, payload: city})
export const getCitiesFromLocaleStorage = (cities) => ({type: GET_CITIES, payload: cities})

export const citiesState = {
    arrOfCities: [],
};

export function favoriteCitiesReducer(state = citiesState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {...state,
                arrOfCities: [...state.arrOfCities, {
                    city: action.payload.city,
                    temp_c: action.payload.celsius,
                    temp_f: action.payload.fahrenheit,
                    lastUpdated: action.payload.lastUpdated,
                }]
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                arrOfCities: state.arrOfCities.filter(
                    (obj) => obj.city !== action.payload
                ),
            };
        case GET_CITIES:
            return {
                ...state,
                arrOfCities: action.payload,
            };
        default:
            return state;
    }
}

export const addToFavorites = (city) => (dispatch) => {
    store.dispatch(addCity(city));
};
export const removeFromFavorites = (city) => (dispatch) => {
    store.dispatch(removeCity(city));
};