import { renderHook } from '@testing-library/react-hooks';

import { useForecastInfo } from '../UseForecastInfo';

describe('useForecastInfo', () => {
  const dataItem = {
    "dt": 1487246400,
    "main": {
      "temp": 286.67,
      "temp_min": 281.556,
      "temp_max": 286.67,
      "pressure": 972.73,
      "sea_level": 1046.46,
      "grnd_level": 972.73,
      "humidity": 75,
      "temp_kf": 5.11
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": {
      "all": 0
    },
    "wind": {
      "speed": 1.81,
      "deg": 247.501
    },
    "sys": {
      "pod": "d"
    },
    "dt_txt": "2017-02-16 12:00:00"
  };
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
