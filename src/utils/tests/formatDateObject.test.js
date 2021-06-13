import { formatDateObject } from '../formatDateObject';

test('formatDateObject returns a well formated object', () => {
  expect(
    formatDateObject(new Date('December 25, 1995 23:00:00Z'))
  ).toEqual({
    weekday: 'Monday',
    day: '25. December',
    time: '23:00'
  });
  expect(
    formatDateObject(new Date(1487246400000))
  ).toEqual({
    weekday: 'Thursday',
    day: '16. February',
    time: '12:00'
  });

});
