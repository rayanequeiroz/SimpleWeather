export const SEARCH_CITY = 'SEARCH_CITY';
export const LOAD_WEATHER = 'LOAD_WEATHER';

export function searchCity(city) {
  return { type: SEARCH_CITY, city }
}

export function updateWeather(response) {
  return { type: SEARCH_CITY, response }
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
    case SEARCH_CITY:
      return Object.assign({}, state, {
        location: action.city
      })
    case LOAD_WEATHER:
      return Object.assign({}, state, {
        responseLocation: action.location.name,
        country: action.location.country,
        temp: action.current.temp_c,
        condition: `it's ${(action.current.condition.text).toLowerCase()}`,
        // Conversion from kph to meters per second
        wind: (action.current.wind_kph * 1000 / 3600).toFixed(1),
        // Conversion from millibars to millimeters of mercury according to the formula
        pressure: (action.current.pressure_mb * 0.750063755419211).toFixed(),
        humidity: action.current.humidity,
        code: action.current.condition.code,
        isDay: action.current.is_day
      })
    default:
      return state
  }
  return state;
}