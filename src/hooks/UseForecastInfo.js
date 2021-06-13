import { useEffect, useState } from 'react';

import { formatDateObject } from '../utils/formatDateObject';
import { formatCelsiusTemperature } from '../utils/formatCelsiusTemperature';

export const useForecastInfo = (dataItem) => {
  const [infoObject, setInfoObject] = useState({});
  useEffect(
    () => {
      if (dataItem) {
        setInfoObject({
          date: formatDateObject(new Date(dataItem.dt * 1000)),
          temperature: formatCelsiusTemperature(dataItem.main.temp),
          minTemperature: formatCelsiusTemperature(dataItem.main.temp_min),
          maxTemperature: formatCelsiusTemperature(dataItem.main.temp_max),
          condition: dataItem.weather[0].main
        });
      }
    }, [dataItem]
  );
  return infoObject;
};
