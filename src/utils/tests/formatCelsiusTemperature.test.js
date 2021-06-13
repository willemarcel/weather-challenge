import { formatCelsiusTemperature } from '../formatCelsiusTemperature';

test('formatCelsiusTemperature returns correct values', () => {
  expect(formatCelsiusTemperature(260)).toBe('-13°');
  expect(formatCelsiusTemperature(284.69)).toBe('12°');
  expect(formatCelsiusTemperature(310)).toBe('37°');
});
