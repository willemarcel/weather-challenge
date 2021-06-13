import { useState, useEffect } from 'react';

import { fetchWeatherAPI } from '../utils/fetchWeatherAPI';

export const useFetchWeather = (location, trigger=true) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      if (trigger) {
        setLoading(true);
        try {
          const response = await fetchWeatherAPI(location);
          setData(response);
          setLoading(false);
        } catch (e) {
          setError(e);
          setLoading(false);
        }
      }
    })();
  }, [location, trigger]);

  return [error, loading, data];
};
