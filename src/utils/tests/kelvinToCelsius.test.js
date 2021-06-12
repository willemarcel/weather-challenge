import { kelvinToCelsius } from '../kelvinToCelsius';

test('kelvinToCelsius return correct values', () => {
  expect(kelvinToCelsius(0)).toBe(-273.15);
  expect(kelvinToCelsius(10)).toBe(-263.15);
  expect(kelvinToCelsius(310.15)).toBe(37);
});
