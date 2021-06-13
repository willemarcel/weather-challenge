import { kelvinToCelsius } from './kelvinToCelsius';

// Convert a temperature from Kelvin to Celsius and returns a string. Eg.: 10°
export const formatCelsiusTemperature = (temperature) =>
  `${Math.round(kelvinToCelsius(temperature))}°`;
