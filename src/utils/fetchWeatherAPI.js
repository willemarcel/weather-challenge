const API_ENDPOINT = process.env.REACT_APP_WEATHER_API_ENDPOINT;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeatherAPI = (location) => {
  const url = `${API_ENDPOINT}?q=${location}&appid=${API_KEY}`;

  return fetch(url).then(res => res.json());
}
