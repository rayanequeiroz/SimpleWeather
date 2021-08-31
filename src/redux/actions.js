export const SET_CITY = 'SET_CITY';
export const UPDATE_WEATHER = 'UPDATE_WEATHER';

export function setCity(city) {
  return { type: SET_CITY, city }
}

export function updateWeather(response) {
  return { type: UPDATE_WEATHER, payload: response }
}

export const initialState = {
  location: '',
  responseLocation: '',
  country: '',
  temp: '',
  condition: '',
  wind: '',
  pressure: '',
  humidity: '',
  code: '',
  isDay: ''
}

export function weatherApp(state = initialState, action) {
  switch (action.type) {
    case SET_CITY:
      return Object.assign({}, state, {
        location: action.city
      })
    case UPDATE_WEATHER:
      return Object.assign({}, state, {
        responseLocation: action.payload.location.name,
        country: action.payload.location.country,
        temp: action.payload.current.temp_c,
        condition: `it's ${(action.payload.current.condition.text).toLowerCase()}`,
        wind: action.payload.current.wind_kph,
        pressure: action.payload.current.pressure_mb,
        humidity: action.payload.current.humidity,
        code: action.payload.current.condition.code,
        isDay: action.payload.current.is_day
      })
    default:
      return state
  }
  return state;
}
