import { renderHook } from '@testing-library/react-hooks';

import { useForecastInfo } from '../UseForecastInfo';
import dataItem from './fixtures/forecastData.json';

describe('useForecastInfo', () => {

  it('return object with desired information', () => {
    const { result } = renderHook(() => useForecastInfo(dataItem))
    expect( result.current).toEqual({
      date: {weekday: 'Thursday', day: '16. February', time: '12:00'},
      temperature: '14°',
      minTemperature: '8°',
      maxTemperature: '14°',
      condition: 'Clear'
    });
  });
});
