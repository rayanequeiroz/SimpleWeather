import store from "./store";

export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export function addCity(city) {
  return { type: ADD_TO_FAVORITES, payload: city };
}

export function removeCity(city) {
  return { type: REMOVE_FROM_FAVORITES, payload: city };
}

export const citiesState = {
  arrOfCities: [],
};

export function favoriteCitiesReducer(state = citiesState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, arrOfCities: [...state.arrOfCities, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        arrOfCities: state.arrOfCities.filter(
          (city) => city !== action.payload
        ),
      };
    default:
      return state;
  }
}

export const addToFavorites = (city) => (dispatch) => {
    store.dispatch(addCity(city));
    // const cities = localStorage.getItem('cities');
    // localStorage.setItem('cities', cities.push(city));
};
export const removeFromFavorites = (city) => (dispatch) => {
    store.dispatch(removeCity(city));
    // const cities = localStorage.getItem('cities');
    // const newCities = cities.filter(favCity => favCity !== city)
    // localStorage.setItem('cities', newCities)
};
