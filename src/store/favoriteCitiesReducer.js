export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export function addCity(city) {
    return { type: ADD_TO_FAVORITES, payload: city };
}

export function removeCity(city) {
    return { type: REMOVE_FROM_FAVORITES, payload: city };
}

export const citiesState = {
    arrOfCities: []
}

export function favoriteCitiesReducer(state = citiesState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return { ...state, location: action.payload };
            case REMOVE_FROM_FAVORITES:
                return
        default:
            return state;
    }
}

export const addToFavorites = (cities) => (dispatch) => {
        dispatch(addCity(cities));
}
